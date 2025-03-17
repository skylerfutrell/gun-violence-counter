⚠️ Gun Violence Incident Counter (REAL-time simulation)

⭐ Created by: Skyler Futrell

⏩ Quick, simple, and adaptable!

👀 [View on GitHub Pages](https://skylerfutrell.github.io/gun-violence-counter/)

📌 Project Overview: 
This project is a real-time counter that simulates gun-related incidents in the United States based on statistical averages.
The counter updates dynamically, visually representing the frequency of incidents through an increasing number and a progress bar.

🚀 Features: 

✅ Real-Time Counter: Displays a simulated count of gun-related incidents.

✅ Progress Bar Indicator: A visual representation of progress toward the next incident.

✅ Flashing Alerts: The progress bar changes color and flashes when nearing a new incident.

✅ Beep Sound Effect: Plays a warning sound when an incident is about to be added.

✅ Optimized Speed for Demonstration: In this simulation, the timer updates more frequently for viewer ease, but in a real-world implementation, it would track incidents throughout the user's browsing session.


📂 Files:

1. index.html:
   
   - The main structure of the webpage.
     
2. styles.css:
   
   - Styling for the counter, progress bar, and flashing effects.
     
3. script.js:
   
   - JavaScript logic for real-time updates and animations.
     
4. warning.wav:
   – Beep sound effect played before an update.

🏁 Getting Started:

  Prerequisites:
    - A modern web browser (Chrome, Firefox, Edge, or Safari)
    - An internet connection to load external fonts

  Installation:
    1. Download the repository or clone it using:
              
    git clone https://github.com/your-repo/gun-violence-counter.git

  2. Navigate to the repository folder:

         cd gun-violence-counter

  3. Open index.html in a web browser.


📖 Usage:

- The counter starts at 0 and increases at an accelerated pace for demonstration purposes.
- The progress bar fills up in real-time to indicate the next incident.
- At 80% progress, the bar flashes orange as a warning.
- At 90% progress, a beep sound is triggered.
- Once full, the counter increments and the cycle restarts.

⚒️ Technologies Used:

✅ HTML5: Structuring the webpage.

✅ CSS3: Styling, animations, and flashing effects.

✅ JavaScript (ES6+): Counter logic, progress updates, and sound integration.

📝 What I Learned:

🧠 Implementing real-time updates using setInterval().

🧠 Enhancing user experience with visual alerts and sound notifications.

🧠 Managing animations and transitions with CSS.

🧠 Structuring JavaScript logic efficiently for dynamic updates.

🌎 Real-World Implementation:

In the current setup, the counter is sped up for demonstration purposes updating every 50 milliseconds to demonstrate the animation and alarm process.

In a live scenario, the timer would update based on the real-world statistic.

📊 Real-World Statistic: 

According to Gun Violence Archive (2024), an average of 120 people are shot in the U.S. every day, which breaks down to:

- 5 shootings per hour
- 1 shooting every 12 minutes
- 0.083 incidents per minute

🚀 Adjusting the Code to Match Real-World Speed:

To reflect the real-world statistic after cloning the demo version:

1. Update the Incident Rate

- In script.js, change the incidentsPerMinute value to match real statistics:

       const incidentsPerMinute = 0.083; // 1 incident every 12 minutes
       const incidentsPerSecond = incidentsPerMinute / 60; // Convert to per second
  
2. Adjust the Timer Interval

- Change the setInterval() function to update every second (1000ms) instead of 50ms:

        setInterval(() => {
          progress += incidentsPerSecond;

          if (progress >= 1) {
            incidentCount++;
            progress = 0;
        }

        document.getElementById('incidentCounter').textContent = incidentCount;

      }, 1000); // Update every second

3. Maintain Tracking Over a Full Browsing Session

To ensure that the counter doesn't reset when the user refreshes or navigates pages, use LocalStorage:

let incidentCount = localStorage.getItem('incidentCount') ? parseInt(localStorage.getItem('incidentCount')) : 0;

      setInterval(() => {
          progress += incidentsPerSecond;

          if (progress >= 1) {
            incidentCount++;
            progress = 0;
            localStorage.setItem('incidentCount', incidentCount); // Save count
        }

      document.getElementById('incidentCounter').textContent = incidentCount;
    }, 1000);

🕵️ How This Works:

- The counter now reaches the next whole number approximately every 12 minutes, instead of updating rapidly.
- LocalStorage ensures continuity across browsing sessions so users see an accurate count over time.
- The counter can be deployed site-wide, running in the background as users browse.
- This simple project can be modified in countless ways to create unforgettable user experiences.

🎯 Future Improvements:

🚀 Real-World Data Integration: Connect the counter to an API for live statistics.

🚀 User Customization: Allow users to adjust speed, sound, or visual settings.

🚀 Persistent Tracking: Implement tracking across multiple pages for long-term monitoring.

🎨 Customization:

🏎️ To modify the counter speed:

- Adjust the incidentsPerMinute variable in script.js.
- Change the setInterval() timing to control update frequency.

🔊 To replace the sound:

- Replace sounds/warning.wav with another audio file and update the path in script.js.

License:

    This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it.

    Copyright (c) [2024] [Skyler Futrell]

🔗 Connect With Me:

[Website](https://www.futrellstudioportfolio.com)

 
