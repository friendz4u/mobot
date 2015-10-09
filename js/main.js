$.get("http://loalhost/mobot/get_move.php", function(data){
  $('#fileData').html(data);
  alert(data);
});