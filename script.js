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
        link.text = 'duck.rabbit.0059'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=duck.rabbit.0237'
        link.text = 'duck.rabbit.0237'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=duck.rabbit.0413'
        link.text = 'duck.rabbit.0413'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=fruit.monkey.0208'
        link.text = 'fruit.monkey.0208'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=fruit.monkey.0235'
        link.text = 'fruit.monkey.0235'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=kitten.puppy.0164'
        link.text = 'kitten.puppy.0164'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=kitten.puppy.0510'
        link.text = 'kitten.puppy.0510'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=kitten.puppy.0645'
        link.text = 'kitten.puppy.0645'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=kitten.puppy.0754'
        link.text = 'kitten.puppy.0754'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=marilyn.einstein.0344'
        link.text = 'marilyn.einstein.0344'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=marilyn.einstein.0744'
        link.text = 'marilyn.einstein.0744'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=plants.deer.1005'
        link.text = 'plants.deer.1005'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=plants.einstein.0403'
        link.text = 'plants.einstein.0403'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=plants.marilyn.0189'
        link.text = 'plants.marilyn.0189'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));

        var link = document.createElement("a");
        link.href = 'index.html?name=washington.lincoln.0274'
        link.text = 'washington.lincoln.0274'
        document.body.appendChild(link);
        document.body.appendChild(document.createElement("br"));
    }
});