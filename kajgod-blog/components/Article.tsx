import Date from "./Date";

interface IArticle {
  title: string;
  date: string;
  content: React.ReactNode;
}

const Article = ({ title, date, content }: IArticle) => {
  return (
    <article className="title-article">
      <Date dateString={date} />
      <h2>{title}</h2>
      <div>{content}</div>
    </article>
  );
};

export default Article;
