const methods = require('./redisMethods');
const model = require('./redisModel');

async function executeRedisAction(req, res, next) {
    const {action, ...params} = req.body;

    try {
        const { value: valJoi } = await model.schema.executeRedisAction.validate({ action });
        const result = await methods.executeRedisAction(valJoi.action, params);
        return res.json({success: true, data: result});
    } catch(err) {
        console.log(err);
        return res.status(500).json({success: false, data: err});
    }
}

module.exports.executeRedisAction = executeRedisAction;
