import ProfileAnimation from "../assets/ProfileAnimation.json";
import ResetPasswordAnimation from "../assets/ResetPasswordAnimation.json";
import UserSidebar from "../components/UserSidebar";
import LottieAnimation from "../components/LottieAnimation";
import ChangePasswordForm from "../components/ProfilePage/ChangePasswordForm";
import UpdateProfileForm from "../components/ProfilePage/UpdateProfileForm";
import React, { useState } from 'react';

const UserProfile = () => {
  const [reloadSidebar, setReloadSidebar] = useState(false);

  const handleReloadSidebar = () => {
    setReloadSidebar(!reloadSidebar);
  };

  return (
    <>
      <div className="bg-[#e0ffff]">
        <UserSidebar key={reloadSidebar} />{" "}
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div id="main-content" className="relative overflow-y-auto lg:ml-64">
          <main>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="pt-6 flex items-center justify-center h-full">
                <div>
                  <div className="mb-8 bg-[#7366FF] p-2 rounded-lg">
                    <h2 className="text-4xl font-bold text-[#f4ffff] tracking-tight border-b-2 border-[#f4ffff]">
                      Update Your Profile
                    </h2>
                  </div>
                  <LottieAnimation
                    lottie_animation_data={ProfileAnimation}
                    style_classes="w-3/6 md:w-full"
                  /></div>
              </div>

              <div className="pt-6 px-4">
                <UpdateProfileForm reloadSidebar={handleReloadSidebar} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="pt-6 flex items-center justify-center h-full">
                <div className="pl-4">
                  <div className="mb-8 bg-[#7366FF] p-2 rounded-lg">
                    <h2 className="text-4xl font-bold text-[#f4ffff] tracking-tight border-b-2 border-[#f4ffff]">
                      Change Your Password
                    </h2>
                  </div>
                  <LottieAnimation
                    lottie_animation_data={ResetPasswordAnimation}
                    style_classes="w-3/6 md:w-4/6"
                  /></div>
              </div>

              <div className="pt-6 px-4">
                <ChangePasswordForm />
              </div>
            </div>

          </main>

        </div>
      </div>
    </>
  );
};

export default UserProfile;
