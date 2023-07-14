import React from "react";
import PageTemplate from "../layout/PageTemplate";
import MainContent from "../components/main/MainContent";

function MainPage() {
  return <PageTemplate content={<MainContent />} />;
}

export default MainPage;
