import type { Paciente } from "../prisma/generated/prisma/client";

class PacienteService {
  constructor(private readonly repository: any) {
    // TO-DO TIPAR SERVICE
  }
  async criarPaciente(dadosPaciente: Paciente) {
    const pacienteCriado = await this.repository.criarPaciente({
      email: dadosPaciente.email,
      nome: dadosPaciente.nome,
      cpf: dadosPaciente.cpf,
      telefone: dadosPaciente.telefone,
      data_nascimento: new Date(dadosPaciente.data_nascimento),
      sexo: dadosPaciente.sexo,
      responsavel: dadosPaciente.responsavel || null,
    });
    return pacienteCriado;
  }
  async atualizarPaciente(
    idPaciente: number,
    dadosParaAtualizar: Omit<Paciente, "id">,
  ) {
    const pacienteAtualizado = await this.repository.atualizarPaciente(
      idPaciente,
      dadosParaAtualizar,
    );
    return pacienteAtualizado;
  }
  async deletarPaciente(idPaciente: number) {
    const paciente = await this.repository.deletarPaciente(idPaciente);
    return paciente;
  }
  async listarTodosPacientes() {
    const pacientes = await this.repository.listarTodosPacientes();
    return pacientes;
  }
  async listarPaciente(idPaciente: number) {
    const paciente = await this.repository.listarPaciente(idPaciente);
    return paciente;
  }
}
