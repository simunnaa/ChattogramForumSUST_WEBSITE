import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiArrowRight,
} from "react-icons/hi";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaCode,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Advisors", path: "/advisors" },
    { name: "Members", path: "/members" },
    { name: "Alumni", path: "/alumni" },
  ];

  const exploreLinks = [
    {
      name: "Executive Committee",
      path: "/executive-committee",
    },
    {
      name: "Events & Notices",
      path: "/events-notices",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "#",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "#",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#101512] text-white">
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[180px]
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-white/[0.05]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[80px]
          -top-[80px]
          h-[220px]
          w-[220px]
          rounded-full
          bg-[#7FB59C]/[0.06]
          blur-[70px]
        "
      />

      <div
        className="
          mx-auto
          max-w-[1400px]
          px-5
          pt-16
          sm:px-6
          sm:pt-20
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
        "
      >
        {/* =========================================
            MAIN FOOTER
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            pb-14
            md:grid-cols-2
            lg:grid-cols-[1.5fr_0.7fr_0.8fr_1fr]
            lg:gap-10
            lg:pb-16
          "
        >
          {/* =====================================
              BRAND
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-4"
            >
              <img
                src="/images/forum-logo.jpg"
                alt="Chattogram Forum, SUST Logo"
                className="
                  h-[62px]
                  w-[62px]
                  rounded-full
                  object-cover
                  sm:h-[68px]
                  sm:w-[68px]
                "
              />

              <div>
                <h2
                  className="
                    text-[18px]
                    font-bold
                    tracking-[0.04em]
                    text-white
                    sm:text-[20px]
                  "
                >
                  Chattogram Forum
                </h2>

                <p
                  className="
                    mt-1
                    text-[14px]
                    font-bold
                    tracking-[0.45em]
                    text-[#7FB59C]
                  "
                >
                  SUST
                </p>
              </div>
            </Link>

            <p
              className="
                mt-6
                max-w-[390px]
                text-[12px]
                leading-[1.9]
                text-white/55
                sm:text-[13px]
              "
            >
              Connecting students, alumni and generations of
              Chattogram Forum at Shahjalal University of Science
              and Technology through community, leadership and
              shared memories.
            </p>

            {/* Social Media */}

            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-[14px]
                      text-white/70
                      transition-colors
                      duration-300
                      hover:border-[#7FB59C]
                      hover:bg-[#7FB59C]
                      hover:text-white
                    "
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* =====================================
              QUICK LINKS
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.08,
            }}
          >
            <h3
              className="
                mb-6
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
              "
            >
              Quick Links
            </h3>

            <div className="flex flex-col items-start gap-3.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-[12px]
                    text-white/55
                    transition-colors
                    duration-200
                    hover:text-[#7FB59C]
                    sm:text-[13px]
                  "
                >
                  <span
                    className="
                      h-[1px]
                      w-0
                      bg-[#7FB59C]
                      transition-all
                      duration-300
                      group-hover:w-3
                    "
                  />

                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* =====================================
              EXPLORE
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.14,
            }}
          >
            <h3
              className="
                mb-6
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
              "
            >
              Explore
            </h3>

            <div className="flex flex-col items-start gap-3.5">
              {exploreLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-[12px]
                    text-white/55
                    transition-colors
                    duration-200
                    hover:text-[#7FB59C]
                    sm:text-[13px]
                  "
                >
                  <span
                    className="
                      h-[1px]
                      w-0
                      bg-[#7FB59C]
                      transition-all
                      duration-300
                      group-hover:w-3
                    "
                  />

                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* =====================================
              CONTACT
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <h3
              className="
                mb-6
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white
              "
            >
              Contact
            </h3>

            {/* Location */}

            <div className="flex items-start gap-3">
              <HiOutlineLocationMarker
                className="
                  mt-[3px]
                  shrink-0
                  text-[18px]
                  text-[#7FB59C]
                "
              />

              <p
                className="
                  text-[12px]
                  leading-[1.8]
                  text-white/55
                  sm:text-[13px]
                "
              >
                Shahjalal University of
                <br />
                Science & Technology
                <br />
                Sylhet, Bangladesh
              </p>
            </div>

            {/* Contact */}

            <div className="mt-5 flex items-start gap-3">
              <HiOutlineMail
                className="
                  mt-[2px]
                  shrink-0
                  text-[18px]
                  text-[#7FB59C]
                "
              />

              <div>
                <p
                  className="
                    text-[12px]
                    text-white/55
                    sm:text-[13px]
                  "
                >
                  Have a question?
                </p>

                <Link
                  to="/contact"
                  className="
                    group
                    mt-1.5
                    inline-flex
                    items-center
                    gap-2
                    text-[12px]
                    font-medium
                    text-[#7FB59C]
                  "
                >
                  Contact the Forum

                  <HiArrowRight
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            FOOTER BOTTOM
        ========================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Copyright */}

          <p
            className="
              text-[10px]
              text-white/40
              sm:text-[11px]
            "
          >
            © {currentYear} Chattogram Forum, SUST. All rights
            reserved.
          </p>

          {/* Bottom Links */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
            "
          >
            <p
              className="
                text-[10px]
                text-white/35
                sm:text-[11px]
              "
            >
              Students • Alumni • Community
            </p>

            {/* Divider */}

            <span
              className="
                hidden
                h-3
                w-px
                bg-white/15
                sm:block
              "
            />

            {/* Contact */}

            <Link
              to="/contact"
              className="
                text-[10px]
                text-white/40
                transition-colors
                duration-200
                hover:text-[#7FB59C]
                sm:text-[11px]
              "
            >
              Contact
            </Link>

            {/* Divider */}

            <span
              className="
                hidden
                h-3
                w-px
                bg-white/15
                sm:block
              "
            />

            {/* =====================================
                DEVELOPER CONNECT
            ====================================== */}

            <motion.div
              whileHover={{
                y: -2,
              }}
            >
              <Link
                to="/developer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-1.5
                  text-[10px]
                  font-medium
                  text-white/40
                  transition-colors
                  duration-200
                  hover:text-[#7FB59C]
                  sm:text-[11px]
                "
              >
                <FaCode className="text-[13px]" />

                Developer Connect

                <HiArrowRight
                  className="
                    text-[11px]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;