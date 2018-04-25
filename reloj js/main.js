(function start() {
    'use strict';

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.minute-hand')
 
 
 function setDate() {
    const now = new Date(); //la fecha y hora de hoy
    const seconds = now.getSeconds(); // cogemos los segundos
    const secondDegrees = ((seconds / 60) * 360) + 90; // transformamos los segundos en grados, que se mueva 90º la caja del div. Y 60 para que pase por las 60 posiciones(segundos)
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    // console.log(seconds);

    const minutes = now.getMinutes()
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hours = now.getMinutes()
    const hourDegrees = ((hours / 12) * 360) + 90; // transformamos los segundos en grados, que se mueva 90º la caja del div. Y 12 para que pase por las 12 posiciones de las horas.
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

 }
 
 setInterval(setDate,1000);
 
 
 
































})()