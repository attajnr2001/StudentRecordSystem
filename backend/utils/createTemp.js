import Course from "../models/Course.js";
import Subject from "../models/Subject.js";

async function createCourse(name) {
  try {
    const newCourse = await Course.create({
      name,
    });

    return newCourse;
  } catch (error) {
    console.error("Error creating course:", error.message);
    throw new Error("Could not create course");
  }
}

async function createSubject(name) {
  try {
    const newSubject = await Subject.create({
      name,
    });

    return newSubject;
  } catch (error) {
    console.error("Error creating course:", error.message);
    throw new Error("Could not create course");
  }
}


export { createCourse, createSubject };
