import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  HiOutlineUsers,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineSparkles,
} from "react-icons/hi";

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      count.set(value, {
        duration: 2,
      });
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const ease = [0.22, 1, 0.36, 1];

  // Temporary values.
  // Later these will come from the backend.
  const stats = [
    {
      id: 1,
      icon: HiOutlineUsers,
      value: 250,
      suffix: "+",
      label: "Current Members",
      description: "Students connected through Chattogram Forum",
    },
    {
      id: 2,
      icon: HiOutlineAcademicCap,
      value: 500,
      suffix: "+",
      label: "Alumni",
      description: "Former SUSTians connected across generations",
    },
    {
      id: 3,
      icon: HiOutlineUserGroup,
      value: 15,
      suffix: "+",
      label: "Committees",
      description: "Generations of leadership and service",
    },
    {
      id: 4,
      icon: HiOutlineSparkles,
      value: 100,
      suffix: "+",
      label: "Activities",
      description: "Events, programs and community initiatives",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#5C9A81]
        px-5
        py-16
        sm:px-6
        sm:py-20
        md:px-8
        lg:px-10
        xl:px-14
        2xl:px-16
      "
    >
      {/* Decorative circles */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[120px]
          -top-[160px]
          h-[360px]
          w-[360px]
          rounded-full
          border
          border-white/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[190px]
          right-[5%]
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-white/10
        "
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* =========================
            TOP
        ========================== */}
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
            duration: 0.65,
            ease,
          }}
          className="
            mb-10
            flex
            flex-col
            gap-3
            md:mb-12
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-[35px] bg-white/70" />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/80
                  sm:text-[11px]
                "
              >
                Our Community
              </p>
            </div>

            <h2
              className="
                text-[30px]
                font-bold
                tracking-[-0.03em]
                text-white
                sm:text-[36px]
                lg:text-[42px]
              "
            >
              Growing Together,
              <span className="text-[#DCEDE4]"> Generation by Generation.</span>
            </h2>
          </div>

          <p
            className="
              max-w-[420px]
              text-[12px]
              leading-[1.8]
              text-white/70
              sm:text-[13px]
            "
          >
            A growing network built through community, leadership,
            friendship and shared experiences.
          </p>
        </motion.div>

        {/* =========================
            STATS
        ========================== */}
        <div
          className="
            grid
            grid-cols-2
            border-l
            border-t
            border-white/15

            lg:grid-cols-4
          "
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.id}
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
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease,
                }}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                }}
                className="
                  group
                  relative

                  min-h-[210px]

                  border-b
                  border-r
                  border-white/15

                  p-5

                  sm:min-h-[230px]
                  sm:p-7

                  lg:min-h-[250px]
                  lg:p-8
                "
              >
                {/* Number */}
                <span
                  className="
                    absolute
                    right-4
                    top-4

                    text-[10px]
                    font-semibold
                    tracking-[0.15em]
                    text-white/30
                  "
                >
                  0{index + 1}
                </span>

                {/* Icon */}
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

                    bg-white/10

                    text-[20px]
                    text-white

                    sm:h-12
                    sm:w-12
                    sm:text-[22px]
                  "
                >
                  <Icon />
                </motion.div>

                {/* Value */}
                <h3
                  className="
                    text-[36px]
                    font-bold
                    leading-none
                    tracking-[-0.04em]
                    text-white

                    sm:text-[44px]

                    lg:text-[50px]
                  "
                >
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </h3>

                {/* Label */}
                <p
                  className="
                    mt-4
                    text-[13px]
                    font-semibold
                    text-white

                    sm:text-[14px]
                  "
                >
                  {stat.label}
                </p>

                {/* Description */}
                <p
                  className="
                    mt-2
                    max-w-[240px]

                    text-[10px]
                    leading-[1.7]
                    text-white/60

                    sm:text-[11px]
                  "
                >
                  {stat.description}
                </p>

                {/* Hover accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0

                    h-[3px]
                    w-0

                    bg-[#DCEDE4]

                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;