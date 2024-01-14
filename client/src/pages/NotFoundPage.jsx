import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import LottieAnimation from "../components/LottieAnimation";
import _404Animation from '../assets/_404Animation.json'

const NotFoundPage = () => {
    const currentUser = 1
    const navigate = useNavigate();
    return (
        <div className="lg:px-12 lg:py-12 md:py-14 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 min-h-screen">
            <div className="xl:pt-12 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="w-3/4 mx-auto">
                        <div className="mb-10 ">
                            <h1 className="my-4 text-gray-800 font-bold text-3xl">
                                Looks like you've found the doorway to the great nothing
                            </h1>
                            <p className="my-2 text-gray-800">
                                Sorry about that! Please visit our hompage to get where you need
                                to go.
                            </p>
                        </div>
                        <Button
                            additional_classes={"my-2 lg:px-10 md:px-6 px-6 py-3 text-white bg-[#7366FF] text-2xl font-bold"}
                            button_text={"Take me there"}
                            button_function={()=> currentUser ? navigate("/home") : navigate("/")} flex_start={true}
                        />
                    </div>
                </div>
            </div>
            <LottieAnimation lottie_animation_data={_404Animation} style_classes={"h-full mx-auto"} />
        </div>
    );
};

export default NotFoundPage;