var name1="PLAYER ONE"; //player1's name 
var name2="PLAYER TWO"; //player2's name 
var name3="PLAYER THREE"; //player3's name 
var chip1a=0;  //chips that plyaer1 buy
var chip2a=0;  //chips that plyaer2 buy
var chip3a=0;  //chips that plyaer3 buy
var chip1=0;  //player1's chips
var chip2=0;  //player2's chips
var chip3=0;  //player3's chips
var Np=""; //number of player
var pE=1; //some page change
var bet=100;//bet of 2 games
var p1="";//name of player1 to choose big or small
var p2="";//name of player2 to choose big or small
var p3="";//name of player3 to choose big or small
// all
var Dice=1;
var bpt=0; //total namber of play times
var lbt1=0;//number of player1's consecutive win
var lbt2=0;//number of player2's consecutive win
var lbt3=0;//number of player3's consecutive win
var mlbt1=0;//the most number of player1's consecutive win
var mlbt2=0;//the most number of player2's consecutive win
var mlbt3=0;//the most number of player3's consecutive win
var bt1=0;//number of player1's win
var bt2=0;//number of player2's win
var bt3=0;//number of player3's win
//bos  big or small
var name=0; //which player will play the game
var cbet;   //choose a horse 's bet
var cs=0;   //which box that player choose
var cpt=0;  //namber of play times
var lct=0;  //number of player consecutive win
var mlct=0; //the most number of player's consecutive win
var ct=0;   //number of player's win
var cpt1=0;
var cpt2=0;
var cpt3=0;
var lct1=0;
var lct2=0;
var lct3=0;
var mlct1=0;
var mlct2=0;
var mlct3=0;
var ct1=0;
var ct2=0;
var ct3=0;
//CH

var cards=52; //cards number
var zhuangtai=0; //Status, for chick the game is or isn't star
var finp=0; //finish of player(no more cards)
var finc=0;//finish of computer(no more cards)
var not=0;//number of times (for player)
var foo=new Array(); //make sure the card is difference every times 
var num=new Array(); // number of card (for player)
var color=new Array();//color of card(for player)
var show=new Array();//to show used which card he took
var cnot=0;//number of times (for computer)
var cnum=new Array();// number of card (for computer)
var ccolor=new Array();//color of card(for computer)
var cshow=new Array();//to show used which card computer took
var playershow="";//show that
var sop=0; //sum of the cards that player got
var soc=0;//sum of the cards that computer got
var comshow="";//show cards that computer got (record)
var comshow1="";//show cards that computer got(show)
var comsum="Sum: Non";//show sum of computer
var playsum="Sum: "+sop;//show sum of player
var AJp=0;//number of player got A (A equal 1 or 11)
var AJc=0;//number of computer got A (A equal 1 or 11)

var tpt1=0;
var tpt2=0;
var tpt3=0;
var ltt1=0;
var ltt2=0;
var ltt3=0;
var mltt1=0;
var mltt2=0;
var mltt3=0;
var tt1=0;
var tt2=0;
var tt3=0;

function ia(){ //the for loop that make srue no difference cards

var i;
for(i=0;i<53;i++){
foo[i]=false;
}
cards=52;
}

function A(){//first page when you F5 that -rule,stat game

 name1="PLAYER ONE";
 name2="PLAYER TWO";
 name3="PLAYER THREE";
 chip1a=0;
 chip2a=0;
 chip3a=0;
 chip1=0;
 chip2=0;
 chip3=0;
 Np="";
 pE=1;
 bet=100;
 p1="";
 p2="";
 p3="";
 //all
 Dice=1;
 bpt=0;
 lbt1=0;
 lbt2=0;
 lbt3=0;
 mlbt1=0;
 mlbt2=0;
 mlbt3=0;
 bt1=0;
 bt2=0;
 bt3=0;
 //bos
 name=0;
cbet;   //choose a horse 's bet
cs=0;
cpt=0;
 lct=0;
 mlct=0;
 ct=0;
 cpt1=0;
 cpt2=0;
 cpt3=0;
 lct1=0;
 lct2=0;
 lct3=0;
 mlct1=0;
 mlct2=0;
 mlct3=0;
 ct1=0;
 ct2=0;
 ct3=0;
//CH
 cards=52;
 zhuangtai=0;
 finp=0;
 finc=0;
 not=0;
 foo=new Array();
 num=new Array();
 color=new Array();
 show=new Array();
 cnot=0;
 cnum=new Array();
 ccolor=new Array();
 cshow=new Array();
 playershow="";
 sop=0;
 soc=0;
 comshow="";
 comshow1="";
 comsum="Sum: Non";
 playsum="Sum: "+sop;
 AJp=0;
 AJc=0;
 
tpt1=0;
 tpt2=0;
 tpt3=0;
 ltt1=0;
ltt2=0;
ltt3=0;
 mltt1=0;
 mltt2=0;
 mltt3=0;
 tt1=0;
 tt2=0;
 tt3=0;
 
Nt();

document.getElementById("maa").innerHTML="Rules of the game";
document.getElementById("mab").innerHTML="Star the Game";

document.getElementById("maa").onclick=B;
document.getElementById("mab").onclick=C;

document.getElementById("maa").style.borderBottom="thick solid blue";
document.getElementById("maa").style.fontSize="35px";
document.getElementById("maa").style.top="75px";

document.getElementById("mab").style.borderBottom="thick solid blue";
document.getElementById("mab").style.fontSize="35px";
document.getElementById("mab").style.top="250px";


}
 
function A1(){//try catch to chick used go back home page
var txt="";
try{
ailikehorselert("I really like horse! ")
}catch(err){
txt="If you go to home page. you will lost all infomation . do you still want do that?"
if(confirm(txt)){
A();
}
}


}
 
function B(){//Rule of game
Nt();
document.getElementById("maa").innerHTML="Back";
if(pE==1){
document.getElementById("maa").onclick=A;
}else{
document.getElementById("maa").onclick=F;
}
document.getElementById("rule1").innerHTML="This game can choose one player two players or three players, for choose a horse and 21print just one player can play. every game you need pay bet from your chip";
document.getElementById("rule2").innerHTML="Big or Small "
document.getElementById("rule3").innerHTML="1, choose bet you want  2,choose big or small  3, choose number of dice  4, ROLL "
document.getElementById("rule4").innerHTML="21Print "
document.getElementById("rule5").innerHTML="you need choose player first if it's more than 1 player.You and computer take card every time, if sum of cards equal 21,win! if the Sum of cards great than 21,lost! if take 5 cards and not great than 21,win!  if take 4 cards and have same color,win! if not,who is big who win.anyway,for win computer first,for lost, you frist. ex: if your sum is 21 and computer sum is 21 too, computer win. if your sum is great than 21 and sum of computer is great than 21 too, you lost. 'A' can equal 1 or 11.  if you dont need cards , onclick 'no',they will show 'no more', if you and computer both 'no more', onclick 'show'  and then,you know who win~"
document.getElementById("rule6").innerHTML="Choose a Horse "
document.getElementById("rule7").innerHTML="1,choose player if it's more than 1 player   2,you need pay for 1000chips   3,choose box form three box  4,TMS will tell you which box was no horse and ask you do you want change your answer. 5,if you win, you get a horse,and TMS will buy that, you will got lots of chips. if you lost, you still can get a dog,Mr.wear will buy that, you can got some chip too!"

document.getElementById("maa").style.fontSize="15px";
document.getElementById("maa").style.top="450px";
document.getElementById("maa").style.left="550px";

document.getElementById("rule1").style.fontSize="15px";
document.getElementById("rule1").style.top="0px";
document.getElementById("rule1").style.left="5px";

document.getElementById("rule2").style.fontSize="25px";
document.getElementById("rule2").style.top="65px";
document.getElementById("rule2").style.left="5px";
document.getElementById("rule2").style.color="red";

document.getElementById("rule3").style.fontSize="15px";
document.getElementById("rule3").style.top="100px";
document.getElementById("rule3").style.left="5px";

document.getElementById("rule4").style.fontSize="25px";
document.getElementById("rule4").style.top="130px";
document.getElementById("rule4").style.left="5px";
document.getElementById("rule4").style.color="red";

document.getElementById("rule5").style.fontSize="15px";
document.getElementById("rule5").style.top="170px";
document.getElementById("rule5").style.left="5px";

document.getElementById("rule6").style.fontSize="25px";
document.getElementById("rule6").style.top="300px";
document.getElementById("rule6").style.left="5px";
document.getElementById("rule6").style.color="red";

document.getElementById("rule7").style.fontSize="15px";
document.getElementById("rule7").style.top="350px";
document.getElementById("rule7").style.left="5px";

} 

