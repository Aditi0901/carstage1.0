class Game {
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
      player = new Player();
      //player.getCount();
      var pcref = await database.ref("playerCount").once("value")
      if(pcref.exists()){
        playerCount = pcref.val()
        player.getCount()
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);

    cars = [car1,car2,car3,car4]
  }
    play(){
      form.hide()
      textSize(30)
      text("GAME STARTED",120,100)
      // calling static function to get player data
      Player.getPlayerInfo()
      if(allPlayers !== undefined){
        var index = 0
        var x = 0
        var y = 0
        var displayPosition = 130
      for(var plr in allPlayers){
        index = index+1
        x = x+200
      var p = allPlayers[plr]
      y = displayHeight - p.distance

      cars[index-1].x = x
      cars[index-1].y = y
      if(index === player.index){
      cars [index - 1].shapeColor = "red"
      fill ("red")
      camera.position.x = displayWidth /2
      camera.position.y = cars [index-1].y
      }else{
        fill ("black")
      }
      displayPosition+= 20
      textSize (15)
      text(p.name+" : "+p.distance,120,displayPosition)
      }
    }
      if(keyIsDown(UP_ARROW)&& player.index !== null){
      player.distance+=50
      player.update()
      }
      drawSprites()
    }
    

}
