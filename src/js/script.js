import Api from "./api.js";
import Client from "./render.js";

const clientes = await Api.listarClientes()

Client.renderClient(clientes)