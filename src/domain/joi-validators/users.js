import Joi from 'joi';

async function getValidRolesNames(rolesModel) {
  const validRoles = await rolesModel.findAll();
  return validRoles.map((role) => role.roleName);
}

export default async ({
  rolesModel,
}) => {
  const validRoles = await getValidRolesNames(rolesModel);
  const userSchema = {};
  userSchema.post = {
    body: {
      email: Joi.string().email(),
      phoneNumber: Joi.number().max(8),
      authId: Joi.string(),
      firstName: Joi.string().max(20).required(),
      middleName: Joi.string().max(20),
      lastName: Joi.string().max(20).required(),
      secondLastName: Joi.string().max(20).required(),
      idNumber: Joi.number().min(13).max(13).required(),
      role: Joi.string().valid(validRoles),
    },
  };
  return userSchema;
};