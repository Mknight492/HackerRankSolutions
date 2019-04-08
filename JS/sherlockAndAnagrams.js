
let tstst = "cdcd"

export function testFunction(){
  
  document.getElementById("A").innerHTML = sherlockAndAnagrams(tstst)
  //document.getElementById("B").innerHTML =answerQuery(2,3)
  
  //console.log(bonetrousle(10, 3, 3));
}

function sherlockAndAnagrams(str){

  let CSM = getCountSrtMat(str);

  let CSL =[];

  let count =0;


  let SetIsnt = new Map();

  for(var i=0; i<str.length;i++){
  SetIsnt.set(CSM[i].join(','),1)
  }
  debugger;

  for(var i=1; i<str.length;i++){
    for(var j=i; j<str.length; j++){
      let CurrentCS = CSM[j]
      let recentLtr = str[i-1].charCodeAt(0)-97
      CurrentCS[recentLtr]--;
      let wrd = CurrentCS.join(',')
      
      let valueInMap = SetIsnt.get(wrd)
      
      if(valueInMap){
        SetIsnt.set(wrd, (valueInMap+1))
      } 
      else SetIsnt.set(wrd,1)
    }

  }

  let FactorArr =[0,1]
  for(let i =2; i<=100; i++){
    FactorArr[i] = FactorArr[i-1]+i;
  }

  let b = SetIsnt.values();
  debugger;
  [...b].map(el =>{
    if(el !==1)
    count += FactorArr[el-1]
  })

  

  return count;
}



function getCountSrtMat(str){
  let CountingSortMatrix =[];
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
  return CountingSortMatrix;
}


  