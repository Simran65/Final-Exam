import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const LandingpageOne = React.lazy(() => import("pages/LandingpageOne"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* Directly route to LandingpageOne */}
          <Route path="/" element={<LandingpageOne />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
