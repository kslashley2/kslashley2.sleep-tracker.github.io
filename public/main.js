const routes = {
  '/': `
    <div class="added-container">
        <div class="media-player-container">
            <div class="song-info">
                <span class="material-symbols-outlined music-icon">music_note</span>
                <span class="song-name">Piano on a rainy day</span>
            </div>
            <div class="song-progress">
                <span class="current-time">2:50:55</span>
                <div class="controls">
                    <button class="control-button"><i class="fas fa-backward"></i></button>
                    <button class="control-button"><i class="fas fa-pause"></i></button>
                    <button class="control-button"><i class="fas fa-forward"></i></button>
                </div>
            </div>
        </div>
        <div class="main-container">
            <div class="calendar-container">
                <header class="calendar-header">
                    <p class="calendar-current-date"></p>
                    <div class="calendar-navigation">
                        <span id="calendar-prev" class="material-symbols-rounded">chevron_left</span>
                        <span id="calendar-next" class="material-symbols-rounded">chevron_right</span>
                    </div>
                </header>

                <div class="calendar-body">
                    <ul class="calendar-weekdays">
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                    </ul>
                    <ul class="calendar-dates"></ul>
                </div>
            </div>
            <div class="previous-session-container">
                <h2>Sessions</h2>
                <div class="session-details">
                    <div class="sleep-data-container">
                        <p>Your sleep has been on an average of 7h 45m per day.</p>
                        <div class="doughnut-chart-added-container">
                            <svg class="doughnut-chart-added" viewBox="0 0 36 36">
                                <path class="circle-bg-added" d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path class="circle-added" d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831" stroke-dasharray="75, 25" />
                            </svg>
                        </div>
                    </div>
                    <div class="dataset-container">
                        <div class="time-period">
                            <span>11:12PM - 7:58AM</span>
                            <div class="description">
                                <span class="material-icons">bed</span>
                                <span>Last session</span>
                            </div>
                        </div>
                        <div class="disruptions">
                            <span>3</span>
                            <div class="description">
                                <span class="material-icons">clear</span>
                                <span>Sleep quality</span>
                            </div>
                        </div>
                        <button class="new-session-button">
                            <span class="material-symbols-outlined">add</span>New Session
                        </button>
                    </div>
                </div>
            </div>

            <div class="bar-chart-placeholder"></div>

            <div class="heart-rate-container">
                <div class="heart-icon-container">
                    <span class="material-symbols-outlined heart-icon">cardiology</span>
                </div>
                <div class="average-heart-rate">
                    <span id="averageHeartRateValue">--bpm</span>
                </div>
                <div class="average-heart-rate-label">Average heart rate</div>
                <div class="heart-rate-info">
                    The average sleeping heart rate is 40-50bpm. Here are tips to managing your heart rate.
                </div>
                <ul class="recommendations">
                    <li class="recommendation-item">
                        Follow a stricter sleeping schedule.
                        <span class="material-icons recommendation-icon">arrow_forward</span>
                    </li>
                    <li class="recommendation-item">
                        Try yoga, meditation, deep breathing exercises, muscle relaxation to induce your body to relaxing state.
                        <span class="material-icons recommendation-icon">arrow_forward</span>
                    </li>
                    <li class="recommendation-item">
                        Exercise regularly to lower resting heart rate.
                        <span class="material-icons recommendation-icon">arrow_forward</span>
                    </li>
                    <li class="recommendation-item">
                        Refrain from consuming nicotine or caffeine.
                        <span class="material-icons recommendation-icon">arrow_forward</span>
                    </li>
                    <li class="recommendation-item">
                        A healthier health can aid control of the heart rate.
                        <span class="material-icons recommendation-icon">arrow_forward</span>
                    </li>
                </ul>
            </div>
            <div class="respiratory-container">
                <div class="wind-icon-container">
                    <span class="material-symbols-outlined wind-icon">pulmonology</span>
                </div>
                <div class="average-respiratory-rate" id="average-respiratory-rate">--bpm</div>
                <div class="average-respiratory-rate-label">Average respiratory rate</div>
                <div class="respiratory-rate-info">
                    The average healthy adult respiratory rate in the relaxed state is 12 to 20 times per minute.
                </div>
                <ul class="causes">
                    <li class="cause-item">
                        High respiratory rate causes
                        <span class="material-icons cause-icon">arrow_forward</span>
                    </li>
                    <li class="cause-item">
                        Low respiratory rate causes
                        <span class="material-icons cause-icon">arrow_forward</span>
                    </li>
                </ul>
            </div>
            <div class="sleep-journal-container">
                <div class="sleep-journal-title">
                    <span class="sleep-journal-header">Sleep <br> journal</span>
                </div>
                <div class="mood-container">
                    <div class="mood-button-container">
                        <button class="mood-button">😐 Mood</button>
                    </div>
                    <div class="diary-entry-container">
                        <div class="diary-entry" id="diary-entry">Improvement on quality of sleep at least, nightmares has been greatly reduce with the help of the white noise and it has put me to sleep quicker. AIm to increase deep sleep faster eventually and try scented candles to enter a relaxation state quicker.
                        </div>
                    </div>
                </div>
            </div>
            <div class="audio-container">
                <div class="audio-title">Audio</div>
                <div class="audio-player-container">
                    <audio controls class="audio-player">
                        <source src="path/to/audio/file.mp3" type="audio/mpeg">
                    </audio>
                </div>
            </div>
            <div class="insights-container">
                <div class="insight-icon-container">
                    <span class="material-symbols-outlined insight-icon">emoji_objects</span>
                </div>
                <div class="insight-header">Insights for you</div>
                <ul class="insight-list">
                    <li class="insight-item">
                        <div class="insight-text-container">
                            <div class="insight-title">
                                Due to your high heart rate...
                                <span class="material-icons insight-arrow-icon">arrow_forward</span>
                            </div>
                            <div class="insight-body">
                                Avoid stressful or anxious driven activity before sleep.
                            </div>
                        </div>
                    </li>
                    <li class="insight-item">
                        <div class="insight-text-container">
                            <div class="insight-title">
                                How to improve the quality?
                                <span class="material-icons insight-arrow-icon">arrow_forward</span>
                            </div>
                            <div class="insight-body">
                                Sleep in the right direction to improve circulation in the brain.
                            </div>
                        </div>
                    </li>
                    <li class="insight-item">
                        <div class="insight-text-container">
                            <div class="insight-title">
                                Try fixing a sleep schedule
                                <span class="material-icons insight-arrow-icon">arrow_forward</span>
                            </div>
                            <div class="insight-body">
                                Your advised sleeping schedule would be from 11:30PM to 7:30AM.
                            </div>
                        </div>
                    </li>
                    <li class="insight-item">
                        <div class="insight-text-container">
                            <div class="insight-title">
                                Creating a sleep ritual
                                <span class="material-icons insight-arrow-icon">arrow_forward</span>
                            </div>
                            <div class="insight-body">
                                Deep sleep only occurs at least 1.5 hours in, try out a relaxing ritual to reduce the time taken.
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="delete-button">
                <button onclick="del()"><span class="material-symbols-outlined delete-icon">delete</span>Delete</button>
            </div>
        </div>
    </div>
  `,
  '/add-session': `
    <div class="add-session-container">
        <div class="session-label">In Session</div>
        <div class="session-time">00:00AM</div>
    <div class="time-icons-container">
        <div class="time-icon">
                <span class="material-icons">hotel</span>
                <span class="time-label">11:35PM</span>
        </div>
        <div class="time-icon">
                <span class="material-icons">wb_sunny</span>
                <span class="time-label">08:00AM</span>
        </div>
        </div>
        <div class="doughnut-chart-container">
            <svg class="doughnut-chart" viewBox="0 0 36 36">
                <path class="circle-bg" d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="circle" d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831" stroke-dasharray="10, 90" />
            </svg>
        </div>
        <button class="end-session-button" data-link="/end-session">
            <span class="material-icons">close</span>
        </button>
    </div>
    `,
    '/end-session': `
    <div class="end-session-container">
        <div class="first-container">
            <p>Let’s now jot your sleep session</p>
        </div>
        <div class="second-container">
            <h1>End of Session</h1>
        </div>
        <div class="third-container">
            <label for="starting-date">Starting date</label>
            <input type="date" id="starting-date" min="2024-05-01">
        </div>
        <div class="fourth-container">
            <div class="start-time">
                <label for="start-time">Start Time</label>
                <input type="time" id="start-time">
            </div>
            <div class="end-time">
                <label for="end-time">End Time</label>
                <input type="time" id="end-time">
            </div>
        </div>
        <div class="fifth-container">
            <label for="disruptions">Number of disruptions</label>
            <input type="text" id="disruptions" placeholder="Enter a number">
        </div>

        <div class="sixth-container">
            <div class="average-heart-rate">
                <label for="average-heart-rate">Average heart rate</label>
                <input type="text" id="average-heart-rate" placeholder="Enter number">
            </div>
            <div class="average-respiratory">
                <label for="average-respiratory">Average respiratory</label>
                <input type="text" id="average-respiratory" placeholder="Enter number">
            </div>
        </div>

        <div class="seventh-container">
            <label for="mood">Mood</label>
            <div class="mood-buttons">
                <button>😡 Angry</button>
                <button>😢 Sad</button>
                <button>😐 Neutral</button>
                <button>😀 Happy</button>
                <button>😁 Excited</button>
            </div>
        </div>

        <div class="eighth-container">
            <label for="diary">Diary</label>
            <textarea name="diary-textarea" placeholder="Note your thoughts here"></textarea>
        </div>

        <div class="ninth-container">
            <button class="cancel-button">Cancel</button>
            <button class="done-button" onclick="add()">Done</button>
        </div>
    </div>
  `,
  '/added': `
    <div class="media-player-container">
        <div class="song-info">
            <img src="icons/music.svg" alt="Music Icon" class="music-icon" />
            <span class="song-name">Piano on a rainy day</span>
        </div>
        <div class="song-progress">
            <span class="current-time">2:50:55</span>
            <div class="controls">
                <button class="control-button"><i class="fas fa-backward"></i></button>
                <button class="control-button"><i class="fas fa-pause"></i></button>
                <button class="control-button"><i class="fas fa-forward"></i></button>
            </div>
        </div>
    </div>
    <div class="main-container">
        <div class="calendar-container">
            <div class="header">June 2024</div>
        </div>
        <div class="sessions-container">
            <div class="overlay"></div>
            <h2>Sessions</h2>
            <p>There is no active session added today</p>
        </div>
    </div>
  `,
  '/settings': `
    <h1>Settings</h1>
    <p>This is the Settings page.</p>
  `
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
  };
  
  const router = () => {
    const path = window.location.pathname;
    const app = document.getElementById('app');
    const template = routes[path] || routes['/'];
  
    app.innerHTML = template;
    console.log(`Navigated to ${path}`);
  };
  
  window.addEventListener('popstate', router);
  
  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
      const target = e.target;
  
      if (e.target.matches('[data-link]') || e.target.closest('[data-link]')) {
        e.preventDefault();
        const target = e.target.closest('[data-link]');
        const link = target.getAttribute('href');
        console.log(`Navigating to ${link}`);
        navigateTo(link);
      }
      if (target.matches('.end-session-button')) {
        e.preventDefault();
        const link = target.getAttribute('data-link'); 
        console.log(`fail to load`);
        navigateTo(link);
      }
    });
  
    router();
  });  

  document.addEventListener('DOMContentLoaded', () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();

    const day = document.querySelector(".calendar-dates");
    const currdate = document.querySelector(".calendar-current-date");
    const prenexIcons = document.querySelectorAll(".calendar-navigation span");

    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    const manipulate = () => {
        let dayone = new Date(year, month, 1).getDay();
        let lastdate = new Date(year, month + 1, 0).getDate();
        let dayend = new Date(year, month, lastdate).getDay();
        let monthlastdate = new Date(year, month, 0).getDate();
        let lit = "";

        for (let i = dayone; i > 0; i--) {
            lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
        }

        for (let i = 1; i <= lastdate; i++) {
            let isToday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? "active" : "";
            lit += `<li class="${isToday}">${i}</li>`;
        }

        for (let i = dayend; i < 6; i++) {
            lit += `<li class="inactive">${i - dayend + 1}</li>`;
        }

        currdate.innerText = `${months[month]} ${year}`;
        day.innerHTML = lit;
    }

    manipulate();

    prenexIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            month = icon.id === "calendar-prev" ? month - 1 : month + 1;

            if (month < 0 || month > 11) {
                date = new Date(year, month, new Date().getDate());
                year = date.getFullYear();
                month = date.getMonth();
            } else {
                date = new Date();
            }

            manipulate();
        });
    });
});
