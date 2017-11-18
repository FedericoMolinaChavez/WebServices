var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var divForInserting = document.getElementById("section_for_Clients");
       	alert(myObj.Clientes.legth)
       	for (var i = myObj.Clientes.length - 1; i >= 0; i--) {
       		var objInside = myObj.Clientes[i]
       		
       	}


    }
};
xmlhttp.open("GET", "Jsons/Clientes.json", true);
xmlhttp.send();