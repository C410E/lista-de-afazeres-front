import axios from "axios";
import { useState } from "react";

const FormCadastro = () => {
    const [tarefa, setTarefa] = useState(""); 

    const cadastro = async () => {
        try {
            const response = await axios.post("http://localhost:3001/cadastrar-tarefa", {
              tarefa
            });
    
            console.log("Caddastro realizado com sucesso", response.data)
    
            
           } catch (error) {
                console.error('Erro ao cadastrar:', error);
           }
    }
  
    return( 
      <div>
        <h1>Form cadastro</h1>
        <form>
           <label>
            <input type="text" value={tarefa} placeholder="tarefa" onChange={(e) => setTarefa(e.target.value)}/>
           </label>
        </form>
        <button type="button" onClick={cadastro}>Cadastrar</button>
      </div> 
    )
}

export default FormCadastro;