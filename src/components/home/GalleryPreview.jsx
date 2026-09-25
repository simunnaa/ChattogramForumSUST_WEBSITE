import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiArrowRight,
  HiOutlinePhotograph,
} from "react-icons/hi";

import galleryData from "../../data/gallery";

const GalleryPreview = () => {
  const ease = [0.22, 1, 0.36, 1];

  /* =====================================================
     LATEST 6 ACTIVE GALLERY ITEMS
  ====================================================== */

  const gallery = [...galleryData]
    .filter((item) => item.active !== false)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    )
    .slice(0, 6);

  /* =====================================================
     GALLERY GRID SIZES
  ====================================================== */

  const sizeClasses = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
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
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[80px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#7FB59C]/[0.06]
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
                Memories
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
              Moments That Tell
              <br />

              <span className="text-[#5C9A81]">
                Our Story.
              </span>
            </motion.h2>
          </div>

          {/* View Full Gallery */}

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
              to="/gallery"
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
              View Full Gallery

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
            max-w-[620px]
            text-[14px]
            leading-[1.9]
            text-[#4B5563]
            sm:text-[15px]
          "
        >
          A collection of memories, gatherings and meaningful
          moments shared by generations of Chattogram Forum,
          SUST.
        </motion.p>

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
            GALLERY
        ====================================================== */}

        {gallery.length > 0 ? (
          <div
            className="
              grid
              auto-rows-[190px]
              grid-cols-2
              gap-3
              sm:auto-rows-[220px]
              sm:gap-4
              md:grid-cols-4
              md:auto-rows-[210px]
              lg:auto-rows-[230px]
              lg:gap-5
            "
          >
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
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
                  duration: 0.6,
                  delay: index * 0.06,
                  ease,
                }}
                whileHover={{
                  y: -4,
                }}
                className={`
                  min-h-0
                  min-w-0
                  ${sizeClasses[index] || "col-span-1 row-span-1"}
                `}
              >
                {/* =================================================
                    CLICKABLE CARD
                ================================================== */}

                <Link
                  to={`/gallery?photo=${item.id}`}
                  aria-label={`View ${item.title} in gallery`}
                  className="
                    group
                    relative
                    block
                    h-full
                    w-full
                    cursor-pointer
                    overflow-hidden
                    bg-[#DCEDE4]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#7FB59C]
                    focus-visible:ring-offset-2
                  "
                >
                  {/* Image */}

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.06]
                    "
                  />

                  {/* Overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                      opacity-70
                      transition-opacity
                      duration-500
                      group-hover:opacity-90
                    "
                  />

                  {/* =================================================
                      TOP ICON
                  ================================================== */}

                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      h-9
                      w-9
                      translate-y-1
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FFFFF3]/90
                      text-[17px]
                      text-[#5C9A81]
                      opacity-0
                      backdrop-blur-[3px]
                      transition-all
                      duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      group-focus-visible:translate-y-0
                      group-focus-visible:opacity-100
                      sm:right-4
                      sm:top-4
                    "
                  >
                    <HiOutlinePhotograph />
                  </div>

                  {/* =================================================
                      INFORMATION
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      p-4
                      sm:p-5
                    "
                  >
                    {/* Accent */}

                    <div
                      className="
                        mb-2
                        h-[2px]
                        w-[25px]
                        bg-[#BFDCCF]
                        transition-all
                        duration-300
                        group-hover:w-[50px]
                        group-focus-visible:w-[50px]
                      "
                    />

                    {/* Category */}

                    <p
                      className="
                        mb-1
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-[#DCEDE4]
                        sm:text-[10px]
                      "
                    >
                      {item.category}
                    </p>

                    {/* Title */}

                    <h3
                      className="
                        text-[14px]
                        font-semibold
                        text-white
                        sm:text-[16px]
                        lg:text-[17px]
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Committee */}

                    {item.committeeTerm && (
                      <p
                        className="
                          mt-1
                          text-[8px]
                          font-medium
                          text-white/75
                          sm:text-[9px]
                        "
                      >
                        Committee {item.committeeTerm}
                      </p>
                    )}

                    {/* View Photo */}

                    <div
                      className="
                        mt-3
                        flex
                        translate-y-1
                        items-center
                        gap-1.5
                        text-[9px]
                        font-semibold
                        text-white/90
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                        group-focus-visible:translate-y-0
                        group-focus-visible:opacity-100
                        sm:text-[10px]
                      "
                    >
                      <span>View Photo</span>

                      <HiArrowRight
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </div>
                  </div>

                  {/* Bottom Accent */}

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
                      group-focus-visible:w-full
                    "
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          /* =====================================================
              EMPTY STATE
          ====================================================== */

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
            className="
              flex
              min-h-[300px]
              flex-col
              items-center
              justify-center
              border
              border-[#7FB59C]/20
              bg-[#DCEDE4]/20
              px-5
              text-center
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#DCEDE4]
                text-[24px]
                text-[#5C9A81]
              "
            >
              <HiOutlinePhotograph />
            </div>

            <h3
              className="
                mt-4
                text-[19px]
                font-bold
                text-black
              "
            >
              No gallery items yet
            </h3>

            <p
              className="
                mt-2
                max-w-[400px]
                text-[12px]
                leading-[1.8]
                text-[#4B5563]
              "
            >
              Gallery memories and activities will appear
              here when they are available.
            </p>
          </motion.div>
        )}

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-6
            border-t
            border-[#7FB59C]/20
            pt-8
            sm:flex-row
          "
        >
          <motion.p
            initial={{
              opacity: 0,
              x: -20,
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
              ease,
            }}
            className="
              max-w-[500px]
              text-center
              text-[12px]
              leading-[1.8]
              text-[#4B5563]
              sm:text-left
              sm:text-[13px]
            "
          >
            Explore more memories, activities and moments from
            Chattogram Forum across different generations.
          </motion.p>

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
              ease,
            }}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              to="/gallery"
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
              Explore Gallery

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
      </div>
    </section>
  );
};

export default GalleryPreview;