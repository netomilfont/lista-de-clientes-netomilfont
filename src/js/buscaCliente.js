import Api from "./Api.js";

export default class Buscar {

    static buscaCliente (data) {
        const busca = document.querySelector(".selectBusca")
        const butnBusca = document.querySelector(".btnBuscar")
    
        data.forEach(element => {
            const option = document.createElement("option")
            option.innerText = element.nome
            option.value = element.id

            busca.appendChild(option)

        });
    
        busca.addEventListener("change", (event) => {

            const id = event.target.value

            butnBusca.addEventListener("click", async (event) => {
                event.preventDefault()

                data.forEach(element => {

                    if(element.id == id) {
                        const inputNome = document.querySelector(".inputNome")
                        const inputEmail = document.querySelector(".inputEmail")
                        const inputIdade = document.querySelector(".inputIdade")
                        const inputCpf = document.querySelector(".inputCpf")
                        const inputSexo = document.querySelector(".inputSexo")

                        const inputCEP = document.querySelector(".inputCEP")
                        const inputRua = document.querySelector(".inputRua")
                        const inputNumCasa = document.querySelector(".inputNumCasa")
                        const inputBairro = document.querySelector(".inputBairro")
                        const inputCidade = document.querySelector(".inputCidade")
                        const inputEstado = document.querySelector(".inputEstado")
                        
                        inputNome.value = element.nome
                        inputEmail.value = element.email
                        inputIdade.value = element.idade
                        inputCpf.value = element.cpf
                        inputSexo.value = element.sexo
                        inputCEP.value = element.endereco.cep
                        inputRua.value = element.endereco.rua 
                        inputNumCasa.value = element.endereco.numero
                        inputBairro.value = element.endereco.bairro
                        inputCidade.value = element.endereco.cidade
                        inputEstado.value = element.endereco.estado
                    }
                })
                
                localStorage.setItem("@kenzieEdit:UserId", id)
            })

        })
        
    }

}

const clientes = await Api.listarClientes()
Buscar.buscaCliente(clientes)