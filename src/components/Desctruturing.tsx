export enum Category {
  JS = "Javascript",
  TS = "Typescript",
  P = "Python",
}

interface DesctruturingProps {
  title: string;
  content?: string;
  commentQty: number;
  tags: string[];
  category: Category;
}

function Desctruturing({
  title,
  content,
  commentQty,
  tags,
  category,
}: DesctruturingProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
}

export default Desctruturing;
