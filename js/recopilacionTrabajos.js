var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
       var divForInserting = document.getElementById("section_for_Work_ops");
       alert(myObj.Trabajos.length)
       for (var i = myObj.Trabajos.length - 1; i >= 0; i--) {
       	
       	var objectInsedOf = myObj.Trabajos[i]
       	var node = document.createElement('div');
       	divForInserting.appendChild(node)
       	var namec = document.createElement('h4');
       	namec.innerHTML = objectInsedOf.Name;
       	node.appendChild(namec);
       	var image = document.createElement('img');
       	image.src = objectInsedOf.image;
       	node.appendChild(image)
       }
    }
};
xmlhttp.open("GET", "Jsons/trabajos.json", true);
xmlhttp.send();