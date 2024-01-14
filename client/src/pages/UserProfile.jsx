import React from 'react'
import ProfileAnimation from "../assets/ProfileAnimation.json";
import UserSidebar from '../components/UserSidebar'
import LottieAnimation from '../components/LottieAnimation'
import ChangePasswordForm from '../components/ProfilePage/ChangePasswordForm';
import UpdateProfileForm from '../components/ProfilePage/UpdateProfileForm';

const UserProfile = () => {
    return (
        <>
            <div className='bg-[#FFDFDF]'>
                <UserSidebar />
                <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                <div id="main-content" className="relative overflow-y-auto lg:ml-64">
                    <main>
                        <div className="pt-6 px-4">
                            <div className='flex items-center justify-center'>
                                <LottieAnimation lottie_animation_data={ProfileAnimation} style_classes="w-2/6" />
                            </div>
                            <UpdateProfileForm/>
                            <ChangePasswordForm/>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default UserProfile