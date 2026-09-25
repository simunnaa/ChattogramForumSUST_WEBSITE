import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlineGlobeAlt,
  HiOutlineBriefcase,
  HiOutlineBadgeCheck,
} from "react-icons/hi";

import sponsors from "../../data/sponsors";

const SponsorsSection = () => {
  const activeSponsors = [...sponsors]
    .filter((sponsor) => sponsor.active !== false)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  return (
    <section className="relative overflow-hidden bg-[#FFFFF3] py-16 md:py-20">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#7FB59C]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#7FB59C]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1300px] px-5 md:px-8 lg:px-10">
        {/* ================================
            SECTION HEADING
        ================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-[700px] text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#5C9A81]">
            Our Supporters
          </p>

          <h2 className="text-3xl font-bold text-black md:text-4xl">
            Sponsors &{" "}
            <span className="text-[#5C9A81]">
              Partners
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-sm leading-7 text-[#4B5563] md:text-base">
            We proudly acknowledge the individuals and
            organizations supporting the activities and
            initiatives of Chattogram Forum, SUST.
          </p>

          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#7FB59C]" />
        </motion.div>

        {/* ================================
            SPONSOR CARDS
        ================================= */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {activeSponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
              whileHover={{ y: -5 }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#7FB59C]/20
                bg-white
                p-5
                transition-all
                duration-300
                hover:border-[#7FB59C]/45
                hover:shadow-[0_14px_40px_rgba(92,154,129,0.13)]
                sm:p-6
              "
            >
              {/* Top Green Decoration */}
              <div className="absolute left-0 top-0 h-[4px] w-full bg-[#7FB59C]" />

              <div className="flex gap-5">
                {/* ============================
                    LEFT SIDE
                ============================= */}
                <div className="min-w-0 flex-1">
                  {/* Company Logo */}
                  <div
                    className="
                      flex
                      h-[72px]
                      w-[72px]
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      border
                      border-[#7FB59C]/25
                      bg-[#FFFFF3]
                      p-2
                    "
                  >
                    <img
                      src={sponsor.companyLogo}
                      alt={`${sponsor.companyName} logo`}
                      className="h-full w-full rounded-full object-contain"
                    />
                  </div>

                  {/* Person Name */}
                  <h3
                    className="
                      mt-5
                      text-xl
                      font-bold
                      text-black
                      sm:text-[22px]
                    "
                  >
                    {sponsor.personName}
                  </h3>

                  {/* Company Name */}
                  <p
                    className="
                      mt-1
                      text-[22px]
                      font-semibold
                      text-[#5C9A81]
                    "
                  >
                    {sponsor.companyName}
                  </p>

                  {/* Small Divider */}
                  <div className="my-4 h-[2px] w-10 rounded-full bg-[#7FB59C]/60" />

                  {/* Details */}
                  <div className="space-y-3">
                    {/* Position */}
                    <div className="flex items-start gap-3">
                      <div
                        className="
                          mt-[1px]
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#DCEDE4]
                          text-[#5C9A81]
                        "
                      >
                        <HiOutlineBriefcase />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-[#6B7280]">
                          Position
                        </p>

                        <p className="mt-[2px] text-sm font-medium text-black">
                          {sponsor.position}
                        </p>
                      </div>
                    </div>

                    {/* Sponsor Type */}
                    <div className="flex items-start gap-3">
                      <div
                        className="
                          mt-[1px]
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#DCEDE4]
                          text-[#5C9A81]
                        "
                      >
                        <HiOutlineBadgeCheck />
                      </div>

                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-wide text-[#6B7280]">
                          Sponsor Type
                        </p>

                        <p className="mt-[2px] text-sm font-semibold text-[#5C9A81]">
                          {sponsor.type}
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div
                        className="
                          mt-[1px]
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#DCEDE4]
                          text-[#5C9A81]
                        "
                      >
                        <HiOutlineMail />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-[#6B7280]">
                          Contact Email
                        </p>

                        <a
                          href={`mailto:${sponsor.email}`}
                          className="
                            mt-[2px]
                            block
                            truncate
                            text-sm
                            text-[#4B5563]
                            hover:text-[#5C9A81]
                          "
                        >
                          {sponsor.email}
                        </a>
                      </div>
                    </div>

                    {/* Website */}
                    <div className="flex items-start gap-3">
                      <div
                        className="
                          mt-[1px]
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#DCEDE4]
                          text-[#5C9A81]
                        "
                      >
                        <HiOutlineGlobeAlt />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-[#6B7280]">
                          Website
                        </p>

                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            mt-[2px]
                            inline-block
                            text-sm
                            font-medium
                            text-[#5C9A81]
                            hover:underline
                          "
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ============================
                    RIGHT SIDE PERSON IMAGE
                ============================= */}
                <div className="shrink-0">
                  <div
                    className="
                      relative
                      h-[150px]
                      w-[125px]
                      overflow-hidden
                      rounded-xl
                      bg-[#DCEDE4]
                      sm:h-[180px]
                      sm:w-[150px]
                    "
                  >
                    <img
                      src={sponsor.personImage}
                      alt={sponsor.personName}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                    {/* Image Bottom Accent */}
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[4px]
                        w-full
                        bg-[#7FB59C]
                      "
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;