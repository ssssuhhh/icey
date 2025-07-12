import eve from "./Event.module.css";
import event from "../assets/event.svg";
const Event = ({ group }) => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
  };
  return (
    <div className={eve.div}>
      <div className={eve.body}>
        <div className={eve.div2}>
          <div className={eve.div3}>
            <img src={event} />
          </div>
          <div className={eve.div4}>약속 잡기 생성 ! </div>
          <div className={eve.delete}></div>
        </div>
        <div className={eve.group}>
          {group}로부터 새 약속이 생성되었습니다.
          <br />
          약속을 확인해보세요!
        </div>
      </div>
    </div>
  );
};

export default Event;
