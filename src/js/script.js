import Api from "./Api.js";
import Client from "./render.js";

const clientes = await Api.listarClientes()

Client.renderClient(clientes)
