
function lilysHomework(arr){
  
    let arrCopy = [...arr]; 
    let sortedArr = [...arr].sort((a,b) => a-b);
    let sortedArr2 = reverseArray(sortedArr);
  
  
    var count= CountNumberSwaps(arr, sortedArr)
    var count2=CountNumberSwaps(arrCopy, sortedArr2)
  
    return Math.min(count, count2);
  }
  
  
  function CountNumberSwaps(arr, sortedArr){
  
    let count =0;
  
    const arrValueToArrayIndex = new Map();
   
    arr.forEach((element, i) => {
      arrValueToArrayIndex.set(element, i)
     })
    
    for(var i=0; i<arr.length; i++){
  
      if(arr[i] != sortedArr[i]){
  
        //get index of where element should be
        var IndexToSwap = arrValueToArrayIndex.get(sortedArr[i])
  
        //set the current element to that index
        arrValueToArrayIndex.set(arr[i], IndexToSwap);
  
        let temp = arr[i];
        arr[i] = arr[IndexToSwap];
        arr[IndexToSwap] = temp;
  
        count++;
  
      }
    }
    return count;
  }
  
  
  
  
  
  
  function reverseArray(arr) {
  
    let reversedArray = [];
    for (var i = 0; i < arr.length; i++) {
        reversedArray[i] = arr[arr.length - i - 1];
    }
  
    return reversedArray;
  }