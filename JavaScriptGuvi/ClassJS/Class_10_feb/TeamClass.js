class Team {
constructor(teamName) {
this.teamName=teamName;
};
static randomScore(){
return Math.floor(Math.random()*7);
};
callPlayer(){
  var i =0;
  for(i=0;i<10;i++){
  var P[i]=new Player();
  P[i].display();
}
};
}
var Team1=new Team("India"); Team.callPlayer();
