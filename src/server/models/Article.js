import mongoose from "mongoose";


const schema = new mongoose.Schema(
  {
    id: {
      type: String
    },
    photo: {
        type: String
      },
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      author: {
        type: String
      },
      authorDes: {
        type: String
      },
      avatar: {
        type: String
      }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Article", schema);
