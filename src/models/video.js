import mongoose from "mongoose";

const videSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    fileUrl: { type: String, required: true },
    description: { type: String, required: true, trim: true },
    createdAt: { type: Date, required: true, default: Date.now },
    hashtags: [{ type: String, trim: true }],
    meta: {
        views: { type: Number, default: 0, required: true },
        rating: { type: Number, default: 0, required: true },
    },
});

videSchema.static('formatHashtags', function(hashtags) {
    return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const movieModel = mongoose.model("Video", videSchema);
export default movieModel;
