let name=prompt("Lütfen İsminizi Girin");
let nameQuery = document.querySelector("#myName");
nameQuery.innerHTML= `${name}!`;

function clockDate(){
    let element = document.getElementById("myClock");
    let now= new Date();
    let date = now.toLocaleDateString();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    let day = days[now.getDay() - 1];
    let result= date + "---" + day+ "---"  + hour + ":" + minute + ":" + second;
    element.innerHTML=result;  
    setTimeout(clockDate, 1000);    
}
clockDate();