function C(){//choose how many player
 name1="PLAYER ONE";
 name2="PLAYER TWO";
 name3="PLAYER THREE";
 chip1a=0;
 chip2a=0;
 chip3a=0;
 chip1=0;
 chip2=0;
 chip3=0;
 pE=1;
Nt();


document.getElementById("maa").innerHTML="One player";
document.getElementById("mab").innerHTML="Two Players";
document.getElementById("mac").innerHTML="Three players";
document.getElementById("mad").innerHTML="Back";


document.getElementById("maa").style.fontSize="20px";
document.getElementById("maa").style.top="50px";
document.getElementById("maa").style.left="0px";
document.getElementById("mab").style.fontSize="20px";
document.getElementById("mab").style.top="100px";
document.getElementById("mab").style.left="0px";
document.getElementById("mac").style.fontSize="20px";
document.getElementById("mac").style.top="150px";
document.getElementById("mac").style.left="0px";
document.getElementById("mad").style.fontSize="20px";
document.getElementById("mad").style.top="200px";
document.getElementById("mad").style.left="0px";

document.getElementById("mac").style.borderBottom="thick solid blue";
document.getElementById("mad").style.borderBottom="thick solid blue";



document.getElementById("maa").onclick=D1
document.getElementById("mab").onclick=D2;
document.getElementById("mac").onclick=D3;
document.getElementById("mad").onclick=A;
}

function D1(){//Np=1
Np=1;
D();
}
function D2(){//Np=2
Np=2;
D();
}
function D3(){//Np=3
Np=3;
D();
}

function D(){//name of players and buy chip (depen pE)

Nt();

document.getElementById("paa").innerHTML=name1;
if(pE==1){
document.getElementById("pab").innerHTML="player1's chip~ $$";
document.getElementById("maa").innerHTML="Please enter your name  !(Player1)";
}else{

document.getElementById("pab").innerHTML=chip1;
document.getElementById("maa").innerHTML=name1+" buy your Chip";
}
document.getElementById("mad").innerHTML="Back";
if(pE==1){
document.getElementById("mae").innerHTML="Go buy Chip";
}else{
document.getElementById("mae").innerHTML="Go to play";
}

document.getElementById("paa").style.fontSize="25px";
document.getElementById("paa").style.right="0px";
document.getElementById("paa").style.top="10px";
document.getElementById("paa").style.color="blue";
document.getElementById("paa").style.borderTop="thick solid Yellow";
document.getElementById("pab").style.fontSize="15px";
document.getElementById("pab").style.right="0px";
document.getElementById("pab").style.top="50px";
document.getElementById("pab").style.borderBottom="thick solid Yellow";

document.getElementById("mad").style.top="450px";
document.getElementById("mad").style.left="500px";

document.getElementById("maa").style.fontSize="20px";
document.getElementById("maa").style.top="100px";

document.getElementById("maa").style.borderBottom="thick solid blue";

document.getElementById("mae").style.fontSize="50px";
document.getElementById("mae").style.top="400px";
document.getElementById("mae").style.left="100px";

if(pE==1){
document.getElementById("mae").onclick=E;

}else{
document.getElementById("mae").onclick=F;
}


if(Np>1){
document.getElementById("pba").innerHTML=name2;
if(pE==1){
document.getElementById("pbb").innerHTML="player2's chip~ $$";
document.getElementById("mab").innerHTML="Please enter your name (player 2)";
}else{
document.getElementById("pbb").innerHTML=chip2;
document.getElementById("mab").innerHTML=name2+" buy your Chip";
}
document.getElementById("pba").style.fontSize="25px";
document.getElementById("pba").style.right="0px";
document.getElementById("pba").style.top="100px";
document.getElementById("pba").style.color="blue";
document.getElementById("pba").style.borderTop="thick solid Yellow";
document.getElementById("pbb").style.fontSize="15px";
document.getElementById("pbb").style.right="0px";
document.getElementById("pbb").style.top="140px";
document.getElementById("pbb").style.borderBottom="thick solid Yellow";

document.getElementById("mab").style.fontSize="20px";
document.getElementById("mab").style.top="150px";

if(Np==3){
document.getElementById("pca").innerHTML=name3;
if(pE==1){
document.getElementById("pcb").innerHTML="player2's chip~ $$";
document.getElementById("mac").innerHTML="Please enter your name (player 3)";
}else{
document.getElementById("pcb").innerHTML=chip3;
document.getElementById("mac").innerHTML=name3+ " buy your Chip";
mad
}  
document.getElementById("pca").style.fontSize="25px";
document.getElementById("pca").style.right="0px";
document.getElementById("pca").style.top="190px";
document.getElementById("pca").style.color="blue";
document.getElementById("pca").style.borderTop="thick solid Yellow";
document.getElementById("pcb").style.fontSize="15px";
document.getElementById("pcb").style.right="0px";
document.getElementById("pcb").style.top="230px";
document.getElementById("pcb").style.borderBottom="thick solid Yellow";

document.getElementById("mac").style.fontSize="20px";
document.getElementById("mac").style.top="200px";
if(pE==1){
document.getElementById("mac").onclick=E3;
}else{
document.getElementById("mac").onclick=E6;
}

}


if(pE==1){
document.getElementById("mab").onclick=E2;
}else{
document.getElementById("mab").onclick=E5;

}


}
if(pE==3){
document.getElementById("mad").onclick=F;
}else{
document.getElementById("mad").onclick=C;
}

if(pE==1){

document.getElementById("maa").onclick=E1;

}else{
document.getElementById("maa").onclick=E4;


}


}

function E1(){//for D

name1=prompt("Please enter your name","Player One");
D();
}
function E2(){//for D
name2=prompt("Please enter your name","Player Two");

D();
}
function E3(){//for D
name3=prompt("Please enter your name","Player Three");

D();
}
function E() {//for D

pE=2;
D();

}
function E4(){//for D
var sw=0;
while(sw==0){
chip1a=prompt(" Please enter how much chip do you want buy~","100");
if(parseInt(chip1a)=="NaN"){
alert("Must be a number");
sw=0;
continue;
}else if(parseInt(chip1a)%100!=0){
alert("Must can Divisible by 100!");

sw=0;
continue;
}
sw=1;
break;
}
chip1=chip1+parseInt(chip1a);
D();
}
function E5(){//for D
var sw=0;
while(sw==0){
chip2a=prompt(" Please enter how much chip do you want buy~","100");
if(parseInt(chip2a)=="NaN"){
alert("Must be a number");
sw=0;
continue;
}
if(parseInt(chip2a)%100!=0){
alert("Must can Divisible by 100!")
sw=0;
continue;
}
sw=1;
break;
}
chip2=chip2+parseInt(chip2a);
D();
}//e5
function E6(){//for D
var sw=0;
while(sw==0){
chip3a=prompt(" Please enter how much chip do you want buy~","100");
if(parseInt(chip3a)=="NaN"){
alert("Must be a number");
sw=0;
continue;
}
if(parseInt(chip3a)%100!=0){
alert("Must can Divisible by 100!")
sw=0;
continue;
}
sw=1;
break;
}
chip3=chip3+parseInt(chip3a);
D();
}

