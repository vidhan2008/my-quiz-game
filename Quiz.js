class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide()
    //write code to change the background color here
background("pink")
    //write code to show a heading for showing the result of Quiz
    fill("black")
textSize(20)
text("Result of Quiz",340,50)
    //call getContestantInfo( ) here
Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
if(allContestants!==undefined){
var displayanswer=230
fill("blue")
textSize(30)
text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);

for(var plr in allContestants){
var correctAns = "2"

if(correctAns === allConstestants[plr].answer){
  fill("Green")
}else{
  fill("red")
}

}

display_Answers+=30; 
textSize(20);
 text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
}

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
