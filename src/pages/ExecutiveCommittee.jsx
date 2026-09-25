import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineAcademicCap,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlineArrowRight,
  HiOutlineChevronDown,
  HiOutlineBadgeCheck,
  HiOutlineFlag,
  HiOutlineLightBulb,
  HiOutlineHeart,
  HiOutlinePhotograph,
} from "react-icons/hi";

import { FaFacebookF } from "react-icons/fa";

import committees, {
  currentCommittee,
} from "../data/committees";

const ExecutiveCommittee = () => {
  const ease = [0.22, 1, 0.36, 1];

  // =====================================================
  // LEADERSHIP VALUES
  // =====================================================

  const leadershipRoles = [
    {
      icon: HiOutlineFlag,
      title: "Leadership",
      text: "Representing the Forum and guiding its activities with responsibility and purpose.",
    },
    {
      icon: HiOutlineLightBulb,
      title: "Initiative",
      text: "Planning meaningful programs, events and activities for the Chattogram Forum community.",
    },
    {
      icon: HiOutlineHeart,
      title: "Community",
      text: "Strengthening the connection among students, alumni and the wider Forum family.",
    },
  ];

  // =====================================================
  // STATE
  // =====================================================

  const [selectedCommitteeId, setSelectedCommitteeId] = useState(
    currentCommittee.id
  );

  const [selectorOpen, setSelectorOpen] = useState(false);

  const selectedCommittee =
    committees.find(
      (committee) => committee.id === selectedCommitteeId
    ) || currentCommittee;

  // =====================================================
  // FEATURED LEADERS
  // =====================================================

  const president = selectedCommittee.members.find(
    (member) => member.position === "President"
  );

  const generalSecretary = selectedCommittee.members.find(
    (member) => member.position === "General Secretary"
  );

  const otherMembers = selectedCommittee.members.filter(
    (member) =>
      member.position !== "President" &&
      member.position !== "General Secretary"
  );

  // =====================================================
  // MEMBER IMAGE FALLBACK
  // =====================================================

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

  // =====================================================
  // CONTACT LINKS
  // =====================================================

  const ContactLinks = ({ member }) => {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {/* Email */}

        {member.email && (
          <motion.a
            href={`mailto:${member.email}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Email ${member.name}`}
            title={member.email}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#7FB59C]/20
              bg-[#DCEDE4]/60
              text-[15px]
              text-[#5C9A81]
              transition-all
              duration-300
              hover:border-[#7FB59C]
              hover:bg-[#7FB59C]
              hover:text-white
            "
          >
            <HiOutlineMail />
          </motion.a>
        )}

        {/* Phone */}

        {member.phone && (
          <motion.a
            href={`tel:${member.phone.replace(/\s/g, "")}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Call ${member.name}`}
            title={member.phone}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#7FB59C]/20
              bg-[#DCEDE4]/60
              text-[15px]
              text-[#5C9A81]
              transition-all
              duration-300
              hover:border-[#7FB59C]
              hover:bg-[#7FB59C]
              hover:text-white
            "
          >
            <HiOutlinePhone />
          </motion.a>
        )}

        {/* Facebook */}

        {member.facebook && (
          <motion.a
            href={member.facebook}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`${member.name} Facebook profile`}
            title="Facebook Profile"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#7FB59C]/20
              bg-[#DCEDE4]/60
              text-[13px]
              text-[#5C9A81]
              transition-all
              duration-300
              hover:border-[#7FB59C]
              hover:bg-[#7FB59C]
              hover:text-white
            "
          >
            <FaFacebookF />
          </motion.a>
        )}
      </div>
    );
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
        {/* Background Decorations */}

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
              Executive Committee
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
                  Executive Committee
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
                  text-[43px]
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
                Leadership That Moves
                <br />

                <span className="text-[#5C9A81]">
                  The Forum Forward.
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
                Meet the students responsible for leading,
                organizing and representing Chattogram Forum,
                SUST while strengthening the connection between
                members and the wider community.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <HiOutlineUserGroup
                  className="text-[18px] text-[#5C9A81]"
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
                  Leadership • Service • Community
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02. COMMITTEE SELECTOR
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
        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            flex-col
            gap-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* Selected Committee */}

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
              Viewing Committee
            </p>

            <div className="mt-1.5 flex flex-wrap items-center gap-2">
              <h2
                className="
                  text-[21px]
                  font-bold
                  tracking-[-0.025em]
                  text-black
                  sm:text-[23px]
                "
              >
                {selectedCommittee.term}
              </h2>

              {selectedCommittee.current && (
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1
                    bg-[#DCEDE4]
                    px-2.5
                    py-1
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#5C9A81]
                  "
                >
                  <HiOutlineBadgeCheck className="text-[13px]" />
                  Current
                </span>
              )}
            </div>

            {/* View Activities */}

            <motion.div
              className="mt-4"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={`/events-notices?committee=${
                  selectedCommittee.id
                }&term=${encodeURIComponent(
                  selectedCommittee.term
                )}`}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  border
                  border-[#7FB59C]
                  bg-transparent
                  px-4
                  py-2.5
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
                <HiOutlinePhotograph className="text-[15px]" />

                View Activities

                <HiOutlineArrowRight
                  className="
                    text-[14px]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </div>

          {/* Committee Dropdown */}

          <div className="relative w-full md:w-[250px]">
            <p
              className="
                mb-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#4B5563]
              "
            >
              Change Committee
            </p>

            <button
              type="button"
              onClick={() => setSelectorOpen((prev) => !prev)}
              className="
                flex
                w-full
                items-center
                justify-between
                border
                border-[#7FB59C]/30
                bg-[#FFFFF3]
                px-4
                py-3.5
                text-left
                transition-colors
                duration-200
                hover:border-[#7FB59C]
              "
            >
              <div className="flex items-center gap-2.5">
                <HiOutlineCalendar
                  className="text-[17px] text-[#5C9A81]"
                />

                <span className="text-[12px] font-semibold text-black">
                  {selectedCommittee.term}
                </span>
              </div>

              <HiOutlineChevronDown
                className={`
                  text-[17px]
                  text-[#5C9A81]
                  transition-transform
                  duration-300
                  ${selectorOpen ? "rotate-180" : ""}
                `}
              />
            </button>

            <AnimatePresence>
              {selectorOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    absolute
                    right-0
                    top-[calc(100%+8px)]
                    z-40
                    w-full
                    border
                    border-[#7FB59C]/20
                    bg-[#FFFFF3]
                    p-1.5
                    shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                  "
                >
                  {committees.map((committee) => (
                    <button
                      key={committee.id}
                      type="button"
                      onClick={() => {
                        setSelectedCommitteeId(committee.id);
                        setSelectorOpen(false);
                      }}
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        px-3
                        py-3
                        text-left
                        text-[11px]
                        font-medium
                        transition-colors
                        duration-200

                        ${
                          selectedCommitteeId === committee.id
                            ? "bg-[#DCEDE4]/70 text-[#5C9A81]"
                            : "text-[#4B5563] hover:bg-[#DCEDE4]/35 hover:text-[#5C9A81]"
                        }
                      `}
                    >
                      <span>{committee.term}</span>

                      {committee.current && (
                        <span
                          className="
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.1em]
                            text-[#5C9A81]
                          "
                        >
                          Current
                        </span>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =====================================================
          03. COMMITTEE MEMBERS
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
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCommittee.id}
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
                y: -15,
              }}
              transition={{
                duration: 0.4,
                ease,
              }}
            >
              {/* Section Header */}

              <div
                className="
                  mb-12
                  flex
                  flex-col
                  gap-5
                  md:flex-row
                  md:items-end
                  md:justify-between
                "
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-[2px] w-[38px] bg-[#7FB59C]" />

                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#5C9A81]
                      "
                    >
                      {selectedCommittee.current
                        ? "Current Leadership"
                        : "Committee Archive"}
                    </p>
                  </div>

                  <h2
                    className="
                      text-[34px]
                      font-bold
                      tracking-[-0.04em]
                      text-black
                      sm:text-[42px]
                      lg:text-[48px]
                    "
                  >
                    Executive Committee{" "}

                    <span className="text-[#5C9A81]">
                      {selectedCommittee.term}
                    </span>
                  </h2>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    font-medium
                    text-[#4B5563]
                  "
                >
                  <HiOutlineUserGroup
                    className="text-[17px] text-[#5C9A81]"
                  />

                  {selectedCommittee.members.length} Committee Members
                </div>
              </div>

              {/* =====================================================
                  PRESIDENT + GENERAL SECRETARY
              ====================================================== */}

              <div
                className="
                  mx-auto
                  grid
                  max-w-[960px]
                  grid-cols-1
                  gap-6
                  md:grid-cols-2
                "
              >
                {[president, generalSecretary]
                  .filter(Boolean)
                  .map((member) => (
                    <motion.article
                      key={member.id}
                      whileHover={{
                        y: -6,
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                        border
                        border-[#7FB59C]/25
                        bg-[#FFFFF3]
                        transition-all
                        duration-300
                        hover:border-[#7FB59C]/60
                        hover:shadow-[0_18px_45px_rgba(92,154,129,0.12)]
                      "
                    >
                      {/* Photo */}

                      <div
                        className="
                          relative
                          aspect-[16/11]
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
                            handleImageError(event, member)
                          }
                          className="
                            h-full
                            w-full
                            object-cover
                            object-top
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.04]
                          "
                        />

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/60
                            via-black/5
                            to-transparent
                          "
                        />

                        <div
                          className="
                            absolute
                            bottom-5
                            left-5
                            right-5
                          "
                        >
                          <span
                            className="
                              inline-flex
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
                            {member.position}
                          </span>

                          <h3
                            className="
                              mt-2
                              text-[22px]
                              font-bold
                              tracking-[-0.03em]
                              text-white
                              sm:text-[24px]
                            "
                          >
                            {member.name}
                          </h3>
                        </div>
                      </div>

                      {/* Information */}

                      <div className="p-5 sm:p-6">
                        <div className="flex items-start gap-3">
                          <div
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#DCEDE4]
                              text-[#5C9A81]
                            "
                          >
                            <HiOutlineAcademicCap />
                          </div>

                          <div>
                            <p className="text-[12px] font-semibold text-black">
                              {member.department}
                            </p>

                            <p className="mt-1 text-[10px] text-[#4B5563]">
                              Session {member.session}
                            </p>
                          </div>
                        </div>

                        {/* Contact */}

                        <div
                          className="
                            mt-5
                            flex
                            items-center
                            justify-between
                            border-t
                            border-[#7FB59C]/15
                            pt-5
                          "
                        >
                          <p
                            className="
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.14em]
                              text-[#5C9A81]
                            "
                          >
                            Contact
                          </p>

                          <ContactLinks member={member} />
                        </div>
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
                  ))}
              </div>

              {/* =====================================================
                  OTHER EXECUTIVE MEMBERS
              ====================================================== */}

              {otherMembers.length > 0 && (
                <div className="mt-20">
                  <div className="mb-9 flex items-center gap-4">
                    <h3
                      className="
                        shrink-0
                        text-[20px]
                        font-bold
                        tracking-[-0.025em]
                        text-black
                        sm:text-[23px]
                      "
                    >
                      Executive Members
                    </h3>

                    <div className="h-px w-full bg-[#7FB59C]/20" />
                  </div>

                  {/* Cards */}

                  <div
                    className="
                      mx-auto
                      grid
                      max-w-[1120px]
                      grid-cols-1
                      gap-6
                      sm:grid-cols-2
                      lg:grid-cols-3
                    "
                  >
                    {otherMembers.map((member, index) => (
                      <motion.article
                        key={member.id}
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
                          delay: index * 0.05,
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
                          hover:shadow-[0_16px_40px_rgba(92,154,129,0.11)]
                        "
                      >
                        {/* Medium Photo */}

                        <div
                          className="
                            relative
                            aspect-[4/3]
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
                              handleImageError(event, member)
                            }
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
                              from-black/35
                              via-transparent
                              to-transparent
                            "
                          />

                          {/* Position */}

                          <div
                            className="
                              absolute
                              bottom-4
                              left-4
                              right-4
                            "
                          >
                            <span
                              className="
                                inline-flex
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
                              {member.position}
                            </span>
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
                        </div>

                        {/* Member Information */}

                        <div className="flex flex-1 flex-col p-5">
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
                            {member.name}
                          </h3>

                          <p
                            className="
                              mt-1
                              text-[11px]
                              font-semibold
                              text-[#5C9A81]
                            "
                          >
                            {member.position}
                          </p>

                          {/* Department */}

                          <div className="mt-4 flex items-start gap-2.5">
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
                                text-[14px]
                                text-[#5C9A81]
                              "
                            >
                              <HiOutlineAcademicCap />
                            </div>

                            <div>
                              <p
                                className="
                                  text-[11px]
                                  leading-[1.6]
                                  text-[#4B5563]
                                "
                              >
                                {member.department}
                              </p>

                              <p
                                className="
                                  mt-0.5
                                  text-[10px]
                                  text-[#4B5563]/80
                                "
                              >
                                Session {member.session}
                              </p>
                            </div>
                          </div>

                          {/* Contact */}

                          <div className="mt-auto pt-5">
                            <div
                              className="
                                flex
                                items-center
                                justify-between
                                border-t
                                border-[#7FB59C]/15
                                pt-4
                              "
                            >
                              <span
                                className="
                                  text-[9px]
                                  font-semibold
                                  uppercase
                                  tracking-[0.13em]
                                  text-[#5C9A81]
                                "
                              >
                                Contact
                              </span>

                              <ContactLinks member={member} />
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
              )}

              {/* =====================================================
                  COMMITTEE ACTIVITIES
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
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease,
                }}
                className="
                  mx-auto
                  mt-16
                  flex
                  max-w-[1120px]
                  flex-col
                  gap-5
                  border
                  border-[#7FB59C]/20
                  bg-[#DCEDE4]/25
                  p-6
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:p-7
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
                    Committee Activities
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[20px]
                      font-bold
                      tracking-[-0.025em]
                      text-black
                      sm:text-[22px]
                    "
                  >
                    Activities of {selectedCommittee.term}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[620px]
                      text-[11px]
                      leading-[1.8]
                      text-[#4B5563]
                      sm:text-[12px]
                    "
                  >
                    Explore the programs, events and community
                    activities organized during this executive
                    committee's term.
                  </p>
                </div>

                <motion.div
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  className="shrink-0"
                >
                  <Link
                    to={`/events-notices?committee=${
                      selectedCommittee.id
                    }&term=${encodeURIComponent(
                      selectedCommittee.term
                    )}`}
                    className="
                      group
                      inline-flex
                      items-center
                      justify-center
                      gap-2.5
                      bg-[#7FB59C]
                      px-5
                      py-3
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.1em]
                      text-white
                      transition-colors
                      duration-300
                      hover:bg-[#5C9A81]
                    "
                  >
                    <HiOutlinePhotograph className="text-[15px]" />

                    View Activities

                    <HiOutlineArrowRight
                      className="
                        text-[14px]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================
          04. LEADERSHIP VALUES
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
          {/* Header */}

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
            className="mx-auto max-w-[750px] text-center"
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
              Our Responsibility
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
              Leading With{" "}

              <span className="text-[#5C9A81]">
                Purpose.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[620px]
                text-[12px]
                leading-[1.9]
                text-[#4B5563]
                sm:text-[13px]
              "
            >
              The executive committee works together to serve
              students, strengthen relationships and carry the
              values of Chattogram Forum, SUST forward.
            </p>
          </motion.div>

          {/* Value Cards */}

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
            {leadershipRoles.map((role, index) => {
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
                  whileHover={{
                    y: -4,
                  }}
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

                  <h3
                    className="
                      mt-7
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
          05. MEMBERS CTA
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
          {/* Text */}

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
              Our Community
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
              Meet the people who make{" "}

              <span className="text-[#5C9A81]">
                our community stronger.
              </span>
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
              Explore the members of Chattogram Forum, SUST and
              discover the students who form the heart of our
              community.
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
              to="/members"
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
              Explore Members

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

export default ExecutiveCommittee;