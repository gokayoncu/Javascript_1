let name=prompt("Lütfen İsminizi Girin");
let nameQuery = document.querySelector("#myName");
nameQuery.innerHTML= `${name}!`;

function clockDate(){
    var element = document.getElementById("myClock");
    var now= new Date();
    var date = now.toLocaleDateString();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    var day = days[now.getDay() - 1];
    var result= date + "---" + day+ "---"  + hour + ":" + minute + ":" + second;
    element.innerHTML=result;  
    setTimeout(clockDate, 1000);    
}
clockDate();
