var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "Jsons/videos.json", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() 
{
    if (this.readyState == 4 && this.status == 200) 
    {
        var myObj = JSON.parse(this.responseText);
        
         var num = 1;
         var divForInserting = document.getElementById(num);
        for (var i = myObj.videos.length - 1; i >= 0; i--) {
          var a = myObj.videos[i]
          var video = document.createElement("iframe");
          video.height = "100%";
          video.width = "100%";
          video.src = a.url;
          divForInserting.appendChild(video);
          num += 1;
          divForInserting = document.getElementById(num);
        }
        

     

       	}


    
};