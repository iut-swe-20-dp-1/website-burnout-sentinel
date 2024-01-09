import React from 'react'
import UserSidebar from '../components/UserSidebar'
import HistoryAnimation from "../assets/HistoryAnimation.json";
import LottieAnimation from '../components/LottieAnimation';


const UserHistory = () => {
    const data = [
        {
            "date": "2023-01-01",
            "stressScore": 5,
            "remarks": "Feeling good"
        },
        {
            "date": "2023-01-05",
            "stressScore": 8,
            "remarks": "Busy day"
        },
        {
            "date": "2023-01-10",
            "stressScore": 3,
            "remarks": "Relaxed"
        },
        {
            "date": "2023-01-15",
            "stressScore": 6,
            "remarks": "Work pressure"
        },
        {
            "date": "2023-01-20",
            "stressScore": 2,
            "remarks": "Calm"
        }
    ]

    return (
        <>
            <div className='bg-[#FFDFDF]'>
                <UserSidebar />
                <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                <div id="main-content" className="relative overflow-y-auto lg:ml-64">
                    <main>
                        <div className="pt-6 px-4">
                            <div className='flex items-center justify-center'>
                                <LottieAnimation lottie_animation_data={HistoryAnimation} style_classes="w-2/6" />
                            </div>

                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="overflow-hidden rounded-lg">
                                            <table className="min-w-full mb-5">
                                                <thead className="bg-white border-b rounded-t-md">
                                                    <tr>
                                                        <th scope="col" className="text-lg font-medium text-[#300722] px-6 py-4 text-left">
                                                            Date
                                                        </th>
                                                        <th scope="col" className="text-lg font-medium text-[#300722] px-6 py-4 text-left">
                                                            Stress Score
                                                        </th>
                                                        <th scope="col" className="text-lg font-medium text-[#300722] px-6 py-4 text-left">
                                                            Remarks
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((entry, index) => (
                                                        <tr key={index} className={index % 2 === 0 ? 'bg-[#DFE9F7] border-b rounded-md' : 'bg-white border-b rounded-md'}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-[#300722]">{entry.date}</td>
                                                            <td className="text-md text-[#300722] font-light px-6 py-4 whitespace-nowrap">{entry.stressScore}</td>
                                                            <td className="text-md text-[#300722] font-light px-6 py-4 whitespace-nowrap">{entry.remarks}</td>
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
    )
}

export default UserHistory