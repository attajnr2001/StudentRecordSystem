import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import Course from "../models/Course.js";
import Subject from "../models/Subject.js";
import { createCourse, createSubject } from "../utils/createTemp.js";

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, role, email, password, pictureURL, subject } =
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
    subject,
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
      subject: user.subject,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

createSubject("Core Mathematics");

export { registerUser };
