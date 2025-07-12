import st from "./Login_pop_up.module.css";
import Button from "./Button";
const Login_pop_up = () => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
  };
  return (
    <div class={st.div}>
      <div class={st.frame_299}>
        <div class={st.group_321}>
          <div class={st.rectangle_162}></div>
          <div class={st.rectangle_163}></div>
        </div>
      </div>
      <div class={st.frame_324}>
        <div class={st.div2}>
          해당 기능을 사용하기 위해서는
          <br />
          로그인이 필요합니다!
        </div>
      </div>
      <div class={st.frame_325}>
        <Button text={"로그인"} type={"midStroke"} />
      </div>
    </div>
  );
};

export default Login_pop_up;
