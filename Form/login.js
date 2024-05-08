function checkBlank(c1,msg)
{
    data=c1.value;
    l=data.length;
    if(l==0){
        alert(msg);
        c1.focus();
        return false;
    }
    return true;
}
//this function checks the password length and ensure that passeord length must be in 6 characters.
function checkpassLength(c1,msg)
{
    v=c1.value;
    len=v.length;
    if(len<6){
        alert(msg);
        c1.value="";
        c1.focus();
        return false;
    }
    return true;
}
function checkpassconpass(c1,c2,msg)
{
    p1=c1.value;
    p2=c2.value;
    
    if(p1!=p2){
        alert(msg);
        c1.value="";
        c2.value="";
        c1.focus();
        return false;
    }
    return true;
}