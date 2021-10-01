// const txt = {name:"John",age:30,city:"New York"};
// const obj = JSON.stringify(txt);
// const test1 = '{"name":"amal","age":23,"year":2021}';
// const testjson = JSON.parse(test1);
// document.getElementById("demo").innerHTML = obj+" "
// +testjson.name+" "+testjson.age+" "+testjson.year;

document.getElementById("spanus").addEventListener('click',()=>{
    setInterval(()=>{
        let timeus = new Date().toLocaleString("en-US",{timeZone:"America/Los_Angeles"});
        document.getElementById("us").innerHTML = "US Date and Time "+timeus;
    })
})
document.getElementById("spanind").addEventListener('click',()=>{
    setInterval(()=>{
        let timeus = new Date().toLocaleString(undefined,undefined);
        document.getElementById("ind").innerHTML = "INDIA Date and Time "+timeus;
    })
})
