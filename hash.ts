import bcrypt from "bcrypt"

const senha = "123456"
const saltRounds = 10

const hash = await bcrypt.hash(senha, saltRounds)
console.log(`Senha Hasehada: ${hash}`)

const hash2 = await bcrypt.hash(senha, saltRounds)
console.log(`Senha Hasehada 2: ${hash2}`)

const isMatch = await bcrypt.compare("123456", hash)
console.log(`Validação: ${isMatch}`)
