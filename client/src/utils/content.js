
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
    { lower: 0, upper: 2, suggestion: "You seem to be managing your stress well. Keep up the good work!" },
    { lower: 3, upper: 4, suggestion: "You're doing alright, but there's room for improvement. Consider trying relaxation techniques." },
    { lower: 5, upper: 6, suggestion: "It looks like you're experiencing moderate stress. Reach out to friends and consider talking to a counselor." },
    { lower: 7, upper: 8, suggestion: "Your stress levels are high. It's important to take action. Consider professional help and relaxation methods." },
    { lower: 9, upper: 10, suggestion: "Your stress levels are extremely high. Please seek help immediately from a mental health professional." }
];

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
  