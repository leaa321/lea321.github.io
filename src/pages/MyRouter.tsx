import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { PartyPage } from "./projects/PartyPage";
import { ProjectLayout } from "./ProjectLayout";
import { OurHomePage } from "./projects/OurhomePage";
import { ScrollManager } from "../components/ScrollMangager";

export function MyRouter() {
  return (
    <BrowserRouter>
    <ScrollManager />
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<App />} />

        <Route path="/projects" element={<ProjectLayout />}>
          <Route path="partyApp" element={<PartyPage />} />
          <Route path="ourHome" element={<OurHomePage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
          {/* 404
          <Route path="*" element={<NotFound />} /> */}
