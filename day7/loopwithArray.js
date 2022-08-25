let arr=[10,20,30,40]

for (let x of arr) {
    //console.log(x);  
}


// for in with object its returns key but when u use with array it return index
for (let x in arr) {
    //console.log(x);
    console.log(arr[x]);  
}