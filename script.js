const container_div = document.querySelector('.container');

// const values_button = document.querySelector('#myButton');

let gridSize = 16*16;

for (i=1; i<=gridSize; i++) {
    const newElement = document.createElement('div');
    // Step 3: Add a class to the new element
    newElement.classList.add('square');

    // Step 4: Append the new element to the parent element
    container_div.appendChild(newElement);
}





