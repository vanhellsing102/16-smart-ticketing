// but tickets to scroll main section*******
function buyTicket(){
    window.scrollBy(0,1990);
}


// select seat ***********
const selectSeat = document.querySelectorAll('.seat-pattern');
for (const seat of selectSeat) {
    seat.addEventListener('click', function(event){

        const seatSelectColor = event.target;
        const seatName = seatSelectColor.innerText;
        const seatNameToLowerCase = seatName.toLowerCase();
        
        const pressed = document.getElementById(seatNameToLowerCase);
        // console.log(pressed);
        pressed.classList.add('selected');

        
        leftSeat('left-seat');

        selectedSeat('selected-seat');

        showPrice('ticket-and-price-area', seatName, 550);

        // console.log(event.target);
        disabledButton('selected-seat','coupon-input');

    })
}

// coupon input*****

document.getElementById('coupon-input').addEventListener('keyup', function(event){
    const couponInputValue = event.target.value;
    const newCoupon = "NEW15";
    const coupleCoupon = "COUPLE20"
    
    if (couponInputValue.toLowerCase() === newCoupon.toLowerCase()) {
        offerPrice('total-price', 'grand-price');
    }
    else if(couponInputValue.toLowerCase() === coupleCoupon.toLowerCase()){
        
    }
})
