import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

import heroSlides from "../../data/heroSlides";

const Hero = () => {
  const ease = [0.22, 1, 0.36, 1];

  const [currentSlide, setCurrentSlide] = useState(0);

  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem("heroIntroShown") !== "true";
  });

  const activeSlide = heroSlides[currentSlide];

  // =========================================
  // FULLSCREEN INTRO
  // Keep image fullscreen for 2 seconds
  // =========================================
  useEffect(() => {
    if (!showIntro) return;

    // Prevent scrolling while intro is visible
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowIntro(false);

      sessionStorage.setItem("heroIntroShown", "true");

      document.body.style.overflow = "";
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  // =========================================
  // HERO SLIDESHOW
  // =========================================
  useEffect(() => {
    // Don't start slideshow during intro
    if (showIntro || heroSlides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((previousSlide) =>
        previousSlide === heroSlides.length - 1
          ? 0
          : previousSlide + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [showIntro]);

  return (
    <section className="relative overflow-hidden bg-[#FFFFF3]">
      {/* =========================================
          FULLSCREEN OPENING PHOTO
      ========================================== */}

      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease,
            }}
            className="
              fixed
              inset-0
              z-[9999]
              h-[100dvh]
              w-screen
              overflow-hidden
              bg-black
            "
          >
            {/* FULLSCREEN IMAGE */}

            <motion.img
              src={heroSlides[0].image}
              alt={heroSlides[0].name}
              initial={{
                scale: 1.08,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 3,
                ease,
              }}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* DARK OVERLAY */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-black/15
              "
            />

            {/* TOP GREEN TINT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[#7FB59C]/5
              "
            />

            {/* BOTTOM GRADIENT */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                right-0
                h-[35%]
                bg-gradient-to-t
                from-black/40
                via-black/10
                to-transparent
              "
            />

            {/* =========================================
                INTRO TEXT
            ========================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease,
              }}
              className="
                absolute
                bottom-10
                left-1/2
                z-10
                w-[90%]
                -translate-x-1/2
                text-center
                sm:bottom-14
                md:bottom-16
              "
            >
              <p
                className="
                  text-[17px]
                  font-semibold
                  text-white
                  drop-shadow-md
                  sm:text-xl
                  md:text-2xl
                "
              >
                {heroSlides[0].name}
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  font-medium
                  text-white/80
                  sm:text-sm
                "
              >
                {heroSlides[0].location}
              </p>

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: 55,
                }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease,
                }}
                className="
                  mx-auto
                  mt-4
                  h-[2px]
                  rounded-full
                  bg-[#7FB59C]
                "
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(135deg,rgba(127,181,156,0.05),transparent_45%)]
        "
      />

      {/* =========================================
          MAIN HERO
      ========================================== */}

      <div
        className="
          relative
          grid
          min-h-[calc(100vh-90px)]
          w-full
          grid-cols-1
          items-center

          md:grid-cols-[45%_55%]
          lg:grid-cols-[43%_57%]
        "
      >
        {/* =========================================
            LEFT CONTENT
        ========================================== */}

        <div
          className="
            relative
            z-20

            px-5
            pb-10
            pt-10

            sm:px-6
            sm:pt-12

            md:px-8
            md:py-10

            lg:pl-10
            lg:pr-4

            xl:pl-14

            2xl:pl-16
          "
        >
          {/* =========================================
              TOP LABEL
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
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
              animate={{
                width: 38,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease,
              }}
              className="
                h-[2px]
                bg-[#7FB59C]
              "
            />

            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#5C9A81]

                sm:text-[11px]
                lg:text-[12px]
              "
            >
              Students • Alumni • Community
            </p>
          </motion.div>

          {/* =========================================
              TITLE
          ========================================== */}

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
              delay: 0.1,
              ease,
            }}
            className="
              max-w-[680px]

              text-[43px]
              font-bold
              leading-[0.98]
              tracking-[-0.045em]
              text-black

              min-[400px]:text-[48px]

              sm:text-[58px]

              md:text-[49px]

              lg:text-[63px]

              xl:text-[73px]

              2xl:text-[80px]
            "
          >
            Stronger
            <br />

            Together,
            <br />

            <span className="text-[#5C9A81]">
              Beyond Campus
            </span>
          </motion.h1>

          {/* =========================================
              DESCRIPTION
          ========================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.3,
              ease,
            }}
            className="
              mt-6
              max-w-[510px]

              text-[14px]
              leading-[1.8]
              text-[#4B5563]

              sm:text-[15px]

              lg:text-[16px]
            "
          >
            Connecting students, alumni, advisors and generations of
            Chattogram Forum at Shahjalal University of Science and
            Technology.
          </motion.p>

          {/* =========================================
              BUTTONS
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.45,
              ease,
            }}
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            {/* EXPLORE FORUM */}

            <motion.div
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link
                to="/about"
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

                  text-[14px]
                  font-semibold
                  text-white

                  transition-colors
                  duration-300

                  hover:bg-[#5C9A81]
                "
              >
                Explore Forum

                <HiArrowRight
                  className="
                    text-[17px]

                    transition-transform
                    duration-300

                    group-hover:translate-x-1.5
                  "
                />
              </Link>
            </motion.div>

            {/* OUR MEMBERS */}

            <motion.div
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link
                to="/members"
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-lg

                  border
                  border-[#7FB59C]

                  px-6
                  py-3.5

                  text-[14px]
                  font-semibold
                  text-[#5C9A81]

                  transition-colors
                  duration-300

                  hover:bg-[#DCEDE4]
                "
              >
                Our Members
              </Link>
            </motion.div>
          </motion.div>

          {/* =========================================
              BOTTOM MINI TEXT
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.6,
              ease,
            }}
            className="
              mt-10
              flex
              items-center
              gap-3
            "
          >
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#7FB59C]" />

              <span className="h-2.5 w-2.5 rounded-full bg-[#5C9A81]" />

              <span className="h-2.5 w-2.5 rounded-full bg-[#BFDCCF]" />
            </div>

            <p className="text-[12px] font-medium text-[#4B5563]">
              Community • Connection • Legacy
            </p>
          </motion.div>
        </div>

        {/* =========================================
            RIGHT IMAGE SECTION
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease,
          }}
          className="
            relative
            z-10

            h-[330px]
            w-full

            sm:h-[410px]

            md:h-[540px]

            lg:h-[610px]

            xl:h-[650px]
          "
        >
          {/* =========================================
              GREEN ELLIPSE
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              x: 80,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1.1,
              delay: 0.3,
              ease,
            }}
            className="
              absolute

              -right-[20%]
              top-[3%]

              h-[94%]
              w-[120%]

              rounded-[50%]

              bg-[#7FB59C]/20

              sm:-right-[18%]

              md:-right-[25%]
              md:w-[130%]

              lg:-right-[27%]
              lg:w-[135%]
            "
          />

          {/* =========================================
              MAIN ELLIPSE PHOTO
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease,
            }}
            whileHover={{
              scale: 1.015,
              x: -6,
            }}
            whileTap={{
              scale: 0.995,
            }}
            className="
              group

              absolute

              -right-[20%]
              top-[8%]

              h-[84%]
              w-[120%]

              cursor-pointer

              overflow-hidden

              rounded-[50%]

              sm:-right-[18%]

              md:-right-[25%]
              md:w-[130%]

              lg:-right-[27%]
              lg:w-[135%]
            "
          >
            {/* =========================================
                SLOW AUTO CHANGING PHOTOS
            ========================================== */}

            <AnimatePresence initial={false}>
              <motion.img
                key={activeSlide.id}
                src={activeSlide.image}
                alt={activeSlide.name}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                  filter: "blur(3px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 1.03,
                  filter: "blur(2px)",
                }}
                transition={{
                  opacity: {
                    duration: 1.3,
                    ease: "easeInOut",
                  },

                  scale: {
                    duration: 2,
                    ease,
                  },

                  filter: {
                    duration: 1,
                    ease: "easeInOut",
                  },
                }}
                className="
                  absolute
                  inset-0

                  h-full
                  w-full

                  object-cover
                  object-[50%_52%]
                "
              />
            </AnimatePresence>

            {/* =========================================
                LEFT SOFT FADE
            ========================================== */}

            <motion.div
              initial={{
                opacity: 1,
              }}
              whileHover={{
                opacity: 0.82,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                pointer-events-none

                absolute
                inset-0
                z-10

                bg-[linear-gradient(90deg,rgba(255,255,243,0.75)_0%,rgba(255,255,243,0.42)_7%,rgba(255,255,243,0.16)_14%,rgba(255,255,243,0)_25%)]
              "
            />

            {/* =========================================
                LIGHT GREEN TINT
            ========================================== */}

            <motion.div
              initial={{
                opacity: 0.04,
              }}
              whileHover={{
                opacity: 0.015,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                pointer-events-none

                absolute
                inset-0
                z-10

                bg-[#7FB59C]
              "
            />

            {/* =========================================
                BOTTOM DEPTH
            ========================================== */}

            <div
              className="
                pointer-events-none

                absolute
                bottom-0
                left-0
                right-0
                z-10

                h-[18%]

                bg-gradient-to-t
                from-black/[0.08]
                to-transparent
              "
            />
          </motion.div>

          {/* =========================================
              SMALL DECORATIVE DOT
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            whileHover={{
              scale: 1.25,
            }}
            className="
              absolute

              left-[7%]
              top-[13%]

              hidden

              h-4
              w-4

              rounded-full

              bg-[#7FB59C]

              md:block
            "
          />

          {/* =========================================
              DYNAMIC IMAGE NAME / LOCATION
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.8,
              ease,
            }}
            whileHover={{
              x: -6,
            }}
            className="
              absolute

              bottom-[13%]
              right-0

              z-20

              border-l-[3px]
              border-[#7FB59C]

              bg-[#FFFFF3]/85

              px-4
              py-2.5

              backdrop-blur-[3px]

              sm:px-5
              sm:py-3
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeSlide.id}
                initial={{
                  opacity: 0,
                  y: 8,
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
                  duration: 0.55,
                  ease: "easeInOut",
                }}
              >
                <p
                  className="
                    max-w-[220px]

                    text-[10px]
                    font-semibold
                    text-black

                    sm:max-w-none
                    sm:text-[12px]

                    lg:text-[13px]
                  "
                >
                  {activeSlide.name}
                </p>

                <p
                  className="
                    mt-1

                    text-[9px]
                    font-medium
                    text-[#5C9A81]

                    lg:text-[10px]
                  "
                >
                  {activeSlide.location}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* =========================================
              SLIDE INDICATORS
          ========================================== */}

          <div
            className="
              absolute

              bottom-[5%]
              right-[8%]

              z-30

              flex
              items-center
              gap-2
            "
          >
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show ${slide.name}`}
                className={`
                  h-2
                  rounded-full

                  transition-all
                  duration-500

                  ${
                    currentSlide === index
                      ? "w-7 bg-[#5C9A81]"
                      : "w-2 bg-[#7FB59C]/50 hover:bg-[#7FB59C]"
                  }
                `}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;