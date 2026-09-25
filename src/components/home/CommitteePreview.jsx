import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiOutlineUserGroup,
} from "react-icons/hi";

import { currentCommittee } from "../../data/committees";

const CommitteePreview = () => {
  const ease = [0.22, 1, 0.36, 1];

  /* =====================================================
     IMAGE FALLBACK
  ====================================================== */

  const getMemberImage = (member) => {
    if (member.image?.trim()) {
      return member.image;
    }

    return member.gender?.toLowerCase() === "female"
      ? "/images/female-avatar.png"
      : "/images/male-avatar.png";
  };

  const handleImageError = (event, member) => {
    event.currentTarget.onerror = null;

    event.currentTarget.src =
      member.gender?.toLowerCase() === "female"
        ? "/images/female-avatar.png"
        : "/images/male-avatar.png";
  };

  /* =====================================================
     CURRENT COMMITTEE MEMBERS
  ====================================================== */

  const committeeMembers = currentCommittee?.members || [];

  /* =====================================================
     PRESIDENT + GENERAL SECRETARY
  ====================================================== */

  const topLeadershipPositions = [
    "President",
    "General Secretary",
  ];

  const topLeadership = topLeadershipPositions
    .map((position) =>
      committeeMembers.find(
        (member) => member.position === position
      )
    )
    .filter(Boolean);

  /* =====================================================
     KEY EXECUTIVES

     We show only one person for each selected position.
  ====================================================== */

  const keyExecutivePositions = [
    "Treasurer",
    "Joint Secretary",
    "Organizing Secretary",
    "Publication Secretary",
    "IT Secretary",
  ];

  const executives = keyExecutivePositions
    .map((position) =>
      committeeMembers.find(
        (member) => member.position === position
      )
    )
    .filter(Boolean);

  /* =====================================================
     SHORT POSITION NAME
  ====================================================== */

  const getShortDesignation = (position) => {
    const shortNames = {
      "General Secretary": "GS",
      "Assistant General Secretary": "AGS",
      "Joint Secretary": "Joint Secretary",
      "Organizing Secretary": "Organizing Secretary",
      "Publication Secretary": "Publication Secretary",
      "IT Secretary": "IT Secretary",
      Treasurer: "Treasurer",
    };

    return shortNames[position] || position;
  };

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
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[100px]
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
          {/* Left */}

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
              viewport={{ once: true }}
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
                initial={{ width: 0 }}
                whileInView={{ width: 38 }}
                viewport={{ once: true }}
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
                Leadership
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
              viewport={{ once: true }}
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
              Current Executive
              <br />

              <span className="text-[#5C9A81]">
                Committee
              </span>
            </motion.h2>
          </div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease,
            }}
            className="
              flex
              flex-col
              items-start
              gap-4
              md:items-end
            "
          >
            {/* Current Term */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#7FB59C]/40
                bg-[#FFFFF3]
                px-4
                py-2
              "
            >
              <HiOutlineUserGroup
                className="
                  text-[17px]
                  text-[#5C9A81]
                "
              />

              <span
                className="
                  text-[13px]
                  font-semibold
                  text-[#4B5563]
                "
              >
                {currentCommittee?.term || "Current Committee"}
              </span>
            </div>

            <Link
              to="/executive-committee"
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
              View Full Committee

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
            DIVIDER
        ====================================================== */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{ once: true }}
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
            PRESIDENT + GENERAL SECRETARY
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#5C9A81]
            "
          >
            Executive Leadership
          </p>
        </motion.div>

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:gap-7
          "
        >
          {topLeadership.map((member, index) => (
            <motion.article
              key={member.id}
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
                duration: 0.65,
                delay: index * 0.1,
                ease,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden
                border
                border-[#7FB59C]/15
                bg-[#FFFFF3]
                transition-all
                duration-300
                hover:border-[#7FB59C]/45
                hover:shadow-[0_14px_35px_rgba(92,154,129,0.08)]
              "
            >
              <div
                className="
                  grid
                  min-h-[300px]
                  grid-cols-[42%_58%]
                  sm:min-h-[340px]
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
                  <motion.img
                    src={getMemberImage(member)}
                    alt={member.name}
                    onError={(event) =>
                      handleImageError(event, member)
                    }
                    loading="lazy"
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.7,
                      ease,
                    }}
                    className="
                      h-full
                      w-full
                      object-cover
                      object-top
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/20
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Position Label */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                    "
                  >
                    <span
                      className="
                        bg-[#5C9A81]/90
                        px-3
                        py-1.5
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.1em]
                        text-white
                        backdrop-blur-sm
                      "
                    >
                      {member.position}
                    </span>
                  </div>
                </div>

                {/* Content */}

                <div
                  className="
                    flex
                    flex-col
                    justify-center
                    px-5
                    py-6
                    sm:px-7
                    lg:px-8
                  "
                >
                  <p
                    className="
                      mb-4
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#5C9A81]
                      sm:text-[11px]
                    "
                  >
                    Executive Leadership
                  </p>

                  <h3
                    className="
                      text-[22px]
                      font-bold
                      leading-tight
                      text-black
                      transition-colors
                      duration-300
                      group-hover:text-[#5C9A81]
                      sm:text-[26px]
                      lg:text-[28px]
                    "
                  >
                    {member.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[15px]
                      font-semibold
                      text-[#5C9A81]
                      sm:text-[16px]
                    "
                  >
                    {member.position}
                  </p>

                  <div
                    className="
                      my-5
                      h-px
                      w-full
                      bg-[#7FB59C]/25
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
                    {member.department}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      font-medium
                      text-[#5C9A81]
                      sm:text-[12px]
                    "
                  >
                    Session {member.session}
                  </p>
                </div>
              </div>

              {/* Bottom Hover Line */}

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
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            KEY EXECUTIVES HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-6
            mt-14
            flex
            items-center
            gap-4
          "
        >
          <p
            className="
              whitespace-nowrap
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#5C9A81]
            "
          >
            Key Executives
          </p>

          <div
            className="
              h-px
              w-full
              bg-[#7FB59C]/25
            "
          />
        </motion.div>

        {/* =====================================================
            5 KEY EXECUTIVE CARDS
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            min-[480px]:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            lg:gap-5
          "
        >
          {executives.map((member, index) => (
            <motion.article
              key={member.id}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden
                border
                border-[#7FB59C]/15
                bg-[#FFFFF3]
                transition-all
                duration-300
                hover:border-[#7FB59C]/45
                hover:shadow-[0_12px_30px_rgba(92,154,129,0.08)]
              "
            >
              {/* Image */}

              <div
                className="
                  relative
                  aspect-[4/4.3]
                  overflow-hidden
                  bg-[#DCEDE4]
                "
              >
                <motion.img
                  src={getMemberImage(member)}
                  alt={member.name}
                  onError={(event) =>
                    handleImageError(event, member)
                  }
                  loading="lazy"
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.6,
                    ease,
                  }}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-top
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent
                  "
                />

                {/* Position Badge */}

                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    right-3
                  "
                >
                  <span
                    className="
                      inline-block
                      bg-[#FFFFF3]/90
                      px-2.5
                      py-1.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.05em]
                      text-[#5C9A81]
                      backdrop-blur-[3px]
                    "
                  >
                    {getShortDesignation(
                      member.position
                    )}
                  </span>
                </div>
              </div>

              {/* Information */}

              <div className="px-4 py-5">
                <motion.div
                  initial={{
                    width: 25,
                  }}
                  whileHover={{
                    width: 50,
                  }}
                  className="
                    mb-3
                    h-[2px]
                    bg-[#7FB59C]
                  "
                />

                <h3
                  className="
                    text-[16px]
                    font-semibold
                    leading-tight
                    text-black
                    transition-colors
                    duration-300
                    group-hover:text-[#5C9A81]
                    xl:text-[17px]
                  "
                >
                  {member.name}
                </h3>

                <p
                  className="
                    mt-2
                    min-h-[38px]
                    text-[11px]
                    font-semibold
                    leading-[1.5]
                    text-[#5C9A81]
                    xl:text-[12px]
                  "
                >
                  {member.position}
                </p>

                <p
                  className="
                    mt-3
                    text-[11px]
                    leading-[1.6]
                    text-[#4B5563]
                  "
                >
                  {member.department}
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    font-medium
                    text-[#5C9A81]
                  "
                >
                  Session {member.session}
                </p>
              </div>

              {/* Hover Line */}

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
            </motion.article>
          ))}
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
          viewport={{ once: true }}
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
              to="/executive-committee"
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
              Explore Full Committee

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

export default CommitteePreview;