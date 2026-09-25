import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineSearch,
  HiOutlineX,
  HiOutlinePhotograph,
  HiOutlineSpeakerphone,
  HiOutlineArrowRight,
  HiOutlineUserGroup,
  HiOutlineFilter,
} from "react-icons/hi";
import eventsNotices from "../data/eventsNotices";

/* =========================================================
   MOCK DATA
   Later replace this array with API/MongoDB data.

   IMPORTANT:
   We DO NOT manually save event status as upcoming/past.
   Status is calculated automatically from `date`.
========================================================= */

const items = eventsNotices
/* =========================================================
   DATE HELPERS
========================================================= */

const getLocalDateOnly = (dateString) => {
  const [year, month, day] = dateString.split("-").map(Number);

  return new Date(year, month - 1, day);
};

const getTodayDateOnly = () => {
  const today = new Date();

  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
};

/* =========================================================
   EVENT STATUS

   Future date -> upcoming
   Today's date -> today
   Passed date -> past
========================================================= */

const getEventStatus = (dateString) => {
  const eventDate = getLocalDateOnly(dateString);
  const today = getTodayDateOnly();

  if (eventDate < today) {
    return "past";
  }

  if (eventDate.getTime() === today.getTime()) {
    return "today";
  }

  return "upcoming";
};

/* =========================================================
   DATE FORMAT
========================================================= */

