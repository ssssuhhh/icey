import Header from "./Header";
import MakeSmallTalk from "./MakeSmallTalk";
import Delete from "./Delete";
import st from "./SmallTalk.module.css";
import Snow from "../assets/Snow.svg";
import ListLine from "../assets/ListLine.svg";
import Minilist from "./SmallTalk_minilist";
const SmallTalk = () => {
  return (
    <div className={st.small_talk_menu}>
      <Header />
      <div className={st.body}>
        <div className={st._1}>
          <div className={st.div5}>
            <div className={st.frame_376}>
              <div className={st.div6}>스몰톡 리스트</div>
            </div>
            <div className={st.div7}>
              <div className={st.frame_257}>
                <img className={st.vector} src={Snow} />
                <div className={st._2025_05_05}>2025. 05.05</div>
                <div className={st.div8}>스몰톡 제목</div>
                <Delete />
              </div>
              <img className={st.div10} src={ListLine} />
            </div>
          </div>
        </div>
        <div className={st._2}>
          <div className={st.div11}>
            <div className={st.div12}>
              {/* 
            <div className={st.d}>
              <div className={st.ds}>대상 :</div>
              <div className={st.dg}>동기</div>
            </div>
            <div className={st.mj}>
              <div className={st.ds}>목적 :</div>
               <div className={st.o}>오랜만에 만나 안부 확인</div>
            </div>
            
            */}
            </div>
            <MakeSmallTalk />
          </div>
          {/*<div className={st.div15}>
            <div className={st.div16}>스몰톡 리스트를 선택해주세요</div>
            <div className={st.div17}>
              리스트 항목이 없다면
              <br />
              스몰톡을 생성하세요!
            </div>
          </div>*/}
          <Minilist />
        </div>
      </div>
    </div>
  );
};

export default SmallTalk;
