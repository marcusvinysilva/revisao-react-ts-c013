interface SecondComponentProps {
  name: string
}

function SecondComponent(props: SecondComponentProps) {
  return (
    <div>
      <h1>Meu segundo componente</h1>
      <p>o nome dele é {props.name}</p>
    </div>
  );
}

export default SecondComponent;