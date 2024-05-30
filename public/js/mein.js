const day = document.getElementById("day");
const month = document.getElementById("todaydata");
const sbtn = document.getElementById("sbtn");
const cityname=document.getElementById('cityname');
const cityame=document.getElementById('cityame');
const temp_real_val=document.getElementById('temp_real_val');
const tempstatus=document.querySelector('#tempstatus');
const datahide=document.querySelector(".middlelayer");

const getinfo =async(event) =>{
    event.preventDefault();

    let cityVal=cityname.value;
    if(cityVal===""){
        cityame.innerText=`plz write the name before search` ;
        datahide.classList.add("dataHide"); 
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=6d2ad712bd2b21b5ab07f7d1c11f32ed`
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
        const arrData=[data];
        cityame.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_val.innerText=arrData[0].coord.lat;
        datahide.classList.remove("dataHide"); 
        }
        catch{
        cityame.innerText=`plz write the city name properly`  
        datahide.classList.add("dataHide"); 
        
        }
    }
}  
const getcurrentday =()=>{
    var weekday =new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thurday";
    weekday[5]="Friday";
    weekday[6]="Saturday";
    let currTime=new Date();;
    day.innerHTML=weekday[currTime.getDay()];
    month.innerHTML=`${currTime.getDate()} / ${currTime.getMonth()}/${currTime.getFullYear()}`;
}  
sbtn.addEventListener('click',getinfo);
getcurrentday();