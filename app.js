// ARRAY WITH ALL WATCHES
var allWatches = [
    watchOne = {
        color: 'silver',
        brand: 'Rolex',
        model: 'GMT Master',
        wristband: 'stainless steel',
        size: 40,
        price_new: 9240,
        price_old: 11000,
        availability: 'in',
        image: 'img/Rolex_GMT_Master.jpeg'
    },
    watchTwo = {
        color: 'silver',
        brand: 'Rolex',
        model: 'Chosmograph Daytona',
        wristband: 'stainless steel',
        size: 40,
        price_new: 25490,
        price_old: 26700,
        availability: 'in',
        image: 'img/Rolex_Chosmograph_Daytona.jpeg'
    },
    watchThree = {
        color: 'black',
        brand: 'Audemars Piguet',
        model: 'Royal Oak Offshore Chronograph',
        wristband: 'rubber',
        size: 44,
        price_new: 46200,
        price_old: 48650,
        availability: 'out',
        image: 'img/Audemars_Piguet_Royal_Oak_Offshore_Chronograph.jpg'
    },
    watchFour = {
        color: 'brown',
        brand: 'Maurice Lacroix',
        model: 'Masterpiece',
        wristband: 'leather',
        size: 42,
        price_new: 1350,
        price_old: 1950,
        availability: 'in',
        image: 'img/Maurice_Lacroix_Masterpiece.jpeg'
    },
    watchFive = {
        color: 'brown',
        brand: 'Breitling',
        model: 'Transocean Chronograph Unitime',
        wristband: 'leather',
        size: 46,
        price_new: 14550,
        price_old: 15710,
        availability: 'outBre',
        image: 'img/Breitling_Chronograph_Unitime.jpeg'
    },
    watchSix = {
        color: 'silver',
        brand: 'Breitling',
        model: 'Navitimer 1 B03',
        wristband: 'stainless steel',
        size: 45,
        price_new: 7950,
        price_old: 10870,
        availability: 'in',
        image: 'img/Breitling_Navitimer_B03.jpeg'
    },
    watchSeven = {
        color: 'black',
        brand: 'IWC',
        model: 'Pilot\'s Watch Chronograph',
        wristband: 'leather',
        size: 43,
        price_new: 4450,
        price_old: 5800,
        availability: 'out',
        image: 'img/IWC_Pilot\'s_Watch_Chronograph.jpeg'
    },
    watchEight = {
        color: 'black',
        brand: 'Hublot',
        model: 'Spirit of Big Bang',
        wristband: 'leather',
        size: 45,
        price_new: 12950,
        price_old: 21700,
        availability: 'out',
        image: 'img/Hublot_Spirit_of_Big_Bang.jpeg'
    },
    watchNine = {
        color: 'black',
        brand: 'Hublot',
        model: 'Classic Fusion Black Magic',
        wristband: 'ceramics',
        size: 45,
        price_new: 9170,
        price_old: 12400,
        availability: 'in',
        image: 'img/Hublot_Classic_Fusion_Black_Magic.jpg'
    },
    watchTen = {
        color: 'brown',
        brand: 'Longines',
        model: 'Master Retrograde',
        wristband: 'leather',
        size: 44,
        price_new: 2580,
        price_old: 3230,
        availability: 'in',
        image: 'img/Longines_Master_Retrograde.jpeg'
    }
];



// DOM SELECTORS
var filter = document.getElementById('filter-button');
var filterIcon = document.getElementById('filter-arrow');
var filterDropdown = document.getElementById('filter-dropdown');

var form = document.querySelector('form');
var color = document.getElementById('filter-color');
var brand = document.getElementById('filter-brand');
var wristband = document.getElementById('filter-wristband');
var size = document.getElementById('filter-size');
var price = document.getElementById('filter-price');

var applyBtn = document.getElementById('apply-btn');
var clearBtn = document.getElementById('clear-btn');

var grid = document.querySelector('.main__grid');

// Array that stores the chosen watches


var allWatchesAsArray = [];



// INIT FUNCTION (IIFE) 
var init = (function() {
    color.defaultValue = '';
    brand.defaultValue = '';
    wristband.defaultValue = '';
    size.defaultValue = '40';
    price.defaultValue = '5000';
    console.log('app has started');
})();


