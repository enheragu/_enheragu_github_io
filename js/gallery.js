function myFunction(imgs, src_big) 
{
  var container = document.getElementById("imageviewr");
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = src_big;//imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;


  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
  // Same with the container id
  container.style.display = "block";

  // Get the <span> element that closes the container
  var span = document.getElementsByClassName("closebtn")[0];

  // When the user clicks on <span> (x), close the container
  span.onclick = function() {
    container.style.display = "none";
    span.parentElement.style.display='none'
  }
}

function fade(self_obj) 
{
  self_obj.style.display = "none";
}