let url="https://restcountries.com/v2/all"

import fetch from "node-fetch"

let fetchData=async function()
{
    try
    {
     let response=await fetch(url)
     let country= await response.json() //TypeError:
     console.log(country);
    }
    catch(err){
        console.log("Could not load the API response "+err.message);
    }
}

fetchData()
