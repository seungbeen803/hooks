import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profiles";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Layout컴포넌트는 Home, About, Profile에만 적용
        상단에 Layout컴포넌트가 렌더링 된다. */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      {/* Articles컴포넌트에서 게시글을 선택하면 선택한
      id값이 Article 컴포넌트로 전달 */}
    </Routes>
  );
};

export default App;
