import asyncHandler from "express-async-handler";

import generateToken from "../utils/generateToken.js";

import User from "../models/userModels.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.matchPassword(password)) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
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
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({
    message: "User logged out",
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
