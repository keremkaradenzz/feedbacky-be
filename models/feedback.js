import mongoose from "mongoose";

const feedBackSchema = mongoose.Schema({
  domain: String,
  feedback: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Feedback = mongoose.model("FeedBack", feedBackSchema);


export default Feedback