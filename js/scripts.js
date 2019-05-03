var total = 0

function player1(){}

function pet(){}

$(document).ready(function(){
	$(".btn-roll").click(function player1(){

		var kangogo = Math.floor(Math.random() * 6) + 1;
	parseInt($(".scores").text(kangogo));

	if(kangogo !==1){
		total += kangogo;
		parseInt($("kangogo"))
	}
	})
})
