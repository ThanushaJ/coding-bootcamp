class Player {

constructor(){

}
setPlayerDetails(){
//  var name = prompt("Name");
  this.name = "name";
}//end of setPlayerDetails function

setPlayerScore(playerScore,ballsPlayed){
  this.playerScore = playerScore;
  this.ballsPlayed=ballsPlayed;
}//end of storePlayerScore

getPlayerScoreDetails(){
  this.playerScoreDetails = {
    name:this.name,
    score:this.playerScore,
    balls:this.ballsPlayed
  }//end of Object
  return this.playerScoreDetails;
}// end of displayPlayerScoreDetails function

hitRuns(){
  this.runs = Team.randomScore();
  return this.runs;
}//end of hitRuns()



}//end of Player Class
