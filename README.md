# Burnout Sentinels

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/iut-swe-20-dp-1/website-burnout-sentinel">
    <img src="client/public/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Burnout Sentinels</h3>

  <p align="center">    
   A project focused on decoding stress levels through physiological data utilizing a machine learning model.
   <br>
    <a href="https://burnout-sentinels.netlify.app/">Burnout Sentinels Website</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

(This project was created for the academic course SWE 4506 - Design Project I).

![image](https://github.com/iut-swe-20-dp-1/website-burnout-sentinel/blob/main/client/public/burnout-sentinels-preview.png)

This project incorporates a machine learning model that generates a stress score ranging from 0 to 10. By developing a web-based system enabling users to input their physiological data, it facilitates the monitoring and management of stress levels, providing personalized suggestions. Aimed at addressing student stress in the academic environment, the project offers a comprehensive approach to stress management.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)
* ![Express.js](https://img.shields.io/badge/Express.js-122658?style=for-the-badge&logo=express&logoColor=white)
* ![Nodejs](https://img.shields.io/badge/Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)
* ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
* ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

You will require a .env file for the backend server before you can start running the project.
* Create a file named `.env` in the `api/` folder.
* Populate the file with the following environment variables according to your environment:
  ```sh
  PORT = 8800
  CLIENT_PORT = 5173
  CLIENT_URL = http://localhost:5173
  SERVER_URL = http://localhost:8080
  
  MONGO_URI = 
  JWT_SECRET = 
  JWT_EXPIRATION =
  SESSION_KEY = 

  GOOGLE_CLIENT_ID =
  GOOGLE_CLIENT_SECRET = 
  ```
* The `GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET` variables are created using Google Cloud Console for Google OAuth.
* The `MONGO` variable is the mongoDB link to the database used to store all the website information.
* `JWT_SECRET, JWT_EXPIRATION, SESSION_KEY` can be set according to user preferance.
* `PORT, CLIENT_PORT` variables can be alternatively set to any available port on the user's device.
* `CLIENT_URL, SERVER_URL` variables must be set according to "http://localhost:" + PORT, where PORT corresponds to either the server or client, depending on the context. 

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/iut-swe-20-dp-1/website-burnout-sentinel.git
   ```
3. Install NPM packages for server
   ```bash
   cd api
   npm install
   ```
4. Start the server
   ```bash
   npm run dev
   ```
5. Install NPM packages for client
   ```bash
   cd client
   yarn install
   ```
6. Start the client
   ```bash
   yarn dev
   ```
7. Go to the following link to use the website locally:
   ```yaml
   http://localhost:5173/
   ```
If you've utilized a different port in the `CLIENT_PORT` variable within the server's `.env` file, you'll need to adjust the part 5173 to match the port number you've chosen.
   
<!-- USAGE EXAMPLES -->
## Usage

The project can be utilized in various ways to facilitate stress management and analysis:

1. **Account System:**
   - Users have the ability to modify their personal information on their profile to suit their preferences.
   - Additionally, users can enhance their security by changing their password as needed.

2. **Previous Stress Score History Saved on the profile:**
   - Each user's stress score history is saved on their profile, allowing them to track their stress levels over time.
   - This feature enables users to monitor their stress patterns and observe any fluctuations or trends.

3. **Real-Time Stress Analysis using ML model:**
   - Users can input their physiological data using a CSV file into the system, which is then analyzed by a machine learning model in real-time.
   - The ML model generates a stress score ranging from 0 to 10, providing users with instant feedback on their stress levels.
   - Users who are uncertain about the format of the CSV file can download or view a sample CSV file as a guide.
     
4. **Suggestions Given for Stress Management Based on Stress Score:**
   - Based on the user's stress score and profile information, the system provides personalized suggestions for stress management.
   - These suggestions consist of personalized comments aimed at addressing the individual's specific needs and assisting them in effectively managing their stress.

5. **Guest Mode for Just a Stress Test:**
   - Users have the option to access a guest mode for quick stress testing without the need to create an account or log in.
   - This feature allows users to assess their stress levels without any commitment or registration process.

6. **Feedback and Review from Users on their Satisfaction Level after Every Stress Detection:**
   - After each stress detection session, users are prompted to provide feedback and review their satisfaction level with the stress analysis results.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

This project is licensed under the [MIT License](LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Shanta Maria - [github-profile](https://github.com/maria-iut1234)

Nafisa Maliyat - [github-profile](https://github.com/NafisaMaliyat-iut)

Ayesha Afroza Mohsin - [github-profile](https://github.com/AyeshaMohsin)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Img Shields](https://shields.io)
* [GitHub ReadMe Template](https://github.com/othneildrew/Best-README-Template/tree/master)
