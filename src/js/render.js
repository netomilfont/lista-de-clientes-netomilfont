import Api from "./Api.js"

export default class Client {

    static renderClient (array) {
        const ul = document.querySelector(".container")

        array.forEach((product) => {
            const client = Client.createCliente(product)
            
            ul.appendChild(client)
        })
    }

    static createCliente (product) {
        const liClient = document.createElement("li")
        const h2NomeClient = document.createElement("h2")
        const divInfoClient = document.createElement("div")
        const h3Title = document.createElement("h3")
        const pEmail = document.createElement("p")
        const pAge = document.createElement("p")
        const pCpf = document.createElement("p")
        const pSexo = document.createElement("p")
        const divAddress = document.createElement("div")
        const h3Address = document.createElement("h3")
        const pCEP = document.createElement("p")
        const pState = document.createElement("p")
        const pCity = document.createElement("p")
        const pDistrict = document.createElement("p")
        const pRoad = document.createElement("p")
        const pNumberHouse = document.createElement("p")

        h2NomeClient.innerText = product.nome
        h3Title.innerText = 'Dados Pessoais'
        pEmail.innerText = product.email 
        pAge.innerText = product.idade 
        pCpf.innerText = product.cpf
        pSexo.innerText = product.sexo
        h3Address.innerText = 'Endereco'
        pCEP.innerText = product.endereco.cep 
        pState.innerText = product.endereco.estado
        pCity.innerText = product.endereco.cidade
        pDistrict.innerText = product.endereco.bairro
        pRoad.innerText = product.endereco.rua
        pNumberHouse.innerText = product.endereco.numero

        liClient.classList.add("card")

        divAddress.append(h3Address, pCEP, pState, pCity, pDistrict, pRoad, pNumberHouse)
        divInfoClient.append(h3Title, pEmail, pAge, pCpf, pSexo)
        liClient.append(h2NomeClient, divInfoClient, divAddress)

        return liClient
    }
    
}

const clientes = await Api.listarClientes()
Client.renderClient(clientes)
