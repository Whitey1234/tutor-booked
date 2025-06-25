import Lottie from "lottie-react";
import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import noBookdTutor from "../../../Animation - tutornot found.json";
import { FaStar } from "react-icons/fa6";
import axios from "axios";
import Rivew from "../../components/rivew/rivew";
import { envVars } from "../../config";

const BookedTutor = () => {
  const tutors = useLoaderData();
  const navigate = useNavigate();

  // State to keep track of reviews from localStorage or backend
  const [localReviews, setLocalReviews] = useState({});

  // On mount, load review counts from localStorage
  useEffect(() => {
    const storedReviews =
      JSON.parse(localStorage.getItem("tutorReviews")) || {};
    setLocalReviews(storedReviews);
  }, []);

  const handleReview = (id) => {
    axios
      .patch(`${envVars.backend_origin}/tutor/${id}/review`)
      .then((res) => {
        if (res.status === 200) {
          alert("Thanks For your review");
          navigate("/find-tutior");
          // Update localStorage and state review count for this tutor
          const updatedReviews = { ...localReviews };
          updatedReviews[id] = (updatedReviews[id] || 0) + 1;
          localStorage.setItem("tutorReviews", JSON.stringify(updatedReviews));
          setLocalReviews(updatedReviews);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-center text-3xl font-bold my-4 text-red-500">
        MyBooked Tutor {tutors.length}
      </h1>

      {tutors.length === 0 ? (
        <div className="text-center mt-10 flex flex-col justify-center items-center">
          <Lottie
            style={{ width: "200px" }}
            animationData={noBookdTutor}
            loop={true}
          />
          <p className="text-lg text-gray-600">
            You haven’t booked any tutors yet.
          </p>
          <a href="/find-tutior" className="btn btn-outline mt-4">
            Browse Tutors
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {tutors.map((tutor) => (
            <div key={tutor.tutorId || tutor._id} className="card shadow-md p-4">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{tutor.name}</h3>
              <p className="text-sm text-gray-600">{tutor.language}</p>
              <p className="text-sm text-gray-600">${tutor.price}</p>
              <p className="text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-600" />
                  <p>
                    {/* Reviews: {localReviews[tutor._id] ?? tutor.review} */}
                    <Rivew tutorId={tutor.tutorId || tutor._id} />
                  </p>
                  <br />
                </div>
                <h3 className="text-center py-2">
                  {" "}
                  Your current giving rating
                  <span> {localReviews[tutor.tutorId || tutor._id] ?? tutor.review} </span>
                </h3>
              </p>
              <button
                onClick={() => handleReview(tutor.tutorId || tutor._id)}
                className="btn btn-primary mt-2"
              >
                Review
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedTutor;
