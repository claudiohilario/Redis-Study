const redis = require('redis');
const config = require('../configs/config');

/**
 * Redis Wrapper
 */
class RedisService {
    constructor(config) {
        this.redisClient = redis.createClient({
            host: config.host,
            port: config.port
        });
    }

    set(key, value) {
        return new Promise((resolve, reject) => {
            this.redisClient.set(key, value, function(error, response) {
                if(error) {
                    return reject(error);
                }
                return resolve(response);
            })
        })
    }

    get(key) {
        return new Promise((resolve, reject) => {
            this.redisClient.get(key, function(error, response) {
                if(error) {
                    return reject(error);
                }
                return resolve(response);
            })
        })
    }

    hset(key, field, value) {
        return new Promise((resolve, reject) => {
            this.redisClient.hset(key, field, value, function(error, response) {
                if(error) {
                    return reject(error);
                }
                return resolve(true);
            })
        })
    }

    hget(key, field) {
        return new Promise((resolve, reject) => {
            this.redisClient.hget(key, field, function(error, response) {
                if(error) {
                    return reject(error);
                }
                return resolve(response);
            })

        })
    }

    setnx(key, value) {
        return new Promise((resolve, reject) => {
            this.redisClient.setnx(key, value, function(error, response) {
                if(error) {
                    return reject(error);
                }
                return resolve(response);
            })

        })
    }

    /**
     * 
     * @param {string|string[]} key 
     */
    del(key) {
        return new Promise((resolve, reject) => {
            this.redisClient.del(key, function(error, response) {
                if(error) {
                    return reject(error);
                }
                return resolve(response);
            })

        })
    }

    /**
     * 
     * @param {*} key 
     * @param {*} field 
     */
    hdel(key, field) {
        return new Promise((resolve, reject) => {
            this.redisClient.hdel(key, field,function(error, response) {
                if(error) {
                    return reject(error);
                }
                return resolve(response);
            })

        })
    }

    keys(pattern = '*') {
        return new Promise((resolve, reject) => {
            this.redisClient.keys(pattern, function(error, response) {
                if(error) {
                    return reject(error);
                }
                return resolve(response);
            })

        })
    }

}

const redisConfig = {
    host: config.redis.host,
    port: config.redis.port,
}

module.exports = new RedisService(redisConfig);