function main(){ 
 var bot = new Bot(); 
 var i;


for (i = 1; i <= 199; i++) {
  bot.drawBox(30,6,39);
  bot.forward(39);
  bot.moveUp(6);
  bot.turn(5);
}


 }; 
 