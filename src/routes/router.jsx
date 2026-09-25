import { createBrowserRouter } from "react-router-dom";

// Layout
import PublicLayout from "../layouts/PublicLayout";

// Public Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Advisors from "../pages/Advisors";
import ExecutiveCommittee from "../pages/ExecutiveCommittee";
import Members from "../pages/Members";
import EventsNotices from "../pages/EventsNotices";
import Alumni from "../pages/Alumni";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Developer from "../pages/Developer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,

    children: [
      // Home
      {
        index: true,
        element: <Home />,
      },

      // About
      {
        path: "about",
        element: <About />,
      },

      // Advisors
      {
        path: "advisors",
        element: <Advisors />,
      },

      // Executive Committee
      {
        path: "executive-committee",
        element: <ExecutiveCommittee />,
      },

      // Members
      {
        path: "members",
        element: <Members />,
      },

      // Events & Notices
      {
        path: "events-notices",
        element: <EventsNotices />,
      },

      // Alumni
      {
        path: "alumni",
        element: <Alumni />,
      },

      // Gallery
      {
        path: "gallery",
        element: <Gallery />,
      },

      // Contact
      {
        path: "contact",
        element: <Contact />,
      },

      // Developer
      {
        path: "developer",
        element: <Developer />,
      },
    ],
  },
]);

export default router;