// FUNCTION TO DISPLAY THE WATCHES (INPUT: ARRAY WITH ARRAYS)
var displayWatches = function(arr) {
        // Iterate through array
        arr.forEach(function(item) {
            // If the item is available
            if(item[7] === 'in') {
                // HTML code
                var html = '<div class="main__card"><h3 class="heading__tertiary"><span class="heading__tertiary--bold">%brand%</span><span class="heading__tertiary--thin">%model%</span></h3><div class="main__image-box"><img src="%image%" class="main__image"><div class="main__in-stock"><div class="main__in-stock--circle">&nbsp;</div><p class="main__in-stock--text">In Stock</p></div><div class="main__price"><span class="main__price--new">%new price%€</span><span class="main__price--old">%old price%€</span></div></div></div>'
                // Update HTML code and replace placeholders by each array's elemements 
                var newHtml = html.replace('%brand%', item[1]);
                newHtml = newHtml.replace('%model%', item[2]);
                newHtml = newHtml.replace('%image%', item[8]);
                newHtml = newHtml.replace('%available%', item[7]);
                newHtml = newHtml.replace('%new price%', item[5]);
                newHtml = newHtml.replace('%old price%', item[6]);
                // Insert the updated HTML code to the grid container 
                grid.insertAdjacentHTML('beforeend', newHtml);
            } else if(item[7] === 'out') {
                var html = '<div class="main__card"><h3 class="heading__tertiary"><span class="heading__tertiary--bold">%brand%</span><span class="heading__tertiary--thin">%model%</span></h3><div class="main__image-box"><img src="%image%" class="main__image"><div class="main__out-stock"><div class="main__out-stock--circle">&nbsp;</div><p class="main__out-stock--text">Out of Stock</p></div><div class="main__price"><span class="main__price--new">%new price%€</span><span class="main__price--old">%old price%€</span></div></div></div>'
                var newHtml = html.replace('%brand%', item[1]);
                newHtml = newHtml.replace('%model%', item[2]);
                newHtml = newHtml.replace('%image%', item[8]);
                newHtml = newHtml.replace('%available%', item[7]);
                newHtml = newHtml.replace('%new price%', item[5]);
                newHtml = newHtml.replace('%old price%', item[6]);
                grid.insertAdjacentHTML('beforeend', newHtml);
            }
        });
};







// SHOW AND HIDE THE FILTER DROPDOWN
filter.addEventListener('click', function() {
    // Show and hide it
    filterDropdown.classList.toggle('shown');
    // Rotate the arrow
    filterIcon.classList.toggle('rotate');
});



// APPLY FILTERS
applyBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Get all filter values
    var colorValue = color.value;
    var brandValue = brand.value;
    var wristbandValue = wristband.value;
    // var sizeValue = size.value;
    // var priceValue = price.value;

    // Write an Array with the input values
    var inputArray = [colorValue, brandValue, wristbandValue];

    // Remove all empty values from the inputArray
    var realValues = inputArray.filter(function(element) {
        return element !== '';
    });

    // Convert the objects inside allWatches to arrays
    allWatches.forEach(function(item) {
        allWatchesAsArray.push(Object.values(item));
    });

    // Function that checks if there are elements who matches the filters
    var match = function(arr, arr2) {
        return arr.every(i => arr2.includes(i));
    };

    // Function that invokes "match" and pushes the watch into chosenWatches when there is a match
    var chooseFunction = function(filterArr) {
        var chosenWatches = [];
        if(filterArr.length > 0) {
            allWatchesAsArray.forEach(function(item) {
                if(match(filterArr, item)) {
                chosenWatches.push(item); 
                }
            });
        };
        return chosenWatches;
    };

    // Store all in one variable
    var finalResult = chooseFunction(realValues);

    // Display all filtered items to the UI
    displayWatches(finalResult);

    // Clear the finalResult after display in order to prevent duplicates in the UI when hitting APPLY again
    if(finalResult.length > 0) {
        finalResult.forEach(function(item) {
            finalResult.pop(item);
        });
    };
        
   // Clear all input-fields after submitting
    form.reset()

    applyBtn.style.display = 'none';
});




// Remove all watches
clearBtn.addEventListener('click', function() {
    location.reload();
});





