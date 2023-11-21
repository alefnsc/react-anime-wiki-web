import "./App.css";
import AnimeWikiHomePage from "./pages/AnimeWikiHomePage";
import AnimeWikiViewAll from "./pages/AnimeWikiViewAllPage";
import AnimeWikiUpdate from "./pages/AnimeWikiUpdatePage";
import AnimeWikiViewSingle from "./pages/AnimeWikiViewSinglePage";
import ErrorPage from "./pages/ErrorPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/characters/:prefix" element={<AnimeWikiViewSingle />} />
          <Route
            path="/characters/:prefix/update"
            element={<AnimeWikiUpdate />}
          />
          <Route path="/characters" element={<AnimeWikiViewAll />} />
          <Route path="" element={<AnimeWikiHomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
