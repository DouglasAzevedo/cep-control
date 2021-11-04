const pool = require('./connect');

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})