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
        pressed.classList.add('selected');

        leftSeat('left-seat');

        selectedSeat('selected-seat');

        showPrice('ticket-and-price-area', seatName, 550);

        // console.log(event.target);
        disabledButton('selected-seat','coupon-input', 'submit-btn');

    })
}

// coupon input*****
document.getElementById('coupon-input').addEventListener('keyup', function(event){
    const couponInputValue = event.target.value;
    const newCoupon = "NEW15";
    const coupleCoupon = "COUPLE20";
    
    if (couponInputValue.toLowerCase() === newCoupon.toLowerCase()) {
        offerPriceNewCoupon('total-price', 'grand-price');
        addInvalidCouponCode('apply-button', 'alert-text');
    }
    else if(couponInputValue.toLowerCase() === coupleCoupon.toLowerCase()){
        offerPriceCoupleCoupon('total-price', 'grand-price');
        addInvalidCouponCode('apply-button', 'alert-text');
    }
    else{
        removeInvalidCouponCode('apply-button', 'alert-text');
    }
})

// modal section and submit button**
function submit(){
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');

    const footer = document.getElementById('footer-section');
    footer.classList.add('hidden');
    const main = document.getElementById('main-section');
    main.classList.add('hidden');
    const header = document.getElementById('header-section');
    header.classList.add('hidden');
}
