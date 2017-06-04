// tutaj nie monza importow
const getBabelRelayPlugin = require('babel-relay-plugin');


// trzeba wygenerowac
const schema = require('./schema.json');

const plugin = getBabelRelayPlugin(schema.data);

module.exports = plugin;