const conection = require("../database/conection")

module.exports = {
    async info(req,res){
        const {nome,idade,empresa,funcao} = req.body;
        console.log(nome);

        await conection('perfis').insert({
            nome,
            idade,
            empresa,
            funcao,
            })
        res.json(nome);
        },
    
    async receive(req,res){
            const dados = await conection('perfis').select('*')
            res.json(dados);
        }
}