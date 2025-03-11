import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User Name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please fill valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 6,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
