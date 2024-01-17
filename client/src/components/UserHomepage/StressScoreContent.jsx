import React, { useEffect, useState } from "react";
import LottieAnimation from "../LottieAnimation";
import GettingScoresAnimation from "../../assets/GettingScoresAnimation.json";
import { HiInformationCircle } from "react-icons/hi";
import { suggestions } from "../../utils/content";
import Button from "../Button";
import axios from "axios";
import { serverUrl } from "../../utils/urls";

const StressScoreContent = ({ message, score, level, guest }) => {
  const [count, setCount] = useState(0);
  const [suggestion, setSuggestion] = useState("");
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const emojis = [
    { emoji: "😟", value: 1 },
    { emoji: "😞", value: 2 },
    { emoji: "😐", value: 3 },
    { emoji: "😊", value: 4 },
    { emoji: "😁", value: 5 },
  ];

  const foundSuggestion = (score) => {
    let selectedSuggestion = suggestions?.find(
      (suggestion) => Math.round(score) === suggestion?.score
    );
    return selectedSuggestion;
  };

  const handleSendFeedback = async () => {
    // Implement the logic for sending feedback (e.g., API call, state update)
    console.log("Sending feedback:", { rating, review });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    const body = {
      rating,
      review,
    };

    const response = await axios.post(
      `${serverUrl}/api/feedback/send`,
      body,
      config
    );

    console.log(response.data);

    // Clear the review text box and reset the rating after sending feedback
    setReview("");
    setRating(null);
    setShowThankYou(true);
  };

  useEffect(() => {
    setSuggestion(foundSuggestion(score));

    if (score > 0) {
      let animationInterval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < score) {
            return prevCount + 0.3;
          } else {
            clearInterval(animationInterval);
            return score;
          }
        });
      }, 30);

      return () => clearInterval(animationInterval);
    }
  }, [score]);

  return (
    <>
      <LottieAnimation
        lottie_animation_data={GettingScoresAnimation}
        end_frame={130}
        style_classes={"w-1/2 mx-auto  -mt-14 -mb-24"}
      />
      <div className="text-center mb-4">
        <h2 className="text-3xl  tracking-tight">{message}</h2>
        <h1 className="text-7xl text-[#7366FF] font-bold mt-3">
          {count.toFixed(2)}
        </h1>
      </div>

      <div className="text-center mb-4">
        <h2 className="text-xl tracking-tight">
          Stress Level detected: {level}
        </h2>
      </div>

      {suggestion && (
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold tracking-tight">
            {suggestion?.suggestion}
          </h2>
        </div>
      )}

      {/* Feedback and Review section */}
      {guest !== true && (
        <div className="bg-yellow-200 bg-opacity-80 rounded-2xl p-6 my-6">
          {!showThankYou && guest !== true ? (
            <>
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold tracking-tight">
                  How satisfied are you with your score?
                </h2>
                <div className="flex justify-center items-center space-x-4 mt-2">
                  {emojis.map((emojiObj) => (
                    <span
                      key={emojiObj.value}
                      role="button"
                      onClick={() => setRating(emojiObj.value)}
                      style={{
                        fontSize: rating === emojiObj.value ? "32px" : "24px",
                        cursor: "pointer",
                        transition: "font-size 0.3s ease", // Add a smooth transition effect
                      }}
                    >
                      {emojiObj.emoji}
                    </span>
                  ))}
                </div>
              </div>

              {/* Review section */}
              {rating !== null && (
                <div className="text-center mb-4">
                  <h2 className="text-xl font-bold tracking-tight">
                    Care to leave a review?
                  </h2>
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write your review here..."
                    className="appearance-none p-2 mt-2 w-full rounded-md leading-tight border border-gray-400 focus:border-[#7366FF]"
                  />
                  <div className="w-full md:w-full px-3">
                    <Button
                      additional_classes={
                        "my-2 lg:px-10 md:px-6 px-6 py-3 text-white bg-[#7366FF] text-2xl font-bold"
                      }
                      button_text={"Submit"}
                      button_function={handleSendFeedback}
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold tracking-tight">
                Thank you for your valuable feedback!
              </h2>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default StressScoreContent;
