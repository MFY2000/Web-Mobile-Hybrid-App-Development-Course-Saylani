const highScoresList = document.getElementById("highScoresList");
const finalScore = document.getElementById("list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores.map(score => {return `<li class="high-score">${score.name} - ${score.score}</li>`;}).join("");

if(!highScores.length){
  console.log(!highScores) 
  finalScore.innerHTML += `<h2>No item in the list :)</h2>`;
}
