import axios from "axios";
import { useState } from "react";
import "../css/cadastrarTarefa.css";

const FormCadastro = () => {
  const [tarefa, setTarefa] = useState(""); 

  const cadastro = async () => {
      try {
          const response = await axios.post("http://localhost:3001/cadastrar-tarefa", {
            tarefa
          });
    
          console.log("Caddastro realizado com sucesso", response.data)
    
          if (response.status === 200) {
               window.location.reload();
            }
          } catch (error) {
            console.error('Erro ao cadastrar:', error.message);
          }
  }
    return( 
      <div className="cadastro-div">
        <h1 className="title">Tarefa: </h1>
        <form >
           <label>
            <input 
            className="input-form"
            type="text" 
            value={tarefa} placeholder="cadastrar tarefa" 
            onChange={(e) => setTarefa(e.target.value)}
            />
           </label>
        </form>
        <button 
        className="button"
        type="button" 
        onClick={cadastro}
        >
          Cadastrar
        </button>
      </div> 
    )
}

export default FormCadastro;