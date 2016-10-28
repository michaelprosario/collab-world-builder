function _57fe2c0cf6eda609cb34efde(){ 
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


for (i = 1; i <= 100; i++) {
  bot.drawBox(10,1,10);
  bot.forward(5);
  bot.moveUp(1);
  bot.turn((mathRandomInt(0, 45)));
}


 }; 
 