
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Pages
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";
import Channel from "./pages/Channel";
import Auth from "./pages/Auth";
import CreateChannel from "./pages/CreateChannel";
import EditChannel from "./pages/EditChannel";   // 👈 new
import UploadVideo from "./pages/UploadVideo";   // 👈 new

// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // sidebar open by default
  const [query, setQuery] = useState(""); // search state

  return (
    <AuthProvider>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          open={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Main content */}
        <div className="flex flex-col flex-1">
          <Header query={query} setQuery={setQuery} /> {/* pass search props */}
          <main className="flex-1 overflow-y-auto bg-gray-50">
            <Routes>
              <Route path="/" element={<Home query={query} />} /> {/* pass search prop */}
              <Route path="/watch/:id" element={<VideoPlayer />} />
              <Route path="/channel/:id" element={<Channel />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/create-channel" element={<CreateChannel />} />

              {/* 👇 Add these two */}
              <Route path="/channel/:id/edit" element={<EditChannel />} />
              <Route path="/upload" element={<UploadVideo />} />
            </Routes>
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;


