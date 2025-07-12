import st from "./Make_pop_up.module.css";
import Button from "./Button";
const Make_pop_up = () => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
  };
  return (
    <div class={st.div}>
      <div class={st.div2}>작성한 내용으로 스몰톡을 생성할까요?</div>
      <div class={st.frame_325}>
        <Button text={"확인"} type={"midBlue"} />
        <Button text={"취소"} type={"midStroke"} />
      </div>
    </div>
  );
};

export default Make_pop_up;
