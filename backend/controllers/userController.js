import asyncHandler from "express-async-handler";

import User from "../models/userModels.js";

const authUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Auth User",
  });
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({ name, email, password });

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }

  res.json({
    message: "Register User",
  });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Logout User",
  });
});

//private

const getUserProfile = asyncHandler(async (req, res) => {
  res.json({
    message: "Profile of User",
  });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.json({
    message: "Profile updated",
  });
});

export {
  authUser,
  registerUser,
  getUserProfile,
  logoutUser,
  updateUserProfile,
};
