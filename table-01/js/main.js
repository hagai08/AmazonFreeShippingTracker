
(function($) {

	"use strict";
	var table = document.createElement('table');
	table.setAttribute("class", "table");

	CreateHeader(table);
	CreateBody(table);

	document.getElementById("table-wrap").appendChild(table);

// 	fetch("file:///C:/Workspace/AmazonFreeShippingTracker/table-01/js/data.json")
//   .then(response => response.json())
//   .then(json => console.log(json));

//   var json = JSON.parse($.getJSON({'url': "file:///C:/Workspace/AmazonFreeShippingTracker/table-01/js/data.json", 'async': false}).responseText);

	function CreateHeader(table) {
		var thead = document.createElement('thead');   
		thead.setAttribute("class", "thead-primary");
		var tr = document.createElement('tr');
		
		var index = document.createElement('th');
		index.innerHTML = "#";
		tr.appendChild(index);
		
		var picture = document.createElement('th');
		picture.innerHTML = "Product";
		tr.appendChild(picture);
		
		var product = document.createElement('th');
		product.innerHTML = "Picture";
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

		for (var i = 1; i < 4; i++){
			var tr = document.createElement('tr');
		
			var td1 = document.createElement('td');
			var td2 = document.createElement('td');
			var td3 = document.createElement('td');
			var td4 = document.createElement('td');
			var td5 = document.createElement('td');
		
			var text1 = document.createTextNode('1');
			var text2 = document.createTextNode('Name');
			var text3 = document.createTextNode('45.6$');
			var text4 = document.createTextNode('www.amazon.com');
			
			var oImg = document.createElement('img');
			oImg.src = "\\images\\doll.jpg";
			oImg.setAttribute('height', '100px');
			oImg.setAttribute('width', '100px');

			td1.appendChild(text1);
			td2.appendChild(text2);
			td3.appendChild(oImg);
			td4.appendChild(text3);
			td5.appendChild(text4);

			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);
		
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
