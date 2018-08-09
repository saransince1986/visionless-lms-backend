import Joi from 'joi';
import awilixContainer from '../config/awilixContainer';

const coursesRequestHandler = awilixContainer.resolve('coursesRequestHandler');

export default [
  {
    method: 'GET',
    path: '/courses',
    config: {
      tags: ['api'],
      description: 'List courses',
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
    method: 'GET',
    path: '/courses/{id}',
    config: {
      tags: ['api'],
      description: 'Get course by ID',
      validate: {
        params: {
          id: Joi.number().integer().required(),
        },
      },
      handler(request, h) {
        const courseId = request.params.id;
        return coursesRequestHandler.getCourseById(courseId)
          .then((course) => course || h.response().code(404))
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
  {
    method: 'DELETE',
    path: '/courses/{id}',
    config: {
      tags: ['api'],
      description: 'Delete a course',
      validate: {
        params: {
          id: Joi.number().integer().required(),
        },
      },
      handler(request, h) {
        const id = request.params.id;
        return coursesRequestHandler.deleteCourseById(id)
          .then(() => h.response('OK').code(200))
          .catch((error) => {
            console.error(error);
            return h.response(error.message).code(500);
          });
      },
    },
  },
];
