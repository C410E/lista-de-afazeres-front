import './App.css';
import FormCadastro from './components/cadastrarTarefa';
import ListarTarefas from './components/listarTarefas';

function App() {
  return (
    <div className="App">
      <FormCadastro />
      <ListarTarefas />
    </div>
  );
}

export default App;
