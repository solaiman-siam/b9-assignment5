let seatContainer = document.getElementById("seat-container");
let couponBtn = document.getElementById("coupon-button");
let numberInput = document.getElementById('input-number')

let count = 0;
let totalPrice = 0;
seatContainer.addEventListener("click", (event) => {
  let perSeat = event.target;

  if (
    event.target.nodeName === "P" &&
    event.target.innerText.length === 2 &&
    event.target.classList[6] !== "ab"
  ) {
    event.target.classList.add("ab");
    if (count >= 3) {
      couponBtn.classList.remove("btn-disabled");
    }
    

    if (count === 4) {
      alert("You can sellect maximum 4 seat");
    } else {
      perSeat.style.backgroundColor = "#1DD100";
      perSeat.style.color = "white";
      count = count + 1;
      let seatInnerText = event.target.innerText;
      seatAddValueById("total-sellected-seat");
      seatRemoveValueById("seat-left");
      setElementById("ul-container", seatInnerText);
      setValueById("total-price", totalPrice);
      setValueById("grand-total-price", totalPrice);
    }
    numberInput.addEventListener('keyup', (event) => {
        if(count > 0 && event.target.value.length > 0 ){
            document.getElementById('next-button').classList.remove("btn-disabled")
        }
    })
    
    
  }
});

function seatAddValueById(elementId) {
  let element = document.getElementById(elementId);
  let sellectedTotalSeatConvertToNumber = parseInt(
    document.getElementById("total-sellected-seat").innerText
  );
  element.innerText = sellectedTotalSeatConvertToNumber + 1;
}
function seatRemoveValueById(elementId) {
  let element = document.getElementById(elementId);
  let seatLeftConvertToNumber = parseInt(
    document.getElementById("seat-left").innerText
  );
  element.innerText = seatLeftConvertToNumber - 1;
  totalPrice = totalPrice + 550;
}

function setValueById(elementId, value) {
  let element = document.getElementById(elementId);
  element.innerText = value;
}

function setElementById(a, b) {
  let ab = document.getElementById(a);

  let li = document.createElement("li");
  li.classList.add("flex", "justify-between");
  li.innerHTML = `<p>${b}</p>
    <p>Economoy</p>
    <p>550</p> `;
  ab.appendChild(li);
}

let couponInput = document.getElementById("coupon-input");

couponBtn.addEventListener("click", function () {
    if(count === 1 && numberInput.value.length === 1){
        document.getElementById('next-btn').classList.remove('btn-disabled')
    }
    
    console.log(numberInput.value.length)
  if (couponInput.value === "NEW15") {
    let discount = discountFifteen("grand-total-price");
    setDiscountElementById("coupon-container", discount);
    document.getElementById("coupon-button").classList.add("hidden");
    document.getElementById("coupon-input").classList.add("hidden");
  } else if (couponInput.value === "Couple 20") {
    let discount = discountTwenty("grand-total-price");
    setDiscountElementById("coupon-container", discount);
    document.getElementById("coupon-button").classList.add("hidden");
    document.getElementById("coupon-input").classList.add("hidden");
  } else {
    couponInput.value = "";
    alert("Please provide a valid coupon code");
  }
});

function abcd() {}

function discountFifteen(elementId) {
  let element = document.getElementById(elementId);

  let convertToNumber = parseInt(element.innerText);
  let discount = (convertToNumber * 15) / 100;

  let newGrandTotal = convertToNumber - discount;
  element.innerText = newGrandTotal;
  return discount;
}

function discountTwenty(elementId) {
  let element = document.getElementById(elementId);

  let convertToNumber = parseInt(element.innerText);
  let discount = (convertToNumber * 20) / 100;

  let newGrandTotal = convertToNumber - discount;
  element.innerText = newGrandTotal;
  return discount;
}

function setDiscountElementById(a, price) {
  let ab = document.getElementById(a);

  let li = document.createElement("li");
  li.classList.add("flex", "justify-between", "text-[#000]", "font-medium");
  li.innerHTML = `<p>Discount Price </p><p>BDT ${price}</p>`;
  ab.appendChild(li);
}

let value = numberInput.value

numberInput.addEventListener('keyup', (event) => {
    if(count > 0 && event.target.value.length > 0 ){
        document.getElementById('next-button').classList.remove("btn-disabled")
    }
})