function F(){//main page,choose game   -rule,big or small,21print,choose a horse,buy chip
playagain();
zhuangtai=0;
var p1="";
var p2="";
var p3="";
var game=0;
pE=3;
Nt();

document.getElementById("paa").innerHTML=name1;
document.getElementById("pab").innerHTML=chip1

document.getElementById("paa").style.fontSize="25px";
document.getElementById("paa").style.right="0px";
document.getElementById("paa").style.top="10px";
document.getElementById("paa").style.color="blue";
document.getElementById("paa").style.borderTop="thick solid Yellow";
document.getElementById("pab").style.fontSize="15px";
document.getElementById("pab").style.right="0px";
document.getElementById("pab").style.top="50px";
document.getElementById("pab").style.borderBottom="thick solid Yellow";

if(Np>1){
document.getElementById("pba").innerHTML=name2;
document.getElementById("pbb").innerHTML=chip2;

document.getElementById("pba").style.fontSize="25px";
document.getElementById("pba").style.right="0px";
document.getElementById("pba").style.top="100px";
document.getElementById("pba").style.color="blue";
document.getElementById("pba").style.borderTop="thick solid Yellow";
document.getElementById("pbb").style.fontSize="15px";
document.getElementById("pbb").style.right="0px";
document.getElementById("pbb").style.top="140px";
document.getElementById("pbb").style.borderBottom="thick solid Yellow";

if(Np==3){
document.getElementById("pca").innerHTML=name3;
document.getElementById("pcb").innerHTML=chip3;

document.getElementById("pca").style.fontSize="25px";
document.getElementById("pca").style.right="0px";
document.getElementById("pca").style.top="190px";
document.getElementById("pca").style.color="blue";
document.getElementById("pca").style.borderTop="thick solid Yellow";
document.getElementById("pcb").style.fontSize="15px";
document.getElementById("pcb").style.right="0px";
document.getElementById("pcb").style.top="230px";
document.getElementById("pcb").style.borderBottom="thick solid Yellow";
}
}
// all used that 

document.getElementById("maa").innerHTML="RULE";
document.getElementById("mab").innerHTML="BIG oR SmalL";
document.getElementById("mac").innerHTML="21 print";
document.getElementById("mad").innerHTML="Which is horse";
document.getElementById("mae").innerHTML="Buy Chip";
document.getElementById("maf").innerHTML="Back to Home page ";

document.getElementById("maa").style.fontSize="20px";
document.getElementById("maa").style.top="100px";
document.getElementById("maa").style.borderBottom="thick solid blue";

document.getElementById("mab").style.fontSize="20px";
document.getElementById("mab").style.top="150px";
document.getElementById("mab").style.borderBottom="thick solid blue";

document.getElementById("mac").style.fontSize="20px";
document.getElementById("mac").style.top="200px";
document.getElementById("mac").style.borderBottom="thick solid blue";

document.getElementById("mad").style.fontSize="20px";
document.getElementById("mad").style.top="250px";
document.getElementById("mad").style.borderBottom="thick solid blue";

document.getElementById("mae").style.fontSize="20px";
document.getElementById("mae").style.top="300px";
document.getElementById("mae").style.borderBottom="thick solid blue";


document.getElementById("maf").style.top="450px";
document.getElementById("maf").style.left="400px";


document.getElementById("maa").onclick=B;
document.getElementById("mab").onclick=BoS;
document.getElementById("mac").onclick=TO;
document.getElementById("mad").onclick=CH;
document.getElementById("mae").onclick=D;
document.getElementById("maf").onclick=A1;


}

function BoS(){//Big of Small game!
game=1;
Nt();


document.getElementById("paa").innerHTML=name1;
document.getElementById("pab").innerHTML=chip1

document.getElementById("paa").style.fontSize="25px";
document.getElementById("paa").style.right="0px";
document.getElementById("paa").style.top="10px";
document.getElementById("paa").style.color="blue";
document.getElementById("paa").style.borderTop="thick solid Yellow";
document.getElementById("pab").style.fontSize="15px";
document.getElementById("pab").style.right="0px";
document.getElementById("pab").style.top="50px";
document.getElementById("pab").style.borderBottom="thick solid Yellow";

if(Np>1){  
document.getElementById("pba").innerHTML=name2;
document.getElementById("pbb").innerHTML=chip2;

document.getElementById("pba").style.fontSize="25px";
document.getElementById("pba").style.right="0px";
document.getElementById("pba").style.top="100px";
document.getElementById("pba").style.color="blue";
document.getElementById("pba").style.borderTop="thick solid Yellow";
document.getElementById("pbb").style.fontSize="15px";
document.getElementById("pbb").style.right="0px";
document.getElementById("pbb").style.top="140px";
document.getElementById("pbb").style.borderBottom="thick solid Yellow";

if(Np==3){

document.getElementById("pca").innerHTML=name3;
document.getElementById("pcb").innerHTML=chip3;

document.getElementById("pca").style.fontSize="25px";
document.getElementById("pca").style.right="0px";
document.getElementById("pca").style.top="190px";
document.getElementById("pca").style.color="blue";
document.getElementById("pca").style.borderTop="thick solid Yellow";
document.getElementById("pcb").style.fontSize="15px";
document.getElementById("pcb").style.right="0px";
document.getElementById("pcb").style.top="230px";
document.getElementById("pcb").style.borderBottom="thick solid Yellow";
}
}

//all used it



//begin
document.getElementById("pda").innerHTML=name1;
document.getElementById("pdb").innerHTML="<button type='button'>big</button>";
document.getElementById("pdc").innerHTML="<button type='button'>small</button>";
document.getElementById("p1").innerHTML=p1;

document.getElementById("pda").style.fontSize="20px";
document.getElementById("pda").style.left="0px";
document.getElementById("pda").style.top="150px";
document.getElementById("pda").style.color="red";

document.getElementById("pdb").style.fontSize="15px";
document.getElementById("pdb").style.left="150px";
document.getElementById("pdb").style.top="150px";
document.getElementById("pdb").style.color="red";

document.getElementById("pdc").style.fontSize="15px";
document.getElementById("pdc").style.left="200px";
document.getElementById("pdc").style.top="150px";
document.getElementById("pdc").style.color="red";

document.getElementById("p1").style.fontSize="20px";
document.getElementById("p1").style.left="250px";
document.getElementById("p1").style.top="150px";
document.getElementById("p1").style.color="red";

document.getElementById("pdb").onclick=P1b;
document.getElementById("pdc").onclick=P1s;
//player1 choos big or small
if(Np>1){
document.getElementById("pea").innerHTML=name2;
document.getElementById("peb").innerHTML="<button type='button'>big</button>";
document.getElementById("pec").innerHTML="<button type='button'>small</button>";
document.getElementById("p2").innerHTML=p2;

document.getElementById("pea").style.fontSize="20px";
document.getElementById("pea").style.left="0px";
document.getElementById("pea").style.top="200px";
document.getElementById("pea").style.color="red";

document.getElementById("peb").style.fontSize="15px";
document.getElementById("peb").style.left="150px";
document.getElementById("peb").style.top="200px";
document.getElementById("peb").style.color="red";

document.getElementById("pec").style.fontSize="15px";
document.getElementById("pec").style.left="200px";
document.getElementById("pec").style.top="200px";
document.getElementById("pec").style.color="red";

document.getElementById("p2").style.fontSize="20px";
document.getElementById("p2").style.left="250px";
document.getElementById("p2").style.top="200px";
document.getElementById("p2").style.color="red";

document.getElementById("peb").onclick=P2b;
document.getElementById("pec").onclick=P2s;
//player 2 choose big or small
if(Np==3){
document.getElementById("pfa").innerHTML=name3;
document.getElementById("pfb").innerHTML="<button type='button'>big</button>";
document.getElementById("pfc").innerHTML="<button type='button'>small</button>";
document.getElementById("p3").innerHTML=p3;

document.getElementById("pfa").style.fontSize="20px";
document.getElementById("pfa").style.left="0px";
document.getElementById("pfa").style.top="250px";
document.getElementById("pfa").style.color="red";

document.getElementById("pfb").style.fontSize="15px";
document.getElementById("pfb").style.left="150px";
document.getElementById("pfb").style.top="250px";
document.getElementById("pfb").style.color="red";

document.getElementById("pfc").style.fontSize="15px";
document.getElementById("pfc").style.left="200px";
document.getElementById("pfc").style.top="250px";
document.getElementById("pfc").style.color="red";

document.getElementById("p3").style.fontSize="20px";
document.getElementById("p3").style.left="250px";
document.getElementById("p3").style.top="250px";
document.getElementById("p3").style.color="red";

document.getElementById("pfb").onclick=P3b;
document.getElementById("pfc").onclick=P3s;
//player3 choose big or small
}//if

}

if(bet>=100000){
alert("BET must less than 100,000")
bet=99999;
}
document.getElementById("maa").innerHTML="/ROLL~";
document.getElementById("mab").innerHTML="Record";
document.getElementById("maf").innerHTML="Back";
document.getElementById("pia").innerHTML=bet;
document.getElementById("pib").innerHTML="BET: ";
document.getElementById("pic").innerHTML=": "+Dice;
document.getElementById("aaa").innerHTML="Times Two";
document.getElementById("aab").innerHTML="Cleared";



document.getElementById("maa").style.fontSize="70px";
document.getElementById("maa").style.left="260px";
document.getElementById("maa").style.top="350px";
document.getElementById("maa").style.color="red";

document.getElementById("mab").style.fontSize="15px";
document.getElementById("mab").style.left="50px";
document.getElementById("mab").style.top="400px";
document.getElementById("mab").style.color="red";

document.getElementById("maf").style.top="450px";
document.getElementById("maf").style.left="530px";

document.getElementById("aaa").style.fontSize="20px";
document.getElementById("aaa").style.left="400px";
document.getElementById("aaa").style.top="50px";
document.getElementById("aaa").style.color="blue";

document.getElementById("aab").style.fontSize="15px";
document.getElementById("aab").style.left="400px";
document.getElementById("aab").style.top="70px";
document.getElementById("aab").style.color="blue";

document.getElementById("iaa").style.height="60px";
document.getElementById("iaa").style.width="60px";
document.getElementById("iaa").style.backgroundImage="url('images/left.jpg')";

document.getElementById("iab").style.height="60px";
document.getElementById("iab").style.width="60px";
document.getElementById("iab").style.backgroundImage="url('images/right.jpg')";

document.getElementById("iaa").style.left="90px";
document.getElementById("iaa").style.top="50px";

document.getElementById("iab").style.left="370px";
document.getElementById("iab").style.top="50px";

document.getElementById("iac").style.height="60px";
document.getElementById("iac").style.width="60px";
document.getElementById("iac").style.backgroundImage="url('images/Dice.jpg')";

document.getElementById("iac").style.left="300px";
document.getElementById("iac").style.top="200px";

document.getElementById("iab").onclick=Jia;
document.getElementById("iaa").onclick=Jian;

document.getElementById("aaa").onclick=Times;
document.getElementById("aab").onclick=Cleared;
document.getElementById("iac").onclick=Nd;
document.getElementById("maa").onclick=Roll;
document.getElementById("mab").onclick=Recordb;
document.getElementById("maf").onclick=F;


document.getElementById("pia").style.fontSize="60px";
document.getElementById("pia").style.left="190px";
document.getElementById("pia").style.top="-20px";
document.getElementById("pia").style.color="blue";

document.getElementById("pib").style.fontSize="20px";
document.getElementById("pib").style.left="40px";
document.getElementById("pib").style.top="50px";
document.getElementById("pib").style.color="red";

document.getElementById("pic").style.fontSize="30px";
document.getElementById("pic").style.left="380px";
document.getElementById("pic").style.top="200px";
document.getElementById("pic").style.color="blue";

}//bos

