// src/pages/Profiles.js 로 저장

import { useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "김민주",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
};
const Profile = () => {
  const params = useParams();
  //   Home 컴포넌트에서 "velopert의 프로필"을 선택했을떄
  // params.username은 "velopert" 값이 된다.
  console.log("params.username=", params.username);
  const profile = data[params.username];
  //   profile은 data안에 velopert객체를 저장
  console.log("profile=", profile);

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        // const컴포넌트에서 2가지 객체(velopert, gildong)
        // 중에서 선택되었을때 true값을 리턴한다.
        // 2가지 객체가 아닌값이 넘어올 경우에는 false값을 리턴
        <div>
          <h2>{profile.name}</h2>
          <h2>{profile.description}</h2>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};
export default Profile;
