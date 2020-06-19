const redisClient = require('../../services/redis');
const model = require('./redisModel');

/**
 * 
 * @param {Object} params
 * @param {string} params.key
 * @param {string} params.value
 */
async function setAction(params) {
    const { value: valJoi } = await model.schema.setAction.validate(params);

    const response = await redisClient.set(valJoi.key, valJoi.value);
    return response;
}

/**
 * 
 * @param {Object} params
 * @param {string} params.key
 */
async function getAction(params) {
    const { value: valJoi } = await model.schema.getAction.validate(params);

    const response = await redisClient.get(valJoi.key);
    return response;
}

/**
 * 
 * @param {Object} params
 * @param {string} params.key
 * @param {string} params.field
 * @param {string} params.value
 */
async function hsetAction(params) {
    const { value: valJoi } = await model.schema.hsetAction.validate(params);

    const response = await redisClient.hset(valJoi.key, valJoi.field, valJoi.value);
    return response;
}

/**
 * 
 * @param {Object} params
 * @param {string} params.key
 * @param {string} params.field
 */
async function hgetAction(params) {
    const { value: valJoi } = await model.schema.hgetAction.validate(params);

    const response = await redisClient.hget(valJoi.key, valJoi.field);
    return response;
}

/**
 * 
 * @param {Object} params
 * @param {string} params.key
 * @param {string} params.field 
 */
async function setnxAction(params) {
    const { value: valJoi } = await model.schema.setnxAction.validate(params);

    const response = await redisClient.setnx(valJoi.key, valJoi.field);
    return response;
}

/**
 * 
 * @param {Object} params
 * @param {string} params.key
 */
async function delAction(params) {
    const { value: valJoi } = await model.schema.delAction.validate(params);

    const response = await redisClient.del(valJoi.key);
    return response;
}

/**
 * 
 * @param {Object} params
 * @param {string} params.key
 * @param {string} params.field
 */
async function hdelAction(params) {
    const { value: valJoi } = await model.schema.hdelAction.validate(params);

    const response = await redisClient.hdel(valJoi.key, valJoi.field);
    return response;
}

/**
 * 
 * @param {Object} params
 * @param {string} params.pattern
 */
async function keysAction(params) {
    const { value: valJoi } = await model.schema.keysAction.validate(params);
    
    const response = await redisClient.keys(valJoi.pattern);
    return response;
}

function executeRedisAction(action, params) {
    const redisActionsMapper = {
        set: setAction,
        get: getAction,
        hset: hsetAction,
        hget: hgetAction,
        setnx: setnxAction,
        del: delAction,
        hdel: hdelAction,
        keys: keysAction,
    }
    
    if(!Object.prototype.hasOwnProperty.call(redisActionsMapper, action)) {
       throw new Error('Redis action does not exist!');
    }

    return redisActionsMapper[action](params);
}

module.exports.executeRedisAction = executeRedisAction;