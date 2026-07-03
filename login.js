

function validarCadastro(usuario) {
if (!usuario.nome){
  return false
}
else if (!usuario.email){
  return false
}
else if (!usuario.senha  ) {
  return false
}
else if (usuario.senha.length < 6){
return false
}
return true
}

console.log(validarCadastro({ nome: "Pedro", email: "pedro@email.com", senha: "123456" }));
console.log(validarCadastro({ nome: "Ana", email: "", senha: "123456" }));
console.log(validarCadastro({ nome: "Lucas", email: "lucas@email.com", senha: "123" }));

