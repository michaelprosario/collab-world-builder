function _580ed77bf6eda61cd4fcd4a3(){ 
 var bot = new Bot(); 
 var i;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


for (i = 1; i <= 49; i++) {
  bot.positionX = (mathRandomInt(1, 50));
  bot.positionY = (mathRandomInt(1, 50));
  bot.positionZ = (mathRandomInt(1, 50));
  bot.drawBox(5,5,5);
}


 }; 
 