const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('uri');
    } catch (err) {
        console.log('error connectinh');
    }
}

module.exports = { connect };