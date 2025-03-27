document.getElementById("them").addEventListener('click', function(event) {
    event.preventDefault();
    
    const colors = ['lightblue', 'lightgreen', 'lightpink', 'lavender', 'lightyellow', 'lightcyan','red'];
    
    const currentColor = document.body.style.backgroundColor;
    
    let currentIndex = colors.indexOf(currentColor);
    if (currentIndex === -1) currentIndex = 0;
    
    const bgColour = (currentIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[bgColour];
});

