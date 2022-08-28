import Api from "./Api.js";

export default class CadastrarUsuario {
    static async novoUsuario () {
        const inputNome = document.querySelector(".inputNome")
        const inputEmail = document.querySelector(".inputEmail")
        const inputIdade = document.querySelector(".inputIdade")
        const inputCpf = document.querySelector(".inputCpf")
        const inputSexo = document.querySelector(".inputSexo")

        const inputCEP = document.querySelector(".inputCEP")
        const inputRua = document.querySelector('.inputRua')
        const inputNumCasa = document.querySelector('.inputNumCasa')
        const inputBairro = document.querySelector('.inputBairro')
        const inputCidade = document.querySelector('.inputCidade')
        const inputEstado = document.querySelector('.inputEstado')

        const btnCadastro = document.querySelector('.btnCadastro')

        btnCadastro.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                nome: inputNome.value,
                email:inputEmail.value,
                sexo:inputSexo.value,
                idade:inputIdade.value,
                cpf: inputCpf.value,
                endereco: {
                    estadp: inputEstado.value,
                    cidade:inputCidade.value,
                    bairro:inputBairro.value,
                    numero:inputNumCasa.value,
                    rua:inputRua.value,
                    cep:inputCEP.value
                }
            }

            await Api.cadastrarCliente(data)

        })


    }
}