var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "Jsons/clientes.json", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);
        var divForInserting = document.getElementById("section_for_Clients");
       	for (var i = myObj.Clientes.length - 1; i >= 0; i--) {
       		var objInside = myObj.Clientes[i]

       	}


    }
};
