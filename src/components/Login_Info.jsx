import nb from "./Login_Info.module.css";
import Notification from "./Notification";
import Event from "./Event";
import ViewAll from "./ViewAll";
import person from "../assets/person.svg";
import bell from "../assets/notifications.svg";
import symbol from "../assets/google.svg";
import pi from "../assets/loginperson.svg";
import lg from "../assets/logout.svg";
const Login_Info = () => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
  };
  return (
    <div className={nb.div}>
      <div className={nb.div2}>
        <div className={nb.div3}>
          <div className={nb.div6}>
            <div className={nb.frame_2922}>
              <img src={bell} alt="person" />
            </div>
          </div>
          <button className={nb.Notification} onClick={onClickButton}>
            <div className={nb.Notification_inner}>
              <div className={nb.Notification_icon}>
                <img src={person} alt="person" />
              </div>

              <span className={nb.Notification_label}>로그인 정보</span>
            </div>
          </button>
        </div>
        <div className={nb.div8}>
          <div className={nb.frame_310}>
            <div class={nb.frame_325}>
              <div class={nb.frame_324}>
                <div className={nb.symbol_frame}>
                  <img class={nb.frame_322} src={pi} />
                </div>
                <div class={nb.name}>김개구리</div>
                <div class={nb.frog_icey_com}>frog@icey.com</div>
                <div class={nb.frame_5}>
                  <div class={nb.frame_4}>
                    <div class={nb.frame_14}>
                      <img class={nb.symbol_svg} src={symbol} />

                      <div class={nb.connect}>연동됨</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={nb.frame_323}>
                <img class={nb.vector} src={lg} />
                <div class={nb.logout}>로그아웃</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_Info;
