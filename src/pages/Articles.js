import { NavLink, Outlet } from "react-router-dom";

// isActive : 목록중에서 해당되는 리스트를 선택하면 isActive는 true값을 발생시키고
// 선택되지 않은 목록의 isActive는 false값이 된다.
// 실행 여부를 나타내는 것이다.
const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <div>
      <Outlet />
      {/* 중첩된 라우터가 보여지게된다. */}
      <ul>
        <li>
          <NavLink to="/articles/1" style={({ isActive}) => (isActive ? activeStyle: undefined)}>게시글1</NavLink>
        </li>
        <li>
          <NavLink to="/articles/2" style={({ isActive}) => (isActive ? activeStyle: undefined)}>게시글2</NavLink>
        </li>
        <li>
          <NavLink to="/articles/3" style={({ isActive}) => (isActive ? activeStyle: undefined)}>게시글3</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Articles;
