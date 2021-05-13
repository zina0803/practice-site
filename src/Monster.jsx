import { Link } from "react-router-dom";

export const Monster = () => {
  return (
    <div>
      <h1>MonsterPage</h1>
      <Link to="/Monster/pipeline">モンスターパイプラインパンチ</Link>
      <br />
      <Link to="/Monster/khaos">モンスターカオス</Link>
    </div>
  );
};