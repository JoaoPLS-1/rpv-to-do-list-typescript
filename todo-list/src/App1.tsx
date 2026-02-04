import { useState } from 'react'
import './App.css'

interface IErro {
    active: boolean;
    description: string;
}


export function App1() {
    const [valorDoInput, setValorDoInput] = useState<string>("")
    const [tarefas, setTarefas] = useState<string[]>([])
    const [erro, setErro] = useState<IErro>({
        active: false,
        description: ""
    })

    function adicionarTarefa(): void {
        if (valorDoInput.trim() === "") {
            setErro({
                active: true,
                description: "Campo obrigatório."
            })
            return
        }
        if (valorDoInput.trim().length > 15) {
            setErro({
                active: true,
                description: "Máximo 15 caracteres."
            })
            return
        }
        setErro({
            active: false,
            description: ""
        })

        const tarefasFiltradas = tarefas.filter(
            tarefa => tarefa.trim().toLowerCase() === valorDoInput.trim().toLowerCase())

            if (tarefasFiltradas.length > 0){
                setErro({
                    active: true,
                    description: "Tarefa já cadastrada."
                })
                return
            }
        setTarefas(oldState => [...oldState, valorDoInput])
        setValorDoInput("")
    }

    return (
        <>
            <div>
                <div className="card">
                    <div className="input-wrapper">
                        <input type="text" id='input-tarefa' value={valorDoInput} onChange={(e) => setValorDoInput(e.target.value)} />
                        <p className='erro'>{erro.active && erro.description}</p>

                    </div>
                    <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
                </div>
            </div>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </>

    )
}
