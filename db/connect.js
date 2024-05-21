const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const db = 'ExpressUserControl'

module.exports = async () => {
    try {
        const client = await MongoClient.connect(url, { useUnifiedTopology: true });
        global.db = client.db(db);
    } catch (e) {}
}