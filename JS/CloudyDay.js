const Cloud = (start, end, location, index) => ({
    start,
    end,
    location,
    index
  });
  
  function maximumPeople(p, x, y, r) {
    // Return the maximum number of people that will be in a sunny town after removing exactly one cloud.
  
    //p =population in each town
    //x = location of each town.
    //y = location of clouds
    //r = distance of clouds
  
    //need to put populations into a BST so spans can be calulated in log(n) time
  
  
  
  
    let Clouds = [];
    for (let i = 0; i < y.length; i++) {
      let location = y[i];
      let width = r[i];
  
      let startCloud = Cloud(true, false, location - width, i);
      let endOfCloud = Cloud(false, true, location + width, i);
      Clouds.push(startCloud);
      Clouds.push(endOfCloud);
    }
  
    Clouds.sort((a, b) => a.location - b.location);
  
    debugger;
  
    for(var i=0; i< Clouds.length; i++){
  
      if(Clouds[i].start){
        let total =0;
        let overlappingClouds = new Set();
  
        for(var j=i; j<Clouds.length; j++){
          if()
  
        }
  
      }
    }
  }
  