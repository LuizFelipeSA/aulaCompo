const express = require('express');
const { json } = require('express/lib/response');
const app = express();

const PORT = 3000;

const db = require('./models/index');

app.use(express.json());

app.get('/produtos', async (req, res) => {
    const produtos = await db.produtos.findAll({
        include: [
            {association: 'categorias'}
        ]
    })

    return res.send({produtos});
})

app.post('/produto', async (req, res) => {
    let { nome, categoriaId, descricao } = req.body;
    const novoProduto = await db.produtos.create({
        nome: nome,
        categoriaId: categoriaId,
        descricao: descricao
    })
    res.send({ novoProduto })
})

app.put('/produto/:id', async (req, res) => {
    let { id } = req.params;
    let { nome } = req.body;
    const atualizaProduto = await db.produtos.update({
            nome: nome
    },{
        where: { id: id}
    }) 
    console.log(atualizaProduto)
    res.send({atualizaProduto})
})

app.delete('/produto/:id', async (req, res) => {
    let { id } = req.params;

    let killProduct = await db.produtos.destroy({
        where : { id }
    })



})

app.listen(PORT, () => console.log('server running on port '+PORT));