function isUnique(str) {
    return new Set(str).size === str.length;
  }
  console.log(isUnique('abc')); // Should return true
  console.log(isUnique('aabc')); // Should return false


  function isPermutation(str1, str2){
    let countAmount = 0;
      if(str1.length !== str2.length){
            countAmount = countAmount + 0;
      }else{
      for(let i = 0; i < str1.length; i++){
          if(str2.includes(str1[i])){
              countAmount = countAmount + 1;
          } else{
              countAmount = countAmount + 0;
          }
      }
  }
  if(countAmount === str1.length){
    console.log("It's a permutation")
  }else{
    console.log("It's not a permutation")
  }
  
  }
  
  
isPermutation("abcd", "dbca")
isPermutation("aad", "db")
isPermutation("abcd", "kbca")