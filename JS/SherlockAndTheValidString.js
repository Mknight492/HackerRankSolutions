function isValid(arr){
    arr= [...arr];
    let countingSort= strToCharCountingSort(arr)
  
    let metaCountingSort = CountingSortCountingSort(countingSort);
  
    var NumberOfOnes = metaCountingSort[1] ||0;
   var NumberOfTwos = metaCountingSort[2];
    var firstM;
    var secondM;
  
    for(var i =2; i < metaCountingSort.length; i++){
      if(metaCountingSort[i] != null && firstM == null){
        firstM = metaCountingSort[i];
        secondM = metaCountingSort[i+1]
        i++;
      }
      else if(metaCountingSort[i] != null && firstM !== null){
        return "NO" // a match requiring more than 1 letter to be removed was found
      }
    }
  // debugger;
    if(secondM == null && NumberOfOnes<=1 || NumberOfOnes == 0 && secondM ==1 || NumberOfTwos ==1 && secondM == null) return "YES"
    return "NO"
  
  }
  
  function strToCharCountingSort(str){
    return [...str].reduce((acc,el)=>{
      el = el.charCodeAt(0);
      acc[el]= acc[el]+1 ||1;
      return acc;
    },[])
  }
  
  function CountingSortCountingSort(arr){
    return arr.reduce((acc,el) => {
      if(el === null) return acc;
      acc[el] = acc[el]+1 ||1
      return acc
    },[])
  }
  