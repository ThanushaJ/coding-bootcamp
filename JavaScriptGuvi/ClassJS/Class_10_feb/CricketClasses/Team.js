class Team {

constructor(teamName) {
this.teamName=teamName;
}// end of Team Constructor

static randomScore(){
return Math.floor(Math.random()*7);
}//end of randomScore()

createPlayer(){
  var i =0;
  var p=[];
  for(i=0;i<10;i++){
  p[i]=new Player();
  p[i].setPlayerDetails();
}
return p;
}//end of callPlayer()

teamScore() {
  var PlayerObjectArray =[];
  var playerCount =0;
  for(playerCount=0;playerCount<10;playerCount++){
  PlayerObjectArray[playerCount] =p[playerCount].getPlayerScoreDetails();
}
return PlayerObjectArray;
}//end of teamScore()

}//end of Team Class
