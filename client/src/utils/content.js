
//landing page 
export const landingPageFooterLinks = [
    {
        title: 'Getting Started',
        links: [
            { text: 'Home', to: '#' },
            { text: 'How it Works', to: '#' },
            { text: 'Know Your Symptoms', to: '#' },
            { text: 'Learn More', to: '#' },
        ],
    },
    {
        title: 'Useful Links',
        links: [
            { text: 'Understanding Stress Scores', to: '' },
            { text: 'Managing Stress Levels', to: '' },
            { text: 'Measuring Stress at Work', to: '' },
            { text: 'Coping Strategies', to: '' },
            { text: 'Mindfulness and Stress Reduction', to: '' },
            { text: 'Impact of Stress on Health', to: '' },
            { text: 'Finding Professional Help', to: '' },
        ]
    },
    {
        title: 'Community',
        links: [
            { text: 'GitHub', to: '#' },
            { text: 'Discord', to: '#' },
            { text: 'Twitter', to: '#' },
            { text: 'YouTube', to: '#' },
            { text: 'Facebook', to: '#' },
        ],
    },
];

//base data form
export const baseDataInputFields = [
    { name: 'gsr', type: 'number', label: 'GSR' },
    { name: 'hr', type: 'number', label: 'HR' },
    { name: 'temp', type: 'number', label: 'Temperature (°C)' },
  ];

export const addBaseDataEmbedLink = "https://docs.google.com/forms/d/e/1FAIpQLSfB82j1rHE-v1jGUg3DjTUXbu6yncGTwBOzT8BCg3zb0KyRBA/viewform?embedded=true"

export const suggestions = [
    { "score": 0, "suggestion": "You seem to be managing your stress well. Keep up the good work! 😊" },
    { "score": 1, "suggestion": "You're off to a great start in managing your stress! 😌" },
    { "score": 2, "suggestion": "Your stress levels are low. Keep up the positive mindset! 🌈" },
    { "score": 3, "suggestion": "You're doing well, but there's room for improvement. Try relaxation techniques. 🌟" },
    { "score": 4, "suggestion": "Keep up the effort in managing your stress. Consider trying new relaxation methods. 💆" },
    { "score": 5, "suggestion": "You're experiencing moderate stress. Reach out to friends and consider talking to a counselor. 🤗" },
    { "score": 6, "suggestion": "Moderate stress is normal, but ensure you take time for self-care. You've got this! 💪" },
    { "score": 7, "suggestion": "Your stress levels are noticeable. Take action with professional help and relaxation methods. 🌈" },
    { "score": 8, "suggestion": "High stress calls for action. Consider professional help and prioritize self-care. 🌺" },
    { "score": 9, "suggestion": "Extremely high stress levels. Seek immediate help from a mental health professional. 🙏" },
    { "score": 10, "suggestion": "Your stress levels are critical. Urgently seek help from a mental health professional. 🆘" }
]


export const ActivePageType = {
    Homepage: "home",
    History: "history",
    Profile: "profile",
    LearnMore: "learn-more",
  };


import history from "../assets/view_history1.png"
import score from "../assets/view_score.png"
import upload from "../assets/upload_doc1.png"
export const howToDoIt = [
    {
        "lottie_animation_data": "DocumentsAnimation2.json",
        "start": true,
        "card_bg_color": "FFDFDF",
        "header": "1. Upload Your Data",
        "description": "Get started by uploading your data! You can either upload a CSV file or manually enter your information into the provided field. Need guidance? Download our friendly template CSV for a stress-free experience.",
        "img": upload,
    },
    {
        "lottie_animation_data": "YourNextAnimation.json",
        "start": false,
        "card_bg_color": "DFE9F7",
        "header": "2. Stress Score",
        "description": "Discover your stress score! Our magical algorithm analyzes your provided data and generates a stress score. It's like having your own stress-o-meter. Simple and effective!",
        "img": score,
    },
    {
        "lottie_animation_data": "AnotherAnimation.json",
        "start": true,
        "card_bg_color": "FFDFDF",
        "header": "3. View Your History",
        "description": "Keep track of your stress journey! Visualize trends over time, so you can make informed decisions about your well-being. It's like a time-traveling stress diary, but way cooler!",
        "img": history,

    },
];


import model from "../assets/model_training.png"
import further_training from "../assets/further_training.png"
import tada from "../assets/tada.png"
import data_collection from "../assets/data_collection.png"
export const howDidWeDoIt = [
    {
      "start": true,
      "card_bg_color": "FFDFDF",
      "header": "1. We Trained a Model",
      "description": "We trained a machine learning model on an existing dataset to make Burnout Sentinel intelligent and accurate. Our model is ready to assist you in your stress-busting journey.",
      "img": model
    },
    {
      "start": false,
      "card_bg_color": "DFE9F7",
      "header": "2. Data Collection at IUT",
      "description": "We collected data from a number of students from the University of Technology (IUT), Gazipur, Bangladesh, and used it to further train our model. Your well-being is at the heart of what we do!",
      "img": data_collection
    },
    {
      "start": true,
      "card_bg_color": "FFDFDF",
      "header": "3. Predicting Your Score",
      "description": "Our trained model works its magic to predict a stress score based on your unique data. Sit back, relax, and let the model do its thing. Your well-being journey is personalized just for you!",
      "img": further_training
    },
    {
      "start": false,
      "card_bg_color": "DFE9F7",
      "header": "4. Ta Da! Here's Your Result",
      "description": "And there you have it! The moment you've been waiting for. The model crunches the numbers, analyzes the patterns, and presents you with your stress score. Get ready to unlock a stress-free future!",
      "img": tada
    }
  ];
  