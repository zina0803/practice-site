import { Link, useHistory } from "react-router-dom";

export const intro = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  return (
    <div>
      <h1>自己紹介です</h1>
      <Link to={{ pathname: "/intro/high", state: arr }}>高校時代</Link>
      <br />
      <Link to="/intro/univ">大学時代</Link>
    </div>
  );
};
