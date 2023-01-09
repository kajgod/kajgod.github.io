interface IArticle {
  title: string;
  date: string;
  content: string;
}

const Article = ({ title, date, content }: IArticle) => {
  return (
    <article>
      <p className="small">{date}</p>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};

export default Article;
