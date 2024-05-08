function findPerfect(n)
{

    sum=0;
    for(i=1;i<n;i++)
    {
        if(n%i==0)
        {
            sum+=i;
        }
    }

    if(sum==n)
    {
        alert("The number "+n+" is perfect number!");
    }
    else
    {
        alert("The number "+n+" is not perfect number!");
    }
}