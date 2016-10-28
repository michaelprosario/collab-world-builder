function _580ed439f6eda61cd4fcd468(){ 
 var bot = new Bot(); 
 var i;


for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    bot.drawColor = 'red';
  } else {
    bot.drawColor = 'blue';
  }
  bot.drawSphere(10);
  bot.moveUp(20);
}


 }; 
 