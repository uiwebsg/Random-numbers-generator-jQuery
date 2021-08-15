/*
 * Random numbers generator jquery - UIWEB.SG
 * http://www.uiweb.sg/
 * Email : support@uiweb.sg
 * Copyright UIWEB Service.
 * Licensed MIT
 * uiweb_randomNumber();  
*/
var interval = null;
function uiweb_randomNumber(){
$( "#random_numbers" ).html('');
var numbers = []; 
var size = $( "#total" ).val(); // Number of random numbers
var lowest = $( "#start" ).val(); // Number start 
var highest = $( "#end" ).val(); // Number end
for(var i = 0; i < size; i++) {
  var add = true;
  var randomNumber = Math.floor(Math.random() * highest) + 1;
for(var y = 0; y < highest; y++) {
  if(numbers[y] == randomNumber) {
    add = false;
  }
}
if(add) {
    numbers.push(randomNumber);
    $( "#random_numbers" ).append('<div class="luckynumber_roll">'+randomNumber+'</div>');
    } 
else {
   i--;
   }
}
var highestNumber = 0;
for(var m = 0; m < numbers.length; m++) {
 for(var n = m + 1; n < numbers.length; n++) {
   if(numbers[n] < numbers[m]) {
    highestNumber = numbers[m];
    numbers[m] = numbers[n];
    numbers[n] = highestNumber;
    
   }
  }
}

}
uiweb_randomNumber();
 $("input").change(function() {
   clearInterval(interval); 
  uiweb_randomNumber();
 });  
 function uiweb_randomNumber_interval(){
  interval=setInterval(uiweb_randomNumber, 1000);
  }
function clear_interval(){
  clearInterval(interval); 
}