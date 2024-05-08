
function takeChance()
{

    p = parseInt(localStorage.getItem("player"));
    ply="";
    chance= Math.ceil(Math.random()*6);

   

    if(chance==0)
    {
        chance++;
    }

    if(p%2==0)
    {
        ply="2";
    }
    else
    {
        ply="1";
        x=parseInt(localStorage.getItem("player1_count"));
        
        if(x!=0)
        {
            b1 = document.getElementById("btn"+x);
            b1.style.backgroundColor="";
        }
        x+=chance;
        localStorage.setItem("player1_count",x);

        b1 = document.getElementById("btn"+x);
        b1.style.backgroundColor="yellow";

    }
        
    document.getElementById("d1").innerHTML="Player-"+ply+":"+chance;
    p++;
    localStorage.setItem("player",p);
   // alert(chance);
}