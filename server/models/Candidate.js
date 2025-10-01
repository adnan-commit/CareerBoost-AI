import mongoose from "mongoose";

const CandidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  experience: Number,
  skills: [String],
  resumeText: String,
  vectorEmbedding: [Number],
  history: [{ type: mongoose.Schema.Types.ObjectId, ref: "CandidateHistory" }],
});
export const Candidate = mongoose.model("Candidate", CandidateSchema);
