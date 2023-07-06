import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Auth User",
  });
});

const registerUser = asyncHandler(async (req, res) => {
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
