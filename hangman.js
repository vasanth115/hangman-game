var start=document.getElementById("start");
var array=[];
var times=10;
var turns=document.getElementById("turns");
var words=['java','compailer','keyword','array','class','object','string','datatype'];
var word=words[Math.floor(Math.random()*words.length)];
var output=document.getElementById("output");
var para=document.getElementById("para");
var small=document.getElementById("small");
var result=document.getElementById("result");
var element=[];
var answerword=document.getElementById("answerword");


start.addEventListener("click",play);

function play()
{
    turns.innerHTML=times;
    start.style.display="none";
    small.style.display="flex";
    for(var i=0;i<word.length;i++)
    {
        array[i]=" _ ";
    }
    output.innerHTML=array;
    var btn=document.getElementById("btn");
   
    btn.addEventListener("click",game);

    function game()
    {
        var count=0;
        var guess="";
        var input=document.getElementById("input");
        var inputval=document.getElementById("input").value;
        element.push(inputval);
        para.innerHTML=element;
    
        
        if(inputval===null)
        {
            alert("ENTER THE LETTER");
            times--;
        }
        else if(inputval.length!=1)
        {
            alert("ENTER ONLY ONE LETTER");
            times--;
        }
        else
        {
        for(var j=0;j<word.length;j++)
        {
            if(word[j]==inputval)
            {
                count=1;
                array[j]=inputval;
            }
            guess+=array[j];
        }
        if(count==0)
        {
            times--;
        }
        input.value='';
        output.innerHTML=array;
        turns.innerHTML=times;
        if(guess===word)
        {
        small.style.display="none";
        var gamestart=document.getElementById("gamestart");
        gamestart.style.display="none";
        var playagain=document.getElementById("playagain");
        playagain.style.display="flex";
        result.innerHTML="YOU WIN THE GAME !!!";
        answerword.innerHTML=word;

        var again=document.getElementById("playagain1");
        again.addEventListener("click",()=>{
            location.reload();
        })
        }
        if(times==0)
        {
        small.style.display="none";
        var gamestart=document.getElementById("gamestart");
        gamestart.style.display="none";
        var playagain=document.getElementById("playagain");
        playagain.style.display="flex";
        result.innerHTML="YOU LOSE THE GAME !!!";
        answerword.innerHTML=word;


        var again=document.getElementById("playagain1");
        again.addEventListener("click",()=>{
            location.reload();
        })
        }
        }
    }
}