
var total = 0

// First, tell us your name
let yourName = "Abraham Gonzlez" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0     // Chocolate Chip
let sugar = 0     // Sugar Sprinkle



// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
// ADDING GINGERBREAD COOKIES
document.getElementById('add-gb').addEventListener('click', function() {
    
    gb++;
    
    const qtygb = document.querySelector('#qty-gb');
    qtygb.textContent = gb;

    total = gb + cc + sugar;
    const qtytotal = document.querySelector('#qty-total')
    qtytotal.textContent = total;

})

// SUBTRACTING GINGERBREAD COOKIES
document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb > 0) {
        gb--;
    }
    const qtygb = document.querySelector('#qty-gb');
    qtygb.textContent = gb;

    total = gb + cc + sugar;
    const qtytotal = document.querySelector('#qty-total')
    qtytotal.textContent = total;
})

// ADDING CHOCOLATE CHIP COOKIES 
document.getElementById('add-cc').addEventListener('click', function() {
    cc++;
    const qtycc = document.querySelector('#qty-cc');
    qtycc.textContent = cc;

    total = gb + cc + sugar;
    const qtytotal = document.querySelector('#qty-total')
    qtytotal.textContent = total;

})

//SUBTRACTING CHOCOLATE CHIP COOKIES
document.getElementById('minus-cc').addEventListener('click', function() {
    if(cc > 0) {
        cc--;
    }
    const qtycc = document.querySelector('#qty-cc');
    qtycc.textContent = cc;

    total = gb + cc + sugar;
    const qtytotal = document.querySelector('#qty-total')
    qtytotal.textContent = total;
})

//ADDING SUGAR SPRINKLE COOKIES
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++;
    const qtysugar = document.querySelector('#qty-sugar');
    qtysugar.textContent = sugar;

    total = gb + cc + sugar;
    const qtytotal = document.querySelector('#qty-total')
    qtytotal.textContent = total;
})

// SUBTRACING SUGAR SPRINKLE COOKIES
document.getElementById('minus-sugar').addEventListener('click', function() {
    if(sugar > 0) {
        sugar--;
    }
    const qtysugar = document.querySelector('#qty-sugar');
    qtysugar.textContent = sugar;

    total = gb + cc + sugar;
    const qtytotal = document.querySelector('#qty-total')
    qtytotal.textContent = total;

})




