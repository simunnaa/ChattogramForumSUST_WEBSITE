import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineAcademicCap,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineOfficeBuilding,
  HiOutlineArrowRight,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineHeart,
} from "react-icons/hi";

import { FaLinkedinIn } from "react-icons/fa";

// Shared advisor data
import advisors from "../data/advisors";

const Advisors = () => {
  const ease = [0.22, 1, 0.36, 1];

  // Only show active advisors and respect admin/display order
  const activeAdvisors = [...advisors]
    .filter((advisor) => advisor.active !== false)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  const advisoryRoles = [
    {
      number: "01",
      icon: HiOutlineLightBulb,
      title: "Guidance",
      text: "Providing thoughtful advice and direction for the Forum's activities and long-term development.",
    },
    {
      number: "02",
      icon: HiOutlineUserGroup,
      title: "Mentorship",
      text: "Supporting students and committee members as they develop leadership, responsibility and community engagement.",
    },
    {
      number: "03",
      icon: HiOutlineHeart,
      title: "Support",
      text: "Helping maintain the values, relationships and community spirit that connect generations of the Forum.",
    },
  ];

  return (
    <main className="bg-[#FFFFF3]">
      {/* =====================================================
          01. PAGE HERO
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
        {/* Background Decoration */}

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
            -bottom-[180px]
            left-[15%]
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

            <span className="text-[#5C9A81]">Advisors</span>
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
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#5C9A81]
                    sm:text-[11px]
                  "
                >
                  Our Advisors
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
                Guidance That
                <br />

                <span className="text-[#5C9A81]">
                  Shapes Our Journey.
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
                Our advisors provide valuable guidance, mentorship and support
                to Chattogram Forum, SUST, helping the community grow while
                preserving its values and purpose.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <HiOutlineAcademicCap
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
                  Guidance • Mentorship • Support
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02. ADVISOR DIRECTORY
      ====================================================== */}

      <section
        className="
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
          {/* Section Header */}

          <div
            className="
              mb-12
              grid
              grid-cols-1
              gap-6
              lg:mb-14
              lg:grid-cols-[1fr_0.65fr]
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
                  "
                >
                  Meet Our Advisors
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
                Experience,
                <br />

                <span className="text-[#5C9A81]">
                  Guidance & Support.
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
              The advisors of Chattogram Forum, SUST contribute their
              experience and perspective to support the Forum and its members.
            </motion.p>
          </div>

          {/* =====================================================
              SMALLER ADVISOR CARDS
          ====================================================== */}

          <div
            className="
              mx-auto
              grid
              max-w-[1050px]
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-6
            "
          >
            {activeAdvisors.map((advisor, index) => (
              <motion.article
                key={advisor.id}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.05,
                  ease,
                }}
                whileHover={{
                  y: -6,
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
                  hover:shadow-[0_16px_35px_rgba(92,154,129,0.10)]
                "
              >
                {/* PHOTO */}

                <div
                  className="
                    relative
                    aspect-[4/3.8]
                    w-full
                    overflow-hidden
                    bg-[#DCEDE4]
                  "
                >
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-top
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.05]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/25
                      via-transparent
                      to-transparent
                      opacity-60
                      transition-opacity
                      duration-300
                      group-hover:opacity-40
                    "
                  />

                  <div className="absolute bottom-3 left-3">
                    <span
                      className="
                        inline-flex
                        bg-[#5C9A81]/90
                        px-2.5
                        py-1
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-white
                        backdrop-blur-sm
                      "
                    >
                      Forum Advisor
                    </span>
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
                </div>

                {/* CARD CONTENT */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-4
                    sm:p-5
                  "
                >
                  {/* Name */}

                  <div>
                    <h3
                      className="
                        text-[18px]
                        font-bold
                        tracking-[-0.025em]
                        text-black
                        transition-colors
                        duration-300
                        group-hover:text-[#5C9A81]
                        sm:text-[19px]
                      "
                    >
                      {advisor.name}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        font-semibold
                        text-[#5C9A81]
                        sm:text-[12px]
                      "
                    >
                      {advisor.designation}
                    </p>
                  </div>

                  {/* Academic Information */}

                  <div className="mt-4 space-y-2">
                    {/* Department */}

                    <div className="flex items-start gap-2">
                      <div
                        className="
                          mt-[1px]
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#DCEDE4]/70
                          text-[12px]
                          text-[#5C9A81]
                        "
                      >
                        <HiOutlineAcademicCap />
                      </div>

                      <p
                        className="
                          pt-[3px]
                          text-[10px]
                          leading-[1.5]
                          text-[#4B5563]
                          sm:text-[11px]
                        "
                      >
                        {advisor.department}
                      </p>
                    </div>

                    {/* Organization */}

                    <div className="flex items-start gap-2">
                      <div
                        className="
                          mt-[1px]
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#DCEDE4]/70
                          text-[12px]
                          text-[#5C9A81]
                        "
                      >
                        <HiOutlineOfficeBuilding />
                      </div>

                      <p
                        className="
                          pt-[3px]
                          text-[10px]
                          leading-[1.5]
                          text-[#4B5563]
                          sm:text-[11px]
                        "
                      >
                        {advisor.organization}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}

                  <div className="my-4 h-px w-full bg-[#7FB59C]/15" />

                  {/* Bio */}

                  <p
                    className="
                      text-[10px]
                      leading-[1.75]
                      text-[#4B5563]
                      sm:text-[11px]
                    "
                  >
                    {advisor.bio}
                  </p>

                  {/* CONTACT INFORMATION */}

                  <div className="mt-auto pt-5">
                    <div
                      className="
                        border-t
                        border-[#7FB59C]/15
                        pt-4
                      "
                    >
                      <p
                        className="
                          mb-3
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                          text-[#5C9A81]
                        "
                      >
                        Contact Information
                      </p>

                      <div className="space-y-1">
                        {/* Email */}

                        {advisor.email && (
                          <motion.a
                            href={`mailto:${advisor.email}`}
                            whileHover={{ x: 3 }}
                            className="
                              group/contact
                              flex
                              min-h-[36px]
                              items-center
                              gap-2.5
                              border
                              border-transparent
                              px-1.5
                              transition-colors
                              duration-300
                              hover:border-[#7FB59C]/15
                              hover:bg-[#DCEDE4]/30
                            "
                          >
                            <div
                              className="
                                flex
                                h-7
                                w-7
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#DCEDE4]
                                text-[12px]
                                text-[#5C9A81]
                                transition-all
                                duration-300
                                group-hover/contact:bg-[#7FB59C]
                                group-hover/contact:text-white
                              "
                            >
                              <HiOutlineMail />
                            </div>

                            <span
                              className="
                                min-w-0
                                flex-1
                                truncate
                                text-[10px]
                                text-[#4B5563]
                                transition-colors
                                group-hover/contact:text-[#5C9A81]
                              "
                            >
                              {advisor.email}
                            </span>
                          </motion.a>
                        )}

                        {/* Phone */}

                        {advisor.phone && (
                          <motion.a
                            href={`tel:${advisor.phone.replace(/\s/g, "")}`}
                            whileHover={{ x: 3 }}
                            className="
                              group/contact
                              flex
                              min-h-[36px]
                              items-center
                              gap-2.5
                              border
                              border-transparent
                              px-1.5
                              transition-colors
                              duration-300
                              hover:border-[#7FB59C]/15
                              hover:bg-[#DCEDE4]/30
                            "
                          >
                            <div
                              className="
                                flex
                                h-7
                                w-7
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#DCEDE4]
                                text-[12px]
                                text-[#5C9A81]
                                transition-all
                                duration-300
                                group-hover/contact:bg-[#7FB59C]
                                group-hover/contact:text-white
                              "
                            >
                              <HiOutlinePhone />
                            </div>

                            <span
                              className="
                                flex-1
                                text-[10px]
                                text-[#4B5563]
                                transition-colors
                                group-hover/contact:text-[#5C9A81]
                              "
                            >
                              {advisor.phone}
                            </span>
                          </motion.a>
                        )}

                        {/* LinkedIn */}

                        {advisor.linkedin && (
                          <motion.a
                            href={advisor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 3 }}
                            className="
                              group/contact
                              flex
                              min-h-[36px]
                              items-center
                              gap-2.5
                              border
                              border-transparent
                              px-1.5
                              transition-colors
                              duration-300
                              hover:border-[#7FB59C]/15
                              hover:bg-[#DCEDE4]/30
                            "
                          >
                            <div
                              className="
                                flex
                                h-7
                                w-7
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#DCEDE4]
                                text-[11px]
                                text-[#5C9A81]
                                transition-all
                                duration-300
                                group-hover/contact:bg-[#7FB59C]
                                group-hover/contact:text-white
                              "
                            >
                              <FaLinkedinIn />
                            </div>

                            <span
                              className="
                                flex-1
                                text-[10px]
                                text-[#4B5563]
                                transition-colors
                                group-hover/contact:text-[#5C9A81]
                              "
                            >
                              LinkedIn Profile
                            </span>

                            <HiOutlineArrowRight
                              className="
                                text-[12px]
                                text-[#7FB59C]
                                transition-transform
                                duration-300
                                group-hover/contact:translate-x-1
                              "
                            />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left Hover Accent */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    h-0
                    w-[3px]
                    bg-[#7FB59C]
                    transition-all
                    duration-500
                    group-hover:h-full
                  "
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          03. ROLE OF OUR ADVISORS
      ====================================================== */}

      <section
        className="
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
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="
              mx-auto
              max-w-[760px]
              text-center
            "
          >
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#5C9A81]
              "
            >
              Their Role
            </p>

            <h2
              className="
                mt-4
                text-[34px]
                font-bold
                leading-[1.1]
                tracking-[-0.035em]
                text-black
                sm:text-[42px]
                lg:text-[48px]
              "
            >
              More Than Advisors.
              <span className="text-[#5C9A81]"> Mentors.</span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[650px]
                text-[12px]
                leading-[1.9]
                text-[#4B5563]
                sm:text-[13px]
              "
            >
              Their experience and guidance help the Forum make thoughtful
              decisions while supporting the growth of its students and
              community.
            </p>
          </motion.div>

          {/* Role Cards */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              border-l
              border-t
              border-[#7FB59C]/20
              sm:grid-cols-3
              lg:mt-16
            "
          >
            {advisoryRoles.map((role, index) => {
              const Icon = role.icon;

              return (
                <motion.article
                  key={role.title}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease,
                  }}
                  whileHover={{ y: -4 }}
                  className="
                    group
                    relative
                    border-b
                    border-r
                    border-[#7FB59C]/20
                    bg-[#FFFFF3]/50
                    p-7
                    transition-colors
                    duration-300
                    hover:bg-[#FFFFF3]
                    lg:p-10
                  "
                >
                  <div className="flex items-start justify-between">
                    <div
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
                        transition-all
                        duration-300
                        group-hover:bg-[#7FB59C]
                        group-hover:text-white
                      "
                    >
                      <Icon />
                    </div>

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        tracking-[0.14em]
                        text-[#7FB59C]
                      "
                    >
                      {role.number}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-8
                      text-[18px]
                      font-semibold
                      text-black
                      sm:text-[20px]
                    "
                  >
                    {role.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-[330px]
                      text-[12px]
                      leading-[1.85]
                      text-[#4B5563]
                      sm:text-[13px]
                    "
                  >
                    {role.text}
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
          04. FINAL CTA
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
          initial={{
            opacity: 0,
            y: 30,
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
            max-w-[1400px]
            flex-col
            gap-8
            border
            border-[#7FB59C]/20
            px-6
            py-10
            sm:px-9
            md:flex-row
            md:items-center
            md:justify-between
            lg:px-12
            lg:py-12
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#5C9A81]
              "
            >
              Our Leadership
            </p>

            <h2
              className="
                mt-3
                max-w-[700px]
                text-[27px]
                font-bold
                tracking-[-0.03em]
                text-black
                sm:text-[32px]
                lg:text-[36px]
              "
            >
              Meet the students leading the
              <span className="text-[#5C9A81]"> Forum forward.</span>
            </h2>

            <p
              className="
                mt-3
                max-w-[650px]
                text-[12px]
                leading-[1.8]
                text-[#4B5563]
                sm:text-[13px]
              "
            >
              Explore the current executive committee and learn about the
              members responsible for organizing and representing Chattogram
              Forum, SUST.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0"
          >
            <Link
              to="/executive-committee"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                bg-[#7FB59C]
                px-6
                py-3.5
                text-[12px]
                font-semibold
                text-white
                transition-colors
                duration-300
                hover:bg-[#5C9A81]
                sm:text-[13px]
              "
            >
              Executive Committee

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

export default Advisors;