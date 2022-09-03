import { createContext } from "react";

// 4 - importação de componente
import FirstComponent from "./components/FirstComponent";

// 5 - Desestruturação de props
import SecondComponent from "./components/SecondComponent";
import Desctruturing, { Category } from "./components/Desctruturing";
import State from "./components/State";

// context
import Context from "./components/Context";

// useEffect
import Effect from "./components/Effect";

// styled-components
import Styled from "./components/Styled";

// type
type textOrNull = string | null;
type lang = "javascript" | "typescript" | "python";

// context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = "Marcus";
  const age: number = 25;
  const isWorking: boolean = true;

  // 2 -  funções
  // const saudacao = (nome: string, idade: number): string => {
  //   return `Olá, ${nome}! Você tem ${idade} anos`
  // }

  function saudacao(nome: string, idade: number): string {
    return `Olá, ${nome}! Você tem ${idade} anos`;
  }

  // type

  const myText: textOrNull = "um texto qualquer";
  let mySecondText: textOrNull = null;

  mySecondText = null;

  const testLang: lang = "python";

  // context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com Typescript</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>

        {isWorking && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}

        <h3>{saudacao(name, age)}</h3>

        <FirstComponent />

        <SecondComponent name="Segundo" />

        <Desctruturing
          title="Primeiro Post"
          commentQty={10}
          tags={["ts", "js"]}
          category={Category.JS}
        />

        <Desctruturing
          title="Segundo Post"
          content="Mais outro conteúdo"
          commentQty={5}
          tags={["python"]}
          category={Category.P}
        />

        <State />

        {myText && <p>A variável "myText" possui um texto</p>}
        {mySecondText && <p>A variável "mySecondText" possui um texto</p>}

        <Context />

        <Effect />

        <Styled />
      </div>
    </AppContext.Provider>
  );
}

export default App;
