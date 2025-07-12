// src/App.jsx
import React, { useState } from "react";

// 각 컴포넌트를 import 합니다.
// 'components' 폴더 안에 있다고 가정합니다.
import Notification_box from "./components/Notification_box";
import Header from "./components/Header";
import SmallTalk from "./components/SmallTalk";
import MakeSmallTalk from "./components/MakeSmallTalk";
import Notification from "./components/Notification";
import Event from "./components/Event";

import ViewAll from "./components/ViewAll";
import Delete from "./components/Delete";
import ICEY from "./components/ICEY";
import GoSmallTalk from "./components/GoSmallTalk";
import GoTeampage from "./components/GoTeampage";
import Banner from "./components/Banner";
import Login_Info from "./components/Login_Info";
import SmallTalk_minilist from "./components/SmallTalk_minilist";
import Login_pop_up from "./components/login_pop_up";
import Question_pop_up from "./components/Question_pop_up";
import Make_pop_up from "./components/Make_pop_up";
function App() {
  // 현재 페이지 상태를 관리합니다. 기본값은 'initial'로 설정하여 초기 버튼 화면을 먼저 보여줍니다.
  const [currentPage, setCurrentPage] = useState("initial");

  // navigateTo 함수는 페이지를 변경하는 역할을 합니다.
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // 현재 페이지 상태에 따라 렌더링할 컴포넌트를 결정합니다.
  const renderPage = () => {
    switch (currentPage) {
      case "initial":
        return (
          <div
            style={{
              backgroundColor: "paleturquoise",
              minHeight: "100vh",
              width: "100%",
            }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4 rounded-lg shadow-xl">
              <h1 className="text-4xl font-bold mb-8 text-gray-800">
                애플리케이션 시작
              </h1>
              <p className="text-lg text-gray-600 mb-8 text-center">
                원하는 페이지로 이동해주세요.
              </p>
              <div className="space-y-4 flex flex-col items-center">
                <button
                  onClick={() => navigateTo("smalltalk")}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  스몰톡 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("header")}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  헤더 컴포넌트로 이동
                </button>
                <button
                  onClick={() => navigateTo("makeSmallTalk")}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  SmallTalk 생성 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("notification")}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  알림 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("register")}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  등록 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("viewAll")}
                  className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  모두 보기 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("delete")}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  삭제 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("icey")}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  ICEY 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("gosamlltalk")}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  스몰톡 배너 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("goteampage")}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  팀페이지 배너 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("event")}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  약속잡기 알림 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("nb")}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  알림 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("li")}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  로그인 정보 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("mini")}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  미니리스트 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("loginpopup")}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  로그인 팝업 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("qpopup")}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  질문 팝업 페이지로 이동
                </button>
                <button
                  onClick={() => navigateTo("mpopup")}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 w-64"
                >
                  생성 팝업 페이지로 이동
                </button>
              </div>
            </div>
          </div>
        );
      case "smalltalk":
        return <SmallTalk navigateTo={navigateTo} />;
      case "header":
        return <Header navigateTo={navigateTo} />;
      case "makeSmallTalk":
        return <MakeSmallTalk navigateTo={navigateTo} />;
      case "notification":
        return <Notification navigateTo={navigateTo} />;
      case "register":
        return <Register navigateTo={navigateTo} />;
      case "viewAll":
        return <ViewAll navigateTo={navigateTo} />;
      case "delete":
        return <Delete navigateTo={navigateTo} />;
      case "icey":
        return <ICEY navigateTo={navigateTo} />;
      case "gosamlltalk":
        return <GoSmallTalk navigateTo={navigateTo} />;
      case "goteampage":
        return <GoTeampage navigateTo={navigateTo} />;
      case "event":
        return <Event navigateTo={navigateTo} />;
      case "nb":
        return <Notification_box navigateTo={navigateTo} />;
      case "li":
        return <Login_Info navigateTo={navigateTo} />;
      case "mini":
        return <SmallTalk_minilist navigateTo={navigateTo} />;
      case "loginpopup":
        return <Login_pop_up navigateTo={navigateTo} />;
      case "qpopup":
        return <Question_pop_up navigateTo={navigateTo} />;
      case "mpopup":
        return <Make_pop_up navigateTo={navigateTo} />;

      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-4 rounded-lg shadow-xl">
            <h2 className="text-4xl font-bold mb-6 text-red-800">
              오류: 페이지를 찾을 수 없습니다!
            </h2>
            <p className="text-lg text-red-600 mb-8 text-center">
              잘못된 페이지 경로입니다. 초기 화면으로 돌아갑니다.
            </p>
            <button
              onClick={() => navigateTo("initial")}
              className="px-6 py-3 bg-red-700 text-white rounded-lg shadow-lg hover:bg-red-800 transition duration-300 ease-in-out transform hover:scale-105"
            >
              초기 화면으로 돌아가기
            </button>
          </div>
        );
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
