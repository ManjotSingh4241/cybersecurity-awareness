import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";

const Feedback = () => {
  return (<>
    <Navbar/>
    <div className="container py-5 text-center">
      <h1 className="mb-4">User Feedback</h1>

      {/* Ratings Section */}
      <div className="card shadow-sm mb-5 p-4">
        <h5 className="mb-3">Average Ratings</h5>
        <div className="mb-4">
          {[...Array(3)].map((_, i) => (
            <i key={i} className="bi bi-star-fill text-warning fs-4 mx-1"></i>
          ))}
          {[...Array(2)].map((_, i) => (
            <i key={i} className="bi bi-star text-secondary fs-4 mx-1"></i>
          ))}
        </div>

        <h5 className="mb-3">Full Ratings</h5>
        <div>
          {[...Array(5)].map((_, i) => (
            <i key={i} className="bi bi-star-fill text-warning fs-4 mx-1"></i>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="row justify-content-center">
        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow-sm">
            <p className="fst-italic">"The app is smooth and easy to use!"</p>
            <p className="text-end text-muted mb-0">– Anonymous</p>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow-sm">
            <p className="fst-italic">"Great design and performance!"</p>
            <p className="text-end text-muted mb-0">– Happy User</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Feedback;
