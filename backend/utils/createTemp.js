import Course from "../models/Course.js";

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
export { createCourse };
