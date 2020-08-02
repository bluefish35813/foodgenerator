function myFunction() {
  var foodOne;
  var foodTwo;
  var foodThree;
  var numAdd = 0;
  var foods = ["apple (1 large)","avoacado (1/5 medium)","banana (1 medium)","broccoli (1 medium  stalk)","cantaloupe (1/4 medium)","carrot (1 carrot)","celery (2 medium stalks)","cucumber (1/3 medium)","grapes (3/4 cup)","lettuce (1 1/2 cups)","onion (1 medium)","orange (1 medium)" ,"squash (1/2 medium)","tomato (1 medium)","watermelon (2 cups diced pieces)"];
  var calories = new Array(130,50,110,45,50,30,15,10,90,15,45,80,20,25,80);
  var sugars = new Array(25,0,19,2,11,5,2,1,20,1,9,14,2,3,20);
  var numInList = foods.length;
  var indexOne = Math.floor((Math.random() * numInList));
  var indexTwo = Math.floor((Math.random() * numInList));
  var indexThree = Math.floor((Math.random() * numInList));
  while(foods[indexOne] == foods[indexTwo] || foods[indexTwo] == foods[indexThree] || foods[indexOne] == foods[indexThree]) {
    var indexOne = Math.floor((Math.random() * numInList));
    var indexTwo = Math.floor((Math.random() * numInList));
    var indexThree = Math.floor((Math.random() * numInList));
  }
  foodOne = foods[indexOne];
  foodTwo = foods[indexTwo];
  foodThree = foods[indexThree];
  document.getElementById("demo").innerHTML = foodOne;
  document.getElementById("demoOne").innerHTML = foodTwo;
  document.getElementById("demoTwo").innerHTML = foodThree;
  var totalCal = calories[indexOne]+calories[indexTwo]+calories[indexThree]
  document.getElementById("demoThree").innerHTML = totalCal;
  var totalSugar = sugars[indexOne]+sugars[indexTwo]+sugars[indexThree]
  document.getElementById("demoFour").innerHTML = totalSugar + "g";
  
  
}
