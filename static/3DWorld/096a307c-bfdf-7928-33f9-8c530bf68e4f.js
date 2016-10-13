function main(){ 
 var bot = new Bot(); 
 var i;


bot.drawCone(10,4);
for (i = 1; i <= 200; i++) {
  bot.drawBox(30,6,100);
  bot.forward(50);
  bot.turn(90);
  bot.forward(50);
  bot.moveUp(20);
}


 }; 
 