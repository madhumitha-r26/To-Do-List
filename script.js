var ul=document.getElementById("list-container");


function additem()
{	
	var listitem=document.createElement("li");
	listitem.innerHTML=input.value+"<button class='del' onclick='deleteitem(event)'>Delete</button>";
	ul.append(listitem);
	input.value="";
}

function deleteitem(event)
{
	event.target.parentElement.remove();
}

