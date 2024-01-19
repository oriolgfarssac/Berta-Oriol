

setInterval(calcularDiferenciaFechas, 1000);

function calcularDiferenciaFechas() {

    let startDate = new Date();
    startDate.setFullYear('2022');
    startDate.setMonth('06');
    startDate.setDate('04');
    startDate.setHours('19');
    startDate.setMinutes('35');
    let actualDate = new Date();

    let diferenciaEnMilisegundos = actualDate - startDate;

    // Calcular años
    let years = Math.floor(diferenciaEnMilisegundos / (365.25 * 24 * 60 * 60 * 1000));

    // Calcular meses
    let months = Math.floor(diferenciaEnMilisegundos % (365.25 * 24 * 60 * 60 * 1000) / (30.44 * 24 * 60 * 60 * 1000));

    // Calcular días
    let days = Math.floor(diferenciaEnMilisegundos % (30.44 * 24 * 60 * 60 * 1000) / (24 * 60 * 60 * 1000));

    // Calcular horas
    let hours = Math.floor(diferenciaEnMilisegundos % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));

    // Calcular minutos
    let min = Math.floor(diferenciaEnMilisegundos % (60 * 60 * 1000) / (60 * 1000));

    if(years <= 1){
        document.getElementById('years').innerHTML = years + ' any';
    }else{
        document.getElementById('years').innerHTML = years + ' anys';
    }
    if(months <= 1){
        document.getElementById('months').innerHTML = months + ' mes';
    }else{
        document.getElementById('months').innerHTML = months + ' mesos';
    }
    if(days == 1){
        document.getElementById('days').innerHTML = days + ' dia';
    }else{
        document.getElementById('days').innerHTML = days + ' dies';
    }
    if(hours <= 1){
        document.getElementById('hours').innerHTML = hours + ' hora';
    }else{
        document.getElementById('hours').innerHTML = hours + ' hores';
    }
    if(min <= 1){
        document.getElementById('min').innerHTML = min + ' minut';
    }else{
        document.getElementById('min').innerHTML = min + ' minuts';
    }
    
    
}
