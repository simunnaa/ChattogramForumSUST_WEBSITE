import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  HiOutlineMenuAlt3,
  HiX,
  HiOutlineHome,
  HiOutlineInformationCircle,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineCalendar,
  HiOutlinePhotograph,
  HiOutlineMail,
} from "react-icons/hi";

import { MdOutlineSchool } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: HiOutlineHome,
    },
    {
      name: "About",
      path: "/about",
      icon: HiOutlineInformationCircle,
    },
    {
      name: "Advisors",
      path: "/advisors",
      icon: HiOutlineAcademicCap,
    },
    {
      name: "Executive Committee",
      path: "/executive-committee",
      icon: HiOutlineUserGroup,
    },
    {
      name: "Members",
      path: "/members",
      icon: HiOutlineUsers,
    },
    {
      name: "Events & Notices",
      path: "/events-notices",
      icon: HiOutlineCalendar,
    },
    {
      name: "Alumni",
      path: "/alumni",
      icon: MdOutlineSchool,
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: HiOutlinePhotograph,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: HiOutlineMail,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fffdf3]">
      {/* ========================================
          MAIN NAVBAR
      ========================================= */}
      <nav
        className="
          mx-auto
          flex
          h-[90px]
          max-w-[1500px]
          items-center
          justify-between
          px-5
          md:px-8
          lg:px-10
          xl:px-14
        "
      >
        {/* ========================================
            LOGO + WEBSITE NAME
        ========================================= */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex shrink-0 items-center gap-3 md:gap-4"
        >
          {/* Logo */}
          <img
            src="/images/forum-logo.jpg"
            alt="Chattogram Forum, SUST Logo"
            className="
              h-[65px]
              w-[65px]
              shrink-0
              rounded-full
              object-cover
              transition-all
              duration-300
              group-hover:scale-105
              md:h-[70px]
              md:w-[70px]
            "
          />

          {/* Website Name */}
          <div className="leading-none">
            <h1
              className="
                whitespace-nowrap
                text-[17px]
                font-bold
                tracking-[0.055em]
                text-black
                transition-colors
                duration-200
                sm:text-[18px]
                md:text-[19px]
                xl:text-[20px]
              "
            >
              Chattogram Forum
            </h1>

            <p
              className="
                mt-[7px]
                text-[15px]
                font-bold
                tracking-[0.5em]
                text-[#5C9A81]
                sm:text-[18px]
                md:text-[19px]
              "
            >
              SUST
            </p>
          </div>
        </NavLink>

        {/* ========================================
            DESKTOP NAVIGATION
        ========================================= */}
        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                  group
                  relative
                  whitespace-nowrap
                  rounded-lg
                  px-3
                  py-2.5
                  text-[14px]
                  font-medium
                  transition-all
                  duration-200
                  xl:text-[15px]

                  ${
                    isActive
                      ? "text-[#5C9A81]"
                      : `
                        text-black
                        hover:-translate-y-[2px]
                        hover:bg-[#DCEDE4]
                        hover:text-[#5C9A81]
                      `
                  }
                `
              }
            >
              {({ isActive }) => (
                <>
                  {/* Nav Text */}
                  <span className="relative z-10">
                    {item.name}
                  </span>

                  {/* Active Line */}
                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-[3px]
                        left-1/2
                        h-[2px]
                        w-[24px]
                        -translate-x-1/2
                        rounded-full
                        bg-[#7FB59C]
                      "
                    />
                  )}

                  {/* Hover Left Indicator */}
                  {!isActive && (
                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-full
                        w-[3px]
                        scale-y-0
                        rounded-full
                        bg-[#7FB59C]
                        transition-transform
                        duration-200
                        group-hover:scale-y-100
                      "
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* ========================================
            MOBILE / TABLET MENU BUTTON
        ========================================= */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`
            flex
            h-[46px]
            w-[46px]
            items-center
            justify-center
            rounded-xl
            text-[25px]
            transition-all
            duration-300
            active:scale-90
            lg:hidden

            ${
              menuOpen
                ? `
                  rotate-90
                  bg-[#5C9A81]
                  text-white
                  shadow-md
                `
                : `
                  bg-[#7FB59C]
                  text-white
                  shadow-sm
                  hover:bg-[#5C9A81]
                `
            }
          `}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>

      {/* ========================================
          MOBILE / TABLET NAVIGATION
      ========================================= */}
      <div
        className={`
          absolute
          left-0
          right-0
          top-[90px]
          px-4
          transition-all
          duration-300
          ease-out
          md:px-7
          lg:hidden

          ${
            menuOpen
              ? `
                visible
                translate-y-0
                opacity-100
              `
              : `
                invisible
                -translate-y-4
                opacity-0
              `
          }
        `}
      >
        {/* Mobile / Tablet Menu Card */}
        <div
          className="
            relative
            mx-auto
            max-w-[760px]
            overflow-hidden
            rounded-2xl
            border
            border-[#7FB59C]/25
            bg-[#FFFFF3]
            p-3
            shadow-[0_18px_50px_rgba(0,0,0,0.12)]
          "
        >
          {/* Decorative Top Right Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-[#7FB59C]/10
              blur-3xl
            "
          />

          {/* Decorative Bottom Left Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-16
              -left-16
              h-40
              w-40
              rounded-full
              bg-[#7FB59C]/10
              blur-3xl
            "
          />

          {/* ========================================
              MOBILE / TABLET NAV ITEMS
          ========================================= */}
          <div className="relative grid grid-cols-1 gap-2 sm:grid-cols-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `
                      group
                      relative
                      flex
                      min-h-[52px]
                      items-center
                      gap-3
                      overflow-hidden
                      rounded-xl
                      px-3
                      text-[15px]
                      font-medium
                      transition-all
                      duration-200
                      active:scale-[0.97]

                      ${
                        isActive
                          ? `
                            bg-[#7FB59C]
                            text-white
                            shadow-md
                          `
                          : `
                            text-black
                            hover:translate-x-1
                            hover:bg-[#DCEDE4]
                            hover:text-[#5C9A81]
                          `
                      }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Icon */}
                      <div
                        className={`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          text-[20px]
                          transition-all
                          duration-200

                          ${
                            isActive
                              ? `
                                bg-white/20
                                text-white
                              `
                              : `
                                bg-[#7FB59C]/15
                                text-[#5C9A81]
                                group-hover:bg-[#7FB59C]
                                group-hover:text-white
                              `
                          }
                        `}
                      >
                        <Icon />
                      </div>

                      {/* Item Name */}
                      <span className="relative z-10">
                        {item.name}
                      </span>

                      {/* Active Dot */}
                      {isActive && (
                        <span
                          className="
                            ml-auto
                            h-[7px]
                            w-[7px]
                            rounded-full
                            bg-white
                          "
                        />
                      )}

                      {/* Hover Left Indicator */}
                      {!isActive && (
                        <span
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-full
                            w-[3px]
                            scale-y-0
                            rounded-full
                            bg-[#7FB59C]
                            transition-transform
                            duration-200
                            group-hover:scale-y-100
                          "
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;