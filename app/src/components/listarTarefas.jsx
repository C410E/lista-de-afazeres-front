import { useState, useEffect } from "react";
import axios from "axios";
import "../css/listarTarefas.css";

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
        <div className="Div">
            <ul className="Ul">
                {tarefa.map((tarefa) => (
                    <li 
                    className="post-it "
                    key={tarefa.id}
                    >
                    {tarefa.tarefa} - {tarefa.data_tarefa}
                    </li>
                   
                ))}
            </ul>
        </div>
    )
}

export default ListarTarefas