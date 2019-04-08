function palindromeIndex(s) {

    if(isPalindrome(s)) return -1;
  
    var indexToRemove = -1;
  
    var S1 =[...s];
    var S2= [...s];
  
    for (var i = 0; i < s.length / 2; i++){
        if (s[i] != s[s.length - 1 - i]) {
          S1.splice(i,1);
          S2.splice(s.length-1-i,1);
          if(isPalindrome(S1))return i
          else if (isPalindrome(S2)) return s.length-1-i;
          else return -1;
        }
    }
    return indexToRemove;
  }
  
  function isPalindrome(str){
    for (var i = 0; i < str.length / 2; i++){
      if (str[i] != str[str.length - 1 - i]) return false;
      
    }
    return true;
  }