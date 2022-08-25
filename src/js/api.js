import Client from "./render.js"

export default class Api {

    static BASEURL = "https://atividade-api-clientes.herokuapp.com"
    static headers = {
        "Content-Type":"application/json"
    }

    static async listarClientes(){
        const clients = await fetch(`${this.BASEURL}/clientes`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))

        return clients
    }

    static async cadastrarCliente(data){
        
    }

    static async editarCliente(id, data){

    }

    static async deletarCliente(id){

    }

}
