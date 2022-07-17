const homeDataToJSON = [
    {
        id: '99796',
        roomName: 'Room 1',
        status: 'online',
        lights: [
            {
                id: '683626',
                name: 'Room 1 lighter',
                resource: '#',
                value: 15,
                status: 'online',
            },
            {
                id: '68653626',
                name: 'Room 1 lighter',
                resource: '#',
                value: 15,
                status: 'offline',
            },
        ],
        cameras: [
            {
                id: '1726527',
                name: 'Camera room 1',
                resource: '#',
                status: 'online',
            }
        ]
    },
    {
        id: '8583753',
        roomName: 'Room 2',
        status: 'online',
        lights: [
            {
                id: '141462987dsgs',
                name: 'Room 1 lighter',
                resource: '#',
                value: 15,
                status: 'online',
            }
        ],
        cameras: [
            {
                id: '1345654323636',
                name: 'Camera room 1',
                resource: '#',
                status: 'offline',
            }
        ]
    }

]

export const homeData = JSON.stringify(homeDataToJSON)