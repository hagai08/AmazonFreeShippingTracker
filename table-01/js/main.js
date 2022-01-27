(function($) {

	"use strict";
	var table = document.createElement('table');
	table.setAttribute("class", "table");

	CreateHeader(table);
	CreateBody(table);

	document.getElementById("table-wrap").appendChild(table);

	function CreateHeader(table) {
		var thead = document.createElement('thead');   
		thead.setAttribute("class", "thead-primary");
		var tr = document.createElement('tr');
		
		var index = document.createElement('th');
		index.innerHTML = "#";
		tr.appendChild(index);
		
		var picture = document.createElement('th');
		picture.innerHTML = "Picture";
		tr.appendChild(picture);
		
		var product = document.createElement('th');
		product.innerHTML = "Product";
		tr.appendChild(product);
		
		var price = document.createElement('th');
		price.innerHTML = "Price";
		tr.appendChild(price);
		
		var shipping = document.createElement('th');
		shipping.innerHTML = "Free Shipping";
		tr.appendChild(shipping);

		thead.appendChild(tr);
		table.appendChild(thead);
	}

	function CreateBody(table) {
		var tbody = document.createElement('tbody');
		// fetch("data.json")
		// .then(response => {
   		// 	return response.json();
		// }).then(jsondata => console.log(jsondata));

		var text = readTextFile("file:///C:/Workspace/AmazonFreeShippingTracker/table-01/js/data.json");
		console.log(text);
		
		for (var i = 1; i < 4; i++){
			var tr = document.createElement('tr');
		
			var td1 = document.createElement('td');
			var td2 = document.createElement('td');
		
			var text1 = document.createTextNode('Text1');
			var text2 = document.createTextNode('Text2');
		
			td1.appendChild(text1);
			td2.appendChild(text2);
			tr.appendChild(td1);
			tr.appendChild(td2);
		
			table.appendChild(tr);
		}

		table.appendChild(tbody);

		function readTextFile(file)
		{
			var rawFile = new XMLHttpRequest();
			rawFile.open("GET", file, false);
			rawFile.onreadystatechange = function ()
			{
				if(rawFile.readyState === 4)
				{
					if(rawFile.status === 200 || rawFile.status == 0)
					{
						var allText = rawFile.responseText;
						return allText;
					}
				}
			}
			rawFile.send(null);
		}
	}
})(jQuery);
