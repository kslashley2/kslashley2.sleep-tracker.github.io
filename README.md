# sleep-tracker


**Overview**

Welcome to the Sleep Tracker App! This responsive, single-page web application is designed to help you monitor and improve your sleep patterns. By tracking your sleep duration, disruptions, heart rate variability, and respiratory rate, the app provides comprehensive insights into your sleep health. Understanding these patterns enables you to make informed decisions to enhance your overall well-being. “A consistent and reliable sleep from night to night is good for our health, just like a regular balanced diet and remaining well hydrated is healthy.” (Espie, 2022) 

With the rise of tracking innovations, individuals can now assess, recognize, and receive personalized recommendations to improve their sleep quality. This app primarily targets adults experiencing sleep disorders, sleep apnea, or difficulties with sleep, but it is also beneficial for anyone with irregular sleep schedules or disruptions.

**Features**

- **Logging**: Record your sleep periods, including start and end times, and note any disruptions.
- **Analytics**: Receive detailed reports on your sleep quality and trends, and analyse heart rate variability and respiratory rate. Maintain a sleep journal to rate and reflect on your sleep quality. Track sleep patterns and trends over different days to understand and improve your sleep habits.
- **Recommendations**: Curated insights based on user data, causes and tips on improving their overall sleep health.

**Usage:**

1. Track sleep health through the dashboard screen, access the user's previous sleep session, sleep stages (REM, Light, Deep & Awake), heart rate variability, respiratory rate, audio recording, and sleep journal. 
2. View analysis reports on the factors that could affect users' heart rate variability and respiratory rate, with tailored links relevant to their data. Access summarised insights into users' sleep health and tips on how to improve their sleep health.
3. Start logging a new session that will navigate the user to a ‘sleep state’ of the web app. 
4. Logging reflection will require the user to complete a form file containing the sleep time, end time, and disruptions relevant to the completed sleep session.
5. Reflect on the session with a sleep quality rating system of their mood and note a sleep journal.
6. Analyse the new set of sleep trends, patterns and recommendations based on the recorded session. 

**Version control**
Please see the Github repository here: "git@github.com:kslashley2/kslashley2.sleep-tracker.github.io.git"

**Setup**
No setup is required.

**Development**

![AppScreens](sleep-tracker\development\data.png)
![AppScreens](sleep-tracker\development\session.png)

Due to the limitations of real-time data from users, the data-driven insights screen will be integrated with the dashboard and filtered to prioritised dataset that can still effectively measure user sleep health.  

With the new navigation integration, the single page architecture functions with mainly three navigational screens: Dashboard; Add Session; Settings. Where users are only required to toggle between the dashboard and session screen mainly to track and analyse the metrics and customised recommendations. 

![AppScreens](sleep-tracker\development\final.png)

Exploring the initial concepts, the proposal of scheduling a wake up time was reduced due to the time limitations in integrating that to the system with the new input log. The logging of each new session has been mixed and integrated into a single input screen to reduce the cognitive load of navigating users through a series of screens to complete a single action. The single logging session now prioritise the measurement of the session date, start time, end time, number of disruptions, mood, and a sleep journal. 

**Constraints & Limitations**

Due to the limitations on device control ability, this single-page architecture web app will primarily focus on user input data without the support of any smart system. 

The initial proposed concepts included smart tracking of user sleep durations, setting up a digital alarm, and analysing different sleep stages. Features such as displaying an overall heart rate variability and respiratory rate chart could only be implemented with data that tracks users' sleep sessions in real-time and constantly to present an effective analysis of their sleep health. The qualitative breakdown of sleep stages can only be integrated with motion-tracking smarter devices that capture effective results to display an accurate data chart.  With the constraints that most of the proposed data types can only be captured with real-time API datasets from a secondary device such as a smart device, the time limitations restrict further exploration and integration. 

With opportunity to develop the web app further, possible concepts could integration of advance tracking of user nightmare, smart system to detect sleep motions and real-time API data will drive the sleep tracker app to an effective sleep tracker.

