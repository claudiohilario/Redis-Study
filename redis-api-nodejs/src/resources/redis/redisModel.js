const Joi = require('@hapi/joi');

const schema = {};

schema.executeRedisAction = Joi.object().keys({
    action: Joi.string().required(),
});

schema.setAction = Joi.object().keys({
    key: Joi.string().required(),
    value: Joi.string().required(),
});

schema.getAction = Joi.object().keys({
    key: Joi.string().required(),
});

schema.hsetAction = Joi.object().keys({
    key: Joi.string().required(),
    field: Joi.string().required(),
    value: Joi.string().required(), 
});

schema.hgetAction = Joi.object().keys({});
schema.setnxAction = Joi.object().keys({});
schema.keysAction = Joi.object().keys({});

module.exports.schema = schema;