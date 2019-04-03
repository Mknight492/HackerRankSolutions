function bonetrousle(n, k, b) {
    debugger;
    n = BigInt(n);
    k = BigInt(k)
    b= BigInt(b)
  //n= number of stick
  //k= number of boxes of pasta
  //b= number of boxes to buy
  var retArr = []; 
  
  if(b==1){
      if(k>=n) {
        retArr.push(n)
      }
      else retArr.push(-1);
  
      return retArr;
    } 
  
    let minVal = b*(b+BigInt(1))/ BigInt(2);
    let maxVal =b*(BigInt(2)*k -b+ BigInt(1))/BigInt(2);
  
  
    if(n>maxVal || n <minVal){
      retArr.push(-1)
      return retArr;
    }
  
    for(let i=1; i<=b ; i++){
      retArr.push(BigInt(i))
    }
  
    let valToIncreaseBy =(n - minVal)/b;
    let remainder = (n-minVal)%b;
  
    retArr=retArr.map(el => el+= valToIncreaseBy);
  
    for(let i = 0; i< remainder; i++){
      retArr[retArr.length-1-i] ++;
    }
    
    return retArr;
  
  }