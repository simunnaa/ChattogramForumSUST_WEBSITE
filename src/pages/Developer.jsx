import { motion } from "framer-motion";

import {
  HiOutlineMail,
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineExternalLink,
} from "react-icons/hi";

import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const developers = [
  {
    id: 1,
    name: "Shakibul Islam Munna",
    image:
      "https://scontent.fdac142-1.fna.fbcdn.net/v/t51.82787-15/712504492_18421681837192383_5204243270019104990_n.webp?stp=dst-jpg_tt6&cstp=mx1079x607&ctp=s1079x607&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEks4d1UT52QtMx7tBLzY-g_Yjln6rI1Gb9iOWfqsjUZuXgf28axkR-fqSS1fTN_P_GLspLx2UhYQlmWzKUHHyP&_nc_ohc=xBdlSSyvftQQ7kNvwHtUnaj&_nc_oc=AdrK3lttak7VxgXS-c_Grk25VthpLXYe7iSaj-wWKbjcHBSuRVKOfl-YA29cD2L1XZI&_nc_zt=23&_nc_ht=scontent.fdac142-1.fna&_nc_gid=DX0NJFGB10DnpkbOB5dKvg&_nc_ss=7b2a8&oh=00_AQLaxWbyllR6Ep0DafNpdU8QtJhGh58cf_MLxodKheDahA&oe=6AB8B2D2",

    role: "Full Stack Developer",

    department: "Software Engineering",
    session: "2022–2023",
    university: "Shahjalal University of Science and Technology (SUST)",

    email: "munna@example.com",

    github: "https://github.com/simunnaa",
    linkedin: "#",
    facebook: "#",
  },

  {
    id: 2,
    name: "Aditya Chowdhury",
    image:
      "https://scontent.fdac142-1.fna.fbcdn.net/v/t51.82787-15/713384237_18083850395447132_4443023476215408508_n.webp?stp=dst-jpg_tt6&cstp=mx1440x810&ctp=p720x720&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGeDdEG_igXpYN5EG0E4K7azSV2_B6yXJzNJXb8HrJcnKM7YBa_mlTflUpTgFqTm3ImekBZ_DAVMnm8VGkmAp82&_nc_ohc=_CUQDaM1CzoQ7kNvwHZNrco&_nc_oc=AdrTN9xCCjHdMC1e4Xy-gl3VUNlhiM5z2aE9nOpdubEU5l2cTYvkp87vWQseaG1W_Q4&_nc_zt=23&_nc_ht=scontent.fdac142-1.fna&_nc_gid=-t6S5BBV47na01oxXhd0Aw&_nc_ss=7b2a8&oh=00_AQICbKlzRgPRQAjQuO3MQPsawzFfuUKs8kgzJjk6qiljUQ&oe=6AB8B619",

    role: "Full Stack Developer",

    department: "Software Engineering",
    session: "2022–2023",
    university: "Shahjalal University of Science and Technology (SUST)",

    email: "aditya@example.com",

    github: "#",
    linkedin: "#",
    facebook: "#",
  },
];

const skills = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
];