function Roll(){//main of BoS
sw=0;
var sl=0;
var win="";
var w1="";
var w2="";
var w3="";

while(sw==0){


if(chip1<bet){

alert(name1+"~ you dont have enangh chip!!")
BoS();
break;
}
if(p1==""){
alert(name1+" must choose 'big' or 'small'");
BoS();
break;
}
if(Np>1){
if(chip2<bet){
alert(name2+"~ you dont have enangh chip!!")
BoS();
break;
}
if(p2==""){
alert(name2+" must choose 'big' or 'small'");
BoS();
break;
}
if(Np==3){
if(chip3<bet){
alert(name3+"~ you dont have enangh chip!!")
BoS();
break;
}
if(p3==""){
alert(name3+" must choose 'big' or 'small'");
BoS();
break;
}
}
}
//no chip




var sl =Math.floor((Math.random()*(Dice*6))+1); 
if(sl>(Dice*3)){
win="big";
}else{
win="small";
}

if(win==p1){
chip1=chip1+bet;
w1="Good Luck "+ name1+" you choose "+p1+".  you win "+bet;
bt1++;
lbt1++;
if(lbt1>mlbt1){
mlbt1=lbt1;
}

}else{
chip1=chip1-bet;
w1="Sorry "+ name1+" you choose "+p1+".  you lose "+bet;
lbt1=0;
} //p1  
if(Np>1){
if(win==p2){
chip2=chip2+bet;
w2="Good Luck "+ name2+" you choose "+p2+".  you win "+bet;
bt2++;
lbt2++;
if(lbt2>mlbt2){
mlbt2=lbt2;
}

}else{
chip2=chip2-bet;
w2="Sorry "+ name2+" you choose "+p2+".  you lose "+bet;
lbt2=0;
}//p2             
if(Np==3){
if(win==p3){
chip3=chip3+bet;
w3="Good Luck "+ name3+" you choose "+p3+".  you win "+bet;
bt3++;
lbt3++;
if(lbt3>mlbt3){
mlbt3=lbt3;
}

}else{
chip3=chip3-bet;
w3="Sorry "+ name3+" you choose "+p3+".  you lose "+bet;
lbt3=0;
}//p3                      
}//Np=3
}//Np=2
alert("TMS roll :"+sl+"( 1-"+Dice*3+" is Small) "+"("+Math.round(Dice*3+1)+"-"+Dice*6+" is Big)"+"\n"+w1+"\n"+w2+"\n"+w3);
bpt++;


sw=1;
 }//while           
BoS(); 
}//roll

function Recordb(){//record of bos
var xz="";
var x1="";
var x2="";
var x3="";
xz="Total number of game is "+bpt+" \n";
x1=name1+" win "+bt1+" times. "+Math.round(bt1/bpt*100)+"% Winning.  Maximum number of consecutive win is "+mlbt1+" \n ";
if(Np>1){
x2=name2+" win "+bt2+" times. "+Math.round(bt2/bpt*100)+"% Winning   Maximum number of consecutive win is "+mlbt2+"  \n "
if(Np==3){
x3=name3+" win "+bt3+" times. "+Math.round(bt3/bpt*100)+"% Winning   Maximum number of consecutive win is "+mlbt3+"  \n  "
}
}
alert(xz+x1+x2+x3)
}

function Nd(){//for bos    number of dice
var sw=0;
while(sw==0){
Dice=prompt("How many dice do you want?(1-6)","1");
Dice=parseInt(Dice);
if(Dice<7&&Dice>0){
sw=1;
BoS();
break;
}else{
alert("Number of Dice must be number, must bigger than 0 and less than 7 (1-6)")
sw=0;
continue;
}
}

}//Nd

function P1b(){//for bos 
p1="big";
alert(name1+" choose BIG")
BoS();
}
function P1s(){//for bos 
p1="small";
alert(name1+" choose Small")
BoS();
}
function P2b(){//for bos 
p2="big";
alert(name2+" choose BIG")
BoS();
}
function P2s(){//for bos 

p2="small";
alert(name2+" choose Small")
BoS();
}
function P3b(){//for bos 
p3="big";
alert(name3+" choose BIG")
BoS();
}
function P3s(){//for bos 
p3="small";
alert(name3+" choose Small")
BoS();

}

function Cleared(){//for bos    Cleared
if(zhuangtai==1){
alert("You can not change BET when the game begin")
}else{
bet=0;
if(game==1){
BoS();
}else if(game==2){
TO();
}
}
}

function Jia(){//for bos     plus
if(zhuangtai==1){
alert("You can not change BET when the game begin")
}else{
bet=bet+100;
if(game==1){
BoS();
}else if(game==2){
TO();
}
}
}
function Times(){//for bos   times two
if(zhuangtai==1){
alert("You can not change BET when the game begin")
}else{
bet=bet*2;
if(game==1){
BoS();
}else if(game==2){
TO();
}
}
}
function Jian(){//for bos    minus
if(zhuangtai==1){
alert("You can not change BET when the game begin")
}else{
bet=bet-100;
if(bet<0){
bet=0;
}
if(game==1){
BoS();
}else if(game==2){
TO();
}

}
}




