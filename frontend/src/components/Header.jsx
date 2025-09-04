

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Search,
  Bell,
  Video,
  User,
  LogOut,
  Moon,
  Globe,
  HelpCircle,
  MessageCircle,
  Repeat,
  Menu,
  X,
} from "lucide-react";

export default function Header({ query, setQuery, onSidebarToggle }) {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-3 sm:px-4 py-2 bg-white shadow">
      {/* Left: Hamburger for mobile */}
      <div className="flex items-center gap-2">
        <button
          className="sm:hidden p-2 rounded hover:bg-gray-100"
          onClick={onSidebarToggle}
          aria-label="Toggle Sidebar"
        >
          <Menu size={24} />
        </button>
        {/* Optional logo for mobile */}
        <Link to="/" className="sm:hidden ml-2 text-lg font-bold text-red-600">
          YouTube
        </Link>
      </div>

      {/* Middle: Search bar */}
      <div className="flex-1 flex justify-center px-2 sm:px-4 relative">
        {/* Desktop search */}
        <div className="hidden sm:block w-full max-w-xl relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full border rounded-full pl-10 pr-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-black"
          />
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
        </div>

        {/* Mobile search toggle */}
        <button
          className="sm:hidden p-2 rounded-full hover:bg-gray-100"
          onClick={() => setMobileSearch(!mobileSearch)}
        >
          <Search size={20} />
        </button>

        {/* Mobile expanded search */}
        {mobileSearch && (
          <div className="absolute top-full left-0 w-full bg-white shadow px-3 py-2 sm:hidden z-40">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full border rounded-full pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          </div>
        )}
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-2 sm:gap-4 relative z-50">
        {user && (
          <>
            <button className="hidden sm:block p-2 rounded-full hover:bg-gray-100">
              <Video size={22} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell size={22} />
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">9+</span>
            </button>
          </>
        )}

        {/* Avatar + Dropdown */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-9 h-9 rounded-full bg-blue-900 text-white font-bold flex items-center justify-center"
            >
              {user.username ? user.username.charAt(0).toUpperCase() : "U"}
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 sm:w-64 max-w-[90vw] bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden z-50">
                {/* Profile */}
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="font-medium">{user.fullName || user.username}</p>
                  <p className="text-sm font-semibold text-black">{user.email}</p>
                </div>

                <ul className="py-1">
                  {user.channelId ? (
                    <li>
                      <Link
                        to={`/channel/${user.channelId}`}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 font-bold text-blue-600"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <User size={18} /> View Your Channel
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link
                        to="/create-channel"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 font-bold text-green-600"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <User size={18} /> Create Channel
                      </Link>
                    </li>
                  )}

                  <li>
                    <button
                      className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Repeat size={18} /> Switch Account
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Moon size={18} /> Appearance: Light
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Globe size={18} /> Language: English
                    </button>
                  </li>
                </ul>

                <div className="border-t border-gray-200"></div>

                <ul className="py-1">
                  <li>
                    <button
                      className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <HelpCircle size={18} /> Help
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <MessageCircle size={18} /> Send Feedback
                    </button>
                  </li>
                </ul>

                <div className="border-t border-gray-200"></div>

                <ul className="py-1">
                  <li>
                    <button
                      className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                      onClick={handleLogout}
                    >
                      <LogOut size={18} /> Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/auth"
            className="bg-blue-900 text-white px-4 py-1 rounded hover:bg-blue-950"
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
}

