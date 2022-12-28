import React, { useContext } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { ColorProvider } from "./context/ColorContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import { FilterProvider } from "./context/FilterContext";
import { ToDoProvider } from "./context/ToDoContext";
import styles from "./css/index.module.css";

export default function ToDoList() {
  /**
   * 1. 다크모드 라이트모드 + => 호버하면 반을 바꾼다. 클릭하면 나머지 반도 바꾼다.
   * 2. 필터링 - ALl, Active, Completed +
   * 3. 추가 삭제 +
   * 4. 완료한거 체크 +
   * 4-1 완료하면 밑줄긋기
   * 5. 폰트색 +
   * 6. 로컬스토리지에 데이터 저장 => 12시가 지나면 초기화
   * 6-1 모드, 컬러, 리스트정보
   *
   */

  return (
    <div className={styles["todolist-box"]}>
      <DarkModeProvider>
        <ColorProvider>
          <ToDoProvider>
            <FilterProvider>
              <Header />
              <Main />
            </FilterProvider>
            <Footer />
          </ToDoProvider>
        </ColorProvider>
      </DarkModeProvider>
    </div>
  );
}
