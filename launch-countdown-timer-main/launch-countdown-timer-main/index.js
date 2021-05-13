setInterval(() => {
    let d = new Date();
    let r = new Date(2022, 04, 13);

    let total = (r.getTime() - d.getTime());

    let days = total / 86400000;
    let cDays = Math.floor(days);
    const dayText = document.getElementById("days");
    cDays = Math.floor(cDays);
    dayText.innerHTML = cDays.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    let hours = total % 86400000;
    cHours = hours / 3600000
    const hoursText = document.getElementById("hours");
    cHours = Math.floor(cHours);
    hoursText.innerHTML = cHours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    let minutes = hours % 3600000
    let cMinutes = minutes / 60000;
    const minutesText = document.getElementById("minutes");
    cMinutes = Math.floor(cMinutes);
    minutesText.innerHTML = cMinutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    let seconds = minutes % 60000
    let cSeconds = seconds / 1000
    const secondsText = document.getElementById("seconds");
    cSeconds = Math.floor(cSeconds);
    secondsText.innerHTML = cSeconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
}, 1000);