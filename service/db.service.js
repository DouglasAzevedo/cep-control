const pool = require('../db/connect')

exports.query = async () => {
    pool.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
        pool.end()
    })
}