$(document).ready(function() {
    $('#shuffle').click(function(event) {
      event.preventDefault();
      var text = $('#text').val();
      var words = text.split(' ');
      words.sort(function() 
      { return 0.5 - Math.random() });
      var shuffledText = words.join(' ');
      $('#result').text(shuffledText);
    });
  });

  