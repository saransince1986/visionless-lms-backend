import Joi from 'joi';

export default () => {
  const rolesSchema = {};
  rolesSchema.post = {
    body: {
      roleName: Joi.string().required(),
    },
  };
  return rolesSchema;
};
