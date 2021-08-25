const express = require('express');
const router = express.Router();

const port = '/dev/ttyUSB0';

class Sensor {
    number;
    values;
    constructor(number) {
        this.number = number;
        this.values = [];
    }
}
class Room {
    number;
    sensors;
    constructor(number) {
        this.sensors = [];
        this.number = number;
    }
}
class Message {
    name;
    rooms;
    constructor(name) {
        this.name = name;
        this.rooms = [];
    }
}
const delay = require('delay');

const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.Readline;
const parser = new ReadLine("\r\n");
const portArduino = new SerialPort(port, {
    baudRate: 115200,
    parser: parser
});
portArduino.pipe(parser);

var lastValues = [];
var messages = [];
parser.on('data', input => {
    let inputMessageCmd = input.toString().split(' ');

    /** find message by name (e.g. 'TEMP') */
    let messageIndex = 0,
        message = messages.find(function (message, index) {
            if (message.name === inputMessageCmd[0]) {
                messageIndex = index;
                return true;
            }
        });
    if (!message) {
        message = new Message(inputMessageCmd[0]);
        messages.push(message);
        messageIndex = messages.length - 1;
    }

    /** find room in message by number */
    let roomIndex = 0,
        room = message.rooms.find(function (room, index) {
            if (room.number === Number(inputMessageCmd[1])) {
                roomIndex = index;
                return true;
            }
        });
    if (!room) {
        room = new Room(Number(inputMessageCmd[1]));
        message.rooms.push(room);
        roomIndex = message.rooms.length - 1;
    }

    /** find sensor in room by number */
    let sensorIndex = 0,
        sensor = room.sensors.find(function (sensor, index) {
            if (sensor.number === Number(inputMessageCmd[2])) {
                sensorIndex = index;
                return true;
            }
        });
    if (!sensor) {
        sensor = new Sensor(Number(inputMessageCmd[2]));
        message.rooms[roomIndex].sensors.push(sensor);
        sensorIndex = message.rooms[roomIndex].sensors.length - 1;
    }
    message.rooms[roomIndex].sensors[sensorIndex].values.push(parseFloat(inputMessageCmd[3]));

    messages[messageIndex] = message;
    console.log(messages);
});

router.post('/subscribe', (req, res) => {
    let name = req.body.name;

    if (messages.length > 0) {
        let messageIndex = 0,
            message = messages.find(function (message, index) {
                if (message.name === name) {
                    messageIndex = index;
                    return true;
                }
            });

        if (message) {
            lastValues = message.rooms;
            res.send(message.rooms);

            /** clean message (clean queue) */
            messages.splice(messageIndex, 1);
        }
    } else {
        /** last sent - to all new subscribers */
        res.send(lastValues);
    }
});

router.post('/send', (req, res) => {
    let body = req.body;
    portArduino.write(`@${body.name} ${body.pin} ${body.argument} ${body.address} #\r\n`);

    let data;
    (async () => {
        let n = 0;
        while (true) {
            if (n > 25) {
                data = "@ER 99";
                break;
            }

            let messageIndex = 0,
                roomIndex = 0,
                sensorIndex = 0,
                message = messages.find(function (message, index) {
                    if (message.name === '@OK' || message.name === '@REPLY') {
                        messageIndex = index;
                        return true;
                    }
                }),
                room = message ? message.rooms.find(function (room, index) {
                    if (room.number === Number(body.address)) {
                        roomIndex = index;
                        return true;
                    }
                }) : null,
                sensor = room ? room.sensors.find(function (sensor, index) {
                    if (sensor.number === Number(body.pin)) {
                        sensorIndex = index;
                        return true;
                    }
                }) : null;
            if (sensor) {
                data = `${message.name} ${message.rooms[roomIndex].number} ${message.rooms[roomIndex].sensors[sensorIndex].number} ${message.rooms[roomIndex].sensors[sensorIndex].values.pop()}`;
                messages.splice(messageIndex, 1);

                break;
            }

            await delay(100);
            n++;
        }

        let responseCmd = data.toString().split(" "),
            response = {
                status: responseCmd[0] ?? 'unknown',
                address: responseCmd[1] ?? 255,
                item: responseCmd[2] ?? 255,
                value: responseCmd[3] ?? 255
            };
        res.send(response);
    })();
})

module.exports = router;