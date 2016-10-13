function main(){ 
 var bot = new Bot(); 
 for (var count = 0; count < 4; count++) {
  bot.drawBox(20,1,1);
  bot.forward(20);
  bot.turn(90);
}


 }; 
 