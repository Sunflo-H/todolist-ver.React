import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import styles from "./css/index.module.css";

export default function ToDoList() {
  /**
   * 1. 다크모드 라이트모드
   * 2. 필터링 - ALl, Active, Completed
   * 3. 추가 삭제
   * 4. 완료한거 체크
   * 5. 로컬스토리지에 데이터 저장 => 12시가 지나면 초기화
   * 6. 폰트색
   *
   */

  return (
    <div className={styles["todolist-box"]}>
      <Header />
      <Main />
      {/* <DarkMode></DarkMode> */}
      {/* <Filter></Filter> */}
      {/* <Main></Main> */}
      {/* <Input></Input> */}
    </div>
  );
}
