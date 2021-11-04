const cep = require('cep-promise')

exports.findCep = async (cepNumber) => {
    return await cep(cepNumber).then(console.log())
}
