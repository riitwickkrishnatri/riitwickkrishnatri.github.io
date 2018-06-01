function myfunction()
{

        $("#copy").clone().prependTo("#to");
    
        var author=prompt("enter author name","Riitwick Krishnatri");
        $("#author").text(author);
        var image=prompt("enter url","https://placeimg.com/500/333/nature");
        $("#post").attr("src",image)
        var avatar=prompt("enter url","https://placeimg.com/128/128/people");
        $("#avatar").css("background-image","url("+avatar+")");
        var caption=prompt("enter caption","Nature in Captivity");
        $("#caption").text(caption);
        

    
  
   
}