import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineUser,
  HiOutlineChatAlt2,
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineArrowRight,
  HiOutlineGlobeAlt,
} from "react-icons/hi";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

/* =========================================================
   INITIAL FORM DATA
========================================================= */

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

/* =========================================================
   CONTACT INFORMATION

   Replace these temporary values later with real Forum data.
========================================================= */

const contactInformation = [
  {
    id: 1,
    title: "Email",
    value: "chattogramforum@example.com",
    description: "For general inquiries and information",
    icon: HiOutlineMail,
    href: "mailto:chattogramforum@example.com",
  },
  {
    id: 2,
    title: "Phone",
    value: "+880 1XXX-XXXXXX",
    description: "Contact the Forum when necessary",
    icon: HiOutlinePhone,
    href: "tel:+8801000000000",
  },
  {
    id: 3,
    title: "Location",
    value: "SUST, Sylhet",
    description:
      "Shahjalal University of Science and Technology",
    icon: HiOutlineLocationMarker,
    href: null,
  },
];

/* =========================================================
   SUBJECT OPTIONS
========================================================= */

const subjectOptions = [
  "General Inquiry",
  "Membership",
  "Alumni Information",
  "Event & Activities",
  "Executive Committee",
  "Partnership / Collaboration",
  "Website Feedback",
  "Other",
];

/* =========================================================
   CONTACT PAGE
========================================================= */

