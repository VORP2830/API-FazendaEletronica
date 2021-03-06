const Animal = require('../../service/Animal/ModelAnimal')
const db = require('../../config/database')
const jwt = require('jsonwebtoken');
const IdUsuarioLogado = require('../../utils/usuarioLogado');

class animalController {

    static async Buscar (req, res) {
        const result = await Animal.Buscar(await IdUsuarioLogado(req), req.params.id);
        res.status(result.code).json(result.result);
    }

    static async ListarMorto (req, res) {
        const result = await Animal.ListarMorto(await IdUsuarioLogado(req))
        res.status(result.code).json(result.result)
    }

    static async ListarCampo (req, res) {
        const result = await Animal.ListarCampo(await IdUsuarioLogado(req))
        res.status(result.code).json(result.result)
    }

    static async ListarVendido (req, res) {
        const result = await Animal.ListarVendido(await IdUsuarioLogado(req))
        res.status(result.code).json(result.result)
    }

    static async Adicionar (req, res) {
        const { numero, id_pai, cha_sexo, id_finalidade, apelido, nascimento, status, tipo_animal } = req.body;
        const animal = new Animal({
            id_criador: await IdUsuarioLogado(req),
            numero,
            id_pai,
            cha_sexo,
            id_finalidade,
            apelido,
            nascimento,
            status,
            tipo_animal
        })
        const result = await Animal.Adicionar(animal)
        res.status(result.code).json(result.result)
    }

    static async Deletar (req, res) {
        const result = await Animal.Deletar(await IdUsuarioLogado(req), req.params.id)
        res.status(result.code).json(result.result)
    }
    
    static async ListarPai (req, res) {
        const result = await Animal.ListarPai(await IdUsuarioLogado(req));
        res.status(result.code).json(result.result)
    }

    static async TelaPrincipal (req, res) {
        const result = await Animal.TelaPrincipal(await IdUsuarioLogado(req))
        res.status(result.code).json(result.result)
    }

    static async Atualizar (req, res) {
        const { id_animal, numero, id_pai, cha_sexo, id_finalidade, apelido, nascimento, status, tipo_animal } = req.body;
            const animal = new Animal({
                id_animal,
                numero,
                id_pai,
                cha_sexo,
                id_finalidade,
                apelido,
                nascimento,
                status,
                tipo_animal
            })
        const result = await Animal.Alterar(await IdUsuarioLogado(req), animal)
        res.status(result.code).json(result.result)
    }
};

module.exports = animalController;