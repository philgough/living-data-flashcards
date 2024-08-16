var update = function(i) { 	
	console.log('update: ', i);
	var j = i+1
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

	d3.select("#section-"+j+"-text").transition()
		.duration(2000)
		.style("opacity", 0)
		.transition()
		.duration(1000)
		.text(cards[j][r])
		.style("opacity", 1);
}


currentText = [];
currentText.length = 9;
nextupdate = 0;

window.onload = function() {
    console.log('Loaded..');


	update(0)
	// setInterval(function(){update(nextupdate % 9); nextupdate++}, 4000);


}

d3.select("#button")
	.on("click", function() {
		update(0);
	}
)