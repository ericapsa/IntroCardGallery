var name = "This is Erica"
var i = 0;

// Function will type the selected text
function typeName() {
  if (i<name.length){
    // steals html item from my html thru ID
    var nameHeader = document.getElementById("nametag");
    // prints out to the console
    console.log(nameHeader);
    nameHeader.innerHTML = nameHeader.innerHTML + name.charAt(i);
    i = i +1;
    // How long the type function will run
    setTimeout(typeName,100);
  }
}

window.onload = typeName;
