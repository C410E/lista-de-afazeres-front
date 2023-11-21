import { useState, useEffect } from "react";
import axios from "axios";

const ListarTarefas = () => {
    const [tarefa, setTarefas] = useState([]);

    const buscarTarefa = async () => {
        try {
            const response = await axios.get("http://localhost:3001/listar-tarefa");
            
            setTarefas(response.data);
        } catch (error) {
            console.error("Erro ao buscar tarefas", error)
        }
    }

    useEffect(() => {
        buscarTarefa()
    }, [])
    return (
        <div>
            <h1>tarefas registradas</h1>
            <ul>
                {tarefa.map((tarefa) => (
                    <li key={tarefa.id}>{tarefa.tarefa}, {tarefa.data_tarefa}</li>
                   
                ))}
            </ul>
        </div>
    )
}

export default ListarTarefas