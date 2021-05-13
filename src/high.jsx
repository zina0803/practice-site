import { useLocation, useHistory } from "react-router-dom";

export const high = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>高校時代</h1>
      <p>郡山東高校に入学</p>
      <p>演劇部に所属</p>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
