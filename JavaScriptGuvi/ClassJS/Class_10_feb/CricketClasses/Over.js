class Over {

constructor(wickets,score,balls =6) {
this.score = score;
this.wickets = wickets;
this.balls = balls;
}//end of constructor

getOverDetails(){
  this.overObject = {
    score:this.score,
    wickets:this.wickets,
    balls:this.balls;
  return this.overObject;
  }//end of overObject

}//end of getOverDetails()


}//end of Over Class
