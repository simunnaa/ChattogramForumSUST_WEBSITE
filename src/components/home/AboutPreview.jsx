import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineHeart,
} from "react-icons/hi";

const AboutPreview = () => {
  const ease = [0.22, 1, 0.36, 1];

  const values = [
    {
      icon: HiOutlineUserGroup,
      title: "Community",
      text: "Building meaningful connections among students, alumni and generations of Chattogram Forum.",
    },
    {
      icon: HiOutlineLightBulb,
      title: "Growth",
      text: "Creating opportunities to learn, collaborate and grow together beyond academic life.",
    },
    {
      icon: HiOutlineHeart,
      title: "Legacy",
      text: "Preserving our shared memories, contributions and traditions for future generations.",
    },
  ];

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
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#7FB59C]/[0.06]
          blur-[80px]
        "
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* =========================================
            SECTION LABEL
        ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mb-5 flex items-center gap-3"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 38 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
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
            Who We Are
          </p>
        </motion.div>

        {/* =========================================
            TOP CONTENT
        ========================================== */}
        <div
          className="
            grid
            gap-8

            lg:grid-cols-[1fr_0.85fr]
            lg:items-end
            lg:gap-16
          "
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease,
            }}
          >
            <h2
              className="
                max-w-[720px]

                text-[36px]
                font-bold
                leading-[1.08]
                tracking-[-0.035em]
                text-black

                sm:text-[44px]

                md:text-[50px]

                lg:text-[56px]

                xl:text-[62px]
              "
            >
              More Than a Forum.
              <br />

              <span className="text-[#5C9A81]">
                A Community That Connects.
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease,
            }}
          >
            <p
              className="
                max-w-[560px]
                text-[14px]
                leading-[1.9]
                text-[#4B5563]

                sm:text-[15px]

                lg:text-[16px]
              "
            >
              Chattogram Forum, SUST brings together current students,
              alumni, advisors and generations of our community. It is a
              place to stay connected, share experiences, celebrate
              achievements and preserve the history of the forum.
            </p>

            <motion.div
              className="mt-6 inline-block"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/about"
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
                Discover Our Story

                <HiArrowRight
                  className="
                    text-[17px]
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </Link>

              <div
                className="
                  mt-1
                  h-[1px]
                  w-full
                  origin-left
                  bg-[#7FB59C]
                  transition-transform
                  duration-300
                  group-hover:scale-x-110
                "
              />
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================
            DIVIDER
        ========================================== */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
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
            bg-[#7FB59C]/25

            sm:my-14

            lg:my-16
          "
        />

        {/* =========================================
            VALUES
        ========================================== */}
        <div
          className="
            grid
            gap-4

            md:grid-cols-3
            md:gap-5

            lg:gap-8
          "
        >
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
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

                  border-t
                  border-[#7FB59C]/35

                  px-1
                  py-7

                  sm:py-8

                  md:px-3

                  lg:px-5
                "
              >
                {/* Animated top line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.1,
                    ease,
                  }}
                  className="
                    absolute
                    left-0
                    top-[-1px]

                    h-[2px]

                    bg-[#7FB59C]

                    md:left-3

                    lg:left-5
                  "
                />

                {/* Icon */}
                <div
                  className="
                    mb-6

                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    rounded-full

                    bg-[#DCEDE4]

                    text-[22px]
                    text-[#5C9A81]

                    transition-all
                    duration-300

                    group-hover:bg-[#7FB59C]
                    group-hover:text-white
                  "
                >
                  <Icon />
                </div>

                {/* Number */}
                <p
                  className="
                    mb-3
                    text-[11px]
                    font-semibold
                    tracking-[0.16em]
                    text-[#7FB59C]
                  "
                >
                  0{index + 1}
                </p>

                <h3
                  className="
                    text-[21px]
                    font-semibold
                    text-black

                    sm:text-[22px]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[380px]

                    text-[13px]
                    leading-[1.8]
                    text-[#4B5563]

                    sm:text-[14px]
                  "
                >
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;