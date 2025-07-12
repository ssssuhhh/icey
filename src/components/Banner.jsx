import banner from "./Banner.module.css";
import GoSmallTalk from "./GoSmallTalk";
import GoTeampage from "./GoTeampage";
import ICEY from "./ICEY";
function Banner() {
  return (
    <div className={banner.Banner}>
      <ICEY />
      <GoSmallTalk />
      <GoTeampage />
    </div>
  );
}

export default Banner;
