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

schema.hgetAction = Joi.object().keys({
    key: Joi.string().required(),
    field: Joi.string().required(),
});

schema.setnxAction = Joi.object().keys({
    key: Joi.string().required(),
    field: Joi.string().required(),
});

schema.keysAction = Joi.object().keys({
 pattern: Joi.string().required(),
});

schema.delAction = Joi.object().keys({
    key: Joi.string().required(),
});

schema.hdelAction = Joi.object().keys({
    key: Joi.string().required(),
    field: Joi.string().required(),
});

module.exports.schema = schema;
