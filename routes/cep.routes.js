const service = require('../service/cep.service')

module.exports = (app) => {

    app.get('/findcep/:cep', async (req, res) => {
        let cepNumber = req.params.cep
        let cepReturn = await service.findCep(cepNumber)
        res.json(cepReturn)
    })

}