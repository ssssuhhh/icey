import va from "./ViewAll.module.css";
const ViewAll = () => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
  };
  return (
    <button className={va.ViewAll} onClick={onClickButton}>
      모두 읽음으로 표시
    </button>
  );
};

export default ViewAll;
