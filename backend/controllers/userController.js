import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

import { createCourse } from "../utils/createTemp.js";

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, role, email, password, pictureURL, course } =
    req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    firstName,
    email,
    password,
    lastName,
    role,
    pictureURL,
    course,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      password: user.password,
      pictureURL: user.pictureURL,
      course: user.course,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

createCourse("Science");

export { registerUser };
