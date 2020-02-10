class Player {

setPlayerDetails(){
  var name = prompt("Name");
  this.name = name;
}//end of setPlayerDetails function

setPlayerScore(){
  var playerScore = prompt("score");
  var ballsPlayed = prompt("balls");
  this.playerScore = playerScore;
  this.ballsPlayed=ballsPlayed;
}//end of storePlayerScore

getPlayerScoreDetails(){
  var playerObject = {
    name:this.name,
    score:this.playerScore,
    balls:this.ballsPlayed
  }//end of Object
  return playerObject;
}// end of displayPlayerScoreDetails function

hitRuns(){
  var r = Team.randomScore();
  return r;
}

}//end of Player Class
