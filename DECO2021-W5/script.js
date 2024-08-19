var update = function(i) { 	
	console.log('update: ', i);

	var r = parseInt(Math.random() * cards[i].length);

	while (currentText.includes(r)) {
		r = parseInt(Math.random() * cards[i].length);
		console.log(r);
	}

	currentText[i] = r;


	d3.select("#section-"+i+"-text").transition()
		.duration(2000)
		.style("opacity", 0)
		.transition()
		.duration(1000)
		.text(cards[i][r])
		.style("opacity", 1);
}


currentText = [];
currentText.length = 9;
nextupdate = 0;

window.onload = function() {
    console.log('Loaded..');


	for (let i = 0; i < cards.length; i++) {
		update(i);
	}
	// setInterval(function(){update(nextupdate % 9); nextupdate++}, 4000);


}

d3.select("#button")
	.on("click", function() {
		for (let i = 0; i < cards.length; i++) {
		update(i);
	}
})