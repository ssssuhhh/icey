import notification from "./Notification.module.css";
import notifications from "../assets/notifications.svg";

const Notification = ({ image, text }) => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
  };
  return (
    <button className={notification.Notification} onClick={onClickButton}>
      <div className={notification.Notification_inner}>
        <img
          className={notification.Notification_icon}
          src={image}
          alt="이미지"
        />
        <span className={notification.Notification_label}>{text}</span>
      </div>
    </button>
  );
};

export default Notification;
