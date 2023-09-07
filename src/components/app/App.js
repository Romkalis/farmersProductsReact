import React from "react";
import "./styles.css";
import Main from "/src/components/pages/main/main";
import advantagesList from "/src/mocks/mocks";

export default function App() {
  return (
    <div className="root">
      <Main advantages={advantagesList} />
    </div>
  );
}
