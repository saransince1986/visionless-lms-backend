import express from 'express';
import expressJoi from 'express-joi-validator';

export default function ({
  coursesRequestHandler,
  coursesSchemaValidator,
}) {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const courses = await coursesRequestHandler.getAllCourses() || [];
      res.send(courses);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  });

  router.post('/', expressJoi(coursesSchemaValidator.post), async (req, res) => {
    try {
      const { courseName, courseId } = req.params;
      const createdCourse = await coursesRequestHandler.createCourse({ courseName, courseId });
      res.send(createdCourse);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  });

  return router;
}
