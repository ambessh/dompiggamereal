/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores=[0,0];
var dice;
var roundScore=0;
var activeplayer=0;
var activeStatus=true;
document.querySelector('.btn-roll').addEventListener('click',function()

{   
    if(activeStatus){
    dice=Math.floor((Math.random()*6)+1);
    
    if(dice!=1)
    {   roundScore+=dice;
        document.querySelector('#current-'+activeplayer).textContent=roundScore;
        document.querySelector('.dice').style.display='block';
        document.querySelector('.dice').src='dice-'+dice+'.png';
    }
    else{
        roundScore=0;
        document.querySelector('#current-'+activeplayer).textContent=0;
        document.querySelector('.dice').style.display='block';
      }  document.querySelector('.dice').src='dice-'+dice+'.png';
    }
});
document.querySelector('.btn-hold').addEventListener('click',function()
{ if(activeStatus){
   scores[activeplayer]+=roundScore;
   document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
   
   if(scores[activeplayer]>=10)
   {

    document.querySelector('#name-'+activeplayer).textContent='WINNER';  
    activeStatus=false;
   }
   else{
   activeplayer===0?activeplayer=1:activeplayer=0;
   roundScore=0; 
   document.querySelector('#current-'+activeplayer).textContent=0;
   document.querySelector('#current-'+activeplayer).textContent=0;
   }
   }
});
document.querySelector('.btn-new').addEventListener('click',function()
{  scores=[0,0];
    roundScore=0; 
    activeplayer=0;
    document.querySelector('#current-0').textContent=0;
   document.querySelector('#current-1').textContent=0;
   document.querySelector('#score-0').textContent=0;
   document.querySelector('#score-1').textContent=0;
   document.querySelector('#name-0').textContent='Player 1'; 
   document.querySelector('#name-1').textContent='Player 2'; 
   activeStatus=true;


});
