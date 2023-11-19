import { useEffect, useState, Fragment } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import loadingAnimation from "../assets/loadingAnimation.json";
import MailSentAnimation from "../assets/MailSentAnimation.json";
import LottieAnimation from "../components/LottieAnimation";
import NotFoundPage from "./NotFoundPage";
import Button from "../components/Button";

const VerifyEmailPage = () => {
    const [validUrl, setValidUrl] = useState(true);
    const param = useParams();
    const action = param.action;
    const [loading, setLoading] = useState(false);
    let sth = 0;
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            if (validUrl !== true && sth === 0) {
                try {
                    sth = 1;
                    //   const res = await newRequest.get(
                    //     // `auth/verify/${param.id}/${param.unique}`
                    //   );
                    //   if (res.status < 400) { //not error
                    //     setValidUrl(true);
                    //     setLoading(false);
                    //   } else { //error
                    //     setValidUrl(false); 
                    //     setLoading(true);
                    //   }
                } catch (error) { //error
                    setLoading(false);
                    setValidUrl(false);
                }
            }
        };
        verifyEmailUrl();
    }, [param]);

    return (
        <Fragment>
            {loading ? (
                <div className="w-full h-full bg-[#a9a2fc] ">
                    <LottieAnimation lottie_animation_data={loadingAnimation} style_classes={"w-1/2  mx-auto"} /></div>
            ) : validUrl ? (
                <div className="bg-[#a9a2fc] w-full h-screen">
                <div className="w-3/4 text-center mx-auto">
                    <div className="m-auto text-center">
                        <LottieAnimation lottie_animation_data={MailSentAnimation} style_classes={"w-5/6 lg:w-3/6 mx-auto"} />
                        <h1 className="text-4xl font-bold -mt-20">{"Email verified"}</h1>
                        <h3 className="text-lg mt-6">
                            {action === "reset"? "Thank you, your email has been verified.  Click on the button below to reset the password!" : "Thank you, your email has been verified.  Your account is activated! Click on the button below to login."}
                        </h3>
                    </div>
                        <Button
                            additional_classes={"my-2 lg:px-10 md:px-6 px-6 py-3 bg-[#FF7373] text-2xl text-[#300722] font-bold mt-6"}
                            button_text={`${action === "reset"? "Reset Password": "Login"}`}
                            button_function={()=> action === "reset"? navigate("/reset-password"): navigate("/login")}
                        />
                </div></div>
            ) : (
                <NotFoundPage />
            )}
        </Fragment>
    );
};

export default VerifyEmailPage;