function _580ed670f6eda61cd4fcd489(){ 
 var bot = new Bot(); 
 bot.saveLocation('start');
bot.drawColor = 'red';
for (var count = 0; count < 10; count++) {
  bot.drawBox(1,1,1);
  bot.forward(1);
  bot.moveUp(1);
}
bot.drawColor = 'blue';
bot.moveToLocation('start');
for (var count2 = 0; count2 < 10; count2++) {
  bot.drawBox(1,1,1);
  bot.forward(-1);
  bot.moveUp(1);
}


 }; 
 