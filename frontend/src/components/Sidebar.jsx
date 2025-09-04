

import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  PlaySquare,
  Youtube,
  Clock,
  Flame,
  ShoppingBag,
  Music,
  Film,
  Gamepad2,
  Trophy,
  Radio,
  Newspaper,
  Menu,
  X,
} from "lucide-react";

function Sidebar({ open, onToggle }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`transition-all duration-300 ${
          open ? "w-60" : "w-20"
        } hidden sm:block overflow-y-auto border-r border-gray-200 bg-white h-screen sticky top-0 z-40`}
      >
        {/*  Hamburger + Logo */}
        <div className="flex items-center p-3 border-b border-gray-200">
          <button
            onClick={onToggle}
            aria-label="Toggle Sidebar"
            className="p-2 rounded hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>
          {open && (
            <Link to="/" className="ml-3 flex items-center gap-1">
              <svg
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-6 text-red-600"
                fill="currentColor"
              >
                <path d="M549.7 124.1c-6.3-23.7-24.9-42.4-48.6-48.7C456.2 64 288 64 288 64s-168.2 0-213.1 11.4c-23.7 6.3-42.3 25-48.6 48.7C15 168.1 15 256 15 256s0 87.9 11.3 131.9c6.3 23.7 24.9 42.4 48.6 48.7C119.8 448 288 448 288 448s168.2 0 213.1-11.4c23.7-6.3 42.3-25 48.6-48.7C561 343.9 561 256 561 256s0-87.9-11.3-131.9zM232 338V174l142 82-142 82z" />
              </svg>
              <span className="text-lg font-bold">YouTube</span>
            </Link>
          )}
        </div>

        {/* Links */}
        <SidebarLinks open={open} />
      </aside>

      {/* Mobile Drawer Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 flex sm:hidden">
          {/* Background overlay */}
          <div
            className="flex-1 bg-black/40"
            onClick={onToggle}
          ></div>

          {/* Drawer */}
          <div className="w-64 bg-white h-full shadow-xl">
            <div className="flex items-center justify-between p-3 border-b border-gray-200">
              <Link to="/" className="flex items-center gap-1">
                <svg
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-6 text-red-600"
                  fill="currentColor"
                >
                  <path d="M549.7 124.1c-6.3-23.7-24.9-42.4-48.6-48.7C456.2 64 288 64 288 64s-168.2 0-213.1 11.4c-23.7 6.3-42.3 25-48.6 48.7C15 168.1 15 256 15 256s0 87.9 11.3 131.9c6.3 23.7 24.9 42.4 48.6 48.7C119.8 448 288 448 288 448s168.2 0 213.1-11.4c23.7-6.3 42.3-25 48.6-48.7C561 343.9 561 256 561 256s0-87.9-11.3-131.9zM232 338V174l142 82-142 82z" />
                </svg>
                <span className="text-lg font-bold">YouTube</span>
              </Link>
              <button onClick={onToggle} className="p-2 rounded hover:bg-gray-100">
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <SidebarLinks open={true} />
          </div>
        </div>
      )}
    </>
  );
}

function SidebarLinks({ open }) {
  return (
    <>
      {/* Section 1 */}
      <nav className="p-2">
        <SidebarItem to="/" icon={<Home size={20} />} label="Home" open={open} />
        <SidebarItem to="/shorts" icon={<PlaySquare size={20} />} label="Shorts" open={open} />
        <SidebarItem to="/subscriptions" icon={<Youtube size={20} />} label="Subscriptions" open={open} />
      </nav>

      <div className="border-t border-gray-200 my-2"></div>

      {/* Section 2 */}
      <nav className="p-2">
        <SidebarItem to="/history" icon={<Clock size={20} />} label="History" open={open} />
      </nav>

      <div className="border-t border-gray-200 my-2"></div>

      {/* Explore Section */}
      {open && <p className="px-4 py-2 text-sm font-semibold text-gray-600">Explore</p>}
      <nav className="p-2">
        <SidebarItem to="/trending" icon={<Flame size={20} />} label="Trending" open={open} />
        <SidebarItem to="/shopping" icon={<ShoppingBag size={20} />} label="Shopping" open={open} />
        <SidebarItem to="/music" icon={<Music size={20} />} label="Music" open={open} />
        <SidebarItem to="/movies" icon={<Film size={20} />} label="Movies" open={open} />
        <SidebarItem to="/gaming" icon={<Gamepad2 size={20} />} label="Gaming" open={open} />
        <SidebarItem to="/sports" icon={<Trophy size={20} />} label="Sports" open={open} />
        <SidebarItem to="/news" icon={<Newspaper size={20} />} label="News" open={open} />
        <SidebarItem to="/live" icon={<Radio size={20} />} label="Live" open={open} />
      </nav>

      <div className="border-t border-gray-200 my-2"></div>
    </>
  );
}

function SidebarItem({ to, icon, label, open }) {
  return (
    <Link
      to={to}
      title={!open ? label : ""}
      className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 transition-colors"
    >
      {icon}
      {open && <span>{label}</span>}
    </Link>
  );
}

export default Sidebar;
