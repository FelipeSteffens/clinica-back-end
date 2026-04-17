import type { Usuario } from "../prisma/generated/prisma/client";
import { userRepository } from "../repositories/UserRepository";
import { createHash } from "../utils/createHash";

export class UserService {
  constructor(private readonly repository: any) {}

  async cadastrar(dadosUsuario: Usuario) {
    const hash = await createHash(dadosUsuario.senha);

    const usuarioCriado = await this.repository.cadastrar({
      email: dadosUsuario.email,
      nome: dadosUsuario.nome || null,
      senha: hash,
    });
    return usuarioCriado;
  }
  async buscarPorId(id: Number) {
    const usuario = await this.repository.buscarPorId(id);

    return usuario;
  }

  async buscar() {
    const buscarDados = await this.repository.buscar();

    return buscarDados;
  }

  async atualizar(dadosUsuario: Usuario) {
    const usuarioAtualizado = await this.repository.atualizar(dadosUsuario);

    return usuarioAtualizado;
  }

  async deletar(id: Number) {
    const usuarioDeletado = await this.repository.deletar(id);

    return usuarioDeletado;
  }
}

export const userService = new UserService(userRepository)
