function addimage(src) {
    var img = document.createElement("img");
    img.src = src;

    // Add event listener for right-click
    img.addEventListener("contextmenu", function (e) {
        e.preventDefault(); // Prevent default context menu
        rotateImage(img); // Call rotateImage function
    });
    
    document.getElementById("tabletop").appendChild(img);
     $(img).draggable({
        containment: "parent" // Constrain draggable within the bounds of its parent element
    });
}

// Function to rotate image by 90 degrees
function rotateImage(img) {
    var currentRotation = parseInt(img.getAttribute('data-rotation') || 0, 10); // Get current rotation or 0
    var newRotation = (currentRotation + 90) % 360; // Calculate new rotation (adding 90 degrees)
    img.style.transform = `rotate(${newRotation}deg)`; // Apply new rotation
    img.setAttribute('data-rotation', newRotation); // Update data-rotation attribute
}

document.addEventListener("DOMContentLoaded", function () {
    var name = new URLSearchParams(window.location.search).get('name')
    if (name) {
        for (var i = 0; i < 16; i++) {
            var src = 'static/pieces/' + name + '/' + ("0" + i).slice(-2) + '.png'; // Construct image source
            addimage(src); // Call addimage function with the constructed source
        }
    } else {
        document.getElementById("tabletop").remove();

        var link = document.createElement("a");
        link.href = 'index.html?name=duck.rabbit.0059'
        link.text = 'Duck Rabbit'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=marilyn.einstein.0408'
        link.text = 'Marilyn Einstein'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=marilyn.einstein.0488'
        link.text = 'Marilyn Einstein 2'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=plants.deer.1005'
        link.text = 'Plants Deer'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=plants.marilyn.0229'
        link.text = 'Plants Marilyn'
        document.body.appendChild(link);
    }
});