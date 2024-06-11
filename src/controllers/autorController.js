import { autor } from "../models/Autor.js";

export default class AutorController {
  
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch(err) {
      res
        .status(500)
        .json({ message: `${err.message} - Falha na requisição!` });
    }
  };

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch(err) {
      res
        .status(500)
        .json({ message: `${err.message} - Falha na requisição do autor!` });
    }
  };

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ message: "Adicionado com sucesso!", autor: novoAutor });
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - Falha ao cadastrar autor!` });
    }
  };

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado!" });
    } catch(err) {
      res
        .status(500)
        .json({ message: `${err.message} - Falha na atualização!` });
    }
  };

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor excluido com sucesso!" });
    } catch(err) {
      res
        .status(500)
        .json({ message: `${err.message} - Falha na exclusão!` });
    }
  }
}
