var data;
var request = new XMLHttpRequest();
var requestURL = "https://raw.githubusercontent.com/cazibear/cazibear.github.io/master/oils/data.json";

var oils = ["Clear Oil", "Sepia Oil", "Amber Oil", "Verdant Oil",
		"Teal Oil", "Azure Oil", "Violet Oil", "Crimson Oil",
		"Black Oil", "Opalescent Oil", "Silver Oil", "Golden Oil"];
var colours = ["Clear", "Sepia", "Amber", "Verdant",
		"Teal", "Azure", "Violet", "Crimson",
		"Black", "Opalescent", "Silver", "Golden"];

window.onload = function() {
	request.open("GET", requestURL);
	request.responseType = "json";
	request.send();
};

request.onload = function() {
	data = request.response;
};

function a() {
	var output = document.querySelector("#output");
	var total = 0;

	output.innerHTML = "";

	/* Displaying all json */
	//*
	var table = document.createElement("table");
	
	var header = document.createElement("tr");
	header.appendChild(newElement("th", "Name"));	
	header.appendChild(newElement("th", "Oil 1"));	
	header.appendChild(newElement("th", "Oil 2"));	
	header.appendChild(newElement("th", "Oil 3"));	
	header.appendChild(newElement("th", "Effect"));
	table.appendChild(header);


	for (i = 0; i < data.length; i++) {
		var row = document.createElement("tr");
		
		row.appendChild(newElement("td", data[i]["name"]));
		row.appendChild(newElement("td", data[i]["oil1"]));
		row.appendChild(newElement("td", data[i]["oil2"]));
		row.appendChild(newElement("td", data[i]["oil3"]));
		row.appendChild(newElement("td", data[i]["effect"]));
		
		
		table.appendChild(row);
	}
	output.appendChild(table);
	//*/

};

function newElement(element, text) {
	var temp = document.createElement(element);
	temp.innerHTML = text;
	return temp;
};
