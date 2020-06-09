setInterval(setClock, 1000) 

const hourhand = document.querySelector('data-hour-hand')
const hourhand = document.querySelector('data-minute-hand')
const hourhand = document.querySelector('data-second-hand')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = curentDate.getSeconds() / 60
    const minutesRatio = curentDate.getminuets() / 60
    const hoursRatio = (secondsRatio + currentDate.gethours()) / 60

}const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;