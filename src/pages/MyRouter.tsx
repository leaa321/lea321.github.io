import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { PartyPage } from "./projects/PartyPage";
import { ProjectLayout } from "./ProjectLayout";

export function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<App />} />

        <Route path="/projects" element={<ProjectLayout />}>
          <Route path="partyApp" element={<PartyPage />} />

          {/* 404
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
