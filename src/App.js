
import Pessoa from "./Pessoa";
import Produto from "./Produto";
import SayMyName from "./SayMyName";
import Marca from "./Marca";
import Carro from "./Carro";
import Tamanho from "./Tamanho";
import List from "./List";
import Evento from "./Evento";
import Form from "./Form";
import Condicional from "./Condicional";

function App() {

  const name = 'Davi';
  const idade = 26;

  function sum(a,b){
    return a+b
  }
  return (
    <div>
      <Condicional />
      {name + ' - '  +idade} <br />
      Soma: { sum(10,5) }
      <Pessoa />
      <Produto />
      <Marca modelo="Audi" />
      <SayMyName nome="Davi" idade="26"/>
      <Carro ano="2021"/>
      <Tamanho altura="1.50" />
      <Evento numero="5"/>
      <Form />
    </div>
  );
}

export default App;
