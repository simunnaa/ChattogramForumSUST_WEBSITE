import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Link,
  useSearchParams,
} from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineCalendar,
  HiOutlineX,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineCollection,
} from "react-icons/hi";

import galleryData from "../data/gallery";

/* =========================================================
   FILTERS
========================================================= */

const filters = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "events",
    label: "Events",
  },
  {
    id: "cultural",
    label: "Cultural",
  },
  {
    id: "social",
    label: "Social Activities",
  },
  {
    id: "reunions",
    label: "Reunions",
  },
  {
    id: "others",
    label: "Others",
  },
];

/* =========================================================
   DATE FORMAT
========================================================= */

const formatDate = (dateString) => {
  if (!dateString) return "";

  const [year, month, day] = dateString
    .split("-")
    .map(Number);

  return new Date(
    year,
    month - 1,
    day
  ).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

/* =========================================================
   CATEGORY NORMALIZER

   Shared gallery data may contain values like:
   "Events"
   "Cultural"
   "Social Activities"
   "Reunions"
   "Others"

   Filters use:
   events
   cultural
   social
   reunions
   others
========================================================= */

const normalizeCategory = (category) => {
  const value = category
    ?.trim()
    .toLowerCase();

  if (value === "events") {
    return "events";
  }

  if (value === "cultural") {
    return "cultural";
  }

  if (
    value === "social" ||
    value === "social activities"
  ) {
    return "social";
  }

  if (
    value === "reunion" ||
    value === "reunions"
  ) {
    return "reunions";
  }

  return "others";
};

/* =========================================================
   CATEGORY LABEL
========================================================= */

const getCategoryLabel = (category) => {
  const normalizedCategory =
    normalizeCategory(category);

  const found = filters.find(
    (filter) =>
      filter.id === normalizedCategory
  );

  return found?.label || category;
};

/* =========================================================
   GALLERY PAGE
========================================================= */

const Gallery = () => {
  const ease = [0.22, 1, 0.36, 1];

  /* =====================================================
     URL QUERY
  ====================================================== */

  const [searchParams, setSearchParams] =
    useSearchParams();

  const photoQuery =
    searchParams.get("photo");

  const selectedPhotoId = photoQuery
    ? Number(photoQuery)
    : null;

  /* =====================================================
     STATE
  ====================================================== */

  const [activeFilter, setActiveFilter] =
    useState("all");

  const [search, setSearch] =
    useState("");

  const [
    selectedImage,
    setSelectedImage,
  ] = useState(null);

  /* =====================================================
     ACTIVE GALLERY DATA
  ====================================================== */

  const activeGallery = useMemo(() => {
    return galleryData.filter(
      (item) => item.active !== false
    );
  }, []);

  /* =====================================================
     OPEN PHOTO FROM URL

     Example:
     /gallery?photo=15
  ====================================================== */

  useEffect(() => {
    if (!selectedPhotoId) return;

    const photo = activeGallery.find(
      (item) =>
        Number(item.id) ===
        Number(selectedPhotoId)
    );

    if (!photo) return;

    /*
      Make sure the photo is visible inside
      the current gallery filter.
    */

    setActiveFilter("all");
    setSearch("");
    setSelectedImage(photo);
  }, [
    selectedPhotoId,
    activeGallery,
  ]);

  /* =====================================================
     FILTER GALLERY
  ====================================================== */

  const filteredGallery = useMemo(() => {
    const searchValue = search
      .trim()
      .toLowerCase();

    return [...activeGallery]
      .filter((item) => {
        const itemCategory =
          normalizeCategory(
            item.category
          );

        const categoryMatches =
          activeFilter === "all" ||
          itemCategory === activeFilter;

        const searchableText = `
          ${item.title || ""}
          ${item.description || ""}
          ${item.category || ""}
          ${item.committeeTerm || ""}
          ${item.date || ""}
        `.toLowerCase();

        const searchMatches =
          !searchValue ||
          searchableText.includes(
            searchValue
          );

        return (
          categoryMatches &&
          searchMatches
        );
      })
      .sort((a, b) => {
        return (
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
        );
      });
  }, [
    activeFilter,
    search,
    activeGallery,
  ]);

  /* =====================================================
     FILTER COUNTS
  ====================================================== */

  const getFilterCount = (filterId) => {
    if (filterId === "all") {
      return activeGallery.length;
    }

    return activeGallery.filter(
      (item) =>
        normalizeCategory(
          item.category
        ) === filterId
    ).length;
  };

  /* =====================================================
     SELECTED IMAGE INDEX
  ====================================================== */

  const selectedIndex =
    selectedImage
      ? filteredGallery.findIndex(
          (item) =>
            item.id ===
            selectedImage.id
        )
      : -1;

  /* =====================================================
     OPEN IMAGE
  ====================================================== */

  const openImage = (item) => {
    setSelectedImage(item);

    const params =
      new URLSearchParams(
        searchParams
      );

    params.set(
      "photo",
      item.id.toString()
    );

    setSearchParams(params, {
      replace: true,
    });
  };

  /* =====================================================
     CLOSE IMAGE
  ====================================================== */

  const closeImage = () => {
    setSelectedImage(null);

    const params =
      new URLSearchParams(
        searchParams
      );

    params.delete("photo");

    setSearchParams(params, {
      replace: true,
    });
  };

  /* =====================================================
     CHANGE LIGHTBOX IMAGE
  ====================================================== */

  const changeSelectedImage = (
    item
  ) => {
    setSelectedImage(item);

    const params =
      new URLSearchParams(
        searchParams
      );

    params.set(
      "photo",
      item.id.toString()
    );

    setSearchParams(params, {
      replace: true,
    });
  };

  /* =====================================================
     PREVIOUS IMAGE
  ====================================================== */

  const showPreviousImage = () => {
    if (
      filteredGallery.length <= 1
    ) {
      return;
    }

    const currentIndex =
      selectedIndex >= 0
        ? selectedIndex
        : 0;

    const previousIndex =
      currentIndex <= 0
        ? filteredGallery.length - 1
        : currentIndex - 1;

    changeSelectedImage(
      filteredGallery[
        previousIndex
      ]
    );
  };

  /* =====================================================
     NEXT IMAGE
  ====================================================== */

  const showNextImage = () => {
    if (
      filteredGallery.length <= 1
    ) {
      return;
    }

    const currentIndex =
      selectedIndex >= 0
        ? selectedIndex
        : 0;

    const nextIndex =
      currentIndex >=
      filteredGallery.length - 1
        ? 0
        : currentIndex + 1;

    changeSelectedImage(
      filteredGallery[nextIndex]
    );
  };

  /* =====================================================
     KEYBOARD LIGHTBOX CONTROLS
  ====================================================== */

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (
      event
    ) => {
      if (event.key === "Escape") {
        closeImage();
      }

      if (
        event.key === "ArrowLeft"
      ) {
        showPreviousImage();
      }

      if (
        event.key === "ArrowRight"
      ) {
        showNextImage();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow =
      "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        "";
    };
  }, [
    selectedImage,
    selectedIndex,
    filteredGallery,
    searchParams,
  ]);

  /* =====================================================
     CLEAR FILTERS
  ====================================================== */

  const clearFilters = () => {
    setActiveFilter("all");
    setSearch("");
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
        {/* Background Decoration */}

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
              Gallery
            </span>
          </motion.div>

          {/* Hero */}

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
                <span
                  className="
                    h-[2px]
                    w-[38px]
                    bg-[#7FB59C]
                  "
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
                  Our Memories
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
                Moments That Tell
                <br />

                <span className="text-[#5C9A81]">
                  Our Story.
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
                From freshers' receptions and cultural
                celebrations to reunions and social
                initiatives, explore the moments that
                shape the journey of Chattogram Forum,
                SUST.
              </p>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                "
              >
                <HiOutlinePhotograph
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
                  Memories • Community • Legacy
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================
          02. FILTERS
      ================================================== */}

      <section
        className="
          border-b
          border-[#7FB59C]/15
          bg-[#DCEDE4]/25
          px-5
          py-7
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-16
        "
      >
        <div className="mx-auto max-w-[1400px]">
          <div
            className="
              mb-4
              flex
              flex-wrap
              items-center
              justify-between
              gap-3
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <HiOutlineFilter
                className="
                  text-[17px]
                  text-[#5C9A81]
                "
              />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#5C9A81]
                "
              >
                Browse Gallery
              </p>
            </div>

            <p
              className="
                text-[9px]
                text-[#4B5563]
              "
            >
              Showing{" "}
              <strong className="text-[#5C9A81]">
                {filteredGallery.length}
              </strong>{" "}
              photos
            </p>
          </div>

          {/* Category Buttons */}

          <div
            className="
              flex
              gap-2
              overflow-x-auto
              pb-2
            "
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() =>
                  setActiveFilter(
                    filter.id
                  )
                }
                className={`
                  shrink-0
                  border
                  px-4
                  py-2.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  transition-all
                  duration-300

                  ${
                    activeFilter ===
                    filter.id
                      ? "border-[#7FB59C] bg-[#7FB59C] text-white"
                      : "border-[#7FB59C]/25 bg-[#FFFFF3] text-[#4B5563] hover:border-[#7FB59C] hover:text-[#5C9A81]"
                  }
                `}
              >
                {filter.label}

                <span
                  className={`
                    ml-2

                    ${
                      activeFilter ===
                      filter.id
                        ? "text-white/70"
                        : "text-[#5C9A81]"
                    }
                  `}
                >
                  {getFilterCount(
                    filter.id
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Search */}

          <div className="relative mt-4">
            <HiOutlineSearch
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-[18px]
                text-[#5C9A81]
              "
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
              placeholder="Search gallery by event, activity or committee term..."
              className="
                w-full
                border
                border-[#7FB59C]/25
                bg-[#FFFFF3]
                py-3.5
                pl-11
                pr-11
                text-[11px]
                text-black
                outline-none
                placeholder:text-[#4B5563]/50
                focus:border-[#7FB59C]
                sm:text-[12px]
              "
            />

            {search && (
              <button
                type="button"
                onClick={() =>
                  setSearch("")
                }
                aria-label="Clear search"
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-[#4B5563]
                  hover:text-[#5C9A81]
                "
              >
                <HiOutlineX />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* =================================================
          03. PHOTO GALLERY
      ================================================== */}

      <section
        className="
          px-4
          py-14
          sm:px-6
          sm:py-18
          md:px-8
          lg:px-10
          lg:py-20
          xl:px-14
          2xl:px-16
        "
      >
        <div className="mx-auto max-w-[1500px]">
          {/* Header */}

          <div
            className="
              mb-7
              flex
              items-end
              justify-between
              gap-4
              border-b
              border-[#7FB59C]/15
              pb-5
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#5C9A81]
                "
              >
                Photo Archive
              </p>

              <h2
                className="
                  mt-2
                  text-[28px]
                  font-bold
                  tracking-[-0.035em]
                  text-black
                  sm:text-[34px]
                "
              >
                Forum Memories
              </h2>
            </div>

            <div
              className="
                hidden
                items-center
                gap-1.5
                text-[9px]
                text-[#4B5563]
                sm:flex
              "
            >
              <HiOutlineCollection
                className="
                  text-[15px]
                  text-[#5C9A81]
                "
              />

              {filteredGallery.length} Photos
            </div>
          </div>

          {/* =================================================
              MASONRY GALLERY
          ================================================== */}

          {filteredGallery.length >
          0 ? (
            <div
              className="
                columns-2
                gap-2.5
                md:columns-3
                md:gap-3
                lg:columns-4
                lg:gap-4
              "
            >
              <AnimatePresence>
                {filteredGallery.map(
                  (item, index) => {
                    const imageRatio =
                      index % 5 === 0
                        ? "aspect-[4/5]"
                        : index % 4 ===
                            0
                          ? "aspect-square"
                          : index %
                                3 ===
                              0
                            ? "aspect-[3/4]"
                            : "aspect-[4/3]";

                    return (
                      <motion.button
                        layout
                        key={item.id}
                        id={`gallery-photo-${item.id}`}
                        type="button"
                        onClick={() =>
                          openImage(
                            item
                          )
                        }
                        initial={{
                          opacity: 0,
                          y: 18,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.96,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: Math.min(
                            index *
                              0.025,
                            0.15
                          ),
                          ease,
                        }}
                        className="
                          group
                          relative
                          mb-2.5
                          block
                          w-full
                          cursor-pointer
                          break-inside-avoid
                          overflow-hidden
                          bg-[#DCEDE4]
                          text-left
                          focus:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-[#7FB59C]
                          md:mb-3
                          lg:mb-4
                        "
                      >
                        <div
                          className={`
                            relative
                            w-full
                            overflow-hidden
                            ${imageRatio}
                          `}
                        >
                          {/* Image */}

                          <img
                            src={
                              item.image
                            }
                            alt={
                              item.title
                            }
                            loading="lazy"
                            className="
                              h-full
                              w-full
                              object-cover
                              transition-transform
                              duration-700
                              ease-out
                              group-hover:scale-[1.055]
                            "
                          />

                          {/* Overlay */}

                          <div
                            className="
                              absolute
                              inset-0
                              bg-gradient-to-t
                              from-black/80
                              via-black/10
                              to-transparent
                              opacity-75
                              transition-opacity
                              duration-300
                              group-hover:opacity-95
                            "
                          />

                          {/* Category */}

                          <span
                            className="
                              absolute
                              left-2
                              top-2
                              bg-[#7FB59C]/90
                              px-2
                              py-1
                              text-[6px]
                              font-bold
                              uppercase
                              tracking-[0.09em]
                              text-white
                              backdrop-blur-sm
                              sm:left-3
                              sm:top-3
                              sm:text-[7px]
                            "
                          >
                            {getCategoryLabel(
                              item.category
                            )}
                          </span>

                          {/* Information */}

                          <div
                            className="
                              absolute
                              bottom-0
                              left-0
                              right-0
                              p-2.5
                              sm:p-4
                              lg:p-5
                            "
                          >
                            <p
                              className="
                                hidden
                                items-center
                                gap-1
                                text-[7px]
                                font-medium
                                text-white/75
                                sm:flex
                              "
                            >
                              <HiOutlineCalendar />

                              {formatDate(
                                item.date
                              )}
                            </p>

                            <h3
                              className="
                                mt-1
                                line-clamp-2
                                text-[10px]
                                font-bold
                                leading-[1.3]
                                text-white
                                sm:text-[13px]
                                lg:text-[15px]
                              "
                            >
                              {
                                item.title
                              }
                            </h3>

                            <div
                              className="
                                mt-1.5
                                hidden
                                items-center
                                justify-between
                                gap-2
                                sm:flex
                              "
                            >
                              <span
                                className="
                                  text-[7px]
                                  font-medium
                                  text-white/65
                                  lg:text-[8px]
                                "
                              >
                                {
                                  item.committeeTerm
                                }
                              </span>

                              <span
                                className="
                                  translate-y-1
                                  text-[7px]
                                  font-semibold
                                  uppercase
                                  tracking-[0.08em]
                                  text-white
                                  opacity-0
                                  transition-all
                                  duration-300
                                  group-hover:translate-y-0
                                  group-hover:opacity-100
                                "
                              >
                                View
                              </span>
                            </div>
                          </div>

                          {/* Border */}

                          <span
                            className="
                              pointer-events-none
                              absolute
                              inset-0
                              border
                              border-white/0
                              transition-colors
                              duration-300
                              group-hover:border-white/30
                            "
                          />
                        </div>
                      </motion.button>
                    );
                  }
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* =================================================
                EMPTY STATE
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
                border
                border-[#7FB59C]/20
                bg-[#DCEDE4]/20
                px-6
                py-16
                text-center
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#DCEDE4]
                  text-[25px]
                  text-[#5C9A81]
                "
              >
                <HiOutlinePhotograph />
              </div>

              <h3
                className="
                  mt-5
                  text-[20px]
                  font-bold
                  text-black
                "
              >
                No photos found
              </h3>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-[430px]
                  text-[11px]
                  leading-[1.8]
                  text-[#4B5563]
                "
              >
                There are no gallery
                photos matching your
                current category or
                search.
              </p>

              <button
                type="button"
                onClick={
                  clearFilters
                }
                className="
                  mt-6
                  bg-[#7FB59C]
                  px-5
                  py-3
                  text-[10px]
                  font-semibold
                  text-white
                  hover:bg-[#5C9A81]
                "
              >
                View All Photos
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* =================================================
          04. GALLERY LEGACY
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
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mx-auto
            grid
            max-w-[1200px]
            gap-8
            border
            border-[#7FB59C]/20
            bg-[#FFFFF3]
            px-6
            py-9
            sm:px-9
            md:grid-cols-[auto_1fr]
            md:items-center
            lg:px-12
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
              text-[25px]
              text-[#5C9A81]
            "
          >
            <HiOutlinePhotograph />
          </div>

          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#5C9A81]
              "
            >
              Our Visual Archive
            </p>

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
              Every photo becomes part
              of{" "}

              <span className="text-[#5C9A81]">
                our history.
              </span>
            </h2>

            <p
              className="
                mt-3
                max-w-[720px]
                text-[11px]
                leading-[1.8]
                text-[#4B5563]
                sm:text-[12px]
              "
            >
              Our gallery preserves
              memories across generations
              of Chattogram Forum, SUST,
              allowing current students
              and alumni to revisit the
              activities and experiences
              that shaped our community.
            </p>
          </div>
        </motion.div>
      </section>

      {/* =================================================
          05. LIGHTBOX
      ================================================== */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onMouseDown={(
              event
            ) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                closeImage();
              }
            }}
            className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              bg-black/90
              p-3
              backdrop-blur-sm
              sm:p-5
              lg:p-8
            "
          >
            {/* Close */}

            <motion.button
              type="button"
              onClick={closeImage}
              whileHover={{
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Close gallery image"
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/30
                text-[20px]
                text-white
                backdrop-blur-md
                hover:bg-white
                hover:text-black
                sm:right-6
                sm:top-6
              "
            >
              <HiOutlineX />
            </motion.button>

            {/* Previous */}

            {filteredGallery.length >
              1 && (
              <motion.button
                type="button"
                onClick={
                  showPreviousImage
                }
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                aria-label="Previous image"
                className="
                  absolute
                  left-2
                  top-1/2
                  z-30
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/40
                  text-[20px]
                  text-white
                  backdrop-blur-md
                  hover:bg-white
                  hover:text-black
                  sm:left-5
                  sm:h-11
                  sm:w-11
                "
              >
                <HiOutlineChevronLeft />
              </motion.button>
            )}

            {/* Next */}

            {filteredGallery.length >
              1 && (
              <motion.button
                type="button"
                onClick={
                  showNextImage
                }
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                aria-label="Next image"
                className="
                  absolute
                  right-2
                  top-1/2
                  z-30
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/40
                  text-[20px]
                  text-white
                  backdrop-blur-md
                  hover:bg-white
                  hover:text-black
                  sm:right-5
                  sm:h-11
                  sm:w-11
                "
              >
                <HiOutlineChevronRight />
              </motion.button>
            )}

            {/* =================================================
                LIGHTBOX CONTENT
            ================================================== */}

            <motion.div
              key={selectedImage.id}
              initial={{
                opacity: 0,
                scale: 0.97,
                y: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
                ease,
              }}
              className="
                grid
                max-h-[90vh]
                w-full
                max-w-[1250px]
                overflow-hidden
                bg-[#101512]
                lg:grid-cols-[1fr_340px]
              "
            >
              {/* Large Image */}

              <div
                className="
                  flex
                  min-h-[300px]
                  items-center
                  justify-center
                  bg-black
                  sm:min-h-[480px]
                  lg:min-h-[650px]
                "
              >
                <img
                  src={
                    selectedImage.image
                  }
                  alt={
                    selectedImage.title
                  }
                  className="
                    max-h-[70vh]
                    w-full
                    object-contain
                    lg:max-h-[90vh]
                  "
                />
              </div>

              {/* Details */}

              <div
                className="
                  max-h-[32vh]
                  overflow-y-auto
                  border-t
                  border-white/10
                  p-5
                  text-white
                  sm:p-6
                  lg:max-h-[90vh]
                  lg:border-l
                  lg:border-t-0
                  lg:p-7
                "
              >
                {/* Category */}

                <span
                  className="
                    inline-block
                    bg-[#7FB59C]
                    px-3
                    py-1.5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-white
                  "
                >
                  {getCategoryLabel(
                    selectedImage.category
                  )}
                </span>

                {/* Title */}

                <h2
                  className="
                    mt-5
                    text-[24px]
                    font-bold
                    leading-[1.15]
                    tracking-[-0.03em]
                    sm:text-[28px]
                  "
                >
                  {
                    selectedImage.title
                  }
                </h2>

                {/* Date */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    text-white/60
                  "
                >
                  <HiOutlineCalendar
                    className="
                      text-[15px]
                      text-[#7FB59C]
                    "
                  />

                  {formatDate(
                    selectedImage.date
                  )}
                </div>

                {/* Description */}

                <p
                  className="
                    mt-5
                    text-[11px]
                    leading-[1.85]
                    text-white/65
                  "
                >
                  {
                    selectedImage.description
                  }
                </p>

                {/* Committee */}

                {selectedImage.committeeTerm && (
                  <div
                    className="
                      mt-7
                      border-t
                      border-white/10
                      pt-5
                    "
                  >
                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.13em]
                        text-white/40
                      "
                    >
                      Executive Committee
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        font-semibold
                        text-[#7FB59C]
                      "
                    >
                      {
                        selectedImage.committeeTerm
                      }
                    </p>
                  </div>
                )}

                {/* Counter */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/10
                    pt-5
                  "
                >
                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.1em]
                      text-white/40
                    "
                  >
                    Photo
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      text-white/70
                    "
                  >
                    {selectedIndex + 1}

                    <span
                      className="
                        mx-1
                        text-white/30
                      "
                    >
                      /
                    </span>

                    {
                      filteredGallery.length
                    }
                  </span>
                </div>

                {/* Keyboard Hint */}

                <p
                  className="
                    mt-5
                    hidden
                    text-[8px]
                    leading-[1.6]
                    text-white/30
                    lg:block
                  "
                >
                  Use ← and → arrow keys
                  to browse. Press Esc to
                  close.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;