import Api from "./Api.js";

export default class Buscar {

    static buscaCliente (data) {
        const busca = document.querySelector(".selectBusca")

        console.log(data)

        data.forEach(element => {
            const option = document.createElement("option")
            console.log(option)
            option.innerText = element.nome
            option.value = element.id

            busca.appendChild(option)

        });
        
    }
}

const clientes = await Api.listarClientes()
Buscar.buscaCliente(clientes)