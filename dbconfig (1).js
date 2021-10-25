const mongoose = require('mongoose');
const urlMongo = 'mongodb://127.0.0.1/idbootcamp';

(async () => {
    await mongoose.connect(urlMongo)
})();
