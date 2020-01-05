const axios = require('axios')

const get = async(url) => {
    const res = axios.get(url)
    return res
}

module.exports = {
    get
}