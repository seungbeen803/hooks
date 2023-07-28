//  src/Layout.js
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    // 이전 페이지로 이동
  };

  const goArticles = () => {
    navigate("./articles", { replace: true });
    // articles 경로 이동
    // { replace: true }이 있을 경우에는 브라우저의 뒤로가기 버튼을
    // 클릭하면 홈으로 화면이 나타난다.
  };
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로 가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;