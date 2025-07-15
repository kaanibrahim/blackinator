function changeColour(element) {
    if (element.style.backgroundColor === "black") {
        element.style.backgroundColor = "white";
    }
    else {
        element.style.backgroundColor = "black";
    }
}

function refreshGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = "white";
    });
}

function changeGrids() {
    const fiveByFiveGrid = document.getElementById('fivebyfive-grid');
    const sixBySixGrid = document.getElementById('sixbysix-grid');
    const sixBySixButton = document.getElementById('sixbysix');

    if (fiveByFiveGrid.style.display === "none") {
        fiveByFiveGrid.style.display = "grid";
        sixBySixGrid.style.display = "none";
        sixBySixButton.innerHTML = "6x6";
    } else {
        fiveByFiveGrid.style.display = "none";
        sixBySixGrid.style.display = "grid";
        sixBySixButton.innerHTML = "5x5";
    }
    //refreshGrid(); // Reset colors when switching grids
}
