var userClickedPattern=[];
document.addEventListener( "keypress", handelKeyPress);
var level=0;
let gamePattern=[];
let buttonColours=["red","blue","green","yellow"];
function nextSequence()
{
    let randomNumber=Math.floor((Math.random()*4));
    let randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
userClickedPattern=[];
level=level+1;
$("h1").text("Level: "+level);

if(randomChosenColour==="green")
{
    $('#green').fadeOut(250).fadeIn(50); 
    playSound(randomChosenColour);
}
else if(randomChosenColour==="red")
{
    $('#red').fadeOut(250).fadeIn(50);  
    playSound(randomChosenColour);
}
else if(randomChosenColour==="yellow")
{
    $('#yellow').fadeOut(250).fadeIn(50); 
    playSound(randomChosenColour);
}
else if(randomChosenColour==="blue")
{
    $('#blue').fadeOut(250).fadeIn(50); 
    playSound(randomChosenColour);
}
}
$(".btn").click(function(e){
    var userChosenColour=e.target.id;
    if(e.target.id==="green")
{
    $('#green').addClass("pressed "); 
    playSound(e.target.id);
    setTimeout(function() { $('#green').removeClass("pressed "); },200 );
     
}
else if(e.target.id==="red")
{
    $('#red').addClass("pressed ");
    playSound(e.target.id);
    setTimeout(function() { $('#red').removeClass("pressed "); },200 );
}
else if(e.target.id==="yellow")
{
    $('#yellow').addClass("pressed "); 
    playSound(e.target.id);
    setTimeout(function() { $('#yellow').removeClass("pressed "); },200 );
}
else if(e.target.id==="blue")
{
    $('#blue').addClass("pressed ");
    playSound(e.target.id);
    setTimeout(function() { $('#blue').removeClass("pressed "); },200 );
}
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length-1);
})
function playSound(name)
{
    var audio = new Audio("sounds/"+name+".mp3");
audio.play();
}

function handelKeyPress()
{
    nextSequence();
    document.removeEventListener("keypress",handelKeyPress);
}
function checkAnswer(currentLevel)
{

if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
{console.log("sucess");
    if (userClickedPattern.length === gamePattern.length){
   setTimeout(function () {
      nextSequence();
    }, 1000)
        }
        }
else{
   console.log("failed");
   playSound("wrong");
   $("body").addClass("game-over")
   $("h1").text("GAME OVER");
   setTimeout(function() { $("body").removeClass("game-over"); },200 );
   
   startover();
   
}
}

function startover()
{
    level=0;
    gamePattern=[];
    setTimeout(function(){$("h1").text("PRESS ANY KEY TO BEGIN");},200);
    document.addEventListener( "keypress", handelKeyPress);
   
}
