import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiOutlineAcademicCap,
} from "react-icons/hi";

import advisors from "../../data/advisors";

const AdvisorPreview = () => {
  const ease = [0.22, 1, 0.36, 1];

  // Get only active advisors,
  // sort by display order,
  // and show first 3 on Home page.
  const featuredAdvisors = [...advisors]
    .filter((advisor) => advisor.active !== false)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    .slice(0, 3);

  const getAdvisorImage = (advisor) => {
    if (advisor.image?.trim()) {
      return advisor.image;
    }

    return advisor.gender?.toLowerCase() === "female"
      ? "/images/female-avatar.png"
      : "/images/male-avatar.png";
  };

  const handleImageError = (event, advisor) => {
    event.currentTarget.onerror = null;

    event.currentTarget.src =
      advisor.gender?.toLowerCase() === "female"
        ? "/images/female-avatar.png"
        : "/images/male-avatar.png";
  };

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
      {/* Decorative background */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[100px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#7FB59C]/[0.07]
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* ==============================
            HEADER
        ============================== */}
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-5 flex items-center gap-3"
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
                className="h-[2px] bg-[#7FB59C]"
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
                Guidance & Support
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="
                max-w-[720px]
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
              Guided by Experience.
              <br />

              <span className="text-[#5C9A81]">
                Connected by Community.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease,
            }}
          >
            <Link
              to="/advisors"
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
              View All Advisors

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

        {/* ==============================
            INTRO
        ============================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            delay: 0.15,
            ease,
          }}
          className="mt-7 max-w-[680px]"
        >
          <p
            className="
              text-[14px]
              leading-[1.9]
              text-[#4B5563]
              sm:text-[15px]
              lg:text-[16px]
            "
          >
            Our advisors provide guidance, experience and support that help
            Chattogram Forum grow while preserving the values and connections
            that unite our community.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.2,
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

        {/* ==============================
            ADVISOR CARDS
        ============================== */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-3
            lg:gap-7
          "
        >
          {featuredAdvisors.map((advisor, index) => (
            <motion.article
              key={advisor.id}
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
                duration: 0.6,
                delay: index * 0.1,
                ease,
              }}
              whileHover={{
                y: -7,
              }}
              className="
                group
                relative
                overflow-hidden
                border
                border-[#7FB59C]/20
                bg-[#FFFFF3]
                p-6
                transition-shadow
                duration-300
                hover:shadow-[0_18px_50px_rgba(92,154,129,0.10)]
                sm:p-7
                lg:p-8
              "
            >
              {/* Top */}
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                "
              >
                {/* Photo */}
                <div
                  className="
                    relative
                    h-[90px]
                    w-[90px]
                    shrink-0
                    overflow-hidden
                    rounded-full
                    bg-[#DCEDE4]
                    sm:h-[100px]
                    sm:w-[100px]
                  "
                >
                  <motion.img
                    src={getAdvisorImage(advisor)}
                    alt={advisor.name}
                    onError={(event) =>
                      handleImageError(event, advisor)
                    }
                    loading="lazy"
                    whileHover={{
                      scale: 1.08,
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
                      bg-[#7FB59C]/5
                    "
                  />
                </div>

                {/* Icon */}
                <div
                  className="
                    flex
                    h-10
                    w-10
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
                  <HiOutlineAcademicCap />
                </div>
              </div>

              {/* Accent line */}
              <div
                className="
                  mb-5
                  mt-7
                  h-[2px]
                  w-8
                  bg-[#7FB59C]
                  transition-all
                  duration-300
                  group-hover:w-16
                "
              />

              {/* Name */}
              <h3
                className="
                  text-[20px]
                  font-bold
                  text-black
                  transition-colors
                  duration-300
                  group-hover:text-[#5C9A81]
                  lg:text-[22px]
                "
              >
                {advisor.name}
              </h3>

              {/* Designation */}
              <p
                className="
                  mt-2
                  text-[13px]
                  font-semibold
                  text-[#5C9A81]
                  sm:text-[14px]
                "
              >
                {advisor.designation}
              </p>

              {/* Department */}
              <p
                className="
                  mt-1
                  text-[12px]
                  font-medium
                  text-[#4B5563]
                  sm:text-[13px]
                "
              >
                {advisor.department}
              </p>

              {/* Organization */}
              <p
                className="
                  mt-1
                  text-[11px]
                  leading-[1.6]
                  text-[#4B5563]/80
                  sm:text-[12px]
                "
              >
                {advisor.organization}
              </p>

              {/* Bio */}
              <p
                className="
                  mt-5
                  text-[13px]
                  leading-[1.8]
                  text-[#4B5563]
                  sm:text-[14px]
                "
              >
                {advisor.bio}
              </p>

              {/* Bottom hover line */}
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

        {/* ==============================
            BOTTOM CTA
        ============================== */}
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
            mt-10
            flex
            justify-center
          "
        >
          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/advisors"
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
              Meet Our Advisors

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

export default AdvisorPreview;