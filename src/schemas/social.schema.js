import mongoose from "mongoose"

const socialSchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    platform: {
        type: String,
        required: true,
        unique: true,
    },
    platform_user: {
        type: String,
        required: false,

    }
},{timestamps: true});

export const Social = mongoose.model("social", socialSchema)