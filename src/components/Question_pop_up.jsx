import st from "./Question_pop_up.module.css";
import Button from "./Button";
const Question_pop_up = () => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
  };
  return (
    <div className={st.div}>
      <div className={st.frame_299}>
        <div className={st.group_321}>
          <div className={st.rectangle_162}></div>
          <div className={st.rectangle_163}></div>
        </div>
      </div>
      <div className={st.frame_324}>
        <div className={st.div2}>질문을 변경하시겠습니까?</div>
        <div className={st._3}>
          총 3번 변경할 수 있으며, 변경 후 되돌릴 수 없습니다.
        </div>
        <div className={st._2_3}>현재까지 변경 횟수: 2 / 3</div>
      </div>
      <div className={st.frame_325}>
        <Button text={"바꾸기"} type={"red"} />
        <Button text={"취소"} type={"midStroke"} />
      </div>
    </div>
  );
};

export default Question_pop_up;
