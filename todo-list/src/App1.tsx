import { useState } from 'react'
import './App.css'

export function App1() {
    const [valorDoInput, setValorDoInput] = useState<string>("")
    const [tarefas, setTarefas] = useState<string[]>([])
    
    return (
        <>
            <div>
                <div className="card">

                    <input type="text" id='input-tarefa' value={valorDoInput} onChange={(e) => setValorDoInput(e.target.value)} />
                    <button onClick={() => {
                        setTarefas(oldState => [...oldState, valorDoInput])
                        setValorDoInput("")
                        
                    }}>Adicionar Tarefa</button>
                </div>
            </div>
            <ul>
              {tarefas.map(tarefa => (
                <li>{tarefa}</li>
              ))}
            </ul>
        </>

    )
}
