import express from 'express';

export default function ({
  coursesRequestHandler,
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

  return router;
}
