function longestCommonSS(str1,str2){

    const Matrix = [];
  
    for(var i = 0; i<=str1.length; i++){
      Matrix[i] =[0];
    }
    for(var j =0; j<=str2.length;j++){
      Matrix[0][j]=0;
    }
  
    for(var i = 1; i<= str1.length; i++){
      for(var j =1; j<= str2.length; j++){
        if(str1[i-1] === str2[j-1]) Matrix[i][j] = Matrix[i-1][j-1]+1;
        else Matrix[i][j] = Math.max(Matrix[i-1][j] || 0, Matrix[i][j-1]||0)
      }
    }
  
    return Matrix[str1.length][str2.length]
  }
  