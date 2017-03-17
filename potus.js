// 2012 - 2016

var dyn = d3.select("#dynamic");
var per = [-6.8,-3.3]; // perc
var surdef = [-1.04,-.552]; // tril
var gdp = [15.3,16.5]; // tril
var rev = [2.34,2.99]; // tril
var spend = [3.37,3.54]; // tril
var mand = [2.15,2.44]; // tril
var disc = [1.23,1.1]; // tril
var debt = [15.3,17.4]; // tril

var makeBars = function(arr) {
    
    dyn.selectAll("div")
	.data(arr)
	.enter()
	.append("div")
	.style("width", function(d) {
	    return d*10 + "px";
	})
	.text( function(d) {
	    return d;
	});
};

// makeBars(per);
// makeBars(surdef);
makeBars(gdp);
// makeBars(rev);
// makeBars(spend);
// makeBars(mand);
// makeBars(disc);
// makeBars(debt);

var transitionTest = function( scale ) {
    dyn.selectAll("div")
	.data(info)
	.transition()
	.duration(2000)
	.style("width", function(d) {
	    return d * scale + "px";
	});
};

