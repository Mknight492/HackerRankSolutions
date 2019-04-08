function gridlandMetro2(n, m, k, track) {
  const Rows = [];
  for (var i = 0; i < n; i++) {
    Rows[i] = [];
  }

  let total = BigInt(0);
  let currentTotal = 0;
  let NumberOfRows = 0; //need some tuning

  if (track[0]) {
    let currentRow = track[0][0] - 1;
    let curStart = track[0][1] - 1;
    let curEnd = track[0][2] - 1;

    let runningTotal = 0;

    for (let i = 1; i <= track.length; i++) {
      if (i == track.length) {
        total += BigInt(curEnd - curStart + 1) || 0;
        break;
      }

      let row = track[i][0] - 1;
      let start = track[i][1] - 1;
      let end = track[i][2] - 1;
      //debugger;
      if (row != currentRow) {
        NumberOfRows++;
        if (currentRow != row) total += BigInt(curEnd - curStart + 1) || 0;

        curStart = start;
        curEnd = end;
        currentRow = row;
      } else if (start <= curEnd) {
        curEnd = Math.max(end, curEnd);
      } else {
        total += BigInt(curEnd - curStart + 1);
        currentRow += curEnd - curStart + 1;

        curStart = start;
        curEnd = end;
      }
    }
  }

  let numberOfRowsWithoutTrack = n - NumberOfRows;
  let totalSpots = BigInt(n * m) - total;

  return totalSpots;
}
