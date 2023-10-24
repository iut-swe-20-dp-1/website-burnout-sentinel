import React, { useState } from 'react';
import LottieAnimation from './LottieAnimation';
import { closeButtonClass, inputFieldClass, labelClass } from '../utils/styles';
import Button from './Button';
import { baseDataInputFields } from '../utils/content';
import GoogleFormEmbed from './GoogleFormEmbed';

const BaseDataForm = ({
  form_title, lottie_animation_data, animation_speed, end_frame, start_frame, setShowBaseDataForm
}) => {
  const [formData, setFormData] = useState({
    gsr: '',
    bpm: '',
    obj_temp: '',
    ambient_temp: '',
  });
  const [file, setFile] = useState(null);
  const [next, setNext] = useState(false);

  const handleFileChange = (file) => {
    setFile(file);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div
        id="popup-modal"
        tabIndex="-1"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-24 py-14 overflow-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full "
      >
        <div className="fixed inset-0 bg-black opacity-50 backdrop-blur-sm"></div>
        <div className="relative w-full max-w-full max-h-full">
          <div className="add-bg-here min-h-screen flex flex-col w-full h-full bg-cover bg-fixed bg-center">
            <div className="flex justify-center my-2 mx-4 md:mx-0">
              <form className="w-full max-w-4xl overflow-y-auto max-h-[90vh] bg-white/90 rounded-lg shadow-md px-12 py-4 relative" onSubmit={handleSubmit}>
                <div className="text-right">
                  <button type="button" className={`${closeButtonClass}`} onClick={() => setShowBaseDataForm(false)}>Close</button>
                </div>

                {next ?
                  (
                    <>
                      <div className='px-12 py-2'>
                        <div className="text-center my-4">
                          <h2 className="text-3xl font-bold text-[#7366FF] tracking-tight">
                            {form_title}
                          </h2>
                        </div>
                        <LottieAnimation
                          lottie_animation_data={lottie_animation_data} start_frame={start_frame} end_frame={end_frame} animation_speed={animation_speed}
                          style_classes="w-3/6 mx-auto"
                        />
                        <div className="flex flex-wrap mx-3 mb-6">
                          {/* form start  */}
                          <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover.bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                </path>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                  <span class="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Enter your CSV or Excel (containing your physiological data)
                                </p>
                              </div>
                              <input id="dropzone-file" type="file" class="hidden" onChange={(e) => handleFileChange(e.target.files[0])} />
                            </label>
                          </div>
                          <div className="w-full mx-auto py-2 text-center px-3 my-4 border-t-2 ">
                            <span className="text-lg text-[#7366FF] font bold">OR FILL UP THE FORM BELOW</span>
                          </div>
                          {baseDataInputFields.map((field) => (
                            <div className="w-full md:w-full px-3 mb-2" key={field.name}>
                              <label className={labelClass} htmlFor={field.name}>
                                {field.label}
                              </label>
                              <input
                                className={inputFieldClass}
                                type={field.type}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          ))}
                        </div>
                        <div className="w-full md:w-full px-3">
                          <Button
                            additional_classes={"my-2 lg:px-10 md:px-6 px-6 py-3 text-white bg-[#7366FF] text-2xl font-bold"}
                            button_text={"Submit"}
                            button_type={"submit"}
                          />
                        </div></div></>) : (<>
                          <GoogleFormEmbed embed_link={'https://docs.google.com/forms/d/e/1FAIpQLSfB82j1rHE-v1jGUg3DjTUXbu6yncGTwBOzT8BCg3zb0KyRBA/viewform?embedded=true'} />
                          <Button
                            additional_classes={"my-2 lg:px-10 md:px-6 px-6 py-3 text-white bg-[#7366FF] text-2xl font-bold"}
                            button_text={"Next"}
                            button_function={()=>setNext(true)}
                          />
                        </>)}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseDataForm;
