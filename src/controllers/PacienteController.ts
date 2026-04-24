import type { Paciente } from "../prisma/generated/prisma/client";
import type { Request, Response } from "express";

class PacienteController {
  constructor(private readonly service: any) {}
  async cadastrar(req: Request, res: Response) {
    try {
      const dadosPaciente = req.body as Paciente;
      const pacienteCriado = await this.service.cadastrar(dadosPaciente);
      return res.status(201).json({
        message: "Usuário criado com sucesso!",
        data: pacienteCriado,
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        error,
      });
    }
  }

  async atualizarPaciente(req: Request, res: Response) {
    try {
      const idPaciente = Number(req.params.id);
      const dadosParaAtualizar = req.body as Omit<Paciente, "id">;
      const pacienteAtualizado = await this.service.atualizarPaciente(
        idPaciente,
        dadosParaAtualizar,
      );
      return res.status(200).json(pacienteAtualizado);
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        error,
      });
    }
  }
  async deletarPaciente(req: Request, res: Response) {
    try {
      const idPaciente = Number(req.params.id);
      const paciente = await this.service.deletarPaciente(idPaciente);
      return res.status(200).json({
        mensagem: "Paciente deletado com sucesso!",
        data: paciente,
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        error,
      });
    }
  }

  async listarTodosPacientes(_: Request, res: Response) {
    try {
      const pacientes = await this.service.listarTodosPacientes();
      return res.status(200).json(pacientes);
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        error,
      });
    }
  }

  async listarPaciente(req: Request, res: Response) {
    try {
      const idPaciente = Number(req.params.id);
      const paciente = await this.service.listarPaciente(idPaciente);
      return res.status(200).json(paciente);
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        error,
      });
    }
  }
}
export const pacienteController = new PacienteController(pacienteService)
