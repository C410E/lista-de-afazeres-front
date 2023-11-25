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

    const excluirTarefa = async (id) => {
        const idSeguro = encodeURIComponent(id);

        await axios.delete(`http://localhost:3001/excluir-tarefa/${idSeguro}`);
        
        buscarTarefa();
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
                    <button 
                        onClick={() => excluirTarefa(tarefa.id)}
                        className="button-excluir"
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListarTarefas