import type { Request, Response } from "express";
import type { Usuario } from "../prisma/generated/prisma/client";
import { UserService } from "../services/UserService";

class UserController {
  constructor(private readonly service: any) {}

  async cadastrar(req: Request, res: Response) {
    try {
      const dadosUsuario = req.body as Usuario;
      const usuarioCriado = await this.service.cadastrar(dadosUsuario);
      return res.status(201).json({
        message: "Usuário criado com sucesso!",
        data: usuarioCriado,
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error });
    }
  }

  async buscarPorId(req: Request, res: Response) {
    try {
      const dadosUsuario = req.body as Partial<Usuario>;
      const dadosBuscar = await this.service.buscarPorId(dadosUsuario.id);
      return res.status(201).json({
        message: "Usuário localizado!",
        data: dadosBuscar,
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error });
    }
  }
  async buscar(req: Request, res: Response) {
    try {
      const dadosUsuario = req.body as Partial<Usuario>;
      const dadosBuscar = await this.service.buscar(dadosUsuario);
      return res.status(201).json({
        message: "Usuários localizados!",
        data: dadosBuscar,
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error });
    }
  }
  async atualizar(req: Request, res: Response) {
    try {
      const dadosUsuario = req.body as Omit<Usuario, "id">;
      const usuarioAtualizado = await this.service.atualizar(dadosUsuario);
      return res.status(201).json({
        message: "Usuário atualizado com sucesso!",
        data: usuarioAtualizado,
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error });
    }
  }

  async deletar(req: Request, res: Response) {
    try {
      const dadosUsuario = req.body as Partial<Usuario>;
      const usuarioDeletado = await this.service.deletar(dadosUsuario);
      return res.status(201).json({
        message: "Usuário deletado com sucesso!",
        data: usuarioDeletado,
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error });
    }
  }
}
export const userController = new UserController(UserService);
