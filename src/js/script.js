import Api from "./Api.js";
import Client from "./render.js";
// import CadastrarUsuario from "./cadastro.js";

const clientes = await Api.listarClientes()

Client.renderClient(clientes)

// CadastrarUsuario.novoUsuario()