const Developer = () => {
  return (
    <main className="min-h-screen bg-[#FFFFF3]">
      {/* ========================================
          HERO
      ========================================= */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {/* Decorations */}
        <div
          className="
            pointer-events-none
            absolute
            -left-24
            top-10
            h-72
            w-72
            rounded-full
            bg-[#7FB59C]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            bottom-0
            h-72
            w-72
            rounded-full
            bg-[#7FB59C]/10
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-[1200px] px-5 md:px-8 lg:px-10">
          {/* ========================================
              PAGE HEADING
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-[720px] text-center"
          >
            <p
              className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#5C9A81]
              "
            >
              Behind The Website
            </p>

            <h1
              className="
                text-3xl
                font-bold
                text-black
                md:text-4xl
                lg:text-5xl
              "
            >
              Meet the <span className="text-[#5C9A81]">Developers</span>
            </h1>

            <p
              className="
                mx-auto
                mt-4
                max-w-[650px]
                text-sm
                leading-7
                text-[#4B5563]
                md:text-base
              "
            >
              Meet the developers behind the digital platform of Chattogram
              Forum, SUST.
            </p>

            <div
              className="
                mx-auto
                mt-5
                h-[3px]
                w-16
                rounded-full
                bg-[#7FB59C]
              "
            />
          </motion.div>

          {/* ========================================
              DEVELOPER CARDS
          ========================================= */}
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {developers.map((developer, index) => (
              <motion.div
                key={developer.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#7FB59C]/20
                  bg-white
                  transition-all
                  duration-300
                  hover:border-[#7FB59C]/40
                  hover:shadow-[0_18px_50px_rgba(92,154,129,0.12)]
                "
              >
                {/* ================================
                    DEVELOPER IMAGE
                ================================= */}
                <div
                  className="
                    relative
                    h-[350px]
                    overflow-hidden
                    bg-[#DCEDE4]
                    sm:h-[400px]
                  "
                >
                  <img
                    src={developer.image}
                    alt={developer.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      bg-gradient-to-t
                      from-black/75
                      via-black/25
                      to-transparent
                      px-6
                      pb-6
                      pt-24
                    "
                  >
                    <p
                      className="
                        text-sm
                        font-medium
                        text-[#DCEDE4]
                      "
                    >
                      {developer.role}
                    </p>

                    <h2
                      className="
                        mt-1
                        text-2xl
                        font-bold
                        text-white
                      "
                    >
                      {developer.name}
                    </h2>
                  </div>
                </div>

                {/* ================================
                    INFORMATION
                ================================= */}
                <div className="p-6 sm:p-7">
                  {/* Role */}
                  <div>
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#5C9A81]
                      "
                    >
                      Developer
                    </p>

                    <h3
                      className="
                        mt-2
                        text-xl
                        font-bold
                        text-black
                      "
                    >
                      {developer.name}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#4B5563]
                      "
                    >
                      Software Engineering student and full stack web developer
                      interested in developing practical, modern and
                      user-friendly software solutions.
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-[#7FB59C]/20" />

                  {/* ================================
                      DETAILS
                  ================================= */}
                  <div className="space-y-4">
                    {/* Department */}
                    <div className="flex items-start gap-3">
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#DCEDE4]
                          text-lg
                          text-[#5C9A81]
                        "
                      >
                        <HiOutlineAcademicCap />
                      </div>

                      <div>
                        <p
                          className="
                            text-[11px]
                            font-medium
                            uppercase
                            tracking-wide
                            text-[#6B7280]
                          "
                        >
                          Department
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            font-medium
                            text-black
                          "
                        >
                          {developer.department}
                        </p>
                      </div>
                    </div>
                    {/* Session */}
                    <div className="flex items-start gap-3">
                      <div
                        className="
      flex
      h-9
      w-9
      shrink-0
      items-center
      justify-center
      rounded-lg
      bg-[#DCEDE4]
      text-lg
      text-[#5C9A81]
    "
                      >
                        <HiOutlineAcademicCap />
                      </div>

                      <div>
                        <p
                          className="
        text-[11px]
        font-medium
        uppercase
        tracking-wide
        text-[#6B7280]
      "
                        >
                          Session
                        </p>

                        <p className="mt-1 text-sm font-medium text-black">
                          {developer.session}
                        </p>
                      </div>
                    </div>

                    {/* University */}
                    <div className="flex items-start gap-3">
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#DCEDE4]
                          text-lg
                          text-[#5C9A81]
                        "
                      >
                       <HiOutlineAcademicCap />
                      </div>

                      <div>
                        <p
                          className="
                            text-[11px]
                            font-medium
                            uppercase
                            tracking-wide
                            text-[#6B7280]
                          "
                        >
                          University
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            font-medium
                            leading-6
                            text-black
                          "
                        >
                          {developer.university}
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#DCEDE4]
                          text-lg
                          text-[#5C9A81]
                        "
                      >
                        <HiOutlineMail />
                      </div>

                      <div className="min-w-0">
                        <p
                          className="
                            text-[11px]
                            font-medium
                            uppercase
                            tracking-wide
                            text-[#6B7280]
                          "
                        >
                          Email
                        </p>

                        <a
                          href={`mailto:${developer.email}`}
                          className="
                            mt-1
                            block
                            truncate
                            text-sm
                            font-medium
                            text-[#5C9A81]
                            hover:underline
                          "
                        >
                          {developer.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* ================================
                      SKILLS
                  ================================= */}
                  <div className="mt-7">
                    <p
                      className="
                        mb-3
                        text-sm
                        font-bold
                        text-black
                      "
                    >
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="
                            rounded-full
                            border
                            border-[#7FB59C]/20
                            bg-[#DCEDE4]
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            text-[#397F70]
                          "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ================================
                      SOCIAL LINKS
                  ================================= */}
                  <div className="mt-7">
                    <p
                      className="
                        mb-3
                        text-sm
                        font-bold
                        text-black
                      "
                    >
                      Connect
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {/* GitHub */}
                      <a
                        href={developer.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${developer.name} GitHub`}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#DCEDE4]
                          text-lg
                          text-[#5C9A81]
                          hover:-translate-y-1
                          hover:bg-[#5C9A81]
                          hover:text-white
                        "
                      >
                        <FaGithub />
                      </a>

                      {/* LinkedIn */}
                      <a
                        href={developer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${developer.name} LinkedIn`}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#DCEDE4]
                          text-lg
                          text-[#5C9A81]
                          hover:-translate-y-1
                          hover:bg-[#5C9A81]
                          hover:text-white
                        "
                      >
                        <FaLinkedinIn />
                      </a>

                      {/* Facebook */}
                      <a
                        href={developer.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${developer.name} Facebook`}
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#DCEDE4]
                          text-lg
                          text-[#5C9A81]
                          hover:-translate-y-1
                          hover:bg-[#5C9A81]
                          hover:text-white
                        "
                      >
                        <FaFacebookF />
                      </a>

                      {/* Email */}
                      <a
                        href={`mailto:${developer.email}`}
                        className="
                          flex
                          h-10
                          items-center
                          gap-2
                          rounded-xl
                          bg-[#5C9A81]
                          px-4
                          text-sm
                          font-semibold
                          text-white
                          hover:-translate-y-1
                          hover:bg-[#4D8871]
                        "
                      >
                        <HiOutlineMail />
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ========================================
              SHARED PROJECT SECTION
          ========================================= */}
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
            transition={{ duration: 0.5 }}
            className="
              mt-10
              rounded-2xl
              border
              border-[#7FB59C]/15
              bg-[#DCEDE4]
              p-6
              sm:p-8
            "
          >
            <div
              className="
                flex
                flex-col
                justify-between
                gap-6
                md:flex-row
                md:items-center
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    font-semibold
                    text-[#5C9A81]
                  "
                >
                  Our Project
                </p>

                <h3
                  className="
                    mt-1
                    text-2xl
                    font-bold
                    text-black
                  "
                >
                  Chattogram Forum, SUST
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[700px]
                    text-sm
                    leading-6
                    text-[#4B5563]
                  "
                >
                  A digital platform developed to connect members, alumni,
                  advisors and executive committees while preserving the
                  activities, achievements and history of Chattogram Forum,
                  SUST.
                </p>
              </div>

              <a
                href="https://github.com/simunnaa"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#5C9A81]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-[#5C9A81]
                  hover:bg-[#5C9A81]
                  hover:text-white
                "
              >
                <FaGithub />
                GitHub
                <HiOutlineExternalLink />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Developer;
