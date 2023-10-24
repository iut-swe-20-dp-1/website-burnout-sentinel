import React, { useState } from 'react';
import UserSidebar from '../components/UserSidebar';
import UserHomepageCards from '../components/UserHomepageCards';
import DocumentsAnimation from '../assets/DocumentsAnimation.json';
import DocumentsAnimation2 from '../assets/DocumentsAnimation2.json';
import TakeTestAnimation from '../assets/TakeTestAnimation.json';
import BaseDataForm from '../components/BaseDataForm';
import TestForm from '../components/TestForm';

const UserHomepage = () => {
  const [baseDataExists, setBaseDataExists] = useState(false);
  const [showAddBaseDataForm, setShowAddBaseDataForm] = useState(false);
  const [showUpdateBaseDataForm, setShowUpdateBaseDataForm] = useState(false);
  const [showTestForm, setShowTestForm] = useState(false);

  return (
    <div className='bg-[#FFDFDF]'>
      <UserSidebar />
      <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
      <div id="main-content" className="relative overflow-y-auto lg:ml-64">
        <main>
          <div className="pt-6 px-4">
            <UserHomepageCards baseDataExists={baseDataExists} setBaseDataExists={setBaseDataExists} setShowAddBaseDataForm={setShowAddBaseDataForm} setShowUpdateBaseDataForm={setShowUpdateBaseDataForm} setShowTestForm={setShowTestForm}/>

            {showAddBaseDataForm && <BaseDataForm setShowBaseDataForm={setShowAddBaseDataForm} form_title={`Add Your Base Data`} lottie_animation_data={DocumentsAnimation} start_frame={70} end_frame={178} animation_speed={0.5} />}

            {showUpdateBaseDataForm && <BaseDataForm setShowBaseDataForm={setShowUpdateBaseDataForm} form_title={`Update Base Data`} lottie_animation_data={DocumentsAnimation2} />}
            
            {showTestForm && <TestForm setShowTestForm={setShowTestForm} form_title={`Stress Assessment`} lottie_animation_data={TakeTestAnimation} />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserHomepage;
