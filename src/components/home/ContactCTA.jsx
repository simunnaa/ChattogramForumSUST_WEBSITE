import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const ContactCTA = () => {
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#DCEDE4]/40
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
          -right-[150px]
          -top-[150px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#7FB59C]/10
          blur-[90px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1400px]
          overflow-hidden
          bg-[#FFFFF3]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.35fr_0.65fr]
          "
        >
          {/* =====================================
              LEFT CONTENT
          ====================================== */}
          <div
            className="
              relative
              px-6
              py-12
              sm:px-9
              sm:py-14
              md:px-12
              lg:px-14
              lg:py-16
              xl:px-16
            "
          >
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
                className="h-[2px] bg-[#7FB59C]"
              />

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
                Stay Connected
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
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="
                max-w-[760px]
                text-[36px]
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-black
                sm:text-[44px]
                md:text-[50px]
                lg:text-[56px]
                xl:text-[62px]
              "
            >
              Once a Part of the Forum,
              <br />

              <span className="text-[#5C9A81]">
                Always Connected.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
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
                delay: 0.15,
                ease,
              }}
              className="
                mt-6
                max-w-[610px]
                text-[13px]
                leading-[1.9]
                text-[#4B5563]
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              Whether you are a current student, an alumnus or simply want
              to connect with Chattogram Forum, we would love to hear from
              you.
            </motion.p>

            {/* Buttons */}
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
                ease,
              }}
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
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
                  Contact Us

                  <HiArrowRight
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1.5
                    "
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/alumni"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#7FB59C]
                    px-6
                    py-3.5
                    text-[13px]
                    font-semibold
                    text-[#5C9A81]
                    transition-colors
                    duration-300
                    hover:bg-[#DCEDE4]
                    sm:text-[14px]
                  "
                >
                  Explore Alumni
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* =====================================
              RIGHT PANEL
          ====================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              ease,
            }}
            className="
              relative
              flex
              flex-col
              justify-center
              bg-[#7FB59C]
              px-6
              py-10
              sm:px-9
              lg:px-10
              lg:py-14
            "
          >
            {/* Decorative circle */}
            <div
              className="
                pointer-events-none
                absolute
                -right-[90px]
                -top-[90px]
                h-[230px]
                w-[230px]
                rounded-full
                border
                border-white/15
              "
            />

            <p
              className="
                relative
                mb-7
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/70
              "
            >
              Chattogram Forum, SUST
            </p>

            {/* Location */}
            <motion.div
              whileHover={{ x: 5 }}
              className="
                relative
                flex
                items-start
                gap-4
                border-b
                border-white/20
                pb-6
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
                  bg-white/10
                  text-[20px]
                  text-white
                "
              >
                <HiOutlineLocationMarker />
              </div>

              <div>
                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-white/60
                  "
                >
                  Location
                </p>

                <p
                  className="
                    mt-2
                    text-[13px]
                    font-medium
                    leading-[1.7]
                    text-white
                    sm:text-[14px]
                  "
                >
                  Shahjalal University of
                  <br />
                  Science & Technology
                  <br />
                  Sylhet, Bangladesh
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ x: 5 }}
              className="
                relative
                mt-6
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
                  bg-white/10
                  text-[20px]
                  text-white
                "
              >
                <HiOutlineMail />
              </div>

              <div>
                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-white/60
                  "
                >
                  Get in Touch
                </p>

                <p
                  className="
                    mt-2
                    text-[13px]
                    font-medium
                    text-white
                    sm:text-[14px]
                  "
                >
                  Contact Chattogram Forum
                </p>

                <Link
                  to="/contact"
                  className="
                    group
                    mt-2
                    inline-flex
                    items-center
                    gap-2
                    text-[11px]
                    font-semibold
                    text-[#DCEDE4]
                  "
                >
                  Send a Message

                  <HiArrowRight
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease,
          }}
          className="
            h-[3px]
            w-full
            origin-left
            bg-[#5C9A81]
          "
        />
      </div>
    </section>
  );
};

export default ContactCTA;