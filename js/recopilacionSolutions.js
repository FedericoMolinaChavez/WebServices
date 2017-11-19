var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "Jsons/Servicios.json", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() 
{
    if (this.readyState == 4 && this.status == 200) 
    {
        var myObj = JSON.parse(this.responseText);
        var divForInserting = document.getElementById("section_for_Solutions");
    	for (var i = myObj.Solutions.length - 1; i >= 0; i--) {
    		alert(myObj.Solutions[i]);
    		var divContainer = document.createElement('div');
    		divContainer.className = "container down";
       		divForInserting.appendChild(divContainer);
    		for (var i in myObj.Solutions[i])
    			{
    				var Mojo = document.createElement('p');
    				Mojo.innerHTML = i;
    				divContainer.appendChild(Mojo);
    			}
    	}
   }
  };