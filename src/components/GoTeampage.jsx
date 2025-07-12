import goTeam from "./GoTeampage.module.css";
const GoTeampage = () => {
  return (
    <div style={{ backgroundColor: "paleturquoise" }}>
      <div className={goTeam.Banner}>
        <span className={goTeam.Icey}>팀 페이지</span>
      </div>
    </div>
  );
};

export default GoTeampage;
