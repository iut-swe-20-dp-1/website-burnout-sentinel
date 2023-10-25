
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
    { name: 'bpm', type: 'number', label: 'BPM' },
    { name: 'obj_temp', type: 'number', label: 'Object Temperature (°C)' },
    { name: 'ambient_temp', type: 'number', label: 'Ambient Temperature (°C)' },
  ];

export const addBaseDataEmbedLink = "https://docs.google.com/forms/d/e/1FAIpQLSfB82j1rHE-v1jGUg3DjTUXbu6yncGTwBOzT8BCg3zb0KyRBA/viewform?embedded=true"

export const suggestions = [
    { lower: 0, upper: 2, suggestion: "You seem to be managing your stress well. Keep up the good work!" },
    { lower: 3, upper: 4, suggestion: "You're doing alright, but there's room for improvement. Consider trying relaxation techniques." },
    { lower: 5, upper: 6, suggestion: "It looks like you're experiencing moderate stress. Reach out to friends and consider talking to a counselor." },
    { lower: 7, upper: 8, suggestion: "Your stress levels are high. It's important to take action. Consider professional help and relaxation methods." },
    { lower: 9, upper: 10, suggestion: "Your stress levels are extremely high. Please seek help immediately from a mental health professional." }
];

  
  