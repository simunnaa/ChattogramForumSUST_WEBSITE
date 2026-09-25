import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineHeart,
  HiOutlineArrowRight,
  HiOutlineUsers,
  HiOutlineEye,
  HiOutlineFlag,
  HiOutlineLightBulb,
  HiOutlineLink,
  HiOutlineCalendar,
  HiOutlineSparkles,
} from "react-icons/hi";

const About = () => {
  const ease = [0.22, 1, 0.36, 1];

  /* =====================================================
     CONNECTIONS
  ====================================================== */

  const connections = [
    {
      number: "01",
      title: "Students",
      subtitle: "Meet our current members",
      icon: HiOutlineUsers,
      path: "/members",
    },
    {
      number: "02",
      title: "Alumni",
      subtitle: "Connect with former SUSTians",
      icon: HiOutlineAcademicCap,
      path: "/alumni",
    },
    {
      number: "03",
      title: "Committee",
      subtitle: "Explore our leadership",
      icon: HiOutlineUserGroup,
      path: "/executive-committee",
    },
  ];

  /* =====================================================
     VALUES
  ====================================================== */

  const values = [
    {
      number: "01",
      icon: HiOutlineUserGroup,
      title: "Community",
      text: "Connecting students and alumni across generations through meaningful relationships.",
    },
    {
      number: "02",
      icon: HiOutlineAcademicCap,
      title: "Growth",
      text: "Supporting academic, professional and personal development through shared experiences.",
    },
    {
      number: "03",
      icon: HiOutlineHeart,
      title: "Belonging",
      text: "Creating a strong sense of connection that continues beyond university life.",
    },
  ];

  /* =====================================================
     MISSION POINTS
  ====================================================== */

  const missionPoints = [
    "Build stronger connections among students.",
    "Maintain meaningful relationships with alumni.",
    "Encourage cooperation, support and shared growth.",
    "Create opportunities for community engagement.",
  ];

  /* =====================================================
     WHAT WE DO
  ====================================================== */

  const activities = [
    {
      number: "01",
      icon: HiOutlineHeart,
      title: "Student Support",
      description:
        "Creating a supportive community where students can connect, help one another and build meaningful relationships throughout university life.",
      link: "/members",
      linkText: "Meet Our Members",
    },
    {
      number: "02",
      icon: HiOutlineCalendar,
      title: "Events & Activities",
      description:
        "Bringing members together through gatherings, programs and activities that strengthen interaction and community engagement.",
      link: "/events-notices",
      linkText: "Explore Activities",
    },
    {
      number: "03",
      icon: HiOutlineLightBulb,
      title: "Networking & Growth",
      description:
        "Encouraging communication, shared experiences and opportunities that contribute to the personal and professional growth of members.",
      link: "/executive-committee",
      linkText: "Explore Leadership",
    },
    {
      number: "04",
      icon: HiOutlineAcademicCap,
      title: "Alumni Connection",
      description:
        "Maintaining relationships with former students so knowledge, experience and community connections continue across generations.",
      link: "/alumni",
      linkText: "Explore Alumni",
    },
  ];

  return (
    <main className="bg-[#FFFFF3]">

      {/* =====================================================
          01. ABOUT HERO
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
        {/* Background decorations */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[180px]
            -top-[220px]
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
            bottom-[-180px]
            left-[-160px]
            h-[380px]
            w-[380px]
            rounded-full
            border
            border-[#7FB59C]/10
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

            <span className="text-[#7FB59C]">/</span>

            <span className="text-[#5C9A81]">
              About
            </span>
          </motion.div>

          {/* Hero content */}

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
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
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
                  About The Forum
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
                  max-w-[850px]
                  text-[44px]
                  font-bold
                  leading-[1.03]
                  tracking-[-0.045em]
                  text-black
                  sm:text-[54px]
                  md:text-[64px]
                  lg:text-[70px]
                  xl:text-[78px]
                "
              >
                A Community Built
                <br />

                <span className="text-[#5C9A81]">
                  Beyond Campus.
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
                  text-[14px]
                  leading-[1.9]
                  text-[#4B5563]
                  sm:text-[15px]
                  lg:text-[16px]
                "
              >
                Chattogram Forum, SUST brings together students and
                alumni connected by their roots, experiences and shared
                journey at Shahjalal University of Science and
                Technology.
              </p>

              <p
                className="
                  mt-4
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#5C9A81]
                "
              >
                Students • Alumni • Community
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02. OUR STORY
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
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
              grid
              grid-cols-1
              gap-14
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-20
              xl:gap-28
            "
          >
            {/* Left */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-[35px] bg-[#7FB59C]" />

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
                  Our Story
                </p>
              </div>

              <h2
                className="
                  text-[34px]
                  font-bold
                  leading-[1.1]
                  tracking-[-0.035em]
                  text-black
                  sm:text-[40px]
                  md:text-[44px]
                  lg:text-[48px]
                "
              >
                Connected by Origin.
                <br />

                <span className="text-[#5C9A81]">
                  United by SUST.
                </span>
              </h2>

              {/* =====================================
                  FUNCTIONAL CONNECTIONS
              ====================================== */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease,
                }}
                className="
                  mt-10
                  overflow-hidden
                  border
                  border-[#7FB59C]/25
                  bg-[#DCEDE4]/20
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#7FB59C]/20
                    px-5
                    py-4
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#5C9A81]
                    "
                  >
                    What Connects Us?
                  </p>

                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#7FB59C]
                    "
                  />
                </div>

                {connections.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="block"
                    >
                      <motion.div
                        whileHover={{
                          x: 5,
                          backgroundColor:
                            "rgba(220,237,228,0.75)",
                        }}
                        whileTap={{ scale: 0.99 }}
                        transition={{
                          duration: 0.22,
                        }}
                        className={`
                          group
                          flex
                          items-center
                          gap-4
                          px-5
                          py-5
                          ${
                            index !== connections.length - 1
                              ? "border-b border-[#7FB59C]/15"
                              : ""
                          }
                        `}
                      >
                        <span
                          className="
                            w-[24px]
                            text-[9px]
                            font-semibold
                            tracking-[0.12em]
                            text-[#7FB59C]
                          "
                        >
                          {item.number}
                        </span>

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
                            transition-all
                            duration-300
                            group-hover:bg-[#7FB59C]
                            group-hover:text-white
                          "
                        >
                          <Icon />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p
                            className="
                              text-[13px]
                              font-semibold
                              text-black
                              sm:text-[14px]
                            "
                          >
                            {item.title}
                          </p>

                          <p
                            className="
                              mt-1
                              text-[10px]
                              text-[#4B5563]
                              sm:text-[11px]
                            "
                          >
                            {item.subtitle}
                          </p>
                        </div>

                        <HiOutlineArrowRight
                          className="
                            -translate-x-2
                            text-[18px]
                            text-[#5C9A81]
                            opacity-40
                            transition-all
                            duration-300
                            group-hover:translate-x-0
                            group-hover:opacity-100
                          "
                        />
                      </motion.div>
                    </Link>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right story */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease,
              }}
            >
              <p
                className="
                  text-[17px]
                  font-medium
                  leading-[1.8]
                  text-black
                  sm:text-[19px]
                  lg:text-[21px]
                "
              >
                Chattogram Forum, SUST is a community that connects
                students from Chattogram studying at Shahjalal
                University of Science and Technology and maintains
                connections with former students after graduation.
              </p>

              <div
                className="
                  my-7
                  h-px
                  w-full
                  bg-[#7FB59C]/20
                "
              />

              <div
                className="
                  grid
                  grid-cols-1
                  gap-6
                  md:grid-cols-2
                "
              >
                <p
                  className="
                    text-[13px]
                    leading-[1.9]
                    text-[#4B5563]
                    sm:text-[14px]
                  "
                >
                  The Forum creates opportunities for students to
                  connect with one another, build meaningful
                  relationships and support each other throughout
                  university life.
                </p>

                <p
                  className="
                    text-[13px]
                    leading-[1.9]
                    text-[#4B5563]
                    sm:text-[14px]
                  "
                >
                  Beyond student life, the Forum preserves the
                  connection between current members and alumni,
                  creating a community whose relationships continue
                  across different generations.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease,
                }}
                whileHover={{ x: 5 }}
                className="
                  relative
                  mt-9
                  border-l-[3px]
                  border-[#7FB59C]
                  bg-[#DCEDE4]/25
                  px-5
                  py-5
                  sm:px-6
                "
              >
                <p
                  className="
                    text-[13px]
                    font-medium
                    leading-[1.8]
                    text-black
                    sm:text-[14px]
                  "
                >
                  The connection does not end with graduation.
                  Every generation becomes part of the continuing
                  story of Chattogram Forum, SUST.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* =====================================================
              CORE VALUES
          ====================================================== */}

          <div
            className="
              mt-16
              grid
              grid-cols-1
              border-l
              border-t
              border-[#7FB59C]/20
              sm:grid-cols-3
              lg:mt-20
            "
          >
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="
                    group
                    relative
                    border-b
                    border-r
                    border-[#7FB59C]/20
                    p-6
                    transition-colors
                    duration-300
                    hover:bg-[#DCEDE4]/35
                    sm:p-7
                    lg:p-9
                  "
                >
                  <motion.div
                    whileHover={{
                      rotate: -5,
                      scale: 1.08,
                    }}
                    className="
                      mb-7
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[#DCEDE4]
                      text-[20px]
                      text-[#5C9A81]
                      transition-colors
                      duration-300
                      group-hover:bg-[#7FB59C]
                      group-hover:text-white
                    "
                  >
                    <Icon />
                  </motion.div>

                  <p
                    className="
                      mb-2
                      text-[9px]
                      font-semibold
                      tracking-[0.16em]
                      text-[#7FB59C]
                    "
                  >
                    {item.number}
                  </p>

                  <h3
                    className="
                      text-[17px]
                      font-semibold
                      text-black
                      sm:text-[18px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-[310px]
                      text-[12px]
                      leading-[1.8]
                      text-[#4B5563]
                      sm:text-[13px]
                    "
                  >
                    {item.text}
                  </p>

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
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          03. MISSION & VISION
      ====================================================== */}

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
        <div
          className="
            pointer-events-none
            absolute
            -left-[180px]
            top-[100px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#7FB59C]/10
            blur-[100px]
          "
        />

        <div className="relative mx-auto max-w-[1400px]">

          {/* Header */}

          <div
            className="
              mb-12
              grid
              grid-cols-1
              gap-7
              lg:mb-16
              lg:grid-cols-[1fr_0.7fr]
              lg:items-end
              lg:gap-16
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease,
              }}
            >
              <div className="mb-5 flex items-center gap-3">
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
                  Our Direction
                </p>
              </div>

              <h2
                className="
                  text-[36px]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-black
                  sm:text-[44px]
                  md:text-[48px]
                  lg:text-[54px]
                "
              >
                Our Mission &
                <span className="text-[#5C9A81]">
                  {" "}Vision.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease,
              }}
              className="
                max-w-[500px]
                text-[13px]
                leading-[1.9]
                text-[#4B5563]
                sm:text-[14px]
              "
            >
              Our direction is centered on building lasting
              relationships, supporting students and maintaining a
              strong connection between present and future generations
              of the Forum.
            </motion.p>
          </div>

          {/* Mission + Vision */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              lg:grid-cols-2
            "
          >
            {/* Mission */}

            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              whileHover={{ y: -5 }}
              className="
                group
                relative
                overflow-hidden
                bg-[#FFFFF3]
                p-7
                sm:p-9
                lg:p-11
              "
            >
              <span
                className="
                  absolute
                  right-7
                  top-6
                  text-[11px]
                  font-semibold
                  tracking-[0.16em]
                  text-[#7FB59C]/60
                "
              >
                01
              </span>

              <div
                className="
                  mb-8
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#DCEDE4]
                  text-[25px]
                  text-[#5C9A81]
                  transition-all
                  duration-300
                  group-hover:bg-[#7FB59C]
                  group-hover:text-white
                "
              >
                <HiOutlineFlag />
              </div>

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#5C9A81]
                "
              >
                Our Mission
              </p>

              <h3
                className="
                  mt-3
                  max-w-[500px]
                  text-[26px]
                  font-bold
                  leading-[1.2]
                  tracking-[-0.025em]
                  text-black
                  sm:text-[30px]
                "
              >
                Connecting People.
                <br />
                Supporting Growth.
              </h3>

              <p
                className="
                  mt-5
                  max-w-[570px]
                  text-[13px]
                  leading-[1.9]
                  text-[#4B5563]
                  sm:text-[14px]
                "
              >
                Our mission is to strengthen the connection among
                students of Chattogram at SUST while creating an
                environment where members can support one another,
                grow together and maintain meaningful relationships
                beyond university life.
              </p>

              <div
                className="
                  mt-8
                  border-t
                  border-[#7FB59C]/20
                  pt-6
                "
              >
                {missionPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                    className="
                      flex
                      items-start
                      gap-3
                      py-2
                    "
                  >
                    <span
                      className="
                        mt-[7px]
                        h-[6px]
                        w-[6px]
                        shrink-0
                        rounded-full
                        bg-[#7FB59C]
                      "
                    />

                    <p
                      className="
                        text-[12px]
                        leading-[1.7]
                        text-[#4B5563]
                        sm:text-[13px]
                      "
                    >
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>

              <span
                className="
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
            </motion.article>

            {/* Vision */}

            <motion.article
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease,
              }}
              whileHover={{ y: -5 }}
              className="
                group
                relative
                overflow-hidden
                bg-[#5C9A81]
                p-7
                text-white
                sm:p-9
                lg:p-11
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[100px]
                  -top-[100px]
                  h-[280px]
                  w-[280px]
                  rounded-full
                  border
                  border-white/10
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-[120px]
                  right-[40px]
                  h-[260px]
                  w-[260px]
                  rounded-full
                  border
                  border-white/[0.06]
                "
              />

              <span
                className="
                  absolute
                  right-7
                  top-6
                  text-[11px]
                  font-semibold
                  tracking-[0.16em]
                  text-white/40
                "
              >
                02
              </span>

              <div
                className="
                  relative
                  mb-8
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-[25px]
                  text-white
                  transition-all
                  duration-300
                  group-hover:bg-white
                  group-hover:text-[#5C9A81]
                "
              >
                <HiOutlineEye />
              </div>

              <p
                className="
                  relative
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#DCEDE4]
                "
              >
                Our Vision
              </p>

              <h3
                className="
                  relative
                  mt-3
                  max-w-[520px]
                  text-[26px]
                  font-bold
                  leading-[1.2]
                  tracking-[-0.025em]
                  text-white
                  sm:text-[30px]
                "
              >
                One Community.
                <br />
                Across Generations.
              </h3>

              <p
                className="
                  relative
                  mt-5
                  max-w-[570px]
                  text-[13px]
                  leading-[1.9]
                  text-white/70
                  sm:text-[14px]
                "
              >
                Our vision is to build a lasting and connected
                community where every generation of Chattogram Forum,
                SUST remains part of a shared network of friendship,
                cooperation, knowledge and support.
              </p>

              <div
                className="
                  relative
                  mt-9
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  className="
                    flex
                    items-center
                    gap-3
                    border
                    border-white/15
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <HiOutlineLink
                    className="
                      shrink-0
                      text-[20px]
                      text-[#DCEDE4]
                    "
                  />

                  <div>
                    <p
                      className="
                        text-[12px]
                        font-semibold
                        text-white
                      "
                    >
                      Lasting Connection
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        text-white/50
                      "
                    >
                      Beyond graduation
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="
                    flex
                    items-center
                    gap-3
                    border
                    border-white/15
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <HiOutlineLightBulb
                    className="
                      shrink-0
                      text-[20px]
                      text-[#DCEDE4]
                    "
                  />

                  <div>
                    <p
                      className="
                        text-[12px]
                        font-semibold
                        text-white
                      "
                    >
                      Shared Future
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        text-white/50
                      "
                    >
                      Growing together
                    </p>
                  </div>
                </motion.div>
              </div>

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[4px]
                  w-0
                  bg-[#DCEDE4]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </motion.article>
          </div>

          {/* Journey */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease,
            }}
            className="
              mt-5
              flex
              flex-col
              items-start
              justify-between
              gap-5
              border
              border-[#7FB59C]/20
              bg-[#FFFFF3]
              px-6
              py-5
              sm:flex-row
              sm:items-center
              lg:px-8
            "
          >
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
                The Journey
              </p>

              <p
                className="
                  mt-2
                  text-[13px]
                  font-medium
                  text-black
                  sm:text-[14px]
                "
              >
                From supporting today's students to connecting
                tomorrow's alumni.
              </p>
            </div>

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-3
                text-[11px]
                font-semibold
                text-[#5C9A81]
              "
            >
              Students

              <HiOutlineArrowRight />

              Alumni

              <HiOutlineArrowRight />

              Generations
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          04. WHAT WE DO
      ====================================================== */}

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
        <div className="mx-auto max-w-[1400px]">

          {/* Header */}

          <div
            className="
              grid
              grid-cols-1
              gap-7
              lg:grid-cols-[1fr_0.7fr]
              lg:items-end
              lg:gap-16
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease,
              }}
            >
              <div className="mb-5 flex items-center gap-3">
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
                  What We Do
                </p>
              </div>

              <h2
                className="
                  text-[36px]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-black
                  sm:text-[44px]
                  md:text-[48px]
                  lg:text-[54px]
                "
              >
                Building Connections.
                <br />

                <span className="text-[#5C9A81]">
                  Creating Opportunities.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease,
              }}
              className="
                max-w-[500px]
                text-[13px]
                leading-[1.9]
                text-[#4B5563]
                sm:text-[14px]
              "
            >
              Chattogram Forum creates a space where students can
              connect, participate, learn and build relationships
              that continue beyond their university years.
            </motion.p>
          </div>

          {/* Cards */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              border-l
              border-t
              border-[#7FB59C]/20
              sm:grid-cols-2
              lg:mt-16
              lg:grid-cols-4
            "
          >
            {activities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[360px]
                    flex-col
                    border-b
                    border-r
                    border-[#7FB59C]/20
                    p-6
                    transition-colors
                    duration-300
                    hover:bg-[#DCEDE4]/30
                    sm:p-7
                    lg:min-h-[400px]
                    lg:p-8
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        tracking-[0.16em]
                        text-[#7FB59C]
                      "
                    >
                      {item.number}
                    </span>

                    <motion.div
                      whileHover={{
                        rotate: -5,
                        scale: 1.08,
                      }}
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-[#DCEDE4]
                        text-[21px]
                        text-[#5C9A81]
                        transition-colors
                        duration-300
                        group-hover:bg-[#7FB59C]
                        group-hover:text-white
                      "
                    >
                      <Icon />
                    </motion.div>
                  </div>

                  <div className="mt-10">
                    <h3
                      className="
                        text-[19px]
                        font-semibold
                        tracking-[-0.02em]
                        text-black
                        lg:text-[21px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-[12px]
                        leading-[1.9]
                        text-[#4B5563]
                        sm:text-[13px]
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <Link
                      to={item.link}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-[11px]
                        font-semibold
                        text-[#5C9A81]
                      "
                    >
                      {item.linkText}

                      <HiOutlineArrowRight
                        className="
                          text-[16px]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1.5
                        "
                      />
                    </Link>
                  </div>

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
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          05. COMMUNITY & LEGACY
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#5C9A81]
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
        {/* Decorations */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[150px]
            -top-[150px]
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[200px]
            left-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-white/[0.06]
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-[1400px]
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-12
              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-center
              lg:gap-20
            "
          >
            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease,
              }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="
                    h-[2px]
                    w-[38px]
                    bg-[#DCEDE4]
                  "
                />

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#DCEDE4]
                  "
                >
                  Community & Legacy
                </p>
              </div>

              <h2
                className="
                  max-w-[650px]
                  text-[38px]
                  font-bold
                  leading-[1.08]
                  tracking-[-0.04em]
                  text-white
                  sm:text-[46px]
                  md:text-[52px]
                  lg:text-[58px]
                "
              >
                Every Generation
                <br />

                <span className="text-[#DCEDE4]">
                  Adds to the Story.
                </span>
              </h2>
            </motion.div>

            {/* Right */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease,
              }}
            >
              <p
                className="
                  max-w-[620px]
                  text-[14px]
                  leading-[1.95]
                  text-white/70
                  sm:text-[15px]
                "
              >
                University years may end, but the relationships,
                experiences and memories built through the Forum
                continue. Current students become alumni, new
                generations arrive and the community continues to grow.
              </p>

              <p
                className="
                  mt-5
                  max-w-[620px]
                  text-[14px]
                  leading-[1.95]
                  text-white/70
                  sm:text-[15px]
                "
              >
                By preserving these connections, Chattogram Forum,
                SUST becomes more than a student organization — it
                becomes a shared community across generations.
              </p>

              {/* Legacy flow */}

              <div
                className="
                  mt-9
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-3
                "
              >
                {[
                  {
                    title: "Students",
                    text: "The present",
                  },
                  {
                    title: "Alumni",
                    text: "The connection",
                  },
                  {
                    title: "Legacy",
                    text: "The future",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -4,
                      backgroundColor:
                        "rgba(255,255,255,0.09)",
                    }}
                    className="
                      relative
                      border
                      border-white/15
                      bg-white/[0.04]
                      p-5
                    "
                  >
                    <p
                      className="
                        text-[9px]
                        font-semibold
                        tracking-[0.14em]
                        text-[#DCEDE4]
                      "
                    >
                      0{index + 1}
                    </p>

                    <h3
                      className="
                        mt-4
                        text-[15px]
                        font-semibold
                        text-white
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        text-white/50
                      "
                    >
                      {item.text}
                    </p>

                    {index < 2 && (
                      <HiOutlineArrowRight
                        className="
                          absolute
                          -right-[10px]
                          top-1/2
                          z-10
                          hidden
                          -translate-y-1/2
                          text-[18px]
                          text-[#DCEDE4]
                          sm:block
                        "
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          06. FINAL CTA
      ====================================================== */}

      <section
        className="
          bg-[#FFFFF3]
          px-5
          py-20
          sm:px-6
          sm:py-24
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            grid
            max-w-[1400px]
            grid-cols-1
            overflow-hidden
            border
            border-[#7FB59C]/20
            lg:grid-cols-[1fr_auto]
            lg:items-center
          "
        >
          {/* Content */}

          <div
            className="
              px-6
              py-10
              sm:px-9
              sm:py-12
              lg:px-12
            "
          >
            <div className="mb-4 flex items-center gap-3">
              <HiOutlineSparkles
                className="
                  text-[20px]
                  text-[#5C9A81]
                "
              />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#5C9A81]
                "
              >
                Explore The Community
              </p>
            </div>

            <h2
              className="
                text-[28px]
                font-bold
                tracking-[-0.03em]
                text-black
                sm:text-[34px]
                lg:text-[38px]
              "
            >
              Discover the people behind
              <span className="text-[#5C9A81]">
                {" "}Chattogram Forum, SUST.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[680px]
                text-[12px]
                leading-[1.8]
                text-[#4B5563]
                sm:text-[13px]
              "
            >
              Meet current members, explore the executive committee
              and stay connected with alumni across generations.
            </p>
          </div>

          {/* Buttons */}

          <div
            className="
              flex
              flex-col
              gap-3
              border-t
              border-[#7FB59C]/20
              bg-[#DCEDE4]/25
              p-6
              sm:flex-row
              lg:min-w-[340px]
              lg:flex-col
              lg:border-l
              lg:border-t-0
              lg:p-8
            "
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/members"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  bg-[#7FB59C]
                  px-5
                  py-3.5
                  text-[12px]
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-[#5C9A81]
                "
              >
                Meet Our Members

                <HiOutlineArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/alumni"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  border
                  border-[#7FB59C]
                  px-5
                  py-3.5
                  text-[12px]
                  font-semibold
                  text-[#5C9A81]
                  transition-colors
                  hover:bg-[#DCEDE4]
                "
              >
                Explore Alumni

                <HiOutlineArrowRight
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default About;