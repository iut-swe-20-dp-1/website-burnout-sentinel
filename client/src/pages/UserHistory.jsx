import React, { useEffect, useState } from "react";
import UserSidebar from "../components/UserSidebar";
import HistoryAnimation from "../assets/HistoryAnimation.json";
import LottieAnimation from "../components/LottieAnimation";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";
import axios from "axios";
import { serverUrl } from "../utils/urls";
import { getAuthConfigHeader } from "../utils/config";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

const UserHistory = () => {
  const [history, setHistory] = useState(null);
  const [chartData, setChartData] = useState([]);

  const exampleData = [
    {
      date: "2023-01-01",
      stressScore: 5,
      level: "low",
    },
    {
      date: "2023-01-05",
      stressScore: 8,
      level: "high",
    },
    {
      date: "2023-01-10",
      stressScore: 3,
      level: "medium",
    },
    {
      date: "2023-01-15",
      stressScore: 6,
      level: "medium",
    },
    {
      date: Date.now(),
      stressScore: 2,
      level: "low",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const config = {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   withCredentials: true,
        // };

        const authConfig = getAuthConfigHeader()
        const historyResponse = await axios.get(
          `${serverUrl}/api/history/get`,
          authConfig
        );

        const userHistory = historyResponse.data.userHistory;

        console.log("Got : ", userHistory);

        // Convert userHistory to the desired format
        const formattedHistory = userHistory.map((item) => ({
          date: item.timestamp,
          stressScore: item.score,
          level: item.classification,
        }));

        // Set the formatted history to the state
        setHistory(formattedHistory);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  var data = {
    labels: history?.map((x) =>
      new Date(x.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    ),
    datasets: [
      {
        label: "Stress Over Time",
        data: history?.map((x) => x.stressScore),
        backgroundColor: ["#DFE9F7"],
        borderColor: "#7366FF",
        borderWidth: 2,
        tension: 0.1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 10,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <>
      <div className="bg-[#e0ffff]">
        <UserSidebar />
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div id="main-content" className="relative overflow-y-auto lg:ml-64">
          <main>

            
            <div className="pt-6 px-4"><div className="mb-8 p-2 rounded-lg">
              <h2 className="text-5xl font-bold text-[#7366FF] text-center tracking-tight">
                Track Your Stress History
              </h2>
            </div>
              <div className="flex items-center justify-center">
                <LottieAnimation
                  lottie_animation_data={HistoryAnimation}
                  style_classes="w-2/6 -mt-12 lg:-mt-16"
                />
              </div>

              <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                      <div className="w-full bg-white/90 mb-8 mx- rounded-lg shadow-md px-12 pt-6">
                        <div className="mb-8">
                          <h2 className="text-3xl font-bold text-[#7366FF] tracking-tight">
                            Track Your Stress
                          </h2>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full md:w-full px-3 mb-6">
                            <Line
                              data={data}
                              options={options}
                              height={400}
                              className="max-h-[50vh]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-lg">
                      <table className="min-w-full mb-5">
                        <thead className="bg-white border-b rounded-t-md">
                          <tr>
                            <th
                              scope="col"
                              className="text-xl font-medium text-[#300722] px-6 py-4 text-left"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="text-xl font-medium text-[#300722] px-6 py-4 text-left"
                            >
                              Time
                            </th>
                            <th
                              scope="col"
                              className="text-xl font-medium text-[#300722] px-6 py-4 text-left"
                            >
                              Stress Score
                            </th>
                            <th
                              scope="col"
                              className="text-xl font-medium text-[#300722] px-6 py-4 text-left"
                            >
                              Stress Level
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {history &&
                            history.map((entry, index) => (
                              <tr
                                key={index}
                                className={
                                  index % 2 === 0
                                    ? "bg-[#f2f2fb] border-b rounded-md"
                                    : "bg-white border-b rounded-md"
                                }
                              >
                                <td className="text-lg text-[#300722] px-6 py-4 whitespace-nowrap">
                                  {new Date(entry.date).toLocaleDateString(
                                    "en-GB",
                                    {
                                      day: "numeric",
                                      month: "short",
                                      year: "numeric",
                                    }
                                  )}
                                </td>
                                <td className="text-lg text-[#300722] px-6 py-4 whitespace-nowrap">
                                  {new Date(entry.date).toLocaleTimeString(
                                    "en-US",
                                    {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      hour12: true,
                                    }
                                  )}
                                </td>
                                <td className="text-lg text-[#300722] px-6 py-4 whitespace-nowrap">
                                  {entry.stressScore.toFixed(2)}
                                </td>
                                <td className="text-lg text-[#300722] px-6 py-4 whitespace-nowrap">
                                  {entry.level}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default UserHistory;
