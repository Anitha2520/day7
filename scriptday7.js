var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
//console.log(result);

   

//a. Get all the countries from the Asia continent /region using the Filter function

var res1=result.filter((ele)=>ele.region==="Asia");
//console.log(res1);
var finals=res1.map((ele)=>ele.name);
console.log(finals);

//b.Get all the countries with a population of less than 2 lakhs using Filter function
var res=result.filter((ele)=>ele.population<200000);
//console.log(res);
var final=res.map((ele)=>ele.name);
console.log(final);

//c.Print the following details name, capital, flag using forEach function
result.forEach((ele)=>console.log(ele.name,ele.capital,ele.flag));

//d.Print the total population of countries using reduce function
var totpopres=result.reduce((a,b)=>a+b.population,0)
console.log(totpopres);

//e.Print the country which uses US Dollars as currency.
for(let i=0;i<result.length;i++){
        //var rescur=result[i]["currencies"].filter((ele)=>ele.symbol==="$");
//console.log(result[i]["currencies"]);
if(result[i]["currencies"]){            
 for(let j=0;j<result[i]["currencies"].length;j++){
    if(result[i]["currencies"][j]["name"]==="United States dollar"){
                     console.log(result[i]["name"]) ;
              }
            }
            
        }
    }



}