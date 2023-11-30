import "./App.css";
import AnimeWikiHomePage from "./pages/AnimeWikiHomePage";
import AnimeWikiViewAllPage from "./pages/AnimeWikiViewAllPage";
import AnimeWikiUpdate from "./pages/AnimeWikiUpdatePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimeWikiImportPage from "./pages/AnimeWikiImportPage";
import AnimeWikiAboutPage from "./pages/AnimeWikiAboutPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/characters/:prefix/update"
            element={<AnimeWikiUpdate />}
          />
          <Route path="/import" element={<AnimeWikiImportPage />} />
          <Route path="/characters" element={<AnimeWikiViewAllPage />} />
          <Route path="/about" element={<AnimeWikiAboutPage />} />
          <Route path="" element={<AnimeWikiHomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