function TO(){//21 print !
game=2;
var player="";


Nt();
if(Np==1){
name=1;
}

document.getElementById("paa").innerHTML=name1;
document.getElementById("pab").innerHTML=chip1

document.getElementById("paa").style.fontSize="25px";
document.getElementById("paa").style.right="0px";
document.getElementById("paa").style.top="10px";
document.getElementById("paa").style.color="blue";
document.getElementById("paa").style.borderTop="thick solid Yellow";
document.getElementById("pab").style.fontSize="15px";
document.getElementById("pab").style.right="0px";
document.getElementById("pab").style.top="50px";
document.getElementById("pab").style.borderBottom="thick solid Yellow";

if(Np>1){  
document.getElementById("pba").innerHTML=name2;
document.getElementById("pbb").innerHTML=chip2;

document.getElementById("pba").style.fontSize="25px";
document.getElementById("pba").style.right="0px";
document.getElementById("pba").style.top="100px";
document.getElementById("pba").style.color="blue";
document.getElementById("pba").style.borderTop="thick solid Yellow";
document.getElementById("pbb").style.fontSize="15px";
document.getElementById("pbb").style.right="0px";
document.getElementById("pbb").style.top="140px";
document.getElementById("pbb").style.borderBottom="thick solid Yellow";

if(Np==3){

document.getElementById("pca").innerHTML=name3;
document.getElementById("pcb").innerHTML=chip3;

document.getElementById("pca").style.fontSize="25px";
document.getElementById("pca").style.right="0px";
document.getElementById("pca").style.top="190px";
document.getElementById("pca").style.color="blue";
document.getElementById("pca").style.borderTop="thick solid Yellow";
document.getElementById("pcb").style.fontSize="15px";
document.getElementById("pcb").style.right="0px";
document.getElementById("pcb").style.top="230px";
document.getElementById("pcb").style.borderBottom="thick solid Yellow";
}
}
//all used it
if(name==0){
document.getElementById("paa").style.borderTop="thick solid Yellow";
document.getElementById("pab").style.borderBottom="thick solid Yellow";

document.getElementById("pba").style.borderTop="thick solid Yellow";
document.getElementById("pbb").style.borderBottom="thick solid Yellow";

document.getElementById("pca").style.borderTop="thick solid Yellow";
document.getElementById("pcb").style.borderBottom="thick solid Yellow";
player="ChooseOne";
}else if(name==1){
document.getElementById("paa").style.borderTop="thick solid red";
document.getElementById("pab").style.borderBottom="thick solid red";

document.getElementById("pba").style.borderTop="thick solid Yellow";
document.getElementById("pbb").style.borderBottom="thick solid Yellow";

document.getElementById("pca").style.borderTop="thick solid Yellow";
document.getElementById("pcb").style.borderBottom="thick solid Yellow";
player=name1;

}else if(name==2){
document.getElementById("pba").style.borderTop="thick solid red";
document.getElementById("pbb").style.borderBottom="thick solid red";

document.getElementById("paa").style.borderTop="thick solid Yellow";
document.getElementById("pab").style.borderBottom="thick solid Yellow";

document.getElementById("pca").style.borderTop="thick solid Yellow";
document.getElementById("pcb").style.borderBottom="thick solid Yellow";
player=name2;
}else if(name==3){
document.getElementById("pca").style.borderTop="thick solid red";
document.getElementById("pcb").style.borderBottom="thick solid red";

document.getElementById("pba").style.borderTop="thick solid Yellow";
document.getElementById("pbb").style.borderBottom="thick solid Yellow";

document.getElementById("paa").style.borderTop="thick solid Yellow";
document.getElementById("pab").style.borderBottom="thick solid Yellow";
player=name3;
}//show whom played



if(Np>1){
document.getElementById("pda").innerHTML="<button type='button'>"+name1+"</button>";
document.getElementById("pdb").innerHTML="<button type='button'>"+name2+"</button>";

document.getElementById("pda").style.left="0px";
document.getElementById("pda").style.top="100px";

document.getElementById("pdb").style.left="150px";
document.getElementById("pdb").style.top="100px";
if(Np==3){
document.getElementById("pdc").innerHTML="<button type='button'>"+name3+"</button>";

document.getElementById("pdc").style.left="300px";
document.getElementById("pdc").style.top="100px";
document.getElementById("pdc").onclick=chn3;
}
document.getElementById("pda").onclick=chn1;
document.getElementById("pdb").onclick=chn2;

} //choose player

document.getElementById("pia").innerHTML=bet;
document.getElementById("pib").innerHTML="BET: ";
document.getElementById("aaa").innerHTML="Times Two";
document.getElementById("aab").innerHTML="Cleared";

document.getElementById("pia").style.fontSize="60px";
document.getElementById("pia").style.left="190px";
document.getElementById("pia").style.top="-20px";
document.getElementById("pia").style.color="blue";

document.getElementById("pib").style.fontSize="20px";
document.getElementById("pib").style.left="40px";
document.getElementById("pib").style.top="50px";
document.getElementById("pib").style.color="red";

document.getElementById("aaa").style.fontSize="20px";
document.getElementById("aaa").style.left="400px";
document.getElementById("aaa").style.top="50px";
document.getElementById("aaa").style.color="blue";

document.getElementById("aab").style.fontSize="15px";
document.getElementById("aab").style.left="400px";
document.getElementById("aab").style.top="70px";
document.getElementById("aab").style.color="blue";

document.getElementById("iaa").style.height="60px";
document.getElementById("iaa").style.width="60px";
document.getElementById("iaa").style.backgroundImage="url('images/left.jpg')";

document.getElementById("iab").style.height="60px";
document.getElementById("iab").style.width="60px";
document.getElementById("iab").style.backgroundImage="url('images/right.jpg')";

document.getElementById("iaa").style.left="90px";
document.getElementById("iaa").style.top="50px";

document.getElementById("iab").style.left="370px";
document.getElementById("iab").style.top="50px";

document.getElementById("iab").onclick=Jia;
document.getElementById("iaa").onclick=Jian;

document.getElementById("aaa").onclick=Times;
document.getElementById("aab").onclick=Cleared;

//bet choose
document.getElementById("pcomc").innerHTML="Computer: "+cnot;
document.getElementById("pplac").innerHTML=player+": "+not;
if(zhuangtai==1){
document.getElementById("take").innerHTML="<button type='button'>Take</button>";
}else{
document.getElementById("take").innerHTML="<button type='button'>Star</button>";
}
if(finp==1&&finc==1){
document.getElementById("no").innerHTML="<button type='button'>Show</button>";
document.getElementById("no").onclick=showwin;
}else{
document.getElementById("no").innerHTML="<button type='button'>No</button>";
document.getElementById("no").onclick=no;
}
document.getElementById("pcomc").style.fontSize="25px";
document.getElementById("pcomc").style.left="0px";
document.getElementById("pcomc").style.top="120px";
document.getElementById("pcomc").style.color="red";

document.getElementById("pplac").style.fontSize="25px";
document.getElementById("pplac").style.left="0px";
document.getElementById("pplac").style.top="260px";
document.getElementById("pplac").style.color="red";

document.getElementById("take").style.fontSize="15px";
document.getElementById("take").style.left="0px";
document.getElementById("take").style.top="315px";

document.getElementById("no").style.fontSize="15px";
document.getElementById("no").style.left="80px";
document.getElementById("no").style.top="315px";

document.getElementById("pea").style.fontSize="15px";
document.getElementById("pea").style.left="10px";
document.getElementById("pea").style.top="330px";

document.getElementById("peb").style.fontSize="15px";
document.getElementById("peb").style.left="10px";
document.getElementById("peb").style.top="170px";

document.getElementById("pec").style.fontSize="25px";
document.getElementById("pec").style.left="500px";
document.getElementById("pec").style.top="160px";
document.getElementById("pec").style.color="blue";

document.getElementById("pfa").style.fontSize="25px";
document.getElementById("pfa").style.left="250px";
document.getElementById("pfa").style.top="120px";
document.getElementById("pfa").style.color="red";

document.getElementById("pfb").style.fontSize="25px";
document.getElementById("pfb").style.left="250px";
document.getElementById("pfb").style.top="260px";
document.getElementById("pfb").style.color="red";

document.getElementById("pga").style.fontSize="15px";
document.getElementById("pga").style.left="400px";
document.getElementById("pga").style.top="130px";
document.getElementById("pga").style.color="black";

document.getElementById("pgb").style.fontSize="15px";
document.getElementById("pgb").style.left="400px";
document.getElementById("pgb").style.top="270px";
document.getElementById("pgb").style.color="black";

if(finc==1){
document.getElementById("pga").innerHTML="No more";
}
if(finp==1){
document.getElementById("pgb").innerHTML="No more";
}
//computer and player 
document.getElementById("take").onclick=take1;

document.getElementById("maa").innerHTML="Shuffle";
document.getElementById("maa").style.fontSize="15px";
document.getElementById("maa").style.left="420px";
document.getElementById("maa").style.top="220px";
document.getElementById("maa").style.color="blue";
document.getElementById("maa").onclick=reia;

show[0]="";
cshow[0]="";


document.getElementById("pea").innerHTML=playershow;
document.getElementById("peb").innerHTML=comshow1;
document.getElementById("pec").innerHTML="Cards: "+cards;
document.getElementById("pfa").innerHTML=comsum;
document.getElementById("pfb").innerHTML="Sum: "+sop;


document.getElementById("mab").onclick=Recordt;
document.getElementById("maf").onclick=F;

document.getElementById("mab").innerHTML="Record";
document.getElementById("maf").innerHTML="Back";

document.getElementById("mab").style.fontSize="15px";
document.getElementById("mab").style.left="550px";
document.getElementById("mab").style.top="400px";
document.getElementById("mab").style.color="red";

document.getElementById("maf").style.top="450px";
document.getElementById("maf").style.left="530px";


}

