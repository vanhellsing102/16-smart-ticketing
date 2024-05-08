function leftSeat(element){
    const leftSeat = document.getElementById(element);
    const leftSeatInnerText = leftSeat.innerText;
    const leftSeatToNumber = parseInt(leftSeatInnerText);
    // console.log(leftSeatToNumber);
    
    const returnValue = leftSeatToNumber - 1;  
    leftSeat.innerText = returnValue;
}



function selectedSeat(element){
    const selectSeat = document.getElementById(element);
    const selectedSeatInnerText = selectSeat.innerText;
    const selectedSeatToNumber = parseInt(selectedSeatInnerText);
    // console.log(selectedSeatToNumber);
    const returnValue = selectedSeatToNumber + 1;
    selectSeat.innerText = returnValue;
}

function showPrice(elementId, innerText, price){
    const priceArea = document.getElementById(elementId);

    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'items-center','px-3','py-1');
    priceArea.appendChild(div);

    
    const p = document.createElement('p');
    p.innerText = innerText;
    
    const p2 = document.createElement('p');
    p2.innerText = 'economy';
    
    const p3 = document.createElement('p');
    p3.innerText = price;
    
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3); 

    const oldPrice = document.getElementById('total-price');
    const oldPriceInnerText = oldPrice.innerText;
    const oldPriceToNumber = parseInt(oldPriceInnerText);
    const priceToNumber = parseInt(p3.innerText);
    const newPrice = oldPriceToNumber + priceToNumber;
    // console.log(newPrice);
    oldPrice.innerText = newPrice; 
}

// disabled input*******
function disabledButton(elementId, elementId2){
    const selectedSeat = document.getElementById(elementId);
    const selectedSeatInnerText = selectedSeat.innerText;
    const selectedSeatToNumber = parseInt(selectedSeatInnerText);
    
    const disabledInput = document.getElementById(elementId2);

    if (selectedSeatToNumber === 4) {
        disabledInput.removeAttribute('disabled');
    }
}


// offer price******

function offerPrice(elementId, elementId2){
    const totalPrice = document.getElementById(elementId);
    const totalPriceInnerText = totalPrice.innerText;
    const totalPriceToNumber = parseInt(totalPriceInnerText);

    const grandPrice = document.getElementById(elementId2);

}