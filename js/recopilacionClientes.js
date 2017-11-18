var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "Jsons/clientes.json", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() 
{
    if (this.readyState == 4 && this.status == 200) 
    {
        var myObj = JSON.parse(this.responseText);
        var divForInserting = document.getElementById("section_for_Partners");
       	for (var i = myObj.Clientes.length - 1; i >= 0; i--) {
       		var objInside = myObj.Clientes[i]
       		var divContainer = document.createElement('div');
       		divContainer.className = "container down";
       		divForInserting.appendChild(divContainer);

       		var id = document.createElement('p');
       		id.innerHTML = objInside.id;
       		var Name = document.createElement('h3');
       		Name.innerHTML = objInside.Name;
       		var Description = document.createElement('p');
       		Description.innerHTML = objInside.Description;
       		var image = document.createElement('img');
       		image.src = objInside.image;
       		divContainer.appendChild(id);
       		divContainer.appendChild(Name);
       		divContainer.appendChild(Description);
       		divContainer.appendChild(image);

       	}


    }
};
