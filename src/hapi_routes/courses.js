import Joi from 'joi';
import awilixContainer from '../config/awilixContainer';

const coursesRequestHandler = awilixContainer.resolve('coursesRequestHandler');

export default [
  {
    method: 'GET',
    path: '/courses',
    config: {
      tags: ['api'],
      description: 'List all courses(50 at a time)',
      handler(request, h) {
        return coursesRequestHandler.getAllCourses()
          .catch((error) => {
            console.error(error);
            return h.response(error.message).code(500);
          });
      },
    },
  },
  {
    method: 'POST',
    path: '/courses',
    config: {
      tags: ['api'],
      description: 'Create a new empty course',
      validate: {
        payload: {
          courseId: Joi.string().min(3).max(20).required()
            .description('Alphanumeric course ID')
            .example('MAT-2017-2018'),
          courseName: Joi.string().min(4).max(50).required()
            .description('Course Name')
            .example('Matematicas 1er grado'),
        },
      },
      handler(request, h) {
        const payload = request.payload;
        return coursesRequestHandler.createCourse({
          courseId: payload.courseId,
          courseName: payload.courseName,
        }).catch((error) => {
          console.error(error);
          return h.response(error.message).code(500);
        });
      },
    },
  },
];
