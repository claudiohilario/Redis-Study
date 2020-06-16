const config = require('./configs/config');

const app = require('./app');

app.listen(config.port, () => console.log(`Server on port: ${config.port}`));