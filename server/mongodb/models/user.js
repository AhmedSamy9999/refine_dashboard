import mongoose from "mongoose";

const UserScheme = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String, required: true },
  allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
});

const userModal = mongoose.model("User", UserScheme);

export default userModal;
