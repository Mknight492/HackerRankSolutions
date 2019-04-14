let Freq = new Map();
let MetaFreq = new Map();
let Answers = [];

function freqQuery(queries) {
  queries.forEach(querie => {
    switch (querie[0]) {
      case 1:
        addNumber(querie[1]);
        break;
      case 2:
        removeNumber(querie[1]);
        break;
      case 3:
        checkNumber(querie[1]) ? Answers.push(1) : Answers.push(0);
        break;
      default:
        break;
    }
  });

  return Answers;
}

function addNumber(num) {
  let count = Freq.get(num);
  count = count ? count : 0;

  //update the frequency of this number by on1
  Freq.set(num, count + 1);

  //find out how may numbers appeared as this particular number
  let metaCount = MetaFreq.get(count);

  //if there was a number reduce it by one
  if (metaCount) {
    MetaFreq.delete(count);
    if (metaCount > 1) {
      MetaFreq.set(count, metaCount - 1);
    }
  }
  //then if there was a numberCount greater than this increase it by one
  let metaCountPlus1 = MetaFreq.get(count + 1);
  metaCountPlus1 = metaCountPlus1 ? metaCountPlus1 : 0;
  MetaFreq.set(count + 1, metaCountPlus1 + 1);
}

function removeNumber(num) {
  let count = Freq.get(num);

  Freq.delete(num);
  if (count && count > 1) {
    Freq.set(num, count - 1);
  }

  if (count) {
    let metaCount = MetaFreq.get(count);
    MetaFreq.delete(count);

    if (metaCount > 1) {
      MetaFreq.set(count, metaCount - 1);
    }
    //also need to increase the count of the element below it
    let metaCountMinus1 = MetaFreq.get(count - 1);
    metaCountMinus1 = metaCountMinus1 ? metaCountMinus1 : 0;
    MetaFreq.set(count - 1, metaCountMinus1 + 1);
  }
}

function checkNumber(num) {
  return MetaFreq.get(num);
}
