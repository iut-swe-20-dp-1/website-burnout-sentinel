import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios if not already imported
import { serverUrl } from "../../utils/urls";


const SatisfiedUsersCard = () => {
  const [usersSatisfied, setUsersSatisfied] = useState(0);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        };

        const response = await axios.get(
          `${serverUrl}/api/feedback/get`,
          config
        );
        const feedback = response.data.feedback;

        const uniqueUserIds = new Set();
        feedback.forEach((entry) => {
          if (entry.rating >= 4) {
            uniqueUserIds.add(entry.userId);
          }
        });

        // Get the count of unique userIds
        const count = uniqueUserIds.size;
        console.log("Got satisfied users: ", count);

        // Animate the increase in usersSatisfied
        animateNumber(count);


















      } catch (error) {
        console.log(error);
      }
    };

    const animateNumber = (targetNumber) => {
      let currentNumber = 0;
      const animationDuration = 1000; // Adjust the duration as needed
      const updateInterval = 10; // Update every 10 milliseconds

      const updateNumber = () => {
        const increment = (targetNumber / animationDuration) * updateInterval;
        currentNumber = Math.min(currentNumber + increment, targetNumber);
        setUsersSatisfied(Math.round(currentNumber));

        if (currentNumber < targetNumber) {
          requestAnimationFrame(updateNumber);
        }
      };

      updateNumber();
    };

    fetchFeedback();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 my-6">
      <div className="text-4xl font-bold leading-none">{usersSatisfied}</div>
      <div className="mt-4 text-xl font-light text-true-gray-500 antialiased text-right">
        Users are satisfied with our service!
      </div>
    </div>
  );
};

export default SatisfiedUsersCard;
