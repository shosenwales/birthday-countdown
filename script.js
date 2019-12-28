const countdown = document.querySelector('.countdown');

//launch date
const launchDate = new Date('May 25, 2020 12:00:00').getTime();

//update every second
const interval = setInterval(() =>{
    const now = new Date().getTime();//get todays date
    const distance = launchDate - now;//distance from now to launch date
    //Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //display result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    if(distance < 0){
        clearInterval(interval);
        //output
        countdown.style.color = '#17a2b8'
        countdown.innerHTML = 'Happy Birthday To Me!'
    }
},1000);