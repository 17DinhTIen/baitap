// const getRandomIntInclusive = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };
// function randomTemp() {
//     var arrTemps = [];
//     for (let i = 0; i < 10; i += 1) {
//         arrTemps.push(getRandomIntInclusive(5, 20))
//       }
//     var content= document.getElementById("arrTemperature");
//     content.innerHTML = arrTemps;
//     content.value=arrTemps;
//     document.getElementById("JSON-mv").value=arrTemps;
//     console.log("data :",content.value)
// }
// var checkAr = [];
// let counter = 0;
// const intervalId = setInterval(() => {
//     a = Math.floor(Math.random() * (100 - 0)) + 0;
//     checkAr[counter]=a;
//     document.getElementById("arrTemperature").innerHTML = a
//     counter += 1;
// if (counter === 10) {
//     clearInterval(intervalId);
//     }
// }, 1000);
// console.log(typeof(checkAr));   // object
// console.log(checkAr);
function getRanNumbers1(max,min){
    var a = [];
    for (var i = 0; i<10; i++){
        a[i] = Math.floor(Math.random() * (max - min)) + min;  
    }
    document.getElementById("arrTemperature").innerHTML = a
    return a;
}
function getRanNumbers2(max,min){
    var a = [];
    for (var i = 0; i<10; i++){
        a[i] = Math.floor(Math.random() * (max - min)) + min;  
    }
    document.getElementById("arrHumidity").innerHTML = a
    return a;
}
function getRanNumbers3(max,min){
    var a = [];
    for (var i = 0; i<10; i++){
        a[i] = Math.floor(Math.random() * (max - min)) + min;  
    }
    document.getElementById("arrLight").innerHTML = a
    return a;
}
// function randomTemp(){
//     document.getElementById("arrTemperature").innerHTML = 
// }
// console.log("check :",document.getElementById("JSON-mv").value)
// var dataTemp = document.getElementById("JSON-mv").value;
const options = {
   title: {
       text: 'Biểu đồ nhiệt độ độ ẩm và ánh sáng'
   },

   subtitle: {
       text: ''
   },

   yAxis: {
       title: {
           text: 'Value '
       }
   },

   xAxis: {
       accessibility: {
           rangeDescription: 'Range: 1 to 10'
       }
   },

   legend: {
       layout: 'vertical',
       align: 'right',
       verticalAlign: 'middle'
   },

   plotOptions: {
       series: {
           label: {
               connectorAllowed: false
           },
           pointStart: 1
       }
   },

   series: [{
       name: 'Temperature',
       data:  getRanNumbers1(100,0),
   }, {
       name: 'Humidity',
       data: getRanNumbers2(100,0),
   }, {
       name: 'Light',
       data: getRanNumbers3(100,0),
   }],

   responsive: {
       rules: [{
           condition: {
               maxWidth: 500
           },
           chartOptions: {
               legend: {
                   layout: 'horizontal',
                   align: 'center',
                   verticalAlign: 'bottom'
               }
           }
       }]
   }
}

const chart = Highcharts.chart('container', options)