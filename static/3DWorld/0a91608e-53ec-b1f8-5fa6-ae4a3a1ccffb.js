function main(){ 
 var bot = new Bot(); 
 var i;


for (i = 1; i <= 100; i++) {
  bot.drawBox(20,4,20);
  bot.moveUp(10);
  bot.turn(5);
  bot.forward(10);
}


 }; 
 