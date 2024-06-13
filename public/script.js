document.addEventListener('DOMContentLoaded', () => {
    const navigateTo = (path) => {
        history.pushState({}, path, window.location.origin + path);
        document.querySelector('.content').innerHTML = routes[path];
        initializePage();
    };

    const initializePage = () => {
        if (window.location.pathname === '/') {
            loadSessions();
            document.querySelector('.new-session-button').addEventListener('click', () => {
                navigateTo('/add-session');
            });
        } else if (window.location.pathname === '/add-session') {
            document.querySelector('.end-session-button').addEventListener('click', () => {
                navigateTo('/end-session');
            });
        } else if (window.location.pathname === '/end-session') {
            document.querySelector('.done-button').addEventListener('click', () => {
                submitSessionData();
            });
        }
    };

    const loadSessions = () => {
        fetch('/sessions')
            .then(response => response.json())
            .then(data => {
                // Update the UI with the session data
                if (data.length > 0) {
                    const lastSession = data[data.length - 1];
                    document.getElementById('time-period').innerText = `${lastSession.startTime} - ${lastSession.endTime}`;
                    document.getElementById('disruptions').innerText = lastSession.disruptions;
                    document.getElementById('average-heart-rate').innerText = `${lastSession.averageHeartRate} bpm`;
                    document.getElementById('average-respiratory-rate').innerText = `${lastSession.averageRespiratory} bpm`;
                    document.getElementById('mood-button').innerText = lastSession.mood;
                    document.getElementById('diary-entry').value = lastSession.diaryEntry;
                }
            })
        .catch(error => console.error('Error fetching sessions:', error));
    };

    const submitSessionData = () => {
        const sessionData = {
            startingDate: document.getElementById('starting-date').value,
            startTime: document.getElementById('start-time').value,
            endTime: document.getElementById('end-time').value,
            disruptions: document.getElementById('disruptions').value,
            averageHeartRate: document.getElementById('average-heart-rate').value,
            averageRespiratory: document.getElementById('average-respiratory-rate').value,
            mood: document.getElementById('mood-button').innerText,
            diaryEntry: document.getElementById('diary-entry').value
        };

        fetch('/add-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sessionData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Session data submitted:', data);
            navigateTo('/');
        })
        .catch(error => console.error('Error submitting session data:', error));
    };

    window.addEventListener('popstate', () => {
        const path = window.location.pathname;
        document.querySelector('.content').innerHTML = routes[path];
        initializePage();
    });

    initializePage();
});

const routes = {
    '/': `
        <div class="added-container">
            <!-- Content for the main screen -->
            <!-- ... rest of your main screen content ... -->
        </div>
    `,
    '/add-session': `
        <div class="add-session-container">
            <!-- Content for adding a session -->
            <!-- ... rest of your add session content ... -->
            <button class="end-session-button">End Session</button>
        </div>
    `,
    '/end-session': `
        <div class="end-session-container">
            <!-- Content for ending a session -->
            <!-- ... rest of your end session content ... -->
            <input type="text" id="starting-date" placeholder="Starting Date">
            <input type="text" id="start-time" placeholder="Start Time">
            <input type="text" id="end-time" placeholder="End Time">
            <input type="number" id="disruptions" placeholder="Disruptions">
            <input type="number" id="average-heart-rate" placeholder="Average Heart Rate">
            <input type="number" id="average-respiratory-rate" placeholder="Average Respiratory Rate">
            <input type="text" id="mood" placeholder="Mood">
            <input type="text" id="diary-entry" placeholder="Diary Entry">
            <button class="done-button">Done</button>
        </div>
    `
};