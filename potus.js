// 2012 & 2016

var dyn = d3.select("#dynamic");
var per = [["Percent in 2012", -6.8], ["Percent in 2016", -3.3]]; // perc
var surdef = [["Surplus in 2012", -1.04], ["Surplus in 2016", -.552]]; // tril
var gdp = [["GDP in 2012", 15.3], ["GDP in 2016", 16.5]]; // tril
var rev = [["Revenue in 2012", 2.34], ["Revenue in 2016", 2.99]]; // tril
var spend = [["Spending in 2012", 3.37], ["Spending in 2016", 3.54]]; // tril
var mand = [["Mandatory in 2012", 2.15], ["Mandatory in 2016", 2.44]]; // tril
var disc = [["Discretionary in 2012", 1.23], ["Discretionary in 2016", 1.1]]; // tril
var debt = [["Debt in 2012", 15.3], ["Debt in 2016", 17.4]]; // tril

var makeBars = function(arr) {
    d3.selectAll("div > *").remove();
    //console.log("!!!!");
    
    dyn.selectAll("div")
	.data(arr)
	.enter()
	.append("div")
	.style("width", function(d) {
	    d1 = Math.abs(d[1]);
	    if (d1 < 5){
		return d1*140 + "px";
	    } else if (d1 < 10) {
		return d1*80 + "px";
	    } else {
		return d1*30 + "px";
	    }
	    })
        .style("background-color", function(d) {
	    if (d[1] < 0) {
		return "red";
	    }
	    else {
		return "steelblue";
	    }
	    })
	.text( function(d) {
	    return d[0] + ": "  + d[1];
	});
};


var perf = function() {
    makeBars(per);
};

var surdeff = function() {
    makeBars(surdef);
};

var gdpf = function() {
    makeBars(gdp);
};

var revf = function() {
    makeBars(rev);
};

var spendf = function() {
    makeBars(spend);
};

var mandf = function() {
    makeBars(mand);
};

var discf = function() {
    makeBars(disc);
};

var debtf = function() {
    makeBars(debt);
};

/*
var transitionTest = function( scale ) {
    dyn.selectAll("div")
	.data(info)
	.transition()
	.duration(2000)
	.style("width", function(d) {
	    return d * scale + "px";
	});
};
*/

var per_btn = document.getElementById("per");
per_btn.addEventListener("click", perf );

var surdef_btn = document.getElementById("surdef");
surdef_btn.addEventListener("click", surdeff );

var gdp_btn = document.getElementById("gdp");
gdp_btn.addEventListener("click", gdpf );

var rev_btn = document.getElementById("rev");
rev_btn.addEventListener("click", revf );

var spend_btn = document.getElementById("spend");
spend_btn.addEventListener("click", spendf );

var mand_btn = document.getElementById("mand");
mand_btn.addEventListener("click", mandf );

var disc_btn = document.getElementById("disc");
disc_btn.addEventListener("click", discf );

var debt_btn = document.getElementById("debt");
debt_btn.addEventListener("click", debtf );
