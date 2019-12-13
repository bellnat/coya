let start = function(){ 

  document.getElementById("start").innerHTML = "The year is 2066, <br><br> You are heading down the road you always take to get home from school one late evenings. It is filled with garbage as it always has been since before you can remember. 'The whole town is filled with random junk' you think to yourself. The city you live in have been infested with careless people who throw garbage away on the streets. **ALARM*** An alarm peirces your ears out of nowhere. You can hear cars crashing on streets over, followed by gunshots and screaming. What do you do? <br><br> 1.Run home for safety <br> 2. Go to the next street over to see what is happening <br> 3. Cry <br> 4. Go back to the school. <br> 5. Call your family <br> 6. Freak out ";
};

let choice1 = function(){

  let op1 = document.getElementById("op1");
  let op2 = document.getElementById("op2");
  let op5 = document.getElementById("op5");
  let op6 = document.getElementById("op6");
  let op7 = document.getElementById("op7");
  let op8 = document.getElementById("op8");
  let choice;

if(op1.checked){
  choice = "You chose to runhome for safety. You ran down the alley, took the second right and made it back yo your house. You scrambled for your key but forgot you left it inside. But luckily you always have a spare under your flower pot. You can hear someone walking up behind you. What do you do? <br><br> 1.Type 'Yes' to turn around slowly. <br> 2. Type 'No' to grab the flower pot and hit them.";
}else if(op2.checked){
  choice = "You chose to do option 2, You go to the next steet over and you see cars piled up and burning. You cant help but think it was fake but it was real. Many people around you are being assualted by pale people who look just like 'ZOMBIES!' you thought to yourself. One person that stuck out to you is a man in a mechanics uniform struggling to get away from a zombie. You try to run away but he gets you and you turn into a human happy meal."
}else if(op5.checked){
  choice = "You cry and wet your pants, you arent going to survive this apocolypse..."
}else if(op6.checked){
  choice = "You go back to the school and it is infested with zombies of all ages. You can even see your math teacher Ms.Bucannon. She was your favorite. You go inside and the door locks behind you and zombies come from evrywhere and eat you"
}else if(op7.checked){
  choice = "You pick up the phone and call your family but noone answers, it sends you to a dial tone. Unfortunatley a zombie hobo comes behind you and eats your face off."
}else if(op8.checked){
  choice ="You freak out loudly and get bombarded by a horde of zombies."
}
document.getElementById("start2").innerHTML = choice;
};

let choice2 = function(){
  
  let op3 = document.getElementById("op3");
  
if(op3 = "Yes"){
  document.getElementById("start3").innerHTML = "You chose to turn around slowly, unfortunaley it was a zombie and it ate you.";
}else if(op3 = "No"){
  document.getElementById("start3").innerHTML = "You chose to do grab the flower pot and hit them in the head. It turned out to be a zombie and you got psat them. You managed to into the house and evade the vitous zombie. You eventually see news on the zombie outbreak in your city. You bunker down in your house and eventually the army arives and saves you. CONGRATS YOU SURVIVED!";
} 
};