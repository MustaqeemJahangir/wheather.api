


let button=document.querySelector("#sum")
let input=document.querySelector("#username")
let div=document.querySelector("#container")

button.addEventListener("click",()=>{
    console.log(input.value)
    
fetch(`https://api.weatherapi.com/v1/current.json?key= 710816ec5cd7417f803120908241811&q=${input.value}&aqi=no`)
.then((res)=> res.json())
.then((res)=>{
    console.log(res)
    div.innerHTML=` <div class="card">
        <h3 class="text"> time: ${res.location.localtime}</h1>

        <div class="main">
            <h1>${res.current.feelslike_c}C
                ${res.current.feelslike_f}F
            </h1>
            <img src="${res.current.condition.icon}"  alt="" >
        </div>
        <h3 class=text-y>wind: ${res.current.wind_kph        } kph</h3>
        <h1>country: ${res.location.country} </h1>
        <h1>city : ${res.location.name}</h1>
        <h1>cloud: ${res.current.cloud}%</h1>
        
        
        

        
        

        </div>
    `


})
})