function Recordt(){//record of 21 print
var x1="";
var x2="";
var x3="";

x1=name1+" played "+tpt1+" times, win "+tt1+" times. "+Math.round(tt1/tpt1*100)+"% Winning.  Maximum number of consecutive win is "+mltt1+" \n ";
if(Np>1){
x2=name2+" played "+tpt2+" times, win "+tt2+" times. "+Math.round(tt2/tpt2*100)+"% Winning.  Maximum number of consecutive win is "+mltt2+" \n ";
if(Np==3){
x3=name3+" played "+tpt3+" times, win "+tt3+" times. "+Math.round(tt3/tpt3*100)+"% Winning.  Maximum number of consecutive win is "+mltt3+" \n ";
}
}
alert(x1+x2+x3)

}
function showwin(){//for TO

if(sop>soc){
alert("GOOD JOB! Sum of your card is "+sop+", great than Sum of Computer's card: "+soc+". \n You Win "+bet)
playwin();
}else{
alert("Sorry! Sum of your card is "+sop+",do not great than Sum of Computer's card: "+soc+".\n You lost "+bet)
comwin();
}
}
function take1(){//for TO
if(name==0){
alert("Please Choose a Player!")
}else if(name==1&&chip1<bet){
alert(name1+" do not have enough money!")
}else if(name==2&&chip2<bet){
alert(name2+" do not have enough money!")
}else if(name==3&&chip3<bet){
alert(name3+" do not have enough money!")
}else if(zhuangtai==0){
playagain();
take();
}else{
take();
}

}
function playagain(){//for TO
if(cards<10){
alert("Poker is less than 10. Automatic shuffling")
reia();
}
 finp=0;
 finc=0;
 not=0;
 foo=new Array();
 num=new Array();
 color=new Array();
 show=new Array();
 cnot=0;
 cnum=new Array();
 ccolor=new Array();
 cshow=new Array();
 playershow="";
 sop=0;
 soc=0;
 comshow="";
 comshow1="";
 comsum="Sum: Non";
 playsum="Sum: "+sop;
 AJp=0;
 AJc=0;
}
function take(){//for TO
if(finp==0){
zhuangtai=1;

var rdm=0;
var sw=0;

var colorshow="";
not++;
while(sw==0){
 rdm = parseInt(Math.random()*52);
if(foo[rdm]==true){

sw=0;
continue;
}else{

foo[rdm]=true;
cards--;
rdm=rdm+1;
sw=1;
}
}

num[not]=rdm%13;

if(num[not]==0){
num[not]=13;
}

color[not]=parseInt((rdm-1)/13);
if(color[not]==0){
colorshow=" spade"; 
}else if(color[not]==1){
colorshow=" heart";
}else if(color[not]==2){
colorshow=" diamond";
}else if(color[not]==3){
colorshow=" club";
}

if(num[not]==1){
show[not]="A"+colorshow;
if((sop+11)<=21){
num[not]=11;
AJp++;
}

}else if(num[not]==11){
show[not]="J"+colorshow;

}else if(num[not]==12){
show[not]="Q"+colorshow;

}else if(num[not]==13){
show[not]="K"+colorshow;

}else{
show[not]=num[not]+colorshow;

}
playershow=playershow+"   "+show[not];
TO();
comtack();
}else{
alert("you had choose no more card!")
}
//take card(player)

}
function comtack(){//for TO
if(soc<=15){

var rdm=0;
var sw=0;

var colorshow="";
cnot++;

while(sw==0){
 rdm = parseInt(Math.random()*52);
if(foo[rdm]==true){
sw=0;
continue;
}else{
cards--;
foo[rdm]=true;

rdm=rdm+1;
sw=1;
}
}

cnum[cnot]=rdm%13;

if(cnum[cnot]==0){
cnum[cnot]=13;
}

ccolor[cnot]=parseInt((rdm-1)/13);
if(ccolor[cnot]==0){
colorshow=" spade"; 
}else if(ccolor[cnot]==1){
colorshow=" heart";
}else if(ccolor[cnot]==2){
colorshow=" diamond";
}else if(ccolor[cnot]==3){
colorshow=" club";
}

if(cnum[cnot]==1){
cshow[cnot]="A"+colorshow;
if((soc+11)<=21){
cnum[cnot]=11;
AJc++;
}

}else if(cnum[cnot]==11){
cshow[cnot]="J"+colorshow;

}else if(cnum[cnot]==12){
cshow[cnot]="Q"+colorshow;

}else if(cnum[cnot]==13){
cshow[cnot]="K"+colorshow;

}else{
cshow[cnot]=cnum[cnot]+colorshow;

}
comshow=comshow+"   "+cshow[cnot];
TO();
total();

if(finp==1&&zhuangtai!=0){
alert("computer got one card")
comtack();
}
}else{

finc=1;
TO();
total();
}
//take card(computer)
}
function total(){//for TO
if(finp==0){
sop=sop+parseInt(num[not]);
}
if(finc==0){
soc=soc+parseInt(cnum[cnot]);
}
TO();
whoiswin();
}
function whoiswin(){//for TO

var sw=0;

while(sw==0){



TO();
if(soc==21){
alert("Computer got 21~   sorry you are lost. \n you lost "+ bet)
TO();
comwin();
sw=1;
break;
}
if(sop==21){
alert("GOOD JOB!  you got 21 !! \n you win "+bet)
TO();
playwin();
sw=1;
break;
}
if(sop>21){
if(AJp==0){
alert("Sorry , Sum of your cards is "+sop+", great than 21, so you lost. \n you lost "+ bet)
TO();
comwin();
sw=1;
break;
}else{
sop=sop-10;
AJp--;
whoiswin();
}
}
if(soc>21){
if(AJc==0){
alert("GOOD LUCK, Sum of computer cards is "+soc+", great than 21,you WIN! \n you win "+bet)
TO();
playwin();
sw=1;
break;
}else{
soc=soc-10;
AJc--;
whoiswin();
}
}
if(cnot==4&&ccolor[1]==ccolor[2]&&ccolor[2]==ccolor[3]&&ccolor[3]==ccolor[4]){
alert("Sorry, Computer got 4 same color card~ you lost. \n you lost "+ bet)
TO();
comwin();
sw=1;
break;
}
if(not==4&&color[1]==color[2]&&color[2]==color[3]&&color[3]==color[4]){
alert("GOOD JOB , You got 4 same color card~ you WIN! \n you win "+bet)
TO();
playerwin();
sw=1;
break;
}
if(cnot==5){
alert("Sorry, Computer got 5 card and did not great than 21, you lost. \n you lost "+ bet)
TO();
comwin();
sw=1;
break;
}
if(not==5){
alert("GOOD JOB, You got 5 card and did not great than 21, you WIn! \n you win "+bet)
TO();
playwin();
sw=1;
break;
}
sw=1
TO();
}//while

}
function reia(){//for TO
if(zhuangtai==1){
alert("You can not shuffle when the game begin")
}else{
var i;
for(i=0;i<53;i++){
foo[i]=false;
}
cards=52;

TO();
}

}
function comwin(){//for TO
if(name==1){
chip1=chip1-bet;
tpt1++;
ltt1=0;
}else if(name==2){
chip2=chip2-bet;
tpt2++;
ltt2=0;
}else if(name==3){
chip3=chip3-bet;
tpt3++;
ltt3=0;

}//record

zhuangtai=0;
comshow1=comshow;
comsum="Sum: "+soc;
TO();
}
function playwin(){//for TO
alert("YOU WIN!")
if(name==1){
chip1=chip1+bet;
tt1++;
tpt1++;
ltt1++;
if(ltt1>mltt1){
mltt1=ltt1;
}
}else if(name==2){
chip2=chip2+bet;
tt2++;
tpt2++;
ltt2++;
if(ltt2>mltt2){
mltt2=ltt2;
}
}else if(name==3){
chip3=chip3+bet;
tt3++;
tpt3++;
ltt3++;
if(ltt3>mltt3){
mltt3=ltt3;
}
}//record
zhuangtai=0;
comshow1=comshow;
comsum="Sum: "+soc;

TO();
}
function no(){//for TO
finp=1;
alert("I dont need card~")
TO();
comtack();
}




