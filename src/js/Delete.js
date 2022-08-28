import Api from "./Api.js";

export default class Deletar {

    static deletarUsuario (data) {
        const busca = document.querySelector(".selectDelete")
        const btnDelete = document.querySelector(".btnDelete")
    
        data.forEach(element => {
            const option = document.createElement("option")
            option.innerText = element.nome
            option.value = element.id

            busca.appendChild(option)

        });

        busca.addEventListener("change", (event) => {

            const id = event.target.value

            btnDelete.addEventListener("click", async (event) => {
                event.preventDefault()

                await Api.deletarCliente(id)
            })
        })
    }
}

const clientes = await Api.listarClientes()
Deletar.deletarUsuario(clientes)