
const prime = BigInt(1000000007);
const prime2= 1000000007

var FactorialArr= [];
var ModMultipInverseArr = [];
var CountingSortMatrix =[];
var GString;


function initialize(str){
  var countingSortArr = strToCharCountingSort(str);
  GString = str;
  //initialize factorials and modular multiplicative inverses
  countingSortArr.forEach(el => {
    //FactorialArr[el] = GetFactorial(el,prime2)
    ModMultipInverseArr[el] = ExponentiationBySquaring(el, prime - BigInt(2))
  })

  FactorialArr[0] = 0;
  FactorialArr[1]=1
  for(let i =2; i< 100000; i++){
    FactorialArr[i] = (FactorialArr[i-1] * i)%prime2;
  }

  for(let i=0; i<str.length;i++){
    let newCountingSortArr;
    if(i==0){
      newCountingSortArr=[];
      for(var j=0; j<26;j++){
        newCountingSortArr[j]=0;
      }
    }else{
      newCountingSortArr =[...CountingSortMatrix[i-1]];
    }
    //debugger;
    let num=str[i].charCodeAt(0) -97
    newCountingSortArr[num]++;
    CountingSortMatrix[i] = newCountingSortArr;
  }
}


function answerQuery(l,r){

let CSA1= CountingSortMatrix[l-2] ||[]
let CSA2 = CountingSortMatrix[r-1]
let countingSortArr =[];
//debugger;
for(var i=0; i< CSA2.length; i++){
  countingSortArr[i] = CSA2[i] -(CSA1[i] || 0)
}
console.log(countingSortArr)
countingSortArr = countingSortArr.filter( x=> x!= 0)
 let countingSortArr2 = strToCharCountingSort(GString.substring(l-1,r))

 testList(countingSortArr, countingSortArr2)

  let count =0;
 for(var i=0; i< CSA2.length; i++){
 if(countingSortArr[i]!=0)count++;
 }
 if(count ==1) return 1;

  var total = BigInt(0);
  let bottom = BigInt(1);
  let numberOfOnes =0;
  for(var i = 0; i< countingSortArr.length; i++){
    
    total += BigInt(Math.floor(countingSortArr[i]/2));
    if(countingSortArr[i] %2==1)
      numberOfOnes ++;
  }

  let watch = parseInt( total)
  //console.log(watch)
  //console.log(FactorialArr)
  let top = BigInt(FactorialArr[parseInt(total)])

  
  for(var i= 0; i< countingSortArr.length; i++){
    //top *= (ModMultipInverseArr[countingSortArr[i]] % prime)

    // let a = countingSortArr[i]
    // let b= FactorialArr[a]
    // let c = BigInt()
    // let d = c%prime
    if(countingSortArr[i] !==1){
      
      let number=Math.floor(countingSortArr[i]/2)
      let factNumber= FactorialArr[number];
      bottom *= BigInt(factNumber)%prime
    }
    //bottom *= (BigInt(FactorialArr[Math.floor(countingSortArr[i]/2)]))%prime
  }

   bottom = ExponentiationBySquaring(bottom, prime - BigInt(2))


   numberOfOnes = (numberOfOnes) ? numberOfOnes : 1;
      top = (top) ? top : BigInt(1);
   bottom = (bottom) ? bottom : BigInt(1);
  return (top*bottom * BigInt(numberOfOnes))%prime
}

function GetFactorial(num, prime2){
  //debugger;
  if(num ==0) return 0;
  if(num ===1){
    FactorialArr[1]==1;
    return 1;
  } 
  else if (FactorialArr[num]) return FactorialArr[num]
  else if (FactorialArr[num-1]) {
   FactorialArr[num] = FactorialArr[num-1]* num;
   return FactorialArr[num]
  }
  else{
    FactorialArr[num ] = (GetFactorial(num-1, prime2)*num)%prime2;
  }
  return FactorialArr[num];
}

function strToCharCountingSort(str){
  return [...str].reduce((acc,el)=>{
    el = el.charCodeAt(0);
    acc[el]= acc[el]+1 ||1;
    return acc;
  },[]).filter( x => x != undefined)
}



function ExponentiationBySquaring(x,n){
  x=  BigInt(BigInt(x)%prime)
  n= BigInt(BigInt(n)%prime)
  if (n < BigInt(0))   {
     console.log('h')
    return(ExponentiationBySquaring(1 / x, -n)%prime);
  }
  else if (n == BigInt(0))   return  1;
  else if (n == BigInt(1))  return  x ;
  else if (n%BigInt(2) ==BigInt(0)) return (ExponentiationBySquaring(x * x,  n / BigInt(2))%prime);
  else  {
    let res =ExponentiationBySquaring(((x * x)%prime), (n - BigInt(1)) / BigInt(2))%prime;
    return (x * (res%prime));
  }

}



