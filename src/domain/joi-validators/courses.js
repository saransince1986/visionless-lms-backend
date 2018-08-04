import Joi from 'joi';

export default () => {
  const courseSchema = {};
  courseSchema.post = {
    body: {
      courseName: Joi.string().required().min(5).max(60),
      courseId: Joi.string().required().min(3).max(20),
    },
  };
  return courseSchema;
};
