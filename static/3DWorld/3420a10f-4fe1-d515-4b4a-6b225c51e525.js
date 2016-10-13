function main(){ 
 var bot = new Bot(); 
 var x, y, z;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


for (var count = 0; count < 200; count++) {
  x = mathRandomInt(1, 100);
  y = mathRandomInt(1, 100);
  z = mathRandomInt(1, 100);
  bot.positionX = x;
  bot.positionY = y;
  bot.positionZ = z;
  bot.drawBox(10,1,10);
}


 }; 
 