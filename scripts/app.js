"use strict"

// analog clock
const hr = document.querySelector('.hour');
const mn = document.querySelector('.min');
const sc = document.querySelector('.sec');

const hourDeg = 360 / 12;
const minDeg = 360 / 60;
const secDeg = 360 / 60;

setInterval(() => {
    let day = new Date();
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();

    h = h % 12 || 12;

    let hh = h * hourDeg;
    let mm = m * minDeg;
    let ss = s * secDeg;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // digital clock
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    let ampm = document.querySelector('.ampm');

    const normalize = (num) => { return num < 10 ? `0${num}` : num };

    hours.innerHTML = normalize(h);
    minutes.innerHTML = normalize(m);
    seconds.innerHTML = normalize(s);
    ampm.innerHTML = day.getHours() > 12 ? 'PM' : 'AM';
});