const Contact = () => {
  const ease = [0.22, 1, 0.36, 1];

  const [formData, setFormData] =
    useState(initialFormData);

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  /* =====================================================
     INPUT CHANGE
  ====================================================== */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  /* =====================================================
     VALIDATION
  ====================================================== */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !emailPattern.test(
          formData.email.trim()
        )
      ) {
        newErrors.email =
          "Enter a valid email address.";
      }
    }

    if (!formData.subject) {
      newErrors.subject =
        "Please select a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Message is required.";
    } else if (
      formData.message.trim().length < 10
    ) {
      newErrors.message =
        "Message should contain at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =====================================================
     FORM SUBMIT
  ====================================================== */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    /*
      =====================================================
      TEMPORARY FRONTEND SUBMISSION

      Later replace this with:

      await axios.post("/api/contact", formData);

      Backend object:

      {
        name,
        email,
        phone,
        subject,
        message,
        status: "unread",
        createdAt
      }
      =====================================================
    */

    const contactMessage = {
      id: Date.now(),
      ...formData,
      status: "unread",
      createdAt: new Date().toISOString(),
    };

    console.log(
      "Contact message:",
      contactMessage
    );

    /*
      Small delay only for the frontend demo.
      Remove after connecting API.
    */

    await new Promise((resolve) =>
      setTimeout(resolve, 600)
    );

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData(initialFormData);
    setErrors({});
  };

  /* =====================================================
     SEND ANOTHER MESSAGE
  ====================================================== */

  const sendAnotherMessage = () => {
    setSubmitted(false);
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <main className="min-h-screen bg-[#FFFFF3]">
      {/* =================================================
          01. HERO
      ================================================== */}

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
        {/* Background */}

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
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
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
                hover:text-[#5C9A81]
              "
            >
              <HiOutlineHome className="text-[14px]" />

              Home
            </Link>

            <span className="text-[#7FB59C]">
              /
            </span>

            <span className="text-[#5C9A81]">
              Contact
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
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease,
                }}
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                "
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
                  Get In Touch
                </p>
              </motion.div>

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
                  delay: 0.15,
                  ease,
                }}
                className="
                  max-w-[900px]
                  text-[42px]
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
                Let's Stay

                <br />

                <span className="text-[#5C9A81]">
                  Connected.
                </span>
              </motion.h1>
            </div>

            {/* Right */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
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
                Have a question, suggestion or want to
                connect with Chattogram Forum, SUST?
                Send us a message and stay connected
                with our community.
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                "
              >
                <HiOutlineChatAlt2
                  className="
                    text-[18px]
                    text-[#5C9A81]
                  "
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
                  Connect • Communicate • Community
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================
          02. CONTACT CONTENT
      ================================================== */}

      <section
        className="
          px-5
          py-16
          sm:px-6
          sm:py-20
          md:px-8
          lg:px-10
          lg:py-24
          xl:px-14
          2xl:px-16
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1400px]
            grid-cols-1
            gap-10
            lg:grid-cols-[0.78fr_1.22fr]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT - CONTACT INFORMATION
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease,
            }}
          >
            <div>
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#5C9A81]
                "
              >
                Contact Information
              </p>

              <h2
                className="
                  mt-3
                  max-w-[500px]
                  text-[30px]
                  font-bold
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-black
                  sm:text-[36px]
                "
              >
                We'd Love to Hear

                <span className="text-[#5C9A81]">
                  {" "}
                  From You.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-[520px]
                  text-[12px]
                  leading-[1.85]
                  text-[#4B5563]
                  sm:text-[13px]
                "
              >
                Whether you're a current student,
                alumnus, well-wisher or simply want to
                learn more about the Forum, feel free
                to reach out.
              </p>
            </div>

            {/* Contact Cards */}

            <div className="mt-8 space-y-3">
              {contactInformation.map(
                (item, index) => {
                  const Icon = item.icon;

                  const content = (
                    <motion.div
                      whileHover={{
                        x: 4,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        group
                        flex
                        items-start
                        gap-4
                        border
                        border-[#7FB59C]/20
                        bg-[#FFFFF3]
                        p-4
                        transition-colors
                        duration-300
                        hover:border-[#7FB59C]/55
                        sm:p-5
                      "
                    >
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
                          text-[17px]
                          text-[#5C9A81]
                          transition-colors
                          duration-300
                          group-hover:bg-[#7FB59C]
                          group-hover:text-white
                        "
                      >
                        <Icon />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.13em]
                            text-[#5C9A81]
                          "
                        >
                          {item.title}
                        </p>

                        <p
                          className="
                            mt-1
                            break-words
                            text-[13px]
                            font-bold
                            text-black
                            sm:text-[14px]
                          "
                        >
                          {item.value}
                        </p>

                        <p
                          className="
                            mt-1
                            text-[9px]
                            leading-[1.6]
                            text-[#4B5563]
                          "
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={item.id}>
                      {content}
                    </div>
                  );
                }
              )}
            </div>

            {/* Social */}

            <div
              className="
                mt-8
                border-t
                border-[#7FB59C]/15
                pt-6
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#4B5563]
                "
              >
                Follow Our Community
              </p>

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-2
                "
              >
                <SocialButton
                  href="#"
                  label="Facebook"
                  icon={FaFacebookF}
                />

                <SocialButton
                  href="#"
                  label="Instagram"
                  icon={FaInstagram}
                />

                <SocialButton
                  href="#"
                  label="LinkedIn"
                  icon={FaLinkedinIn}
                />
              </div>

              <p
                className="
                  mt-3
                  text-[8px]
                  leading-[1.6]
                  text-[#4B5563]/70
                "
              >
                Social media links are temporary.
                Replace them with the official Forum
                accounts later.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT - CONTACT FORM
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="
              border
              border-[#7FB59C]/20
              bg-[#DCEDE4]/20
              p-5
              sm:p-7
              md:p-8
              lg:p-9
            "
          >
            {!submitted ? (
              <>
                {/* Form Heading */}

                <div
                  className="
                    mb-7
                    border-b
                    border-[#7FB59C]/15
                    pb-5
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <HiOutlineChatAlt2
                      className="
                        text-[17px]
                        text-[#5C9A81]
                      "
                    />

                    <p
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#5C9A81]
                      "
                    >
                      Send a Message
                    </p>
                  </div>

                  <h2
                    className="
                      mt-2
                      text-[25px]
                      font-bold
                      tracking-[-0.03em]
                      text-black
                      sm:text-[30px]
                    "
                  >
                    How Can We Help?
                  </h2>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      leading-[1.7]
                      text-[#4B5563]
                    "
                  >
                    Fill in the form below and your
                    message will be sent to the Forum
                    administration.
                  </p>
                </div>

                {/* Form */}

                <form
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-4
                      sm:grid-cols-2
                    "
                  >
                    {/* Name */}

                    <FormInput
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      error={errors.name}
                      required
                      icon={HiOutlineUser}
                    />

                    {/* Email */}

                    <FormInput
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      error={errors.email}
                      required
                      icon={HiOutlineMail}
                    />

                    {/* Phone */}

                    <FormInput
                      label="Phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880..."
                      error={errors.phone}
                      icon={HiOutlinePhone}
                    />

                    {/* Subject */}

                    <div>
                      <label
                        htmlFor="subject"
                        className="
                          mb-1.5
                          block
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.1em]
                          text-[#4B5563]
                        "
                      >
                        Subject

                        <span className="ml-1 text-[#5C9A81]">
                          *
                        </span>
                      </label>

                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`
                          w-full
                          cursor-pointer
                          border
                          bg-[#FFFFF3]
                          px-4
                          py-3.5
                          text-[11px]
                          text-black
                          outline-none
                          transition-colors
                          focus:border-[#7FB59C]

                          ${
                            errors.subject
                              ? "border-red-400"
                              : "border-[#7FB59C]/25"
                          }
                        `}
                      >
                        <option value="">
                          Select a subject
                        </option>

                        {subjectOptions.map(
                          (subject) => (
                            <option
                              key={subject}
                              value={subject}
                            >
                              {subject}
                            </option>
                          )
                        )}
                      </select>

                      {errors.subject && (
                        <ErrorMessage
                          message={
                            errors.subject
                          }
                        />
                      )}
                    </div>
                  </div>

                  {/* Message */}

                  <div className="mt-4">
                    <label
                      htmlFor="message"
                      className="
                        mb-1.5
                        block
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.1em]
                        text-[#4B5563]
                      "
                    >
                      Message

                      <span className="ml-1 text-[#5C9A81]">
                        *
                      </span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={7}
                      maxLength={1000}
                      placeholder="Write your message here..."
                      className={`
                        w-full
                        resize-none
                        border
                        bg-[#FFFFF3]
                        px-4
                        py-3.5
                        text-[11px]
                        leading-[1.7]
                        text-black
                        outline-none
                        transition-colors
                        placeholder:text-[#4B5563]/45
                        focus:border-[#7FB59C]

                        ${
                          errors.message
                            ? "border-red-400"
                            : "border-[#7FB59C]/25"
                        }
                      `}
                    />

                    <div
                      className="
                        mt-1
                        flex
                        items-start
                        justify-between
                        gap-3
                      "
                    >
                      <div>
                        {errors.message && (
                          <ErrorMessage
                            message={
                              errors.message
                            }
                          />
                        )}
                      </div>

                      <span
                        className="
                          shrink-0
                          text-[8px]
                          text-[#4B5563]
                        "
                      >
                        {formData.message.length}
                        /1000
                      </span>
                    </div>
                  </div>

                  {/* Information */}

                  <div
                    className="
                      mt-5
                      border-l-2
                      border-[#7FB59C]
                      bg-[#DCEDE4]/45
                      px-4
                      py-3
                    "
                  >
                    <p
                      className="
                        text-[9px]
                        leading-[1.7]
                        text-[#4B5563]
                      "
                    >
                      Please provide accurate contact
                      information so the Forum can
                      respond to your message when
                      necessary.
                    </p>
                  </div>

                  {/* Submit */}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={
                      !isSubmitting
                        ? { y: -2 }
                        : {}
                    }
                    whileTap={
                      !isSubmitting
                        ? { scale: 0.98 }
                        : {}
                    }
                    className="
                      mt-6
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      bg-[#7FB59C]
                      px-6
                      py-3.5
                      text-[11px]
                      font-semibold
                      text-white
                      hover:bg-[#5C9A81]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      sm:w-auto
                    "
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="
                            h-4
                            w-4
                            animate-spin
                            rounded-full
                            border-2
                            border-white/40
                            border-t-white
                          "
                        />

                        Sending...
                      </>
                    ) : (
                      <>
                        <HiOutlinePaperAirplane
                          className="
                            rotate-90
                            text-[16px]
                          "
                        />

                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            ) : (
              /* =================================================
                  SUCCESS STATE
              ================================================== */

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  flex
                  min-h-[520px]
                  flex-col
                  items-center
                  justify-center
                  px-3
                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#DCEDE4]
                    text-[32px]
                    text-[#5C9A81]
                  "
                >
                  <HiOutlineCheckCircle />
                </div>

                <p
                  className="
                    mt-6
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#5C9A81]
                  "
                >
                  Message Received
                </p>

                <h2
                  className="
                    mt-2
                    text-[28px]
                    font-bold
                    tracking-[-0.03em]
                    text-black
                  "
                >
                  Thank You!
                </h2>

                <p
                  className="
                    mt-3
                    max-w-[470px]
                    text-[11px]
                    leading-[1.85]
                    text-[#4B5563]
                  "
                >
                  Your message has been submitted.
                  The Chattogram Forum, SUST
                  administration will be able to
                  review it once the backend is
                  connected.
                </p>

                <button
                  type="button"
                  onClick={sendAnotherMessage}
                  className="
                    mt-7
                    bg-[#7FB59C]
                    px-6
                    py-3
                    text-[10px]
                    font-semibold
                    text-white
                    hover:bg-[#5C9A81]
                  "
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* =================================================
          03. LOCATION
      ================================================== */}

      <section
        className="
          bg-[#DCEDE4]/35
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
        <div
          className="
            mx-auto
            grid
            max-w-[1400px]
            overflow-hidden
            border
            border-[#7FB59C]/20
            bg-[#FFFFF3]
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* Location Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="
              flex
              flex-col
              justify-center
              p-6
              sm:p-8
              lg:p-12
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[#DCEDE4]
                text-[20px]
                text-[#5C9A81]
              "
            >
              <HiOutlineLocationMarker />
            </div>

            <p
              className="
                mt-6
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#5C9A81]
              "
            >
              Our University
            </p>

            <h2
              className="
                mt-2
                text-[27px]
                font-bold
                leading-[1.2]
                tracking-[-0.03em]
                text-black
                sm:text-[33px]
              "
            >
              Shahjalal University of Science &

              <span className="text-[#5C9A81]">
                {" "}
                Technology
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[560px]
                text-[11px]
                leading-[1.85]
                text-[#4B5563]
                sm:text-[12px]
              "
            >
              Chattogram Forum, SUST is a
              university-based community connecting
              students and alumni associated with
              Chattogram.
            </p>

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
                text-[10px]
                font-medium
                text-[#4B5563]
              "
            >
              <HiOutlineLocationMarker
                className="
                  text-[16px]
                  text-[#5C9A81]
                "
              />

              SUST, Sylhet, Bangladesh
            </div>
          </motion.div>

          {/* Map Placeholder */}

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
              duration: 0.7,
              ease,
            }}
            className="
              relative
              flex
              min-h-[300px]
              items-center
              justify-center
              overflow-hidden
              bg-[#7FB59C]
              sm:min-h-[360px]
              lg:min-h-[430px]
            "
          >
            {/* Decorative map pattern */}

            <div
              className="
                absolute
                -left-16
                -top-16
                h-[220px]
                w-[220px]
                rounded-full
                border
                border-white/15
              "
            />

            <div
              className="
                absolute
                -right-24
                -bottom-24
                h-[320px]
                w-[320px]
                rounded-full
                border
                border-white/15
              "
            />

            <div
              className="
                absolute
                left-[20%]
                top-[20%]
                h-[180px]
                w-[180px]
                rounded-full
                bg-white/5
              "
            />

            <div
              className="
                relative
                z-10
                px-6
                text-center
                text-white
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FFFFF3]
                  text-[27px]
                  text-[#5C9A81]
                  shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                "
              >
                <HiOutlineAcademicCap />
              </div>

              <h3
                className="
                  mt-5
                  text-[23px]
                  font-bold
                "
              >
                SUST Campus
              </h3>

              <p
                className="
                  mt-2
                  text-[10px]
                  leading-[1.7]
                  text-white/75
                "
              >
                Shahjalal University of Science
                and Technology
              </p>

              <p
                className="
                  mt-1
                  text-[9px]
                  text-white/60
                "
              >
                Sylhet, Bangladesh
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shahjalal+University+of+Science+and+Technology"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  border
                  border-white/35
                  px-5
                  py-2.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.1em]
                  text-white
                  hover:bg-white
                  hover:text-[#5C9A81]
                "
              >
                <HiOutlineGlobeAlt />

                Open in Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================
          04. COMMUNITY CTA
      ================================================== */}

      <section
        className="
          px-5
          py-16
          sm:px-6
          sm:py-20
          md:px-8
          lg:px-10
          lg:py-24
          xl:px-14
        "
      >
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
          className="
            mx-auto
            max-w-[1200px]
            border
            border-[#7FB59C]/20
            bg-[#101512]
            px-6
            py-12
            text-center
            sm:px-10
            sm:py-14
            lg:px-16
          "
        >
          <div
            className="
              mx-auto
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#7FB59C]
              text-[19px]
              text-white
            "
          >
            <HiOutlineUserGroup />
          </div>

          <p
            className="
              mt-5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#7FB59C]
            "
          >
            Our Community
          </p>

          <h2
            className="
              mx-auto
              mt-3
              max-w-[700px]
              text-[28px]
              font-bold
              leading-[1.2]
              tracking-[-0.035em]
              text-white
              sm:text-[35px]
              lg:text-[40px]
            "
          >
            More Than a Forum.

            <span className="text-[#7FB59C]">
              {" "}
              A Lifelong Connection.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[620px]
              text-[11px]
              leading-[1.85]
              text-white/60
              sm:text-[12px]
            "
          >
            Discover the students and alumni who
            make Chattogram Forum, SUST a growing
            community across generations.
          </p>

          <div
            className="
              mt-7
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >
            <Link
              to="/members"
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                bg-[#7FB59C]
                px-6
                py-3
                text-[10px]
                font-semibold
                text-white
                hover:bg-[#5C9A81]
                sm:w-auto
              "
            >
              Explore Members

              <HiOutlineArrowRight
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              to="/alumni"
              className="
                group
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                border
                border-white/25
                px-6
                py-3
                text-[10px]
                font-semibold
                bg-gray-300
                text-white
                hover:border-white
                hover:bg-white
                hover:text-black
                sm:w-auto
              "
            >
              Explore Alumni

              <HiOutlineArrowRight
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

/* =========================================================
   FORM INPUT
========================================================= */

const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  required = false,
  icon: Icon,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-1.5
          block
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.1em]
          text-[#4B5563]
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-[#5C9A81]">
            *
          </span>
        )}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            className="
              pointer-events-none
              absolute
              left-3.5
              top-1/2
              -translate-y-1/2
              text-[15px]
              text-[#5C9A81]
            "
          />
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            w-full
            border
            bg-[#FFFFF3]
            py-3.5
            pr-4
            text-[11px]
            text-black
            outline-none
            transition-colors
            placeholder:text-[#4B5563]/45
            focus:border-[#7FB59C]

            ${Icon ? "pl-10" : "pl-4"}

            ${
              error
                ? "border-red-400"
                : "border-[#7FB59C]/25"
            }
          `}
        />
      </div>

      {error && (
        <ErrorMessage message={error} />
      )}
    </div>
  );
};

/* =========================================================
   ERROR MESSAGE
========================================================= */

const ErrorMessage = ({ message }) => {
  return (
    <p
      className="
        mt-1.5
        flex
        items-center
        gap-1
        text-[8px]
        font-medium
        text-red-500
      "
    >
      <HiOutlineExclamationCircle
        className="shrink-0 text-[12px]"
      />

      {message}
    </p>
  );
};

/* =========================================================
   SOCIAL BUTTON
========================================================= */

const SocialButton = ({
  href,
  label,
  icon: Icon,
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.92,
      }}
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-[#7FB59C]/25
        bg-[#DCEDE4]/60
        text-[13px]
        text-[#5C9A81]
        transition-colors
        hover:border-[#7FB59C]
        hover:bg-[#7FB59C]
        hover:text-white
      "
    >
      <Icon />
    </motion.a>
  );
};

export default Contact;