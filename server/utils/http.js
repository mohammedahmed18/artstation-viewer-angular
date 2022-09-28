const axios = require('axios')
const http = axios.create({
    baseURL: "https://www.artstation.com/api/v2",
});

module.exports = http