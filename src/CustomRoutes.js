import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import VisitForPage from "./pages/VisitForPage";
import NamePage from "./pages/NamePage";
import BirthDayPage from "./pages/BirthDayPage";
import IssuePage from "./pages/IssuePage";
import SummaryPage from "./pages/SummaryPage";

export default function CustomRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<VisitForPage />} />
          <Route path="name" element={<NamePage />} />
          <Route path="birthday" element={<BirthDayPage />} />
          <Route path="issue" element={<IssuePage />} />
          <Route path="summary" element={<SummaryPage />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}
