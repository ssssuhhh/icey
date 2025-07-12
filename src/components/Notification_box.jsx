import nb from "./Notification_box.module.css";
import Notification from "./Notification";
import Event from "./Event";
import ViewAll from "./ViewAll";
import person from "../assets/person.svg";
import bell from "../assets/notifications.svg";
const Notification_box = () => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
  };
  return (
    <div className={nb.div}>
      <div className={nb.div2}>
        <div className={nb.div3}>
          <Notification image={bell} text="알림" />

          <div className={nb.div6}>
            <div className={nb.frame_2922}>
              <img src={person} alt="person" />
            </div>
          </div>
          <ViewAll />
        </div>
        <div className={nb.div8}>
          <div className={nb.frame_310}>
            <Event group={"칠가이"} />
            <Event group={"동기"} />
            <Event group={"23학번"} />
            <Event group={"23학번"} />

            <Event group={"23학번"} />
            <Event group={"23학번"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification_box;
