import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../pages/App";
import { PartyPage } from "../pages/projects/PartyPage";
import { ProjectLayout } from "../pages/ProjectLayout";
import { OurHomePage } from "../pages/projects/OurhomePage";
import { ScrollManager } from "./ScrollMangager";
import { NotFound } from "./NotFound";

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

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
{/* 404
          <Route path="*" element={<NotFound />} /> */}
