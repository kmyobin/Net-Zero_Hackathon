import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import GalleryPage from "./pages/GalleryPage";
import FriendGardenPage from "./pages/FriendGardenPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/friendGarden" element={<FriendGardenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
