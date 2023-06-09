import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const PointofinterestSpec = Joi.object()
  .keys({
    title: Joi.string().required(),
    county: Joi.string().required(),
    description: Joi.string().required(),
    latitude: Joi.number().allow("").optional(),
    longitude: Joi.number().allow("").optional(),
    countryid: IdSpec,
  })
  .label("Pointofinterest");

export const PointofinterestSpecPlus = PointofinterestSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PointofinterestPlus");

export const PointofinterestArraySpec = Joi.array().items(PointofinterestSpecPlus).label("PointofinterestArray");

export const CountrySpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Japan"),
    userid: IdSpec,
    pointofinterests: PointofinterestArraySpec,
  })
  .label("Country");

export const CountrySpecPlus = CountrySpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("CountryPlus");

export const CountryArraySpec = Joi.array().items(CountrySpecPlus).label("CountryArray");

export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("JwtAuth");
