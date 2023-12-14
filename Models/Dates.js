import mongoose from "mongoose";
const DateSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
    },
    start: {
      type: String,
    },
    end: {
      type: String,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    from1: {
        type: String,
      },
      to1: {
        type: String,
      },
  
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("date", DateSchema);