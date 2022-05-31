import Feedback from "../models/feedback.js";

export const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const postFeedback = async (req, res) => {
  const newFeedback = new Feedback(req.body);
  try {
    await newFeedback.save();
    res.status(200).json(newFeedback);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
