var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "Jsons/Socios.json", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() 
{
    if (this.readyState == 4 && this.status == 200) 
    {
        var myObj = JSON.parse(this.responseText);
        var divForInserting = document.getElementById("section_for_Partners");
        for (var i = myObj.SociosDeNegocio.length - 1; i >= 0; i--) {	
        	var objInside = myObj.SociosDeNegocio[i]
       		var divContainer = document.createElement('div');
       		divContainer.className = "container down";
       		divForInserting.appendChild(divContainer);
       		var Name = document.createElement('h3');
       		Name.innerHTML = objInside.Name;
       		var Mojo = document.createElement('p');
       		Mojo.innerHTML = objInside.Mojo;
       		var img = document.createElement('img');
       		img.src = objInside.Logo;

       		divContainer.appendChild(Name);
       		divContainer.appendChild(Mojo);
       		divContainer.appendChild(img);
        }

	}

};
