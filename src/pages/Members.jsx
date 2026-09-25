import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineAcademicCap,
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
  HiOutlineFilter,
  HiOutlineX,
  HiOutlineArrowRight,
  HiOutlineMail,
} from "react-icons/hi";

import { FaFacebookF } from "react-icons/fa";

// Shared member data
import members from "../data/members";

const Members = () => {
  const ease = [0.22, 1, 0.36, 1];

  /* =====================================================
     STATE
  ====================================================== */

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [session, setSession] = useState("All");
  const [upazila, setUpazila] = useState("All");

  /* =====================================================
     DYNAMIC FILTER OPTIONS
  ====================================================== */

  const departments = useMemo(() => {
    return [
      ...new Set(
        members
          .map((member) => member.department)
          .filter(Boolean)
      ),
    ].sort();
  }, []);

  const sessions = useMemo(() => {
    return [
      ...new Set(
        members
          .map((member) => member.session)
          .filter(Boolean)
      ),
    ].sort();
  }, []);

  const upazilas = useMemo(() => {
    return [
      ...new Set(
        members
          .map((member) => member.upazila)
          .filter(Boolean)
      ),
    ].sort();
  }, []);

  /* =====================================================
     IMAGE / AVATAR
  ====================================================== */

  const getMemberImage = (member) => {
    if (member.image?.trim()) {
      return member.image;
    }

    if (member.gender?.toLowerCase() === "female") {
      return "/images/female-avatar.png";
    }

    return "/images/male-avatar.png";
  };

  const handleImageError = (event, member) => {
    event.currentTarget.onerror = null;

    event.currentTarget.src =
      member.gender?.toLowerCase() === "female"
        ? "/images/female-avatar.png"
        : "/images/male-avatar.png";
  };

  /* =====================================================
     SEARCH + FILTER
  ====================================================== */

  const filteredMembers = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return members.filter((member) => {
      const searchableText = `
        ${member.name || ""}
        ${member.department || ""}
        ${member.session || ""}
        ${member.college || ""}
        ${member.upazila || ""}
        ${member.email || ""}
        ${member.facebook || ""}
      `.toLowerCase();

      const matchesSearch =
        searchValue === "" ||
        searchableText.includes(searchValue);

      const matchesDepartment =
        department === "All" ||
        member.department === department;

      const matchesSession =
        session === "All" ||
        member.session === session;

      const matchesUpazila =
        upazila === "All" ||
        member.upazila === upazila;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesSession &&
        matchesUpazila
      );
    });
  }, [search, department, session, upazila]);

  /* =====================================================
     ACTIVE FILTER CHECK
  ====================================================== */

  const hasActiveFilters =
    search.trim() !== "" ||
    department !== "All" ||
    session !== "All" ||
    upazila !== "All";

  /* =====================================================
     CLEAR FILTERS
  ====================================================== */

  const clearFilters = () => {
    setSearch("");
    setDepartment("All");
    setSession("All");
    setUpazila("All");
  };

  return (
    <main className="min-h-screen bg-[#FFFFF3]">
      {/* =====================================================
          01. HERO
      ====================================================== */}

      <section
        className="
          relative overflow-hidden
          border-b border-[#7FB59C]/15
          px-5 py-16
          sm:px-6 sm:py-20
          md:px-8
          lg:px-10 lg:py-24
          xl:px-14
          2xl:px-16
        "
      >
        {/* Background Decoration */}

        <div
          className="
            pointer-events-none absolute
            -right-[170px] -top-[210px]
            h-[520px] w-[520px]
            rounded-full
            bg-[#7FB59C]/10
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none absolute
            -bottom-[190px] left-[12%]
            h-[380px] w-[380px]
            rounded-full
            border border-[#7FB59C]/10
          "
        />

        <div className="relative mx-auto max-w-[1400px]">
          {/* Breadcrumb */}

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease,
            }}
            className="
              mb-9 flex items-center gap-2
              text-[11px] font-medium
              text-[#4B5563]
            "
          >
            <Link
              to="/"
              className="
                flex items-center gap-1.5
                transition-colors
                hover:text-[#5C9A81]
              "
            >
              <HiOutlineHome className="text-[14px]" />
              Home
            </Link>

            <span className="text-[#7FB59C]">
              /
            </span>

            <span className="text-[#5C9A81]">
              Members
            </span>
          </motion.div>

          {/* Hero Content */}

          <div
            className="
              grid grid-cols-1 gap-10
              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-end
              lg:gap-16
            "
          >
            {/* Left */}

            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease,
                }}
                className="
                  mb-5 flex items-center gap-3
                "
              >
                <span
                  className="
                    h-[2px]
                    w-[38px]
                    bg-[#7FB59C]
                  "
                />

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#5C9A81]
                    sm:text-[11px]
                  "
                >
                  Our Members
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.15,
                  ease,
                }}
                className="
                  max-w-[900px]
                  text-[40px]
                  font-bold
                  leading-[1.04]
                  tracking-[-0.045em]
                  text-black
                  sm:text-[52px]
                  md:text-[60px]
                  lg:text-[68px]
                  xl:text-[74px]
                "
              >
                The People Behind
                <br />

                <span className="text-[#5C9A81]">
                  Our Community.
                </span>
              </motion.h1>
            </div>

            {/* Right */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease,
              }}
              className="
                border-l-2
                border-[#7FB59C]
                pl-5
                sm:pl-7
              "
            >
              <p
                className="
                  max-w-[520px]
                  text-[13px]
                  leading-[1.9]
                  text-[#4B5563]
                  sm:text-[14px]
                  lg:text-[15px]
                "
              >
                Meet the students who make Chattogram Forum,
                SUST a connected and supportive community.
                Search and explore members across departments,
                sessions, colleges and upazilas.
              </p>

              <div
                className="
                  mt-5 flex items-center gap-2
                "
              >
                <HiOutlineUserGroup
                  className="
                    text-[18px]
                    text-[#5C9A81]
                  "
                />

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#5C9A81]
                  "
                >
                  Students • Connection • Community
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02. SEARCH + FILTER
      ====================================================== */}

      <section
        className="
          border-b
          border-[#7FB59C]/15
          bg-[#DCEDE4]/25
          px-5
          py-7
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
        "
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Filter Heading */}

          <div
            className="
              mb-4
              flex
              flex-wrap
              items-center
              justify-between
              gap-3
            "
          >
            <div className="flex items-center gap-2">
              <HiOutlineFilter
                className="
                  text-[17px]
                  text-[#5C9A81]
                "
              />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#5C9A81]
                "
              >
                Find Members
              </p>
            </div>

            <AnimatePresence>
              {hasActiveFilters && (
                <motion.button
                  initial={{
                    opacity: 0,
                    x: 10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 10,
                  }}
                  type="button"
                  onClick={clearFilters}
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-[10px]
                    font-semibold
                    text-[#5C9A81]
                    transition-colors
                    hover:text-black
                  "
                >
                  <HiOutlineX className="text-[15px]" />
                  Clear Filters
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Search */}

          <div className="relative">
            <HiOutlineSearch
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-[19px]
                text-[#5C9A81]
              "
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search by name, department, session, college or upazila..."
              className="
                w-full
                border
                border-[#7FB59C]/25
                bg-[#FFFFF3]
                py-3.5
                pl-12
                pr-11
                text-[12px]
                text-black
                outline-none
                transition-all
                duration-300
                placeholder:text-[#4B5563]/55
                focus:border-[#7FB59C]
                sm:text-[13px]
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-[#4B5563]
                  transition-colors
                  hover:text-[#5C9A81]
                "
              >
                <HiOutlineX className="text-[18px]" />
              </button>
            )}
          </div>

          {/* Filters */}

          <div
            className="
              mt-3
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-3
            "
          >
            {/* Department */}

            <div>
              <label
                htmlFor="department-filter"
                className="
                  mb-1.5
                  block
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#4B5563]
                "
              >
                Department
              </label>

              <select
                id="department-filter"
                value={department}
                onChange={(event) =>
                  setDepartment(event.target.value)
                }
                className="
                  w-full
                  cursor-pointer
                  border
                  border-[#7FB59C]/25
                  bg-[#FFFFF3]
                  px-3
                  py-3
                  text-[10px]
                  font-medium
                  text-black
                  outline-none
                  transition-colors
                  focus:border-[#7FB59C]
                "
              >
                <option value="All">
                  All Departments
                </option>

                {departments.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Session */}

            <div>
              <label
                htmlFor="session-filter"
                className="
                  mb-1.5
                  block
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#4B5563]
                "
              >
                Session
              </label>

              <select
                id="session-filter"
                value={session}
                onChange={(event) =>
                  setSession(event.target.value)
                }
                className="
                  w-full
                  cursor-pointer
                  border
                  border-[#7FB59C]/25
                  bg-[#FFFFF3]
                  px-3
                  py-3
                  text-[10px]
                  font-medium
                  text-black
                  outline-none
                  transition-colors
                  focus:border-[#7FB59C]
                "
              >
                <option value="All">
                  All Sessions
                </option>

                {sessions.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Upazila */}

            <div>
              <label
                htmlFor="upazila-filter"
                className="
                  mb-1.5
                  block
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#4B5563]
                "
              >
                Upazila
              </label>

              <select
                id="upazila-filter"
                value={upazila}
                onChange={(event) =>
                  setUpazila(event.target.value)
                }
                className="
                  w-full
                  cursor-pointer
                  border
                  border-[#7FB59C]/25
                  bg-[#FFFFF3]
                  px-3
                  py-3
                  text-[10px]
                  font-medium
                  text-black
                  outline-none
                  transition-colors
                  focus:border-[#7FB59C]
                "
              >
                <option value="All">
                  All Upazilas
                </option>

                {upazilas.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03. MEMBER DIRECTORY
      ====================================================== */}

      <section
        className="
          px-3
          py-14
          sm:px-5
          sm:py-16
          md:px-6
          lg:px-8
          lg:py-20
          xl:px-10
        "
      >
        <div className="mx-auto max-w-[1600px]">
          {/* Directory Header */}

          <div
            className="
              mb-7
              flex
              flex-col
              gap-3
              border-b
              border-[#7FB59C]/15
              pb-4
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#5C9A81]
                "
              >
                Member Directory
              </p>

              <h2
                className="
                  mt-2
                  text-[25px]
                  font-bold
                  tracking-[-0.035em]
                  text-black
                  sm:text-[30px]
                "
              >
                Explore Our Members
              </h2>
            </div>

            {/* Result Count */}

            <div
              className="
                flex
                items-center
                gap-2
                text-[10px]
                font-medium
                text-[#4B5563]
              "
            >
              <HiOutlineUserGroup
                className="
                  text-[16px]
                  text-[#5C9A81]
                "
              />

              Showing

              <span
                className="
                  font-bold
                  text-[#5C9A81]
                "
              >
                {filteredMembers.length}
              </span>

              of

              <span className="font-bold text-black">
                {members.length}
              </span>

              members
            </div>
          </div>

          {/* =================================================
              MEMBER GRID

              Mobile  = 4
              Tablet  = 6
              Desktop = 8
          ================================================== */}

          {filteredMembers.length > 0 ? (
            <motion.div
              layout
              className="
                grid
                grid-cols-4
                gap-2
                md:grid-cols-6
                md:gap-3
                lg:grid-cols-8
                lg:gap-3
              "
            >
              <AnimatePresence>
                {filteredMembers.map(
                  (member, index) => (
                    <motion.article
                      layout
                      key={member.id}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.96,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: Math.min(
                          index * 0.015,
                          0.1
                        ),
                        ease,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="
                        group
                        relative
                        flex
                        min-w-0
                        flex-col
                        overflow-hidden
                        border
                        border-[#7FB59C]/20
                        bg-[#FFFFF3]
                        transition-all
                        duration-300
                        hover:border-[#7FB59C]/60
                        hover:shadow-[0_8px_20px_rgba(92,154,129,0.10)]
                      "
                    >
                      {/* =============================
                          PHOTO
                      ============================== */}

                      <div
                        className="
                          relative
                          aspect-square
                          w-full
                          overflow-hidden
                          bg-[#DCEDE4]
                        "
                      >
                        <img
                          src={getMemberImage(member)}
                          alt={member.name}
                          loading="lazy"
                          onError={(event) =>
                            handleImageError(
                              event,
                              member
                            )
                          }
                          className="
                            h-full
                            w-full
                            object-cover
                            object-top
                            transition-transform
                            duration-500
                            group-hover:scale-[1.06]
                          "
                        />

                        {/* Gradient */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-x-0
                            bottom-0
                            h-[45%]
                            bg-gradient-to-t
                            from-black/45
                            to-transparent
                          "
                        />

                        {/* Session */}

                        <span
                          className="
                            absolute
                            bottom-1.5
                            left-1.5
                            max-w-[calc(100%-12px)]
                            truncate
                            bg-[#5C9A81]/90
                            px-1.5
                            py-0.5
                            text-[5px]
                            font-semibold
                            uppercase
                            tracking-[0.04em]
                            text-white
                            backdrop-blur-sm
                            sm:text-[6px]
                            lg:text-[7px]
                          "
                        >
                          {member.session}
                        </span>

                        {/* Hover Accent */}

                        <span
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-[2px]
                            w-0
                            bg-[#7FB59C]
                            transition-all
                            duration-500
                            group-hover:w-full
                          "
                        />
                      </div>

                      {/* =============================
                          DETAILS
                      ============================== */}

                      <div
                        className="
                          flex
                          flex-1
                          flex-col
                          p-1.5
                          sm:p-2
                          lg:p-2.5
                        "
                      >
                        {/* Name */}

                        <h3
                          title={member.name}
                          className="
                            truncate
                            text-[8px]
                            font-bold
                            leading-tight
                            text-black
                            transition-colors
                            group-hover:text-[#5C9A81]
                            sm:text-[9px]
                            lg:text-[10px]
                          "
                        >
                          {member.name}
                        </h3>

                        {/* Department */}

                        <div
                          className="
                            mt-1.5
                            flex
                            min-w-0
                            items-center
                            gap-1
                          "
                        >
                          <HiOutlineAcademicCap
                            className="
                              shrink-0
                              text-[8px]
                              text-[#5C9A81]
                              sm:text-[9px]
                              lg:text-[10px]
                            "
                          />

                          <p
                            title={member.department}
                            className="
                              min-w-0
                              truncate
                              text-[6px]
                              font-medium
                              text-[#4B5563]
                              sm:text-[7px]
                              lg:text-[8px]
                            "
                          >
                            {member.department}
                          </p>
                        </div>

                        {/* College */}

                        <div
                          className="
                            mt-1
                            flex
                            min-w-0
                            items-center
                            gap-1
                          "
                        >
                          <HiOutlineOfficeBuilding
                            className="
                              shrink-0
                              text-[8px]
                              text-[#5C9A81]
                              sm:text-[9px]
                              lg:text-[10px]
                            "
                          />

                          <p
                            title={member.college}
                            className="
                              min-w-0
                              truncate
                              text-[6px]
                              text-[#4B5563]
                              sm:text-[7px]
                              lg:text-[8px]
                            "
                          >
                            {member.college}
                          </p>
                        </div>

                        {/* Upazila */}

                        <div
                          className="
                            mt-1
                            flex
                            min-w-0
                            items-center
                            gap-1
                          "
                        >
                          <HiOutlineLocationMarker
                            className="
                              shrink-0
                              text-[8px]
                              text-[#5C9A81]
                              sm:text-[9px]
                              lg:text-[10px]
                            "
                          />

                          <p
                            title={member.upazila}
                            className="
                              min-w-0
                              truncate
                              text-[6px]
                              text-[#4B5563]
                              sm:text-[7px]
                              lg:text-[8px]
                            "
                          >
                            {member.upazila}
                          </p>
                        </div>

                        {/* =============================
                            CONTACT
                        ============================== */}

                        {(member.email ||
                          member.facebook) && (
                          <div className="mt-auto pt-2">
                            <div
                              className="
                                flex
                                items-center
                                justify-between
                                border-t
                                border-[#7FB59C]/15
                                pt-1.5
                              "
                            >
                              <span
                                className="
                                  hidden
                                  text-[5px]
                                  font-semibold
                                  uppercase
                                  tracking-[0.08em]
                                  text-[#5C9A81]
                                  sm:block
                                  lg:text-[6px]
                                "
                              >
                                Contact
                              </span>

                              <div
                                className="
                                  flex
                                  items-center
                                  gap-1
                                "
                              >
                                {/* Email */}

                                {member.email && (
                                  <motion.a
                                    href={`mailto:${member.email}`}
                                    whileHover={{
                                      y: -1,
                                      scale: 1.05,
                                    }}
                                    whileTap={{
                                      scale: 0.92,
                                    }}
                                    title={member.email}
                                    aria-label={`Email ${member.name}`}
                                    className="
                                      flex
                                      h-5
                                      w-5
                                      items-center
                                      justify-center
                                      rounded-full
                                      border
                                      border-[#7FB59C]/25
                                      bg-[#DCEDE4]/60
                                      text-[8px]
                                      text-[#5C9A81]
                                      transition-all
                                      duration-300
                                      hover:border-[#7FB59C]
                                      hover:bg-[#7FB59C]
                                      hover:text-white
                                      lg:h-6
                                      lg:w-6
                                      lg:text-[10px]
                                    "
                                  >
                                    <HiOutlineMail />
                                  </motion.a>
                                )}

                                {/* Facebook */}

                                {member.facebook && (
                                  <motion.a
                                    href={member.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                      y: -1,
                                      scale: 1.05,
                                    }}
                                    whileTap={{
                                      scale: 0.92,
                                    }}
                                    title="Facebook Profile"
                                    aria-label={`${member.name} Facebook profile`}
                                    className="
                                      flex
                                      h-5
                                      w-5
                                      items-center
                                      justify-center
                                      rounded-full
                                      border
                                      border-[#7FB59C]/25
                                      bg-[#DCEDE4]/60
                                      text-[7px]
                                      text-[#5C9A81]
                                      transition-all
                                      duration-300
                                      hover:border-[#7FB59C]
                                      hover:bg-[#7FB59C]
                                      hover:text-white
                                      lg:h-6
                                      lg:w-6
                                      lg:text-[9px]
                                    "
                                  >
                                    <FaFacebookF />
                                  </motion.a>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Left Hover Accent */}

                      <span
                        className="
                          pointer-events-none
                          absolute
                          left-0
                          top-0
                          h-0
                          w-[2px]
                          bg-[#7FB59C]
                          transition-all
                          duration-500
                          group-hover:h-full
                        "
                      />
                    </motion.article>
                  )
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* =================================================
                NO RESULTS
            ================================================== */

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                border
                border-[#7FB59C]/20
                bg-[#DCEDE4]/20
                px-6
                py-16
                text-center
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#DCEDE4]
                  text-[25px]
                  text-[#5C9A81]
                "
              >
                <HiOutlineSearch />
              </div>

              <h3
                className="
                  mt-5
                  text-[21px]
                  font-bold
                  text-black
                "
              >
                No members found
              </h3>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-[430px]
                  text-[12px]
                  leading-[1.8]
                  text-[#4B5563]
                "
              >
                We couldn't find any member matching
                your current search and filter options.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  bg-[#7FB59C]
                  px-5
                  py-3
                  text-[11px]
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-[#5C9A81]
                "
              >
                <HiOutlineX className="text-[15px]" />

                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* =====================================================
          04. ALUMNI CTA
      ====================================================== */}

      <section
        className="
          bg-[#DCEDE4]/35
          px-5
          py-16
          sm:px-6
          sm:py-20
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            flex
            max-w-[1200px]
            flex-col
            gap-8
            border
            border-[#7FB59C]/20
            bg-[#FFFFF3]
            px-6
            py-9
            sm:px-9
            md:flex-row
            md:items-center
            md:justify-between
            lg:px-12
            lg:py-11
          "
        >
          {/* Text */}

          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#5C9A81]
              "
            >
              Beyond Campus
            </p>

            <h2
              className="
                mt-3
                max-w-[650px]
                text-[26px]
                font-bold
                tracking-[-0.03em]
                text-black
                sm:text-[31px]
                lg:text-[35px]
              "
            >
              Already graduated from SUST?

              <span className="text-[#5C9A81]">
                {" "}
                Stay connected.
              </span>
            </h2>

            <p
              className="
                mt-3
                max-w-[620px]
                text-[12px]
                leading-[1.8]
                text-[#4B5563]
                sm:text-[13px]
              "
            >
              Explore our alumni community and stay
              connected with the people who continue
              the legacy of Chattogram Forum, SUST
              beyond campus.
            </p>
          </div>

          {/* Button */}

          <motion.div
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="shrink-0"
          >
            <Link
              to="/alumni"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                bg-[#7FB59C]
                px-6
                py-3.5
                text-[11px]
                font-semibold
                text-white
                transition-colors
                hover:bg-[#5C9A81]
                sm:text-[12px]
              "
            >
              Explore Alumni

              <HiOutlineArrowRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1.5
                "
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

export default Members;