const formatDate = (dateString) => {
  return getLocalDateOnly(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

/* =========================================================
   TIME FORMAT
========================================================= */

const formatTime = (time) => {
  if (!time) return "";

  const [hours, minutes] = time.split(":").map(Number);

  const date = new Date();

  date.setHours(hours);
  date.setMinutes(minutes);

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
};

/* =========================================================
   EVENTS & NOTICES PAGE
========================================================= */

const EventsNotices = () => {
  const ease = [0.22, 1, 0.36, 1];

  const [searchParams, setSearchParams] = useSearchParams();

  const committeeQuery = searchParams.get("committee");
  const committeeTermQuery = searchParams.get("term");

  const committeeId = committeeQuery
    ? Number(committeeQuery)
    : null;

  /* =====================================================
     STATE
  ====================================================== */

  const [activeFilter, setActiveFilter] = useState(
    committeeId ? "activities" : "all"
  );

  const [search, setSearch] = useState("");

  /* =====================================================
     FILTER BUTTONS
  ====================================================== */

  const filters = [
    {
      id: "all",
      label: "All",
    },
    {
      id: "upcoming",
      label: "Upcoming",
    },
    {
      id: "past",
      label: "Past Events",
    },
    {
      id: "notices",
      label: "Notices",
    },
    {
      id: "activities",
      label: "Activities",
    },
  ];

  /* =====================================================
     AUTOMATIC COUNTS
  ====================================================== */

  const upcomingCount = useMemo(() => {
    return items.filter(
      (item) =>
        item.type === "event" &&
        ["upcoming", "today"].includes(
          getEventStatus(item.date)
        )
    ).length;
  }, []);

  const pastCount = useMemo(() => {
    return items.filter(
      (item) =>
        item.type === "event" &&
        getEventStatus(item.date) === "past"
    ).length;
  }, []);

  const noticeCount = useMemo(() => {
    return items.filter(
      (item) => item.type === "notice"
    ).length;
  }, []);

  const activityCount = useMemo(() => {
    return items.filter(
      (item) => item.type === "activity"
    ).length;
  }, []);

  /* =====================================================
     FEATURED UPCOMING EVENT

     Finds nearest future/today event automatically.
  ====================================================== */

  const featuredEvent = useMemo(() => {
    const upcomingEvents = items
      .filter((item) => {
        if (item.type !== "event") {
          return false;
        }

        const status = getEventStatus(item.date);

        if (
          status !== "upcoming" &&
          status !== "today"
        ) {
          return false;
        }

        if (
          committeeId &&
          item.committeeId !== committeeId
        ) {
          return false;
        }

        return true;
      })
      .sort(
        (a, b) =>
          getLocalDateOnly(a.date) -
          getLocalDateOnly(b.date)
      );

    return upcomingEvents[0] || null;
  }, [committeeId]);

  /* =====================================================
     FILTERED DATA
  ====================================================== */

  const filteredItems = useMemo(() => {
    const searchValue = search
      .trim()
      .toLowerCase();

    return items
      .filter((item) => {
        /* -----------------------------------------------
           COMMITTEE FILTER
        ------------------------------------------------ */

        if (
          committeeId &&
          item.committeeId !== committeeId
        ) {
          return false;
        }

        /* -----------------------------------------------
           SEARCH
        ------------------------------------------------ */

        const searchableText = `
          ${item.title || ""}
          ${item.description || ""}
          ${item.location || ""}
          ${item.committeeTerm || ""}
          ${item.type || ""}
        `.toLowerCase();

        if (
          searchValue &&
          !searchableText.includes(searchValue)
        ) {
          return false;
        }

        /* -----------------------------------------------
           TAB FILTER
        ------------------------------------------------ */

        if (activeFilter === "all") {
          return true;
        }

        if (activeFilter === "upcoming") {
          return (
            item.type === "event" &&
            ["upcoming", "today"].includes(
              getEventStatus(item.date)
            )
          );
        }

        if (activeFilter === "past") {
          return (
            item.type === "event" &&
            getEventStatus(item.date) === "past"
          );
        }

        if (activeFilter === "notices") {
          return item.type === "notice";
        }

        if (activeFilter === "activities") {
          return item.type === "activity";
        }

        return true;
      })
      .sort(
        (a, b) =>
          getLocalDateOnly(b.date) -
          getLocalDateOnly(a.date)
      );
  }, [
    activeFilter,
    search,
    committeeId,
  ]);

  /* =====================================================
     REMOVE COMMITTEE FILTER
  ====================================================== */

  const clearCommitteeFilter = () => {
    setSearchParams({});
    setActiveFilter("all");
  };

  /* =====================================================
     TYPE INFORMATION
  ====================================================== */

  const getTypeInformation = (item) => {
    if (item.type === "notice") {
      return {
        label: "Notice",
        icon: HiOutlineSpeakerphone,
      };
    }

    if (item.type === "activity") {
      return {
        label: "Activity",
        icon: HiOutlinePhotograph,
      };
    }

    const status = getEventStatus(item.date);

    if (status === "today") {
      return {
        label: "Today",
        icon: HiOutlineCalendar,
      };
    }

    if (status === "past") {
      return {
        label: "Past Event",
        icon: HiOutlineCalendar,
      };
    }

    return {
      label: "Upcoming",
      icon: HiOutlineCalendar,
    };
  };

  return (
    <main className="min-h-screen bg-[#FFFFF3]">
      {/* =====================================================
          01. HERO
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[#7FB59C]/15
          px-5
          py-20
          sm:px-6
          sm:py-24
          md:px-8
          lg:px-10
          lg:py-28
          xl:px-14
          2xl:px-16
        "
      >
        {/* Background */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[170px]
            -top-[210px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#7FB59C]/10
            blur-[100px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[180px]
            left-[18%]
            h-[360px]
            w-[360px]
            rounded-full
            border
            border-[#7FB59C]/10
          "
        />

        <div className="relative mx-auto max-w-[1400px]">
          {/* Breadcrumb */}

          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease,
            }}
            className="
              mb-10
              flex
              items-center
              gap-2
              text-[11px]
              font-medium
              text-[#4B5563]
            "
          >
            <Link
              to="/"
              className="
                flex
                items-center
                gap-1.5
                transition-colors
                duration-200
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
              Events & Notices
            </span>
          </motion.div>

          {/* Hero Content */}

          <div
            className="
              grid
              grid-cols-1
              gap-12
              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-end
              lg:gap-16
            "
          >
            {/* Left */}

            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease,
                }}
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-[2px] w-[38px] bg-[#7FB59C]" />

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
                  Events • Notices • Activities
                </p>
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.15,
                  ease,
                }}
                className="
                  max-w-[900px]
                  text-[42px]
                  font-bold
                  leading-[1.03]
                  tracking-[-0.045em]
                  text-black
                  sm:text-[54px]
                  md:text-[63px]
                  lg:text-[69px]
                  xl:text-[76px]
                "
              >
                Stay Connected With

                <br />

                <span className="text-[#5C9A81]">
                  What's Happening.
                </span>
              </motion.h1>
            </div>

            {/* Right */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
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
                  text-[14px]
                  leading-[1.9]
                  text-[#4B5563]
                  sm:text-[15px]
                  lg:text-[16px]
                "
              >
                Discover upcoming programs, important
                notices and activities organized by
                Chattogram Forum, SUST.
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                "
              >
                <HiOutlineCalendar
                  className="
                    text-[18px]
                    text-[#5C9A81]
                  "
                />

                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#5C9A81]
                  "
                >
                  Connect • Participate • Remember
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02. COMMITTEE MODE
      ====================================================== */}

      <AnimatePresence>
        {committeeId && (
          <motion.section
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="
              overflow-hidden
              border-b
              border-[#7FB59C]/20
              bg-[#DCEDE4]/40
            "
          >
            <div
              className="
                mx-auto
                flex
                max-w-[1400px]
                flex-col
                gap-4
                px-5
                py-6
                sm:px-6
                md:flex-row
                md:items-center
                md:justify-between
                md:px-8
                lg:px-10
                xl:px-14
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#7FB59C]
                    text-white
                  "
                >
                  <HiOutlineUserGroup />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#5C9A81]
                    "
                  >
                    Committee Archive
                  </p>

                  <h2
                    className="
                      mt-1
                      text-[18px]
                      font-bold
                      text-black
                      sm:text-[20px]
                    "
                  >
                    Activities of Executive Committee{" "}

                    <span className="text-[#5C9A81]">
                      {committeeTermQuery ||
                        `#${committeeId}`}
                    </span>
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={clearCommitteeFilter}
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  border
                  border-[#7FB59C]
                  px-4
                  py-2.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.1em]
                  text-[#5C9A81]
                  transition-colors
                  hover:bg-[#7FB59C]
                  hover:text-white
                "
              >
                <HiOutlineX />

                View All
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* =====================================================
          03. FEATURED UPCOMING EVENT
      ====================================================== */}

      {featuredEvent && !committeeId && (
        <section
          className="
            px-5
            pt-16
            sm:px-6
            sm:pt-20
            md:px-8
            lg:px-10
            xl:px-14
            2xl:px-16
          "
        >
          <div className="mx-auto max-w-[1400px]">
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
            >
              {/* Heading */}

              <div
                className="
                  mb-6
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-[2px] w-[35px] bg-[#7FB59C]" />

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#5C9A81]
                  "
                >
                  Next Upcoming Event
                </p>
              </div>

              {/* Featured */}

              <article
                className="
                  group
                  grid
                  overflow-hidden
                  border
                  border-[#7FB59C]/20
                  bg-[#FFFFF3]
                  md:grid-cols-[1.05fr_0.95fr]
                "
              >
                {/* Image */}

                <div
                  className="
                    relative
                    min-h-[280px]
                    overflow-hidden
                    bg-[#DCEDE4]
                    sm:min-h-[340px]
                    md:min-h-[420px]
                  "
                >
                  <img
                    src={
                      featuredEvent.image ||
                      "/images/activity-1.jpg"
                    }
                    alt={featuredEvent.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.04]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/40
                      via-transparent
                      to-transparent
                    "
                  />

                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      bg-[#7FB59C]
                      px-3
                      py-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-white
                    "
                  >
                    {getEventStatus(
                      featuredEvent.date
                    ) === "today"
                      ? "Happening Today"
                      : "Upcoming Event"}
                  </span>
                </div>

                {/* Content */}

                <div
                  className="
                    flex
                    flex-col
                    justify-center
                    p-6
                    sm:p-8
                    lg:p-12
                  "
                >
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-4
                      text-[10px]
                      font-medium
                      text-[#5C9A81]
                    "
                  >
                    <span
                      className="
                        flex
                        items-center
                        gap-1.5
                      "
                    >
                      <HiOutlineCalendar />

                      {formatDate(
                        featuredEvent.date
                      )}
                    </span>

                    {featuredEvent.time && (
                      <span
                        className="
                          flex
                          items-center
                          gap-1.5
                        "
                      >
                        <HiOutlineClock />

                        {formatTime(
                          featuredEvent.time
                        )}
                      </span>
                    )}
                  </div>

                  <h2
                    className="
                      mt-5
                      text-[29px]
                      font-bold
                      leading-[1.15]
                      tracking-[-0.035em]
                      text-black
                      sm:text-[35px]
                      lg:text-[40px]
                    "
                  >
                    {featuredEvent.title}
                  </h2>

                  <p
                    className="
                      mt-4
                      text-[12px]
                      leading-[1.9]
                      text-[#4B5563]
                      sm:text-[13px]
                    "
                  >
                    {featuredEvent.description}
                  </p>

                  {featuredEvent.location && (
                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        gap-2
                        text-[11px]
                        font-medium
                        text-[#4B5563]
                      "
                    >
                      <HiOutlineLocationMarker
                        className="
                          text-[17px]
                          text-[#5C9A81]
                        "
                      />

                      {featuredEvent.location}
                    </div>
                  )}
                </div>
              </article>
            </motion.div>
          </div>
        </section>
      )}

      {/* =====================================================
          04. FILTER + SEARCH
      ====================================================== */}

      <section
        className="
          px-5
          py-14
          sm:px-6
          sm:py-16
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
        "
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Header */}

          <div
            className="
              mb-7
              flex
              flex-col
              gap-4
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <HiOutlineFilter
                  className="
                    text-[16px]
                    text-[#5C9A81]
                  "
                />

                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#5C9A81]
                  "
                >
                  Browse
                </p>
              </div>

              <h2
                className="
                  mt-2
                  text-[29px]
                  font-bold
                  tracking-[-0.035em]
                  text-black
                  sm:text-[34px]
                "
              >
                {committeeId
                  ? "Committee Activities"
                  : "Events & Updates"}
              </h2>
            </div>

            <p
              className="
                text-[10px]
                font-medium
                text-[#4B5563]
              "
            >
              Showing{" "}

              <span className="font-bold text-[#5C9A81]">
                {filteredItems.length}
              </span>{" "}

              items
            </p>
          </div>

          {/* Filter Tabs */}

          {!committeeId && (
            <div
              className="
                flex
                gap-2
                overflow-x-auto
                pb-2
              "
            >
              {filters.map((filter) => {
                let count = items.length;

                if (filter.id === "upcoming") {
                  count = upcomingCount;
                }

                if (filter.id === "past") {
                  count = pastCount;
                }

                if (filter.id === "notices") {
                  count = noticeCount;
                }

                if (filter.id === "activities") {
                  count = activityCount;
                }

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() =>
                      setActiveFilter(filter.id)
                    }
                    className={`
                      shrink-0
                      border
                      px-4
                      py-2.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                      transition-all
                      duration-300

                      ${
                        activeFilter === filter.id
                          ? "border-[#7FB59C] bg-[#7FB59C] text-white"
                          : "border-[#7FB59C]/25 bg-transparent text-[#4B5563] hover:border-[#7FB59C] hover:text-[#5C9A81]"
                      }
                    `}
                  >
                    {filter.label}

                    <span
                      className={`
                        ml-2
                        ${
                          activeFilter === filter.id
                            ? "text-white/70"
                            : "text-[#5C9A81]"
                        }
                      `}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Search */}

          <div className="relative mt-5">
            <HiOutlineSearch
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
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
              placeholder={
                committeeId
                  ? "Search committee activities..."
                  : "Search events, notices or activities..."
              }
              className="
                w-full
                border
                border-[#7FB59C]/25
                bg-[#DCEDE4]/15
                py-3.5
                pl-12
                pr-11
                text-[12px]
                text-black
                outline-none
                transition-colors
                placeholder:text-[#4B5563]/50
                focus:border-[#7FB59C]
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-[#4B5563]
                  hover:text-[#5C9A81]
                "
              >
                <HiOutlineX />
              </button>
            )}
          </div>

          {/* =================================================
              CARDS
          ================================================== */}

          {filteredItems.length > 0 ? (
            <motion.div
              layout
              className="
                mt-8
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map(
                  (item, index) => {
                    const typeInfo =
                      getTypeInformation(item);

                    const TypeIcon =
                      typeInfo.icon;

                    return (
                      <motion.article
                        layout
                        key={item.id}
                        initial={{
                          opacity: 0,
                          y: 20,
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
                          duration: 0.4,
                          delay: Math.min(
                            index * 0.04,
                            0.16
                          ),
                          ease,
                        }}
                        whileHover={{
                          y: -5,
                        }}
                        className="
                          group
                          relative
                          flex
                          h-full
                          flex-col
                          overflow-hidden
                          border
                          border-[#7FB59C]/20
                          bg-[#FFFFF3]
                          transition-all
                          duration-300
                          hover:border-[#7FB59C]/55
                          hover:shadow-[0_14px_35px_rgba(92,154,129,0.10)]
                        "
                      >
                        {/* Image */}

                        {item.image ? (
                          <div
                            className="
                              relative
                              aspect-[16/10]
                              overflow-hidden
                              bg-[#DCEDE4]
                            "
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              loading="lazy"
                              className="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-700
                                group-hover:scale-[1.05]
                              "
                            />

                            <div
                              className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/40
                                via-transparent
                                to-transparent
                              "
                            />

                            <span
                              className="
                                absolute
                                bottom-4
                                left-4
                                inline-flex
                                items-center
                                gap-1.5
                                bg-[#5C9A81]/90
                                px-3
                                py-1.5
                                text-[8px]
                                font-bold
                                uppercase
                                tracking-[0.12em]
                                text-white
                                backdrop-blur-sm
                              "
                            >
                              <TypeIcon />

                              {typeInfo.label}
                            </span>
                          </div>
                        ) : (
                          /* Notice without image */

                          <div
                            className="
                              flex
                              min-h-[145px]
                              items-center
                              justify-center
                              bg-[#DCEDE4]/45
                            "
                          >
                            <div
                              className="
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-full
                                bg-[#FFFFF3]
                                text-[24px]
                                text-[#5C9A81]
                              "
                            >
                              <TypeIcon />
                            </div>
                          </div>
                        )}

                        {/* Content */}

                        <div
                          className="
                            flex
                            flex-1
                            flex-col
                            p-5
                          "
                        >
                          {/* Type */}

                          {!item.image && (
                            <p
                              className="
                                text-[8px]
                                font-bold
                                uppercase
                                tracking-[0.13em]
                                text-[#5C9A81]
                              "
                            >
                              {typeInfo.label}
                            </p>
                          )}

                          {/* Title */}

                          <h3
                            className="
                              mt-2
                              text-[18px]
                              font-bold
                              leading-[1.3]
                              tracking-[-0.02em]
                              text-black
                              transition-colors
                              duration-300
                              group-hover:text-[#5C9A81]
                            "
                          >
                            {item.title}
                          </h3>

                          {/* Date */}

                          <div
                            className="
                              mt-3
                              flex
                              flex-wrap
                              items-center
                              gap-x-4
                              gap-y-2
                              text-[9px]
                              font-medium
                              text-[#4B5563]
                            "
                          >
                            <span
                              className="
                                flex
                                items-center
                                gap-1.5
                              "
                            >
                              <HiOutlineCalendar
                                className="
                                  text-[14px]
                                  text-[#5C9A81]
                                "
                              />

                              {formatDate(
                                item.date
                              )}
                            </span>

                            {item.time && (
                              <span
                                className="
                                  flex
                                  items-center
                                  gap-1.5
                                "
                              >
                                <HiOutlineClock
                                  className="
                                    text-[14px]
                                    text-[#5C9A81]
                                  "
                                />

                                {formatTime(
                                  item.time
                                )}
                              </span>
                            )}
                          </div>

                          {/* Description */}

                          <p
                            className="
                              mt-4
                              line-clamp-3
                              text-[11px]
                              leading-[1.8]
                              text-[#4B5563]
                              sm:text-[12px]
                            "
                          >
                            {item.description}
                          </p>

                          {/* Bottom */}

                          <div
                            className="
                              mt-auto
                              pt-5
                            "
                          >
                            <div
                              className="
                                flex
                                items-center
                                justify-between
                                gap-3
                                border-t
                                border-[#7FB59C]/15
                                pt-4
                              "
                            >
                              {item.location ? (
                                <div
                                  className="
                                    flex
                                    min-w-0
                                    items-center
                                    gap-1.5
                                    text-[9px]
                                    text-[#4B5563]
                                  "
                                >
                                  <HiOutlineLocationMarker
                                    className="
                                      shrink-0
                                      text-[14px]
                                      text-[#5C9A81]
                                    "
                                  />

                                  <span className="truncate">
                                    {item.location}
                                  </span>
                                </div>
                              ) : (
                                <div />
                              )}

                              <span
                                className="
                                  shrink-0
                                  text-[8px]
                                  font-semibold
                                  text-[#5C9A81]
                                "
                              >
                                {item.committeeTerm}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Hover line */}

                        <span
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-[3px]
                            w-0
                            bg-[#7FB59C]
                            transition-all
                            duration-500
                            group-hover:w-full
                          "
                        />
                      </motion.article>
                    );
                  }
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* =================================================
                EMPTY STATE
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
                mt-8
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
                  text-[24px]
                  text-[#5C9A81]
                "
              >
                <HiOutlineSearch />
              </div>

              <h3
                className="
                  mt-5
                  text-[20px]
                  font-bold
                  text-black
                "
              >
                Nothing found
              </h3>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-[450px]
                  text-[11px]
                  leading-[1.8]
                  text-[#4B5563]
                "
              >
                No events, notices or activities
                match the selected options.
              </p>

              {committeeId ? (
                <button
                  type="button"
                  onClick={clearCommitteeFilter}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    bg-[#7FB59C]
                    px-5
                    py-3
                    text-[10px]
                    font-semibold
                    text-white
                    hover:bg-[#5C9A81]
                  "
                >
                  View All Events

                  <HiOutlineArrowRight />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setActiveFilter("all");
                    setSearch("");
                  }}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    bg-[#7FB59C]
                    px-5
                    py-3
                    text-[10px]
                    font-semibold
                    text-white
                    hover:bg-[#5C9A81]
                  "
                >
                  <HiOutlineX />

                  Clear Filters
                </button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* =====================================================
          05. AUTOMATIC ARCHIVE EXPLANATION
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
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            flex
            max-w-[1200px]
            flex-col
            gap-7
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
          "
        >
          <div
            className="
              flex
              items-start
              gap-4
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#DCEDE4]
                text-[19px]
                text-[#5C9A81]
              "
            >
              <HiOutlineCalendar />
            </div>

            <div>
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#5C9A81]
                "
              >
                Event Archive
              </p>

              <h2
                className="
                  mt-2
                  text-[23px]
                  font-bold
                  tracking-[-0.025em]
                  text-black
                  sm:text-[27px]
                "
              >
                Our activities become part of{" "}

                <span className="text-[#5C9A81]">
                  our history.
                </span>
              </h2>

              <p
                className="
                  mt-2
                  max-w-[650px]
                  text-[11px]
                  leading-[1.8]
                  text-[#4B5563]
                  sm:text-[12px]
                "
              >
                Upcoming events automatically move
                into the past event archive after
                their scheduled date while previous
                committee activities remain preserved.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              clearCommitteeFilter();
              setActiveFilter("past");

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="
              group
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-2
              border
              border-[#7FB59C]
              px-5
              py-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.1em]
              text-[#5C9A81]
              transition-all
              duration-300
              hover:bg-[#7FB59C]
              hover:text-white
            "
          >
            Past Events

            <HiOutlineArrowRight
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </motion.div>
      </section>
    </main>
  );
};

export default EventsNotices;