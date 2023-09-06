var update = function(i) { 	
	// console.log('update: ', i);

	if (i < 3) {
	var r = parseInt(Math.random() * cards[i].length);

	while (currentText.includes(r)) {
		r = parseInt(Math.random() * cards[i].length);
	}

	currentText[i] = r;

		d3.select("#section-"+i+"-prompt").transition()
			.duration(2000)
			.style("opacity", 0)
			.transition()
			.duration(1000)
			.text(prompts[i])
			.style("opacity", 1);
		
		d3.select("#section-"+i+"-text").transition()
			.duration(2000)
			.style("opacity", 0)
			.transition()
			.duration(1000)
			.text(cards[i][r])
			.style("opacity", 1);
	}
	else {
		var r = parseInt(Math.random() * cards[i][0].length);

		while (currentText.includes(r)) {
			r = parseInt(Math.random() * cards[i][0].length);
		}

		currentText[i] = r;
		d3.select("#section-"+i+"-prompt").transition()
			.duration(2000)
			.style("opacity", 0)
			.transition()
			.duration(1000)
			.text(prompts[i])
			.style("opacity", 1);
		
		d3.select("#section-"+i+"-text").transition()
			.duration(2000)
			.style("opacity", 0)
			.transition()
			.duration(1000)
			.text(cards[i][0][r])
			.style("opacity", 1);
		d3.select("#section-"+i+"-description").transition()
			.duration(2000)
			.style("opacity", 0)
			.transition()
			.duration(1000)
			.text(cards[i][1][r])
			.style("opacity", 1);
	}
}



currentText = [];
currentText.length = 9;
nextupdate = 0;

window.onload = function() {
    // console.log('found', cards.length, 'cards');

	d3.select("#header-title")
		.text(header)
	
	for (let i = 0; i < cards.length; i++) {
		update(i);
	}
}

d3.select("#button")
	.on("click", function() {
		for (let i = 0; i < cards.length; i++) {
		update(i);
	}
})