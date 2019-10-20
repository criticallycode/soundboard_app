// after the window is loaded, load in the sounds //

window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    // Get all the divs within the main pads container/class //
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    // hold the colors of the pads
    const colors = ["#ec0909", "#db6f09", "#d8c40b", "#74dd12", "#08d62b",
                    "#0cb1e4", "#070adb", "#800ae0", "#cf08d6", "#e40940"]

    // For all the pads define a function to handle the clicking //

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            // Reset sound to zero every time it is clicked
            sounds[index].currentTime = 0;
            sounds[index].play();
            // generate the bubbles, which references the index in the of the pads
            genBubbles(index);
        });
    });

    // Controls origin and movement of color bubbles, takes in an index
    const genBubbles = (index) => {
        // Generate an HTML element
        const bubble = document.createElement("div");
        // add the bubble div as a child of the visual
        visual.appendChild(bubble);
        //grab the index of the pad
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })    
    };

});

