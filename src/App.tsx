import "./App.css";
import AnimeWikiHomePage from "./pages/AnimeWikiHomePage";
import AnimeWikiViewAll from "./pages/AnimeWikiViewAllPage";
import AnimeWikiUpdate from "./pages/AnimeWikiUpdatePage";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimeWikiImportPage from "./pages/AnimeWikiImportPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/error" element={<ErrorPage />} />
          <Route
            path="/characters/:prefix/update"
            element={<AnimeWikiUpdate />}
          />
          <Route path="/import" element={<AnimeWikiImportPage />} />
          <Route path="/characters" element={<AnimeWikiViewAll />} />
          <Route path="" element={<AnimeWikiHomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