function CHname(){//for CH
name=0;
CH();
}
function CH(){ //choose a horse!
game=3;
Nt();


document.getElementById("paa").innerHTML=name1;
document.getElementById("pab").innerHTML=chip1

document.getElementById("paa").style.fontSize="25px";
document.getElementById("paa").style.right="0px";
document.getElementById("paa").style.top="10px";
document.getElementById("paa").style.color="blue";
document.getElementById("paa").style.borderTop="thick solid Yellow";
document.getElementById("pab").style.fontSize="15px";
document.getElementById("pab").style.right="0px";
document.getElementById("pab").style.top="50px";
document.getElementById("pab").style.borderBottom="thick solid Yellow";

if(Np>1){  
document.getElementById("pba").innerHTML=name2;
document.getElementById("pbb").innerHTML=chip2;

document.getElementById("pba").style.fontSize="25px";
document.getElementById("pba").style.right="0px";
document.getElementById("pba").style.top="100px";
document.getElementById("pba").style.color="blue";
document.getElementById("pba").style.borderTop="thick solid Yellow";
document.getElementById("pbb").style.fontSize="15px";
document.getElementById("pbb").style.right="0px";
document.getElementById("pbb").style.top="140px";
document.getElementById("pbb").style.borderBottom="thick solid Yellow";

if(Np==3){

document.getElementById("pca").innerHTML=name3;
document.getElementById("pcb").innerHTML=chip3;

document.getElementById("pca").style.fontSize="25px";
document.getElementById("pca").style.right="0px";
document.getElementById("pca").style.top="190px";
document.getElementById("pca").style.color="blue";
document.getElementById("pca").style.borderTop="thick solid Yellow";
document.getElementById("pcb").style.fontSize="15px";
document.getElementById("pcb").style.right="0px";
document.getElementById("pcb").style.top="230px";
document.getElementById("pcb").style.borderBottom="thick solid Yellow";
}
}
//all used that

if(Np==1){
name=1;

document.getElementById("paa").style.borderTop="thick solid red";
document.getElementById("pab").style.borderBottom="thick solid red";

document.getElementById("pba").style.borderTop="thick solid Yellow";
document.getElementById("pbb").style.borderBottom="thick solid Yellow";

document.getElementById("pca").style.borderTop="thick solid Yellow";
document.getElementById("pcb").style.borderBottom="thick solid Yellow";

}
if(Np>1){
document.getElementById("pda").innerHTML="<button type='button'>"+name1+"</button>";
document.getElementById("pdb").innerHTML="<button type='button'>"+name2+"</button>";

document.getElementById("pda").style.left="10px";
document.getElementById("pda").style.top="10px";

document.getElementById("pdb").style.left="10px";
document.getElementById("pdb").style.top="30px";
if(Np==3){
document.getElementById("pdc").innerHTML="<button type='button'>"+name3+"</button>";

document.getElementById("pdc").style.left="10px";
document.getElementById("pdc").style.top="50px";
document.getElementById("pdc").onclick=chn3;
}
document.getElementById("pda").onclick=chn1;
document.getElementById("pdb").onclick=chn2;
}

if(name==0){
document.getElementById("paa").style.borderTop="thick solid Yellow";
document.getElementById("pab").style.borderBottom="thick solid Yellow";

document.getElementById("pba").style.borderTop="thick solid Yellow";
document.getElementById("pbb").style.borderBottom="thick solid Yellow";

document.getElementById("pca").style.borderTop="thick solid Yellow";
document.getElementById("pcb").style.borderBottom="thick solid Yellow";
player="ChooseOne";
}else if(name==1){
document.getElementById("paa").style.borderTop="thick solid red";
document.getElementById("pab").style.borderBottom="thick solid red";

document.getElementById("pba").style.borderTop="thick solid Yellow";
document.getElementById("pbb").style.borderBottom="thick solid Yellow";

document.getElementById("pca").style.borderTop="thick solid Yellow";
document.getElementById("pcb").style.borderBottom="thick solid Yellow";
player=name1;

}else if(name==2){
document.getElementById("pba").style.borderTop="thick solid red";
document.getElementById("pbb").style.borderBottom="thick solid red";

document.getElementById("paa").style.borderTop="thick solid Yellow";
document.getElementById("pab").style.borderBottom="thick solid Yellow";

document.getElementById("pca").style.borderTop="thick solid Yellow";
document.getElementById("pcb").style.borderBottom="thick solid Yellow";
player=name2;
}else if(name==3){
document.getElementById("pca").style.borderTop="thick solid red";
document.getElementById("pcb").style.borderBottom="thick solid red";

document.getElementById("pba").style.borderTop="thick solid Yellow";
document.getElementById("pbb").style.borderBottom="thick solid Yellow";

document.getElementById("paa").style.borderTop="thick solid Yellow";
document.getElementById("pab").style.borderBottom="thick solid Yellow";
player=name3;
}//show whom played

document.getElementById("mab").innerHTML="Record";
document.getElementById("maf").innerHTML="Back";

document.getElementById("mab").style.fontSize="15px";
document.getElementById("mab").style.left="50px";
document.getElementById("mab").style.top="400px";
document.getElementById("mab").style.color="red";

document.getElementById("maf").style.top="450px";
document.getElementById("maf").style.left="530px";

document.getElementById("iaa").style.height="80px";
document.getElementById("iaa").style.width="80px";
document.getElementById("iaa").style.backgroundColor="yellow";
document.getElementById("iaa").style.left="50px";
document.getElementById("iaa").style.top="150px";
document.getElementById("iaa").style.border="3px solid pink";

document.getElementById("iab").style.height="80px";
document.getElementById("iab").style.width="80px";
document.getElementById("iab").style.backgroundColor="blue";
document.getElementById("iab").style.left="150px";
document.getElementById("iab").style.top="150px";
document.getElementById("iab").style.border="3px solid pink";

document.getElementById("iac").style.height="80px";
document.getElementById("iac").style.width="80px";
document.getElementById("iac").style.backgroundColor="red";
document.getElementById("iac").style.left="250px";
document.getElementById("iac").style.top="150px";
document.getElementById("iac").style.border="3px solid pink";

document.getElementById("iaa").onmouseover=ia1;
document.getElementById("iaa").onmouseout=ia2;
document.getElementById("iaa").onclick=cs1;

document.getElementById("iab").onmouseover=ib1;
document.getElementById("iab").onmouseout=ib2;
document.getElementById("iab").onclick=cs2;

document.getElementById("iac").onmouseover=ic1;
document.getElementById("iac").onmouseout=ic2;
document.getElementById("iac").onclick=cs3;

document.getElementById("mab").onclick=Recordc;
document.getElementById("maf").onclick=F;


}
function ia1(){//for CH

document.getElementById("iaa").style.height="95px";
document.getElementById("iaa").style.width="95px";
document.getElementById("iaa").style.backgroundColor="yellow";
document.getElementById("iaa").style.left="45px";
document.getElementById("iaa").style.top="145px";
document.getElementById("iaa").style.border="3px solid pink";
}
function ia2(){//for CH
document.getElementById("iaa").style.height="80px";
document.getElementById("iaa").style.width="80px";
document.getElementById("iaa").style.backgroundColor="yellow";
document.getElementById("iaa").style.left="50px";
document.getElementById("iaa").style.top="150px";
document.getElementById("iaa").style.border="3px solid pink";
}
function ib1(){//for CH
document.getElementById("iab").style.height="95px";
document.getElementById("iab").style.width="95px";
document.getElementById("iab").style.backgroundColor="blue";
document.getElementById("iab").style.left="145px";
document.getElementById("iab").style.top="145px";
document.getElementById("iab").style.border="3px solid pink";
}
function ib2(){//for CH
document.getElementById("iab").style.height="80px";
document.getElementById("iab").style.width="80px";
document.getElementById("iab").style.backgroundColor="blue";
document.getElementById("iab").style.left="150px";
document.getElementById("iab").style.top="150px";
document.getElementById("iab").style.border="3px solid pink";
}
function ic1(){//for CH
document.getElementById("iac").style.height="95px";
document.getElementById("iac").style.width="95px";
document.getElementById("iac").style.backgroundColor="red";
document.getElementById("iac").style.left="245px";
document.getElementById("iac").style.top="145px";
document.getElementById("iac").style.border="3px solid pink";
}
function ic2(){//for CH
document.getElementById("iac").style.height="80px";
document.getElementById("iac").style.width="80px";
document.getElementById("iac").style.backgroundColor="red";
document.getElementById("iac").style.left="250px";
document.getElementById("iac").style.top="150px";
document.getElementById("iac").style.border="3px solid pink";
}
function cs1(){//for CH
cs=1;
chooseC();
}//cs1
function cs2(){//for CH
cs=2;
chooseC();
}
function cs3(){//for CH
cs=3;
chooseC();
}
function chooseC(){//for CH
if(name==0){
alert("Please Choose a Player!")
}else if(name==1){
if(chip1>=1000){
chip1=chip1-1000;
CH();
choose();
}else{
alert(name1+" do not have enough money! (1000)")
}//else

}else if(name==2){
if(chip2>=1000){
chip2=chip2-1000;
CH();
choose();
}else{
alert(name2+" do not have enough money! (1000)")
}//else

}else if(name==3){
if(chip3>=1000){
chip3=chip3-1000;
CH();
choose();
}else{
alert(name3+" do not have enough money! (1000)")
}//else

}//if



}
function Recordc(){//for CH

var x1="";
var x2="";
var x3="";

x1=name1+" played "+cpt1+" times, win "+ct1+" times. "+Math.round(ct1/cpt1*100)+"% Winning.  Maximum number of consecutive win is "+mlct1+" \n ";
if(Np>1){
x2=name2+" played "+cpt2+" times, win "+ct2+" times. "+Math.round(ct2/cpt2*100)+"% Winning.  Maximum number of consecutive win is "+mlct2+" \n ";
if(Np==3){
x3=name3+" played "+cpt3+" times, win "+ct3+" times. "+Math.round(ct3/cpt3*100)+"% Winning.  Maximum number of consecutive win is "+mlct3+" \n ";
}
}
alert(x1+x2+x3)
}
function choose(){//for CH
var car=0;
var names="";
var open=0;
var option=0;
var opens="";
var options="";
var answer="";
var sw=0;
var css="";
var cars="";
var winchip=0;
var losechip=0;


if(name==1){
cbet=chip1;
names=name1;
ct=ct1;
cpt=cpt1;
lct=lct1;
mlct=mlct1;
}else if(name==2){
cbet=chip2;
names=name2;
ct=ct2;
cpt=cpt2;
lct=lct2;
mlct=mlct2;
}else if(name==3){

cbet=chip3;
names=name3;
ct=ct3;
cpt=cpt3;
lct=lct3;
mlct=mlct3;

}




 car = parseInt(Math.random()*3 + 1);  
if(car == 1 && cs == 1){
        open = 3; option = 2;
    } 
    if(car == 1 && cs == 2){
        open = 3; option = 1;
    } 
    if(car == 1 && cs == 3){
         open = 2; option = 1;
    } 
    if (car == 2 && cs == 1){
        open = 3; option = 2;
    } 
    if (car == 2 && cs == 2){
        open = 1; option = 3;
    } 
    if (car == 2 && cs == 3){
        open = 1; option = 2;
    } 
    if (car == 3 && cs == 1){
        open = 2; option = 3;
    } 
    if (car == 3 && cs == 2){
        open = 1; option = 3;
    } 
    if (car == 3 && cs == 3){
        open = 2; option = 1;
    }

	if(open==1){
	opens="Yellow";
	}
	if(open==2){
	opens="blue";
	}
	if(open==3){
	opens="red";
	}
	if(option==1){
	options="Yellow";
	}
	if(option==2){
	options="Blue";
	}
	if(option==3){
	options="Red";
	}
cpt++;  //cpt1 or cpt2 or cpt3 ++;

	while(sw==0){
	answer=prompt("Hi "+names+"! \n Tms shows that there is no horse behind "+opens+" door .\nDo you want to change your choice to " + options + " door ? (y|n): ","n");

	if(answer=="y"){
	cs = option;

	sw=1;
	break;
	}else if(answer=="n"){
	sw=1;
	
	break;	
	}else{
	alert("Answer must be 'y' or 'n' !!")
	sw=0;
	continue;
	}//else
}//while

if(cs==1){
	css="Yellow";
	}
	if(cs==2){
	css="blue";
	}
	if(cs==3){
	css="red";
	}

	if(car==1){
	cars="Yellow";
	}
	if(car==2){
	cars="blue";
	}
	if(car==3){
	cars="red";
	}
	
winchip=Math.round(parseInt(Math.random()*22)*100+800);
losechip=Math.round(parseInt(Math.random()*9)*100+100);
	if (cs == car) {
         alert(cars+" Door has the horse behind it.\n Since your final choice was "+css+" door. you won the horse!\n");
		 alert("Nice horse!  TMS bought that, "+names+" got "+winchip+" chips."   )
        ct++;  //ct1 or... ++;
        lct++; //lct1 or... ++;
		cbet=cbet+winchip;
    } else{
         alert(cars+" Door has the horse behind it.\n Since your final choice was "+css+" door. you did not win the horse!\n");
		 alert("But you win a dog. Mr.wear bought that, "+names+" got "+losechip+" chips.")
		 lct=0; //lct1 or... =0;
		 cbet=cbet+losechip;
    }
	if(lct>mlct){
	mlct=lct;
	}
	
	if(name==1){
chip1=cbet;
ct1=ct;
cpt1=cpt;
lct1=lct;
mlct1=mlct;	
}else if(name==2){
chip2=cbet;
ct2=ct;
cpt2=cpt;
lct2=lct;
mlct2=mlct;	
}else if(name==3){
chip3=cbet;
ct3=ct;
cpt3=cpt;
lct3=lct;
mlct3=mlct;	
}
CHname();

}
function chn1(){//for CH
if(zhuangtai==0){
name=1;
if(game==2){
playagain();
TO();
}else if(game==3){
CH();
}
}else{
alert("You Can't change player when the game begin")
}

}
function chn2(){//for CH
if(zhuangtai==0){
name=2;
if(game==2){
playagain();
TO();
}else if(game==3){
CH();
}
}else{
alert("You Can't change player when the game begin")
}

}
function chn3(){//for CH
if(zhuangtai==0){
name=3;
if(game==2){
playagain();
TO();
}else if(game==3){
CH();
}
}else{
alert("You Can't change player when the game begin")
}
}




