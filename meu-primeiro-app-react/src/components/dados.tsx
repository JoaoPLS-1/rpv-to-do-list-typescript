//Função Dados retornando Nome, Cidade e Idade em propriedades

 // Importando o tipo JSX para tipar a função: import type { JSX } from "react"; porem pelo observado não é necessário
interface IDadosProps {
    nome: string
    cidade: string
    idade: string
    sobrenome: string
} // Transformar em propriedades meus campos disponíveis
export function Dados(props: IDadosProps){ // Recebendo as propriedades; Passo todas as propriedades como parâmetro da minha função dentro de um objeto, atraves das {}
    if(props.nome.length === 0){
        alert("Coisa sem nada")

    }
    return (
            // Passo normalmente as propriedades em forma de objeto dentro da {}
        <>
        <div> 
            <h1>{props.nome}</h1>
            <h1>{props.cidade}</h1>
            <h1>{props.idade}</h1>
            <h1>{props.sobrenome}</h1>
        </div>
        </>
    )
}
