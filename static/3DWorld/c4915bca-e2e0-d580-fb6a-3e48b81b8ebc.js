function main(){ 
 var bot = new Bot(); 
 for (var count = 0; count < 10; count++) {
  bot.drawBox(1,1,20);
  bot.forward(20);
  bot.turn(45);
}


 }; 
 