function Nt() {//Empty data
document.getElementById("mpa").innerHTML="";

document.getElementById("maa").innerHTML="";
document.getElementById("mab").innerHTML="";
document.getElementById("mab").style.left="0px";
document.getElementById("mac").innerHTML="";
document.getElementById("mad").innerHTML="";
document.getElementById("mad").style.left="0px";
document.getElementById("mae").innerHTML="";
document.getElementById("mae").style.left="0px";
document.getElementById("maf").innerHTML="";
document.getElementById("paa").innerHTML="";
document.getElementById("pab").innerHTML="";
document.getElementById("pba").innerHTML="";
document.getElementById("pbb").innerHTML="";
document.getElementById("pca").innerHTML="";
document.getElementById("pcb").innerHTML="";
document.getElementById("pda").innerHTML="";
document.getElementById("pdb").innerHTML="";
document.getElementById("pdc").innerHTML="";
document.getElementById("pea").innerHTML="";
document.getElementById("peb").innerHTML="";
document.getElementById("pec").innerHTML="";
document.getElementById("pfa").innerHTML="";
document.getElementById("pfb").innerHTML="";
document.getElementById("pfc").innerHTML="";
document.getElementById("pga").innerHTML="";
document.getElementById("pgb").innerHTML="";
document.getElementById("pgc").innerHTML="";

document.getElementById("pcomc").innerHTML="";
document.getElementById("pplac").innerHTML="";
document.getElementById("pcoms").innerHTML="";
document.getElementById("take").innerHTML="";
document.getElementById("no").innerHTML="";

document.getElementById("aaa").innerHTML="";
document.getElementById("aab").innerHTML="";
document.getElementById("iaa").innerHTML="";
document.getElementById("iab").innerHTML="";
document.getElementById("iac").innerHTML="";

document.getElementById("pia").innerHTML="";
document.getElementById("pib").innerHTML="";
document.getElementById("pic").innerHTML="";

document.getElementById("p1").innerHTML="";
document.getElementById("p2").innerHTML="";
document.getElementById("p3").innerHTML="";


document.getElementById("iaa").style.height="0px";
document.getElementById("iaa").style.width="0px";

document.getElementById("iab").style.height="0px";
document.getElementById("iab").style.width="0px";

document.getElementById("iac").style.height="0px";
document.getElementById("iac").style.width="0px";

document.getElementById("maa").style.left="0px";

document.getElementById("iaa").style.backgroundColor="none";
document.getElementById("iaa").style.border="none";
document.getElementById("iaa").onmouseover="none";
document.getElementById("iaa").onmouseout="none";

document.getElementById("iab").style.backgroundColor="none";
document.getElementById("iab").style.border="none";
document.getElementById("iab").onmouseover="none";
document.getElementById("iab").onmouseout="none";

document.getElementById("iac").style.backgroundColor="none";
document.getElementById("iac").style.border="none";
document.getElementById("iac").onmouseover="none";
document.getElementById("iac").onmouseout="none";

document.getElementById("iaa").style.backgroundImage="none";
document.getElementById("iab").style.backgroundImage="none";
document.getElementById("iac").style.backgroundImage="none";


document.getElementById("maa").style.color="red";

document.getElementById("rule1").innerHTML="";
document.getElementById("rule2").innerHTML="";
document.getElementById("rule3").innerHTML="";
document.getElementById("rule4").innerHTML="";
document.getElementById("rule5").innerHTML="";
document.getElementById("rule6").innerHTML="";
document.getElementById("rule7").innerHTML="";


}

