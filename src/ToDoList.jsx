import React, { useContext } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { DarkModeProvider } from "./context/DarkModeContext";
import styles from "./css/index.module.css";

export default function ToDoList() {
  /**
   * 1. 다크모드 라이트모드 => 호버하면 반을 바꾼다. 클릭하면 나머지 반도 바꾼다.
   * 2. 필터링 - ALl, Active, Completed
   * 3. 추가 삭제
   * 4. 완료한거 체크
   * 5. 로컬스토리지에 데이터 저장 => 12시가 지나면 초기화
   * 6. 폰트색
   *
   */

  return (
    <div className={styles["todolist-box"]}>
      <DarkModeProvider>
        <Header />
        <Main />
        <Footer />
      </DarkModeProvider>
    </div>
  );
}
