
$(document).ready(function() {
  $(".roll").click(function player1() {
    var kangogo = Math.floor(Math.random() * 6) + 1;
    parseInt($(".scores").text(kangogo));

    if (kangogo != 1) {
      total += kangogo;
      parseInt($(".peter").text(total));
    } else {
      total = 0;
      parseInt($(".peter").text(total));
    }
  });
});


/*the rules in the rule button*/
$(document).ready(function(){
	$(".coldplay").click(function(event){
		$(".worse").slideDown(10000);
	});
});



/*refresh browser*/
$(document).ready(function(){
$(".new").click(function() {
setTimeout(location.reload(true), t);
});
});



/*second player*/


$(document).ready(function() {
  $(".hold").click(function player2() {
    var ludut = Math.floor(Math.random() * 6) + 1;
    parseInt($(".scores3").text(ludut));

    if (ludut != 1) {
      total += ludut;
      parseInt($(".finali").text(total));
    } else {
      total = 0;
      parseInt($(".finali").text(total));
    }
  });
});
