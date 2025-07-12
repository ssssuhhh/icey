import icey from "./ICEY.module.css";
const ICEY = () => {
  return (
    <div style={{ backgroundColor: "paleturquoise" }}>
      <div className={icey.Banner}>
        <div className={icey.text}>
          <span className={icey.Icey}> ICEY</span>
          <span className={icey.s_i}>스몰 토크 & 아이스브레이킹</span>
          <span className={icey.cute}>
            어색한 대화를 준비하는 가장 귀여운 방법, ICEY
          </span>
        </div>
      </div>
    </div>
  );
};

export default ICEY;
