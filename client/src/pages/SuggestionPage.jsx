import React, { useEffect, useState } from 'react';
import UserSidebar from '../components/UserSidebar';
import axios from 'axios';
import { mlUrl } from '../utils/urls';


const SuggestionPage = () => {
  const dummyData = [
    {
      "position": 1,
      "title": "Academic Stress: Coping Strategies",
      "link": "https://www.unh.edu/pacs/academic-stress-coping-strategies",
      "redirect_link": "https://www.google.comhttps://www.unh.edu/pacs/academic-stress-coping-strategies",
      "displayed_link": "https://www.unh.edu › pacs › academic-stress-coping-...",
      "favicon": "https://serpapi.com/searches/65a7b4f936e6a9beab37ed29/images/db17a988418aec1a2d9b16053fd9c5f0107971e16f522d01d3877cdd8250cd0f.png",
      "snippet": "Here are eight tips to help you cope with academic stress successfully. · Use Campus Resources · Stay Present · Learn New Skills Through Practice · Use Positive ...",
      "snippet_highlighted_words": ["tips", "help", "cope", "academic stress"],
      "source": "unh.edu"
    },
    {
      "position": 2,
      "title": "10 Tips to Deal with Academic Stress | OPG",
      "link": "https://oconnorpg.com/blog/10-tips-deal-academic-stress/",
      "redirect_link": "https://www.google.comhttps://oconnorpg.com/blog/10-tips-deal-academic-stress/",
      "displayed_link": "https://oconnorpg.com › Blog",
      "favicon": "https://serpapi.com/searches/65a7b4f936e6a9beab37ed29/images/db17a988418aec1a2d9b16053fd9c5f0788cbee959bce07a0185a45d272dd509.png",
      "date": "Apr 15, 2021",
      "snippet": "1. Make To Do Lists · 2. Budget Your Time · 3. Create a Rewards System · 4. Ask For Help and Move On · 5. Take Breaks to Breathe · 6. Eat Healthy · 7.",
      "snippet_highlighted_words": [
        "Help"
      ],
      "source": "oconnorpg.com"
    },
  ];

  const [suggestionData, setSuggestionData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setSuggestionData(dummyData)
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        };

        const suggestionResponse = await axios.get(
          `${mlUrl}/get-suggestions`,
          config
        );

        const suggestionResponseData = suggestionResponse;
        print(suggestionResponseData);

        // // Convert userHistory to the desired format
        // const formattedHistory = userHistory.map((item) => ({
        //   date: item.timestamp,
        //   stressScore: item.score,
        //   level: item.classification,
        // }));

        // // Set the formatted history to the state
        // setSuggestionData(formattedHistory);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='bg-[#e0ffff] min-h-screen'>
      <UserSidebar />
      <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
      <div id="main-content" className="relative overflow-y-auto lg:ml-64">
        <main>
          <div className="pt-6 px-4">
            <div className="container px-6 py-2 mx-auto">
              <div className="mb-2 p-2 rounded-lg">
                <h2 className="text-5xl font-bold text-[#7366FF] text-center tracking-tight">
                  Needs Some Suggestions?
                </h2>
              </div>
              <h1 className='text-lg text-center text-[#300722] mx-4 '>
                At Burnout Sentinels, your health matters to us. Explore helpful links to websites that offer relaxation techniques and stress management strategies. Prioritize your well-being with our assistance on the journey to a healthier, more balanced lifestyle.
              </h1>
              <div className="grid grid-cols-1 gap-8 mt-4 md:mt-8 md:grid-cols-2">
                {suggestionData?.map((item) => (
                  <div key={item.position} className="lg:flex bg-white p-1 rounded-lg border-2 border-[#DFE9F7] transition duration-300 ease-in-out hover:border-[#7366FF]">
                    <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={item.favicon} alt="favicon" />
                    <div className="flex flex-col justify-between py-2 lg:mx-6">
                      <a href={item.link} className="text-2xl mb-2 font-semibold text-[#300722] hover:underline">
                        {item.title}
                      </a>
                      <span className="text-md text-gray-500">{`${item.snippet}`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SuggestionPage;
