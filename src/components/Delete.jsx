import del from "./Delete.module.css";
const Delete = () => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
  };
  return (
    <button className={del.Delete_Button} onClick={onClickButton}>
      삭제
    </button>
  );
};

export default Delete;
