const container_div = document.querySelector('.container');

const values_button = document.querySelectorAll('#myButton');

function main(squareMake, colorTrail) {
    values_button.forEach((button) => {
        button.addEventListener('click', () => {
            container_div.innerHTML = ''; 
            const rowColumn = button.value;
            const gridSize = Math.pow(rowColumn, 2);
            container_div.style.gridTemplateColumns = `repeat(${rowColumn}, 1fr)`;
            container_div.style.gridTemplateRows = `repeat(${rowColumn}, 1fr)`;
            squareMake(gridSize)
            colorTrail();
        });
    });
}

function squareMake(gridSize) {
    for (i=1; i<=gridSize; i++) {
        const newElement = document.createElement('div');
        // Step 3: Add a class to the new element
        newElement.classList.add('square');
    
        // Step 4: Append the new element to the parent element
        container_div.appendChild(newElement);
    }
};

function colorTrail() {
    const square_div = document.querySelectorAll('.square');
    
    square_div.forEach((div) => {
        
        div.addEventListener('mouseenter', () => {
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            const color = `rgb(${r}, ${g}, ${b})`;
            div.style.backgroundColor = color;
        });
    });
}

main(squareMake, colorTrail);