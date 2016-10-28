function _57fd8bdcf6eda61ff1757df8(){ 
 var bot = new Bot(); 
 var h, i;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


bot.saveLocation('start');
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    bot.drawColor = 'red';
  } else {
    bot.drawColor = 'blue';
  }
  bot.moveToLocation('start');
  bot.moveLeft((i * 120));
  for (var count = 0; count < 20; count++) {
    h = mathRandomInt(10, 100);
    bot.drawBox(60,h,60);
    bot.forward(120);
  }
}


 }; 
 