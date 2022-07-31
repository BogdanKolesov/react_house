import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        rooms: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Room'
            }
        ]
    },
    {
        timestamps: true
    }
)

export default mongoose.model('User', UserSchema)