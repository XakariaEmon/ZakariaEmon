import React from "react";
import { Sun, Moon, Menu } from "lucide-react";
import { navLinks } from "../data/navLinks";

/**
 * Navbar Component
 * Features sticky positioning, mobile dropdown, and theme toggle.
 */
export const Navbar = ({ theme, onThemeToggle }) => {
  return (
    <nav className="bg-base-100/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="navbar">
          {/* Start (Logo) */}
          <div className="navbar-start">
            <a href="#" className="btn btn-ghost hover:bg-transparent group">
              <div className="flex items-center gap-2">
                {/* Stylized Logo Icon */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <span className="text-white font-bold text-xl">ZE</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                </div>
                {/* Logo Text */}
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Zakaria Emon
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Center (Desktop Links) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base font-medium rounded-md"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* End (Theme Toggle & Mobile Menu) */}
          <div className="navbar-end gap-2">
            {/* Theme Toggle */}
            <label className="swap swap-rotate btn btn-ghost btn-circle">
              <input
                type="checkbox"
                onChange={onThemeToggle}
                checked={theme === "dark"}
              />
              <Sun className="swap-on fill-current w-6 h-6" />
              <Moon className="swap-off fill-current w-6 h-6" />
            </label>

            {/* Mobile Menu Button */}
            <div className="dropdown dropdown-end lg:hidden">
              <label
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <Menu className="w-6 h-6" />
              </label>
              {/* Mobile Dropdown Menu */}
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 z-50"
              >
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-base">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
