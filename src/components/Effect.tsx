import { useEffect, useState } from "react";

const Effect = () => {
  const estatico: boolean = true;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Página Carregada");
    document.title = `Contador: ${count}`;
  }, [estatico]);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Adicionar</button>
    </div>
  );
};

export default Effect;
