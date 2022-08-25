function checkMarks(n)
{
    if(n<0)
    {
        throw "Please use > 0"
    }

    return n

}

/*
    try to handle exception if number is <0
*/


console.log(checkMarks(10));


