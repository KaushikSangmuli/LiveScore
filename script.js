const scoreBox = document.querySelector(".scorebox")
const clock = document.querySelector("#clock")


setInterval(()=>{
    const date = new Date()
    let hours = String(date.getHours()-12).padStart(2,"0")
    let minutes = String(date.getMinutes()).padStart(2,"0")
    let seconds = String(date.getSeconds()).padStart(2,"0")
    clock.innerText = `${hours}    :     ${minutes}    :     ${seconds}`
} , 1000)


const updateSore = () => {
fetch("https://m.cricbuzz.com/api/home")
.then((response) =>{
    console.log(response)
    return response.json()
}).then((data)=>{
    console.log(data)
  return  data.matches[0].match

}).then((data)=>{
    console.log(data)
   scoreBox.innerHTML = `<h2>  ${data.matchInfo.seriesName} </h2>
   <h4 > ${data.matchInfo.shortStatus} </h4>
   <div class="title">
       <p class="team1"> ${data.matchInfo.team1.teamName} </p>
       <p> Vs </p>
       <p class="team2"> ${ data.matchInfo.team2.teamName}</p>
   </div>
   <div class="score-card">
       <div class="team">
           <p>  ${data.matchInfo.team1.teamName} </p>
           <p>  ${data?.matchScore?.team1Score?.inngs1?.runs ?? "__"}- ${data?.matchScore?.team1Score?.inngs1?.wickets ?? "_"}  (${data?.matchScore?.team1Score?.inngs1?.overs?? "_"}) </p>
       </div>
       <div class="team">
           <p> ${data.matchInfo.team2.teamName}</p>
           <p> ${data?.matchScore?.team2Score?.inngs1?.runs ?? "__"} - ${data?.matchScore?.team2Score?.inngs1?.wickets ?? "_"}  (${data?.matchScore?.team2Score?.inngs1?.overs?? "_"})</p>
       </div>
   </div>`   
})
}

updateSore();

setInterval(updateSore, 3000);
