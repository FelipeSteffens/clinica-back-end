import type { PrismaClient, Usuario } from "../prisma/generated/prisma/client";
import { prisma } from "../prisma/prisma";

export class UserRepository {
  constructor(private readonly prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async cadastrar(dadosUsuario: Partial<Usuario>) {
    return await this.prisma.usuario.create({
      data: {
        email: dadosUsuario.email || "",
        senha: dadosUsuario.senha || "",
        nome: dadosUsuario.nome || "",
      },
    });
  }

  async buscarPorId(id: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });

    return usuario;
  }

  async buscar() {
    const usuarios = await this.prisma.usuario.findMany();
    return usuarios;
  }

  async atualizar(dadosUsuario: Usuario) {
    const usuarioAtualizado = await this.prisma.usuario.update({
      data: {
        ...dadosUsuario,
      },
      where: {
        id: dadosUsuario.id,
      },
    });
    return usuarioAtualizado;
  }

  async deletar(id: number) {
    const usuarioDeletado = await this.prisma.usuario.delete({
      where: {
        id,
      },
    });
    return usuarioDeletado;
  }
}

export const userRepository = new UserRepository(prisma);
