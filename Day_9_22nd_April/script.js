//4 steps are involved here
//step 01:create a XHR object
//this will create a new object which will have 
//the interaction with servers via API
var request=new XMLHttpRequest();
//step 02: opening a request
//takes two parameters: "HTTP METHOD", "API URL"
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
//step 03:sending a request
request.send();
//step 04:once dsata is successfully loaded form server
//or status code is 200
request.onload=function(){
//the data coming from server is of type  string
//so we are converting into object
var data=JSON.parse(request.response);
console.log(data);
//console.log(data[0].name+ " "+data[0].capital);
//i want to print all the country name, region, subregion, population in console
//var asia=[];
//for(var i=0;i<data.length;i++){
//if(data[i].region== "Asia")
//    {
//        asia.push(data[i].name);
//    }
//    console.log(asia);
    //console.log(`Country name:${data[i].name} Region:${data[i].region} SubRegion:${data[i].subregion} Population:${data[i].population}`)
//}

//a.Get all the countries from Asia continent /region using Filter function
//var result=data.filter(asia);

//function asia(data){
//    return data== "Asia";
//}
//console.log(asia);


//b. Get all the countries with a population of less than 2 lakhs using Filter function

//var asia=[];
//for(var i=0;i<data.length;i++){
//if(data[i].population< 200000)
//    {
//        asia.push(data[i].name);
//    }
//   console.log(asia);
    
//}

//c. Print the following details name, capital, flag using forEach function

//data.forEach(myFunction);
//var copyitems=[];

//function myFunction(item){
//    for(var i=0;i<data.length;i++){

//        console.log(item[i].name);
//    }
   
//}


//e.Print the country which uses US Dollars as currency.
 

var asia=[];
for(var i=0;i<data.length;i++){
    if(data[i].currencies[0]== "Dollar")
    {
       asia.push(data[i].name);
    }
   console.log(asia);





}
}