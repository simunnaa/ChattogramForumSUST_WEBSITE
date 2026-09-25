import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiArrowRight,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineSpeakerphone,
} from "react-icons/hi";

import eventsNotices from "../../data/eventsNotices";

const EventsNoticesPreview = () => {
  const ease = [0.22, 1, 0.36, 1];

  /* =====================================================
     DATE HELPERS
  ====================================================== */

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

  const getEventStatus = (dateString) => {
    const eventDate = getLocalDateOnly(dateString);
    const today = getTodayDateOnly();

    if (eventDate < today) return "past";

    if (eventDate.getTime() === today.getTime()) {
      return "today";
    }

    return "upcoming";
  };

  const formatEventDate = (dateString) => {
    const date = getLocalDateOnly(dateString);

    return {
      day: String(date.getDate()).padStart(2, "0"),

      month: date
        .toLocaleDateString("en-US", {
          month: "short",
        })
        .toUpperCase(),
    };
  };

  const formatNoticeDate = (dateString) => {
    return getLocalDateOnly(dateString).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  /* =====================================================
     UPCOMING EVENTS
  ====================================================== */

  const upcomingEvents = [...eventsNotices]
    .filter(
      (item) =>
        item.type === "event" &&
        ["upcoming", "today"].includes(
          getEventStatus(item.date)
        )
    )
    .sort(
      (a, b) =>
        getLocalDateOnly(a.date) -
        getLocalDateOnly(b.date)
    )
    .slice(0, 2);

  /* =====================================================
     LATEST NOTICES
  ====================================================== */

  const latestNotices = [...eventsNotices]
    .filter((item) => item.type === "notice")
    .sort(
      (a, b) =>
        getLocalDateOnly(b.date) -
        getLocalDateOnly(a.date)
    )
    .slice(0, 4);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#DCEDE4]/35
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
      {/* Background decoration */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[60px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#7FB59C]/10
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-7
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                ease,
              }}
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 38,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease,
                }}
                className="
                  h-[2px]
                  bg-[#7FB59C]
                "
              />

              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#5C9A81]
                  sm:text-[12px]
                "
              >
                Stay Connected
              </p>
            </motion.div>

            <motion.h2
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
                text-[36px]
                font-bold
                leading-[1.08]
                tracking-[-0.035em]
                text-black
                sm:text-[44px]
                md:text-[48px]
                lg:text-[56px]
                xl:text-[60px]
              "
            >
              Events &
              <span className="text-[#5C9A81]">
                {" "}
                Notices
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease,
            }}
          >
            <Link
              to="/events-notices"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-[14px]
                font-semibold
                text-[#5C9A81]
              "
            >
              View All

              <HiArrowRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1.5
                "
              />
            </Link>
          </motion.div>
        </div>

        {/* Divider */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease,
          }}
          className="
            my-12
            h-px
            w-full
            origin-left
            bg-[#7FB59C]/30
            lg:my-14
          "
        />

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-[1.35fr_0.85fr]
            lg:gap-14
          "
        >
          {/* =================================================
              LEFT — UPCOMING EVENTS
          ================================================== */}

          <div>
            <div
              className="
                mb-6
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#7FB59C]
                  text-[18px]
                  text-white
                "
              >
                <HiOutlineCalendar />
              </div>

              <div>
                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#5C9A81]
                  "
                >
                  What's Coming
                </p>

                <h3
                  className="
                    text-[21px]
                    font-bold
                    text-black
                  "
                >
                  Upcoming Events
                </h3>
              </div>
            </div>

            {/* Events */}

            <div className="space-y-4">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, index) => {
                  const eventDate = formatEventDate(
                    event.date
                  );

                  const eventStatus =
                    getEventStatus(event.date);

                  return (
                    <motion.div
                      key={event.id}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease,
                      }}
                      whileHover={{
                        x: 5,
                      }}
                    >
                      <Link
                        to={`/events-notices?event=${event.id}`}
                        className="
                          group
                          relative
                          block
                          overflow-hidden
                          bg-[#FFFFF3]
                          p-5
                          transition-shadow
                          duration-300
                          hover:shadow-[0_12px_35px_rgba(92,154,129,0.10)]
                          sm:p-6
                        "
                      >
                        <div
                          className="
                            grid
                            grid-cols-[70px_1fr]
                            gap-5
                            sm:grid-cols-[82px_1fr]
                            sm:gap-6
                          "
                        >
                          {/* Date */}

                          <div
                            className="
                              flex
                              h-[76px]
                              w-[70px]
                              flex-col
                              items-center
                              justify-center
                              bg-[#DCEDE4]
                              transition-colors
                              duration-300
                              group-hover:bg-[#7FB59C]
                              sm:h-[86px]
                              sm:w-[82px]
                            "
                          >
                            <span
                              className="
                                text-[27px]
                                font-bold
                                leading-none
                                text-black
                                transition-colors
                                duration-300
                                group-hover:text-white
                                sm:text-[31px]
                              "
                            >
                              {eventDate.day}
                            </span>

                            <span
                              className="
                                mt-1
                                text-[10px]
                                font-bold
                                tracking-[0.14em]
                                text-[#5C9A81]
                                transition-colors
                                duration-300
                                group-hover:text-white
                              "
                            >
                              {eventDate.month}
                            </span>
                          </div>

                          {/* Content */}

                          <div>
                            {/* Today indicator */}

                            {eventStatus === "today" && (
                              <span
                                className="
                                  mb-2
                                  inline-flex
                                  bg-[#7FB59C]
                                  px-2
                                  py-1
                                  text-[8px]
                                  font-bold
                                  uppercase
                                  tracking-[0.12em]
                                  text-white
                                "
                              >
                                Today
                              </span>
                            )}

                            <h4
                              className="
                                text-[17px]
                                font-bold
                                leading-[1.3]
                                text-black
                                transition-colors
                                duration-300
                                group-hover:text-[#5C9A81]
                                sm:text-[19px]
                              "
                            >
                              {event.title}
                            </h4>

                            {event.description && (
                              <p
                                className="
                                  mt-2
                                  text-[12px]
                                  leading-[1.7]
                                  text-[#4B5563]
                                  sm:text-[13px]
                                "
                              >
                                {event.description}
                              </p>
                            )}

                            <div
                              className="
                                mt-4
                                flex
                                flex-wrap
                                gap-x-5
                                gap-y-2
                              "
                            >
                              {event.time && (
                                <span
                                  className="
                                    flex
                                    items-center
                                    gap-1.5
                                    text-[11px]
                                    font-medium
                                    text-[#4B5563]
                                  "
                                >
                                  <HiOutlineClock
                                    className="
                                      text-[#5C9A81]
                                    "
                                  />

                                  {event.time}
                                </span>
                              )}

                              {event.location && (
                                <span
                                  className="
                                    flex
                                    items-center
                                    gap-1.5
                                    text-[11px]
                                    font-medium
                                    text-[#4B5563]
                                  "
                                >
                                  <HiOutlineLocationMarker
                                    className="
                                      text-[#5C9A81]
                                    "
                                  />

                                  {event.location}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Arrow */}

                        <HiArrowRight
                          className="
                            absolute
                            right-5
                            top-5
                            text-[17px]
                            text-[#7FB59C]
                            opacity-0
                            transition-all
                            duration-300
                            group-hover:translate-x-1
                            group-hover:opacity-100
                          "
                        />

                        {/* Hover line */}

                        <div
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
                      </Link>
                    </motion.div>
                  );
                })
              ) : (
                <div
                  className="
                    bg-[#FFFFF3]
                    px-6
                    py-10
                    text-center
                  "
                >
                  <HiOutlineCalendar
                    className="
                      mx-auto
                      text-[30px]
                      text-[#7FB59C]
                    "
                  />

                  <p
                    className="
                      mt-3
                      text-[13px]
                      font-medium
                      text-[#4B5563]
                    "
                  >
                    No upcoming events at the moment.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* =================================================
              RIGHT — NOTICES
          ================================================== */}

          <div>
            <div
              className="
                mb-6
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#7FB59C]
                  text-[18px]
                  text-white
                "
              >
                <HiOutlineSpeakerphone />
              </div>

              <div>
                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#5C9A81]
                  "
                >
                  Latest Updates
                </p>

                <h3
                  className="
                    text-[21px]
                    font-bold
                    text-black
                  "
                >
                  Notices
                </h3>
              </div>
            </div>

            {/* Notices */}

            <div className="bg-[#FFFFF3]">
              {latestNotices.map((notice, index) => (
                <motion.div
                  key={notice.id}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease,
                  }}
                >
                  <Link
                    to={`/events-notices?notice=${notice.id}`}
                    className="
                      group
                      relative
                      block
                      border-b
                      border-[#7FB59C]/20
                      px-5
                      py-5
                      transition-colors
                      duration-300
                      hover:bg-[#DCEDE4]/25
                      sm:px-6
                    "
                  >
                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >
                      <div>
                        <div
                          className="
                            mb-2
                            flex
                            flex-wrap
                            items-center
                            gap-2
                          "
                        >
                          <span
                            className="
                              text-[10px]
                              font-semibold
                              uppercase
                              tracking-[0.1em]
                              text-[#5C9A81]
                            "
                          >
                            {notice.category ||
                              "Notice"}
                          </span>

                          <span
                            className="
                              h-1
                              w-1
                              rounded-full
                              bg-[#7FB59C]
                            "
                          />

                          <span
                            className="
                              text-[10px]
                              font-medium
                              text-[#4B5563]
                            "
                          >
                            {formatNoticeDate(
                              notice.date
                            )}
                          </span>
                        </div>

                        <h4
                          className="
                            max-w-[390px]
                            text-[14px]
                            font-semibold
                            leading-[1.5]
                            text-black
                            transition-colors
                            duration-300
                            group-hover:text-[#5C9A81]
                            sm:text-[15px]
                          "
                        >
                          {notice.title}
                        </h4>

                        {notice.description && (
                          <p
                            className="
                              mt-2
                              line-clamp-2
                              text-[11px]
                              leading-[1.6]
                              text-[#4B5563]
                            "
                          >
                            {notice.description}
                          </p>
                        )}
                      </div>

                      <HiArrowRight
                        className="
                          mt-1
                          shrink-0
                          text-[17px]
                          text-[#7FB59C]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </div>

                    {/* Left hover indicator */}

                    <div
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-0
                        w-[3px]
                        -translate-y-1/2
                        bg-[#7FB59C]
                        transition-all
                        duration-300
                        group-hover:h-[55%]
                      "
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Notice CTA */}

            <motion.div
              whileHover={{
                x: 4,
              }}
              className="mt-5"
            >
              <Link
                to="/events-notices?filter=notices"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[13px]
                  font-semibold
                  text-[#5C9A81]
                "
              >
                Browse All Notices

                <HiArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="
            mt-14
            flex
            justify-center
          "
        >
          <motion.div
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              to="/events-notices"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#7FB59C]
                px-6
                py-3.5
                text-[13px]
                font-semibold
                text-white
                transition-colors
                duration-300
                hover:bg-[#5C9A81]
                sm:text-[14px]
              "
            >
              Explore Events & Notices

              <HiArrowRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1.5
                "
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsNoticesPreview;