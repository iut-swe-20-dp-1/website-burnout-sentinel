import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios if not already imported
import { serverUrl } from "../../utils/urls";
import LottieAnimation from '../LottieAnimation';
import SatisfiedUser from "../../assets/SatisfiedUser.json"


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
      const animationDuration = 300; // Adjust the duration as needed
      const updateInterval = 4; // Update every 10 milliseconds

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

    <>
      <section id="user-satisfaction" className="mx-4 lg:mx-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="text-center lg:text-left m-auto text-[#300722]">
            <div className="lg:hidden flex items-center justify-center">
              <LottieAnimation lottie_animation_data={SatisfiedUser} style_classes={'w-5/6'} />
            </div>

            <div className="text-4xl lg:text-6xl font-bold leading-none px-8">
              {usersSatisfied} satisfied users and counting!
            </div>
            <div className="mt-4 lg:mt-6 text-lg lg:text-xl font-light text-true-gray-500 antialiased p-8">
              We value the feedback provided by our users, and their experiences shape the continuous improvement of our services. Your opinions matter, and we strive to create an environment where every user feels heard and supported. Thank you for being a part of our journey towards excellence!
            </div>

          </div>
          <div className="lg:flex relative w-full lg:w-auto mt-8 lg:mt-0  flex items-center justify-center">
            <LottieAnimation lottie_animation_data={SatisfiedUser} style_classes={'w-5/6'} />
          </div>
        </div>
      </section>

    </>
  );
};

export default SatisfiedUsersCard;
