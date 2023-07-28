import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  // Articles의 id(1, 2, 3)값을 Article컴포넌트에서 전달받아서 id에 저장
  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  );
};
export default Article;
