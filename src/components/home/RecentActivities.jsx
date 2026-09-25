import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiArrowRight,
  HiOutlineCalendar,
} from "react-icons/hi";

import eventsNotices from "../../data/eventsNotices";

const RecentActivities = () => {
  const ease = [0.22, 1, 0.36, 1];

  /* =====================================================
     DATE HELPERS
  ====================================================== */

  const getLocalDateOnly = (dateString) => {
    const [year, month, day] = dateString
      .split("-")
      .map(Number);

    return new Date(year, month - 1, day);
  };

  const formatDate = (dateString) => {
    const date = getLocalDateOnly(dateString);

    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  /* =====================================================
     GET LATEST 4 ACTIVITIES

     Shared source:
     src/data/eventsNotices.js
  ====================================================== */

  const activities = [...eventsNotices]
    .filter((item) => item.type === "activity")
    .sort(
      (a, b) =>
        getLocalDateOnly(b.date) -
        getLocalDateOnly(a.date)
    )
    .slice(0, 4);

  const featuredActivity = activities[0];

  const otherActivities = activities.slice(1);

  /* =====================================================
     EMPTY STATE
  ====================================================== */

  if (!featuredActivity) {
    return (
      <section
        className="
          bg-[#FFFFF3]
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
        <div className="mx-auto max-w-[1400px]">
          <div
            className="
              border
              border-[#7FB59C]/20
              bg-[#DCEDE4]/20
              px-6
              py-16
              text-center
            "
          >
            <h3
              className="
                text-[22px]
                font-bold
                text-black
              "
            >
              No recent activities
            </h3>

            <p
              className="
                mx-auto
                mt-3
                max-w-[450px]
                text-[13px]
                leading-[1.8]
                text-[#4B5563]
              "
            >
              Recent activities of Chattogram Forum,
              SUST will appear here when they are
              available.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFFFF3]
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
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[150px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#7FB59C]/[0.07]
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
            {/* Label */}

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
                Our Journey
              </p>
            </motion.div>

            {/* Heading */}

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
              Recent

              <span className="text-[#5C9A81]">
                {" "}
                Activities
              </span>
            </motion.h2>
          </div>

          {/* View All */}

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
              to="/events-notices?filter=activities"
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
              View All Activities

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

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

        <motion.p
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
            delay: 0.15,
            ease,
          }}
          className="
            mt-6
            max-w-[650px]
            text-[14px]
            leading-[1.9]
            text-[#4B5563]
            sm:text-[15px]
          "
        >
          A glimpse into the programs, gatherings and
          moments that continue to shape the story of
          Chattogram Forum, SUST.
        </motion.p>

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
            bg-[#7FB59C]/25
            lg:my-14
          "
        />

        {/* =====================================================
            ACTIVITIES GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[1.25fr_0.75fr]
            lg:gap-7
          "
        >
          {/* =====================================================
              FEATURED ACTIVITY
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
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
              duration: 0.7,
              ease,
            }}
            whileHover={{
              y: -4,
            }}
            className="
              min-h-[430px]
              sm:min-h-[500px]
              lg:min-h-[600px]
            "
          >
            <Link
              to={`/events-notices?activity=${featuredActivity.id}`}
              aria-label={`View ${featuredActivity.title}`}
              className="
                group
                relative
                block
                h-full
                min-h-[430px]
                cursor-pointer
                overflow-hidden
                bg-[#DCEDE4]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#7FB59C]
                focus-visible:ring-offset-2
                sm:min-h-[500px]
                lg:min-h-[600px]
              "
            >
              {/* Image */}

              <img
                src={featuredActivity.image}
                alt={featuredActivity.title}
                loading="lazy"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[900ms]
                  ease-out
                  group-hover:scale-[1.045]
                "
              />

              {/* Image Overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                "
              />

              {/* Category */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  bg-[#FFFFF3]/90
                  px-3
                  py-2
                  backdrop-blur-[4px]
                  sm:left-7
                  sm:top-7
                "
              >
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.13em]
                    text-[#5C9A81]
                  "
                >
                  {featuredActivity.category ||
                    "Activity"}
                </p>
              </div>

              {/* Content */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-5
                  sm:p-7
                  lg:p-9
                "
              >
                {/* Date */}

                <div
                  className="
                    mb-4
                    flex
                    items-center
                    gap-2
                    text-white/80
                  "
                >
                  <HiOutlineCalendar
                    className="
                      text-[#BFDCCF]
                    "
                  />

                  <span
                    className="
                      text-[11px]
                      font-medium
                      sm:text-[12px]
                    "
                  >
                    {formatDate(
                      featuredActivity.date
                    )}
                  </span>
                </div>

                {/* Title */}

                <h3
                  className="
                    max-w-[600px]
                    text-[28px]
                    font-bold
                    leading-[1.1]
                    text-white
                    sm:text-[34px]
                    lg:text-[40px]
                  "
                >
                  {featuredActivity.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-4
                    max-w-[580px]
                    text-[13px]
                    leading-[1.8]
                    text-white/80
                    sm:text-[14px]
                  "
                >
                  {featuredActivity.description}
                </p>

                {/* Committee */}

                {featuredActivity.committeeTerm && (
                  <p
                    className="
                      mt-3
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.1em]
                      text-[#BFDCCF]
                    "
                  >
                    Committee{" "}
                    {featuredActivity.committeeTerm}
                  </p>
                )}

                {/* View Activity */}

                <div
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-[13px]
                    font-semibold
                    text-white
                  "
                >
                  View Activity

                  <HiArrowRight
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1.5
                    "
                  />
                </div>
              </div>

              {/* Bottom Hover Accent */}

              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  h-[4px]
                  w-0
                  bg-[#7FB59C]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </Link>
          </motion.div>

          {/* =====================================================
              SMALL ACTIVITIES
          ====================================================== */}

          <div className="grid gap-5">
            {otherActivities.map(
              (activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
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
                    x: -5,
                  }}
                >
                  {/* Entire card clickable */}

                  <Link
                    to={`/events-notices?activity=${activity.id}`}
                    aria-label={`View ${activity.title}`}
                    className="
                      group
                      grid
                      min-h-[180px]
                      cursor-pointer
                      grid-cols-[38%_62%]
                      overflow-hidden
                      bg-[#DCEDE4]/35
                      transition-colors
                      duration-300
                      hover:bg-[#DCEDE4]/60
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#7FB59C]
                    "
                  >
                    {/* Image */}

                    <div
                      className="
                        relative
                        overflow-hidden
                        bg-[#DCEDE4]
                      "
                    >
                      <img
                        src={activity.image}
                        alt={activity.title}
                        loading="lazy"
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.07]
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-[#7FB59C]/5
                        "
                      />

                      {/* Image Accent */}

                      <span
                        className="
                          pointer-events-none
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
                    </div>

                    {/* Information */}

                    <div
                      className="
                        flex
                        min-w-0
                        flex-col
                        justify-center
                        px-4
                        py-5
                        sm:px-5
                        lg:px-6
                      "
                    >
                      {/* Category + Date */}

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
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.1em]
                            text-[#5C9A81]
                            sm:text-[10px]
                          "
                        >
                          {activity.category ||
                            "Activity"}
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
                            text-[9px]
                            text-[#4B5563]
                            sm:text-[10px]
                          "
                        >
                          {formatDate(
                            activity.date
                          )}
                        </span>
                      </div>

                      {/* Title */}

                      <h3
                        className="
                          text-[15px]
                          font-bold
                          leading-[1.3]
                          text-black
                          transition-colors
                          duration-300
                          group-hover:text-[#5C9A81]
                          sm:text-[17px]
                          lg:text-[18px]
                        "
                      >
                        {activity.title}
                      </h3>

                      {/* Description */}

                      <p
                        className="
                          mt-2
                          line-clamp-2
                          text-[11px]
                          leading-[1.7]
                          text-[#4B5563]
                          sm:text-[12px]
                        "
                      >
                        {activity.description}
                      </p>

                      {/* Committee */}

                      {activity.committeeTerm && (
                        <p
                          className="
                            mt-2
                            text-[8px]
                            font-medium
                            uppercase
                            tracking-[0.08em]
                            text-[#5C9A81]/80
                          "
                        >
                          Committee{" "}
                          {activity.committeeTerm}
                        </p>
                      )}

                      {/* View */}

                      <div
                        className="
                          mt-4
                          flex
                          items-center
                          gap-2
                          text-[11px]
                          font-semibold
                          text-[#5C9A81]
                        "
                      >
                        View Activity

                        <HiArrowRight
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1.5
                          "
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            )}
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
            mt-12
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
              to="/events-notices?filter=activities"
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
              Explore More Activities

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

export default RecentActivities;