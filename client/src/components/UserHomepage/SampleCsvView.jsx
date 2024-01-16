import React from 'react'
import { sampleCsvData } from '../../utils/content'

const SampleCsvView = () => {
    return (
        <>
            <div className="overflow-x-hidden rounded-lg mx-7 my-4">
                <table className="min-w-full mb-5">
                    <thead className="bg-white border-b rounded-t-md">
                        <tr>
                            <th
                                scope="col"
                                className="text-lg font-medium text-[#300722] px-6 py-4 text-left"
                            >
                                Date
                            </th>
                            <th
                                scope="col"
                                className="text-lg font-medium text-[#300722] px-6 py-4 text-left"
                            >
                                Time
                            </th>
                            <th
                                scope="col"
                                className="text-lg font-medium text-[#300722] px-6 py-4 text-left"
                            >
                                Object Temperature(C)
                            </th>
                            <th
                                scope="col"
                                className="text-lg font-medium text-[#300722] px-6 py-4 text-left"
                            >
                                Object Temperature(F)
                            </th>
                            <th
                                scope="col"
                                className="text-lg font-medium text-[#300722] px-6 py-4 text-left"
                            >
                                Heart Rate Ear(BPM)
                            </th>
                            <th
                                scope="col"
                                className="text-lg font-medium text-[#300722] px-6 py-4 text-left"
                            >
                                GSR Threshold
                            </th>
                            <th
                                scope="col"
                                className="text-lg font-medium text-[#300722] px-6 py-4 text-left"
                            >
                                GSR
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sampleCsvData.map((entry, index) => (
                            <tr
                                key={index}
                                className={
                                    index % 2 === 0
                                        ? 'bg-[#DFE9F7] border-b rounded-md'
                                        : 'bg-white border-b rounded-md'
                                }
                            >
                                <td className="text-md text-[#300722] font-light px-6 py-4 whitespace-nowrap">
                                    {entry.Timestamp} {/* Assuming Timestamp is in the specified format */}
                                </td>
                                <td className="text-md text-[#300722] font-light px-6 py-4 whitespace-nowrap">
                                    {entry.Timestamp.split('-')[1]} {/* Assuming Timestamp is in the specified format */}
                                </td>
                                <td className="text-md text-[#300722] font-light px-6 py-4 whitespace-nowrap">
                                    {entry['Object Temperature(C)']}
                                </td>
                                <td className="text-md text-[#300722] font-light px-6 py-4 whitespace-nowrap">
                                    {entry['Object Temperature(F)']}
                                </td>
                                <td className="text-md text-[#300722] font-light px-6 py-4 whitespace-nowrap">
                                    {entry['Heart Rate Ear(BPM)']}
                                </td>
                                <td className="text-md text-[#300722] font-light px-6 py-4 whitespace-nowrap">
                                    {entry.GSR_Threshold}
                                </td>
                                <td className="text-md text-[#300722] font-light px-6 py-4 whitespace-nowrap">
                                    {entry.GSR}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SampleCsvView