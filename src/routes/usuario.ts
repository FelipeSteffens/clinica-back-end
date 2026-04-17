import { Router } from "express";
import { userRepository } from "../repositories/UserRepository";
import { userController } from "../controllers/UserController";

export const usuarioRouter = Router();

// Endpoints usuario
usuarioRouter.get('/usuarios', async (_, res) => {
  
  return userController.buscar(_, res)
})

usuarioRouter.get('/usuarios/:id', async (req, res) => {
  return userController.buscarPorId(req, res)
})

usuarioRouter.post("/usuarios", async (req, res) => {
 return userController.cadastrar(req, res)
})


usuarioRouter.put("/usuarios/:id", async (req, res) => {
  return userController.atualizar(req,res)
})

usuarioRouter.delete('/usuarios/:id', async (req, res) => {
  return userController.deletar(req, res)
})
  
  
