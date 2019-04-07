const GeneToInt = char => {
  if (char === "A") return 0;
  else if (char === "C") return 1;
  else if (char === "G") return 2;
  else if (char === "T") return 3;
};

const steadyGene = str => {
  let Arr = [0, 0, 0, 0];
  let MaxCount = Math.floor(str.length / 4);

  for (var i = 0; i < str.length; i++) {
    let nextGene = GeneToInt(str[i]);
    Arr[nextGene]++;
  }

  let RightBound = 0;

  for (var i = 0; i < str.length; i++) {
    let nextGene = GeneToInt(str[i]);
    Arr[nextGene]--;

    let valid = true;
    for (var j = 0; j < Arr.length; j++) {
      if (Arr[j] > MaxCount) {
        valid = false;
      }
    }
    if (valid) {
      RightBound = i;
      break;
    }
  }

  let min = RightBound;
  let LeftBound = 0;
  while (RightBound < str.length - 1) {
    let nextGene = GeneToInt(str[LeftBound]);
    if (Arr[nextGene] < MaxCount) {
      LeftBound++;
      Arr[nextGene]++;
      if (RightBound - LeftBound < min) min = RightBound - LeftBound;
    } else {
      nextGene = GeneToInt(str[RightBound + 1]);
      Arr[nextGene]--;
      RightBound++;
    }
  }

  return min + 1;
};
