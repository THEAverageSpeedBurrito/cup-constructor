'use strict';

function Cup(color, fillCapacity) {
  this.color = color;
  this.fillCapacity = fillCapacity;
  this.amountLeft = 0;
  this.broken = false;
}

Cup.prototype.fillCup = function() {
  if(this.broken){
    console.log('Your cup is broken :(');
    return;
  }
  this.amountLeft = this.fillCapacity;
  console.log('Your cup has been filled');
};

Cup.prototype.emptyCup = function() {
  if(this.broken){
    console.log('Your cup is broken :(');
    return;
  }
  this.amountLeft = this.fillCapacity;
};

Cup.prototype.drink = function(sipSize) {
  if(this.broken){
    console.log('Your cup is broken :(');
    return;
  }

  if(sipSize <= this.amountLeft && sipSize > 0) {
    this.amountLeft -= sipSize;
    console.log(`Yummm! There are ${this.amountLeft}mL left in your cup.`);
  }else{
    console.log('You cant sip that much, it just wouldnt work!');
  }
};

Cup.prototype.drop = function() {
  console.log('Oh no! You dropped your cup and it shattered.');
  this.broken = true;
  this.amountLeft = 0;
};

Cup.prototype.glueCup = function() {
  console.log('Your cup has been fixed! Drink up buddy.');
  this.broken = false;
};

var redCup = new Cup('Red', 20, true);
redCup.fillCup();

redCup.drink(21);

redCup.drink(4);
redCup.drink(5);

redCup.drop();
redCup.drink(2);
redCup.fillCup();

redCup.glueCup();
redCup.fillCup();
redCup.drink(12);
