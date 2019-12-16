$('#rolling').hover(function() {
  
    btnTimeID = setTimeout(function() {
      
      // We are using the math object to randomly pick a number between 1 - 11, and then applying the formula (5n-3)5 to this number, which leaves us with a randomly selected number that is applied to the <ul> (i.e. -185) and corresponds to the position of a word (or <li> element, i.e. "I'm Feeling Curious").
    var phraseNumber = Math.floor(Math.random() * 10) +1
    if (phraseNumber === 5) {
      phraseNumber = 10
    }
    var pos = phraseNumber * -(29);
    var adjustedWidth = [
      145,
      145,
      165,
      150,
      150,
      140,
      155,
      165,
      150,
      155,
      145,
    ];
      
      $('#rolling div').animate({'top':pos + 'px'}, 500);
      
      // Change the width of the button to fit the currently selected word.
        
      $('#rolling').animate({'width':adjustedWidth[phraseNumber] + 'px'}, 500);
      
    },200);
  }, function() {
    
    clearTimeout(btnTimeID);
    
    setTimeout(function() {
      $('#rolling div').animate({'top':'-145px'}, 100); // this is the original position
      $('#rolling').animate({'width':'140px'}, 100); // reset the original width of the button
    },200);
  });