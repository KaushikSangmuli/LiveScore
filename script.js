const h2 = document.querySelector("h2")
const h4 = document.querySelector("h4")
const team1 = document.querySelectorAll(".team1")
const team2 = document.querySelectorAll(".team2")
const teamOneScore = document.querySelector("#team-1-score")
const teamTwoScore = document.querySelector("#team-2-score")

fetch("https://m.cricbuzz.com/api/home")
.then((response)=>{
    console.log(response)
    return a= response
}).then((data)=>{
    return data.json()
}).then((data2)=>{
    console.log(data2)
    // console.log(data2.matches[0].match.matchInfo.seriesName)
    h2.innerText = data2.matches[0].match.matchInfo.seriesName
    h4.innerText = data2.matches[0].match.matchInfo.shortStatus
    team1.forEach((names)=>{
        names.innerText = data2.matches[0].match.matchInfo.team1.teamSName
    })
    team2.forEach((names)=>{
        names.innerText = data2.matches[0].match.matchInfo.team2.teamSName
    })
    teamOneScore.innerText = `${data2.matches[0].match.matchScore.team1Score.inngs1.runs} - ${data2.matches[0].match.matchScore.team1Score.inngs1.wickets} (${data2.matches[0].match.matchScore.team1Score.inngs1.overs})`
    teamTwoScore.innerText = `${data2.matches[0].match.matchScore.team2Score.inngs1.runs} - ${data2.matches[0].match.matchScore.team2Score.inngs1.wickets} (${data2.matches[0].match.matchScore.team2Score.inngs1.overs})`
})
