class Team {
//this.p=[];
constructor(teamName) {
this.teamName=teamName;
this.wickets = 0
this.ballsCount = 0;
this.totalScore = 0;
this.playerObject = [];
this.currentPlayerScore = [0,0];
this.currentPlayerBalls = [0,0];
}// end of Team Constructor

static randomScore(){
return Math.floor(Math.random()*7);
}//end of randomScore()

createPlayer(){
  this.count=0;
  for(this.count=0;this.count<2;this.count++){
  this.p[count]=new Player();
  this.p[count].setPlayerDetails();
}
return this.p;//array of player objects
}//end of callPlayer()

playGame(){ //passing player object as argument

if (this.ballsCount != 5 && this.wickets != 2) {

  this.currentBallScore = Math.floor(Math.random() * 7);
  if (this.currentBallScore == 0) {
    //storing player score and balls he played.
    this.p[wicket].setPlayerScore(this.currentPlayerScore[wicket],this.currentPlayerBalls[wicket]);
    this.wickets++;
    this.ballsCount++;
  }
  else {
    this.totalScore += this.currentBallScore;
    this.ballsCount++;
    this.currentPlayerScore[wicket]+=currentBallScore;
    this.currentPlayerBalls[wicket]++;
  }
}

else {
  this.playerObjectCount = 0;
    document.getElementById("scoreButton").disabled = true;
    this.scoreBoard ={
      teamName:this.teamName,
      score:this.totalScore,
      balls:this.ballsCount,
      players:[]
    }
    for(c=0,c<2;c++){
      // p[playerObjectCount].getPlayerScoreDetails();
      this.scoreBoard.players.push(p[c].getPlayerScoreDetails());
    }
    setStorage(this.scoreBoard);
}

} //end of playGame()

setStorage(scoreBoard) {//method to store data in local storage
  localStorage.setItem("TeamSummary", scoreBoard);
}//end of setStorage()


}//end of Team Class
