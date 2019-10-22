var data;
var request = new XMLHttpRequest();

var oils = ["Clear Oil", "Sepia Oil", "Amber Oil", "Verdant Oil", "Teal Oil", "Azure Oil", "Violet Oil", "Crimson Oil", "Black Oil", "Opalescent Oil", "Silver Oil", "Golden Oil"];
var colours = ["Clear", "Sepia", "Amber", "Verdant", "Teal", "Azure", "Violet", "Crimson", "Black", "Opalescent", "Silver", "Golden"];
	
window.onload = function() {
	var requestURL = "https://raw.githubusercontent.com/cazibear/cazibear.github.io/master/oils/data.json";

	request.open("GET", requestURL);
	request.responseType = "json";
	request.send();
};

request.onload = function() {
	data = request.response;
};

function check() {
	var show = [];
	var output = document.querySelector("#output");
	var total = 0;


	// getting the user's oil's
	var inputAmounts = [];
	var inputs = document.querySelectorAll(".inputs input");
	for (i = 0; i < inputs.length; i++) {
		inputAmounts.push(parseInt(inputs[i].value));
	}
	

	// arranging the oil costs from the json
	var craftAmounts = [];
	data.forEach(function(item) {
		var anoint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		anoint[parseInt(item["oil1"])] += 1;
		anoint[parseInt(item["oil2"])] += 1;
		anoint[parseInt(item["oil3"])] += 1;
		craftAmounts.push(anoint.slice());
	});

	
	// checking the user's input against the json
	for (i = 0; i < craftAmounts.length; i++) {
		var toShow = true;
		
		for (j = 0; j < craftAmounts[i].length; j++) {
			if (craftAmounts[i][j] > inputAmounts[j]) {
				toShow = false;
				break;
			}
		}

		if (toShow) {
			show.push(data[i]);
		}
	}

	printData(show);
	console.log(show);
};

function removeTable() {
	var output = document.querySelector("#output");
	output.removeChild(output.firstChild);
};

function newElement(element, text) {
	var temp = document.createElement(element);
	temp.innerHTML = text;
	return temp;
};

function printData(printingData) {
	var table = document.createElement("table");
	

	// table header
	var header = document.createElement("tr");
	header.appendChild(newElement("th", "Name"));	
	header.appendChild(newElement("th", "Oil 1"));	
	header.appendChild(newElement("th", "Oil 2"));	
	header.appendChild(newElement("th", "Oil 3"));	
	header.appendChild(newElement("th", "Effect"));
	table.appendChild(header);

	for (i = 0; i < printingData.length; i++) {
		// table rows
		var row = document.createElement("tr");
		
		row.appendChild(newElement("td", printingData[i]["name"]));
		row.appendChild(newElement("td", colours[printingData[i]["oil1"]]));
		row.appendChild(newElement("td", colours[printingData[i]["oil2"]]));
		row.appendChild(newElement("td", colours[printingData[i]["oil3"]]));
		row.appendChild(newElement("td", printingData[i]["effect"]));
		
		table.appendChild(row);
	}
	output.appendChild(table); // display the table
}
