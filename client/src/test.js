var axios = require("axios")
const B = 'http://localhost:8080'
f = async() => {
    res = await axios.get(B+'/chores')
    console.log(res.data)
    console.log(typeof res.data)
    console.log(res.data[0])
}

f()


