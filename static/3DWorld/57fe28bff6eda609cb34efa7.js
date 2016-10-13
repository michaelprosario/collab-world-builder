function _57fe28bff6eda609cb34efa7(){ 
 var bot = new Bot(); 
 var i, k;


for (i = 0; i <= 720; i += 2) {
  k = 30 * Math.sin(i / 180 * Math.PI);
  bot.positionX = k;
  bot.positionY = 1;
  bot.positionZ = i;
  bot.drawBox(1,1,1);
  bot.forward(1);
}


 }; 
 