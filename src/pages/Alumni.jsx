import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineUserGroup,
  HiOutlineFilter,
  HiOutlineX,
  HiOutlinePlus,
  HiOutlineCheckCircle,
  HiOutlineIdentification,
  HiOutlinePhotograph,
} from "react-icons/hi";

import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import alumniData from "../data/alumni";

/* =========================================================
   INITIAL FORM DATA
========================================================= */

const initialFormData = {
  name: "",
  gender: "",
  department: "",
  session: "",
  profession: "",
  organization: "",
  country: "",
  city: "",
  image: "",
  email: "",
  phone: "",
  facebook: "",
  linkedin: "",
  bio: "",
};




/* =========================================================
   ALUMNI PAGE
========================================================= */

const Alumni = () => {
  const ease = [0.22, 1, 0.36, 1];

  /* =====================================================
     DIRECTORY STATE
  ====================================================== */

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [country, setCountry] = useState("All");

  /* =====================================================
     FORM STATE
  ====================================================== */

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  /* =====================================================
     APPROVED ALUMNI ONLY
  ====================================================== */

  const approvedAlumni = useMemo(() => {
    return alumniData.filter(
      (alumni) => alumni.status === "approved"
    );
  }, []);

  /* =====================================================
     FILTER OPTIONS
  ====================================================== */

  const departments = useMemo(() => {
    return [
      ...new Set(
        approvedAlumni.map((alumni) => alumni.department)
      ),
    ].sort();
  }, [approvedAlumni]);

  const countries = useMemo(() => {
    return [
      ...new Set(
        approvedAlumni.map((alumni) => alumni.country)
      ),
    ].sort();
  }, [approvedAlumni]);

  /* =====================================================
     FILTER ALUMNI
  ====================================================== */

  const filteredAlumni = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return approvedAlumni.filter((alumni) => {
      const searchableText = `
        ${alumni.name || ""}
        ${alumni.department || ""}
        ${alumni.session || ""}
        ${alumni.profession || ""}
        ${alumni.organization || ""}
        ${alumni.country || ""}
        ${alumni.city || ""}
        ${alumni.email || ""}
      `.toLowerCase();

      const matchesSearch =
        !searchValue ||
        searchableText.includes(searchValue);

      const matchesDepartment =
        department === "All" ||
        alumni.department === department;

      const matchesCountry =
        country === "All" ||
        alumni.country === country;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesCountry
      );
    });
  }, [
    approvedAlumni,
    search,
    department,
    country,
  ]);

  const hasFilters =
    search.trim() !== "" ||
    department !== "All" ||
    country !== "All";

  const clearFilters = () => {
    setSearch("");
    setDepartment("All");
    setCountry("All");
  };

  /* =====================================================
     IMAGE FALLBACK
  ====================================================== */

  const getAlumniImage = (alumni) => {
    if (alumni.image?.trim()) {
      return alumni.image;
    }

    if (alumni.gender?.toLowerCase() === "female") {
      return "/images/female-avatar.png";
    }

    return "/images/male-avatar.png";
  };

  const handleImageError = (event, alumni) => {
    event.currentTarget.onerror = null;

    event.currentTarget.src =
      alumni.gender?.toLowerCase() === "female"
        ? "/images/female-avatar.png"
        : "/images/male-avatar.png";
  };

  /* =====================================================
     FORM HANDLERS
  ====================================================== */

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const closeForm = () => {
    setShowForm(false);

    setTimeout(() => {
      setSubmitted(false);
    }, 300);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const application = {
      id: Date.now(),
      ...formData,
      status: "pending",
      submittedAt: new Date().toISOString(),
      reviewedAt: null,
    };

    console.log(
      "Pending alumni application:",
      application
    );

    setFormData(initialFormData);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FFFFF3]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative overflow-hidden
          border-b border-[#7FB59C]/15
          px-5 py-16
          sm:px-6 sm:py-20
          md:px-8 md:py-24
          lg:px-10 lg:py-28
          xl:px-14
          2xl:px-16
        "
      >
        <div
          className="
            pointer-events-none
            absolute -right-[170px] -top-[210px]
            h-[520px] w-[520px]
            rounded-full
            bg-[#7FB59C]/10
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute -bottom-[180px] left-[18%]
            h-[360px] w-[360px]
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
              mb-8 flex items-center gap-2
              text-[11px] font-medium
              text-[#4B5563]
              md:mb-10
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
              Alumni
            </span>
          </motion.div>

          <div
            className="
              grid grid-cols-1 gap-10
              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-end lg:gap-16
            "
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease,
                }}
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-[2px] w-[38px] bg-[#7FB59C]" />

                <p
                  className="
                    text-[10px] font-semibold
                    uppercase tracking-[0.2em]
                    text-[#5C9A81]
                    sm:text-[11px]
                  "
                >
                  Our Alumni
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
                  text-[40px] font-bold
                  leading-[1.03]
                  tracking-[-0.045em]
                  text-black
                  sm:text-[52px]
                  md:text-[62px]
                  lg:text-[69px]
                  xl:text-[76px]
                "
              >
                Beyond Campus,

                <br />

                <span className="text-[#5C9A81]">
                  Forever Connected.
                </span>
              </motion.h1>
            </div>

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
                pl-5 sm:pl-7
              "
            >
              <p
                className="
                  max-w-[520px]
                  text-[14px]
                  leading-[1.9]
                  text-[#4B5563]
                  sm:text-[15px]
                  lg:text-[16px]
                "
              >
                Our alumni carry the spirit of Chattogram
                Forum, SUST beyond campus, building careers,
                communities and connections across Bangladesh
                and around the world.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <HiOutlineUserGroup
                  className="text-[18px] text-[#5C9A81]"
                />

                <p
                  className="
                    text-[11px]
                    font-semibold uppercase
                    tracking-[0.12em]
                    text-[#5C9A81]
                  "
                >
                  Connect • Grow • Give Back
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH & FILTER
      ====================================================== */}

      <section
        className="
          border-b border-[#7FB59C]/15
          bg-[#DCEDE4]/25
          px-4 py-7
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
        "
      >
        <div className="mx-auto max-w-[1400px]">
          <div
            className="
              mb-4 flex flex-wrap
              items-center justify-between
              gap-3
            "
          >
            <div className="flex items-center gap-2">
              <HiOutlineFilter
                className="text-[17px] text-[#5C9A81]"
              />

              <p
                className="
                  text-[10px] font-semibold
                  uppercase tracking-[0.15em]
                  text-[#5C9A81]
                "
              >
                Find Alumni
              </p>
            </div>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="
                  flex items-center gap-1
                  text-[9px] font-semibold
                  text-[#5C9A81]
                  hover:text-black
                "
              >
                <HiOutlineX />

                Clear Filters
              </button>
            )}
          </div>

          {/* Search */}

          <div className="relative">
            <HiOutlineSearch
              className="
                pointer-events-none
                absolute left-4 top-1/2
                -translate-y-1/2
                text-[18px]
                text-[#5C9A81]
              "
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search name, profession, organization, department, country or city..."
              className="
                w-full
                border border-[#7FB59C]/25
                bg-[#FFFFF3]
                py-3.5 pl-11 pr-10
                text-[11px]
                text-black
                outline-none
                placeholder:text-[#4B5563]/50
                focus:border-[#7FB59C]
                sm:text-[12px]
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="
                  absolute right-4 top-1/2
                  -translate-y-1/2
                  text-[#4B5563]
                  hover:text-[#5C9A81]
                "
              >
                <HiOutlineX />
              </button>
            )}
          </div>

          {/* Filter selects */}

          <div
            className="
              mt-3 grid
              grid-cols-2 gap-2
              sm:gap-3
            "
          >
            <div>
              <label
                htmlFor="department"
                className="
                  mb-1 block
                  text-[8px] font-semibold
                  uppercase tracking-[0.1em]
                  text-[#4B5563]
                "
              >
                Department
              </label>

              <select
                id="department"
                value={department}
                onChange={(event) =>
                  setDepartment(event.target.value)
                }
                className="
                  w-full
                  border border-[#7FB59C]/25
                  bg-[#FFFFF3]
                  px-2 py-3
                  text-[9px]
                  outline-none
                  focus:border-[#7FB59C]
                  sm:px-3 sm:text-[10px]
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

            <div>
              <label
                htmlFor="country"
                className="
                  mb-1 block
                  text-[8px] font-semibold
                  uppercase tracking-[0.1em]
                  text-[#4B5563]
                "
              >
                Country
              </label>

              <select
                id="country"
                value={country}
                onChange={(event) =>
                  setCountry(event.target.value)
                }
                className="
                  w-full
                  border border-[#7FB59C]/25
                  bg-[#FFFFF3]
                  px-2 py-3
                  text-[9px]
                  outline-none
                  focus:border-[#7FB59C]
                  sm:px-3 sm:text-[10px]
                "
              >
                <option value="All">
                  All Countries
                </option>

                {countries.map((item) => (
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
          ALUMNI DIRECTORY
      ====================================================== */}

      <section
        className="
          px-3 py-14
          sm:px-5 sm:py-16
          md:px-6
          lg:px-8 lg:py-20
          xl:px-10
          2xl:px-12
        "
      >
        <div className="mx-auto max-w-[1600px]">
          {/* Heading */}

          <div
            className="
              mb-6 flex
              items-end
              justify-between
              gap-3
              border-b
              border-[#7FB59C]/15
              pb-4
              sm:mb-8
            "
          >
            <div>
              <p
                className="
                  text-[8px] font-semibold
                  uppercase tracking-[0.15em]
                  text-[#5C9A81]
                  sm:text-[9px]
                "
              >
                Alumni Directory
              </p>

              <h2
                className="
                  mt-1.5
                  text-[23px] font-bold
                  tracking-[-0.03em]
                  text-black
                  sm:text-[28px]
                  md:text-[32px]
                "
              >
                Explore Our Alumni
              </h2>
            </div>

            <div
              className="
                hidden items-center
                gap-1.5
                text-[9px]
                text-[#4B5563]
                sm:flex
              "
            >
              <HiOutlineUserGroup
                className="text-[#5C9A81]"
              />

              <strong className="text-[#5C9A81]">
                {filteredAlumni.length}
              </strong>

              Alumni
            </div>
          </div>

          {/* =================================================
              RESPONSIVE GRID

              Mobile  = 2
              Tablet  = 4
              Desktop = 6
          ================================================== */}

          {filteredAlumni.length > 0 ? (
            <motion.div
              layout
              className="
                grid
                grid-cols-2
                gap-2.5

                md:grid-cols-4
                md:gap-3

                lg:grid-cols-6
                lg:gap-3.5
              "
            >
              <AnimatePresence>
                {filteredAlumni.map(
                  (alumni, index) => (
                    <motion.article
                      layout
                      key={alumni.id}
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
                        duration: 0.35,
                        delay: Math.min(
                          index * 0.025,
                          0.12
                        ),
                        ease,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="
                        group relative
                        flex h-full
                        min-w-0
                        flex-col
                        overflow-hidden
                        border
                        border-[#7FB59C]/20
                        bg-[#FFFFF3]
                        transition-all
                        duration-300
                        hover:border-[#7FB59C]/60
                        hover:shadow-[0_10px_28px_rgba(92,154,129,0.10)]
                      "
                    >
                      {/* Photo */}

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
                          src={getAlumniImage(alumni)}
                          alt={alumni.name}
                          loading="lazy"
                          onError={(event) =>
                            handleImageError(
                              event,
                              alumni
                            )
                          }
                          className="
                            h-full w-full
                            object-cover object-top
                            transition-transform
                            duration-700
                            group-hover:scale-[1.05]
                          "
                        />

                        <div
                          className="
                            absolute inset-0
                            bg-gradient-to-t
                            from-black/45
                            via-transparent
                            to-transparent
                          "
                        />

                        {/* Session */}

                        <span
                          className="
                            absolute
                            bottom-2 left-2
                            bg-[#5C9A81]/90
                            px-1.5 py-1
                            text-[6px]
                            font-bold uppercase
                            tracking-[0.08em]
                            text-white
                            backdrop-blur-sm
                            sm:px-2
                            sm:text-[7px]
                          "
                        >
                          {alumni.session}
                        </span>
                      </div>

                      {/* Card Content */}

                      <div
                        className="
                          flex flex-1
                          flex-col
                          p-2.5
                          sm:p-3
                          lg:p-3
                        "
                      >
                        {/* Name */}

                        <h3
                          title={alumni.name}
                          className="
                            truncate
                            text-[11px]
                            font-bold
                            leading-tight
                            tracking-[-0.02em]
                            text-black
                            transition-colors
                            group-hover:text-[#5C9A81]
                            sm:text-[12px]
                            lg:text-[13px]
                          "
                        >
                          {alumni.name}
                        </h3>

                        {/* Department */}

                        <div
                          className="
                            mt-2
                            flex min-w-0
                            items-start
                            gap-1.5
                          "
                        >
                          <HiOutlineAcademicCap
                            className="
                              mt-[1px]
                              shrink-0
                              text-[11px]
                              text-[#5C9A81]
                            "
                          />

                          <p
                            title={alumni.department}
                            className="
                              line-clamp-2
                              min-w-0
                              text-[7px]
                              leading-[1.4]
                              text-[#4B5563]
                              sm:text-[8px]
                              lg:text-[9px]
                            "
                          >
                            {alumni.department}
                          </p>
                        </div>

                        {/* Profession */}

                        <div
                          className="
                            mt-2
                            flex min-w-0
                            items-start
                            gap-1.5
                          "
                        >
                          <HiOutlineBriefcase
                            className="
                              mt-[1px]
                              shrink-0
                              text-[11px]
                              text-[#5C9A81]
                            "
                          />

                          <div className="min-w-0">
                            <p
                              title={alumni.profession}
                              className="
                                truncate
                                text-[7px]
                                font-semibold
                                text-black
                                sm:text-[8px]
                                lg:text-[9px]
                              "
                            >
                              {alumni.profession}
                            </p>

                            <p
                              title={alumni.organization}
                              className="
                                mt-0.5
                                truncate
                                text-[6px]
                                text-[#4B5563]
                                sm:text-[7px]
                                lg:text-[8px]
                              "
                            >
                              {alumni.organization}
                            </p>
                          </div>
                        </div>

                        {/* Location */}

                        <div
                          className="
                            mt-2
                            flex min-w-0
                            items-center
                            gap-1.5
                          "
                        >
                          <HiOutlineLocationMarker
                            className="
                              shrink-0
                              text-[11px]
                              text-[#5C9A81]
                            "
                          />

                          <p
                            title={`${alumni.city}, ${alumni.country}`}
                            className="
                              truncate
                              text-[6px]
                              text-[#4B5563]
                              sm:text-[7px]
                              lg:text-[8px]
                            "
                          >
                            {alumni.city},{" "}
                            {alumni.country}
                          </p>
                        </div>

                        {/* Bio - desktop/tablet only */}

                        {alumni.bio && (
                          <p
                            className="
                              mt-2
                              hidden
                              line-clamp-2
                              text-[7px]
                              leading-[1.5]
                              text-[#4B5563]
                              md:block
                              lg:text-[8px]
                            "
                          >
                            {alumni.bio}
                          </p>
                        )}

                        {/* Contact */}

                        <div className="mt-auto pt-3">
                          <div
                            className="
                              flex items-center
                              justify-between
                              gap-1
                              border-t
                              border-[#7FB59C]/15
                              pt-2.5
                            "
                          >
                            <span
                              className="
                                hidden
                                text-[6px]
                                font-semibold
                                uppercase
                                tracking-[0.08em]
                                text-[#5C9A81]
                                sm:block
                                lg:text-[7px]
                              "
                            >
                              Connect
                            </span>

                            <div
                              className="
                                flex
                                items-center
                                gap-1
                              "
                            >
                              {alumni.email && (
                                <motion.a
                                  href={`mailto:${alumni.email}`}
                                  whileHover={{
                                    y: -2,
                                  }}
                                  whileTap={{
                                    scale: 0.9,
                                  }}
                                  title={alumni.email}
                                  aria-label={`Email ${alumni.name}`}
                                  className="
                                    flex
                                    h-6 w-6
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-[#7FB59C]/25
                                    bg-[#DCEDE4]/60
                                    text-[9px]
                                    text-[#5C9A81]
                                    transition-all
                                    hover:bg-[#7FB59C]
                                    hover:text-white
                                    sm:h-7 sm:w-7
                                    sm:text-[10px]
                                  "
                                >
                                  <HiOutlineMail />
                                </motion.a>
                              )}

                              {alumni.facebook && (
                                <motion.a
                                  href={alumni.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{
                                    y: -2,
                                  }}
                                  whileTap={{
                                    scale: 0.9,
                                  }}
                                  title="Facebook"
                                  aria-label={`${alumni.name} Facebook`}
                                  className="
                                    flex
                                    h-6 w-6
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-[#7FB59C]/25
                                    bg-[#DCEDE4]/60
                                    text-[8px]
                                    text-[#5C9A81]
                                    transition-all
                                    hover:bg-[#7FB59C]
                                    hover:text-white
                                    sm:h-7 sm:w-7
                                    sm:text-[9px]
                                  "
                                >
                                  <FaFacebookF />
                                </motion.a>
                              )}

                              {alumni.linkedin && (
                                <motion.a
                                  href={alumni.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{
                                    y: -2,
                                  }}
                                  whileTap={{
                                    scale: 0.9,
                                  }}
                                  title="LinkedIn"
                                  aria-label={`${alumni.name} LinkedIn`}
                                  className="
                                    flex
                                    h-6 w-6
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-[#7FB59C]/25
                                    bg-[#DCEDE4]/60
                                    text-[8px]
                                    text-[#5C9A81]
                                    transition-all
                                    hover:bg-[#7FB59C]
                                    hover:text-white
                                    sm:h-7 sm:w-7
                                    sm:text-[9px]
                                  "
                                >
                                  <FaLinkedinIn />
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom hover line */}

                      <span
                        className="
                          pointer-events-none
                          absolute bottom-0 left-0
                          h-[3px] w-0
                          bg-[#7FB59C]
                          transition-all
                          duration-500
                          group-hover:w-full
                        "
                      />
                    </motion.article>
                  )
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* =================================================
               EMPTY STATE
            ================================================== */

            <div
              className="
                border
                border-[#7FB59C]/20
                bg-[#DCEDE4]/20
                px-6 py-16
                text-center
              "
            >
              <HiOutlineSearch
                className="
                  mx-auto
                  text-[30px]
                  text-[#5C9A81]
                "
              />

              <h3
                className="
                  mt-4 text-[20px]
                  font-bold text-black
                "
              >
                No alumni found
              </h3>

              <p
                className="
                  mt-2 text-[11px]
                  text-[#4B5563]
                "
              >
                Try changing your search or filter options.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="
                  mt-5
                  bg-[#7FB59C]
                  px-5 py-3
                  text-[10px]
                  font-semibold
                  text-white
                  hover:bg-[#5C9A81]
                "
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          JOIN ALUMNI DIRECTORY
      ====================================================== */}

      <section
        className="
          bg-[#DCEDE4]/35
          px-5 py-16
          sm:px-6 sm:py-20
          md:px-8
          lg:px-10
          xl:px-14
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
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            flex max-w-[1200px]
            flex-col gap-7
            border
            border-[#7FB59C]/20
            bg-[#FFFFF3]
            px-6 py-9
            sm:px-9
            md:flex-row
            md:items-center
            md:justify-between
            lg:px-12
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-semibold uppercase
                tracking-[0.17em]
                text-[#5C9A81]
              "
            >
              Alumni Community
            </p>

            <h2
              className="
                mt-3
                max-w-[650px]
                text-[27px]
                font-bold
                tracking-[-0.03em]
                text-black
                sm:text-[33px]
              "
            >
              Are you an alumnus of SUST from

              <span className="text-[#5C9A81]">
                {" "}
                Chattogram?
              </span>
            </h2>

            <p
              className="
                mt-3 max-w-[650px]
                text-[12px]
                leading-[1.8]
                text-[#4B5563]
              "
            >
              Submit your information to join the
              Chattogram Forum, SUST alumni directory.
              Your profile will be published after
              review and approval.
            </p>
          </div>

          <motion.button
            type="button"
            onClick={() => setShowForm(true)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-2
              bg-[#7FB59C]
              px-6 py-3.5
              text-[11px]
              font-semibold
              text-white
              hover:bg-[#5C9A81]
            "
          >
            <HiOutlinePlus className="text-[17px]" />

            Submit Alumni Profile
          </motion.button>
        </motion.div>
      </section>

      {/* =====================================================
          SUBMISSION MODAL
      ====================================================== */}

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (
                event.target === event.currentTarget
              ) {
                closeForm();
              }
            }}
            className="
              fixed inset-0
              z-[100]
              flex items-center
              justify-center
              bg-black/45
              p-3
              backdrop-blur-[2px]
              sm:p-5
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease,
              }}
              className="
                relative
                max-h-[94vh]
                w-full
                max-w-[900px]
                overflow-y-auto
                bg-[#FFFFF3]
                shadow-[0_25px_80px_rgba(0,0,0,0.18)]
              "
            >
              {/* Modal Header */}

              <div
                className="
                  sticky top-0
                  z-20
                  flex items-center
                  justify-between
                  border-b
                  border-[#7FB59C]/20
                  bg-[#FFFFF3]/95
                  px-5 py-4
                  backdrop-blur-md
                  sm:px-7
                "
              >
                <div>
                  <p
                    className="
                      text-[8px]
                      font-semibold uppercase
                      tracking-[0.16em]
                      text-[#5C9A81]
                    "
                  >
                    Alumni Directory
                  </p>

                  <h2
                    className="
                      mt-1 text-[20px]
                      font-bold text-black
                    "
                  >
                    Submit Your Profile
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={closeForm}
                  aria-label="Close form"
                  className="
                    flex h-9 w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#7FB59C]/20
                    text-[#4B5563]
                    hover:bg-[#DCEDE4]
                    hover:text-[#5C9A81]
                  "
                >
                  <HiOutlineX />
                </button>
              </div>

              {submitted ? (
                /* =================================================
                   SUCCESS
                ================================================== */

                <div
                  className="
                    flex min-h-[440px]
                    flex-col
                    items-center
                    justify-center
                    px-6 py-16
                    text-center
                  "
                >
                  <div
                    className="
                      flex h-16 w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-[#DCEDE4]
                      text-[32px]
                      text-[#5C9A81]
                    "
                  >
                    <HiOutlineCheckCircle />
                  </div>

                  <h3
                    className="
                      mt-6 text-[26px]
                      font-bold text-black
                    "
                  >
                    Profile Submitted
                  </h3>

                  <p
                    className="
                      mt-3 max-w-[480px]
                      text-[12px]
                      leading-[1.8]
                      text-[#4B5563]
                    "
                  >
                    Thank you. Your alumni profile has
                    been submitted for review. It will
                    appear in the public directory after
                    approval by the Forum administration.
                  </p>

                  <button
                    type="button"
                    onClick={closeForm}
                    className="
                      mt-7
                      bg-[#7FB59C]
                      px-6 py-3
                      text-[11px]
                      font-semibold
                      text-white
                      hover:bg-[#5C9A81]
                    "
                  >
                    Close
                  </button>
                </div>
              ) : (
                /* =================================================
                   FORM
                ================================================== */

                <form
                  onSubmit={handleSubmit}
                  className="px-5 py-7 sm:px-7"
                >
                  {/* Personal */}

                  <FormSection
                    icon={HiOutlineIdentification}
                    title="Personal Information"
                  >
                    <div
                      className="
                        grid grid-cols-1
                        gap-4 sm:grid-cols-2
                      "
                    >
                      <InputField
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />

                      <SelectField
                        label="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                        options={[
                          {
                            value: "male",
                            label: "Male",
                          },
                          {
                            value: "female",
                            label: "Female",
                          },
                        ]}
                      />

                      <InputField
                        label="Department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        placeholder="Software Engineering"
                        required
                      />

                      <InputField
                        label="Session"
                        name="session"
                        value={formData.session}
                        onChange={handleInputChange}
                        placeholder="2018–19"
                        required
                      />
                    </div>
                  </FormSection>

                  {/* Professional */}

                  <FormSection
                    icon={HiOutlineBriefcase}
                    title="Professional Information"
                  >
                    <div
                      className="
                        grid grid-cols-1
                        gap-4 sm:grid-cols-2
                      "
                    >
                      <InputField
                        label="Profession / Job Title"
                        name="profession"
                        value={formData.profession}
                        onChange={handleInputChange}
                        placeholder="Software Engineer"
                        required
                      />

                      <InputField
                        label="Organization / Company"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Company name"
                        required
                      />

                      <InputField
                        label="Country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="Bangladesh"
                        required
                      />

                      <InputField
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Dhaka"
                        required
                      />
                    </div>
                  </FormSection>

                  {/* Photo */}

                  <FormSection
                    icon={HiOutlinePhotograph}
                    title="Profile Photo"
                  >
                    <InputField
                      label="Photo URL"
                      name="image"
                      type="url"
                      value={formData.image}
                      onChange={handleInputChange}
                      placeholder="https://..."
                    />

                    <p
                      className="
                        mt-2 text-[9px]
                        leading-[1.6]
                        text-[#4B5563]
                      "
                    >
                      Photo is optional. If you don't
                      provide one, a gender-based avatar
                      will be used automatically.
                    </p>
                  </FormSection>

                  {/* Contact */}

                  <FormSection
                    icon={HiOutlineMail}
                    title="Contact & Social"
                  >
                    <div
                      className="
                        grid grid-cols-1
                        gap-4 sm:grid-cols-2
                      "
                    >
                      <InputField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        required
                      />

                      <InputField
                        label="Phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+880..."
                      />

                      <InputField
                        label="Facebook"
                        name="facebook"
                        type="url"
                        value={formData.facebook}
                        onChange={handleInputChange}
                        placeholder="https://facebook.com/..."
                      />

                      <InputField
                        label="LinkedIn"
                        name="linkedin"
                        type="url"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                  </FormSection>

                  {/* Bio */}

                  <FormSection
                    icon={HiOutlineUserGroup}
                    title="About You"
                  >
                    <label
                      htmlFor="bio"
                      className="
                        mb-1.5 block
                        text-[9px]
                        font-semibold uppercase
                        tracking-[0.1em]
                        text-[#4B5563]
                      "
                    >
                      Short Bio
                    </label>

                    <textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={400}
                      placeholder="Write a short introduction..."
                      className="
                        w-full resize-none
                        border
                        border-[#7FB59C]/25
                        bg-[#FFFFF3]
                        px-4 py-3
                        text-[12px]
                        text-black
                        outline-none
                        placeholder:text-[#4B5563]/45
                        focus:border-[#7FB59C]
                      "
                    />

                    <p
                      className="
                        mt-1 text-right
                        text-[8px]
                        text-[#4B5563]
                      "
                    >
                      {formData.bio.length}/400
                    </p>
                  </FormSection>

                  {/* Approval info */}

                  <div
                    className="
                      mt-6
                      border-l-2
                      border-[#7FB59C]
                      bg-[#DCEDE4]/35
                      px-4 py-3
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        leading-[1.7]
                        text-[#4B5563]
                      "
                    >
                      Your profile will not appear
                      publicly immediately. It will
                      first be reviewed by the
                      Chattogram Forum, SUST
                      administration.
                    </p>
                  </div>

                  {/* Buttons */}

                  <div
                    className="
                      mt-7
                      flex flex-col-reverse
                      gap-3
                      border-t
                      border-[#7FB59C]/15
                      pt-6
                      sm:flex-row
                      sm:justify-end
                    "
                  >
                    <button
                      type="button"
                      onClick={closeForm}
                      className="
                        border
                        border-[#7FB59C]/30
                        px-6 py-3
                        text-[11px]
                        font-semibold
                        text-[#4B5563]
                        hover:border-[#7FB59C]
                        hover:text-[#5C9A81]
                      "
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        bg-[#7FB59C]
                        px-6 py-3
                        text-[11px]
                        font-semibold
                        text-white
                        hover:bg-[#5C9A81]
                      "
                    >
                      <HiOutlineCheckCircle className="text-[16px]" />

                      Submit for Review
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

/* =========================================================
   FORM SECTION
========================================================= */

const FormSection = ({
  icon: Icon,
  title,
  children,
}) => {
  return (
    <section
      className="
        border-b
        border-[#7FB59C]/15
        py-6 first:pt-0
      "
    >
      <div className="mb-4 flex items-center gap-2.5">
        <div
          className="
            flex h-8 w-8
            items-center
            justify-center
            rounded-full
            bg-[#DCEDE4]
            text-[15px]
            text-[#5C9A81]
          "
        >
          <Icon />
        </div>

        <h3
          className="
            text-[14px]
            font-bold text-black
          "
        >
          {title}
        </h3>
      </div>

      {children}
    </section>
  );
};

/* =========================================================
   INPUT FIELD
========================================================= */

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-1.5 block
          text-[9px]
          font-semibold uppercase
          tracking-[0.1em]
          text-[#4B5563]
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-[#5C9A81]">
            *
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="
          w-full
          border
          border-[#7FB59C]/25
          bg-[#FFFFF3]
          px-4 py-3
          text-[12px]
          text-black
          outline-none
          placeholder:text-[#4B5563]/45
          focus:border-[#7FB59C]
        "
      />
    </div>
  );
};

/* =========================================================
   SELECT FIELD
========================================================= */

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-1.5 block
          text-[9px]
          font-semibold uppercase
          tracking-[0.1em]
          text-[#4B5563]
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-[#5C9A81]">
            *
          </span>
        )}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full cursor-pointer
          border
          border-[#7FB59C]/25
          bg-[#FFFFF3]
          px-4 py-3
          text-[12px]
          text-black
          outline-none
          focus:border-[#7FB59C]
        "
      >
        <option value="">
          Select {label}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Alumni;