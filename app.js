// ---------------------------------------------
// ----- ALL WATCHES (MAIN DATA) ---------------
// ---------------------------------------------
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
        availability: 'out',
        image: 'img/Breitling_Transocean_Chronograph_Unitime.jpeg'
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
        availability: 'in',
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
    },
    watchEleven = {
        color: 'silver',
        brand: 'IWC',
        model: 'Aquatimer Chronograph',
        wristband: 'stainless steel',
        size: 44,
        price_new: 4990,
        price_old: 6100,
        availability: 'out',
        image: 'img/IWC_Aquatimer_Chronograph.jpeg'
    },
    watchTwelve = {
        color: 'black',
        brand: 'Patek Philippe',
        model: 'Complications',
        wristband: 'leather',
        size: 40,
        price_new: 43160,
        price_old: 45000,
        availability: 'in',
        image: 'img/Patek_Philippe_Complications.jpeg'
    },
    watchThirteen = {
        color: 'black',
        brand: 'Chopard',
        model: 'Mille Miglia Jacky Ickx',
        wristband: 'leather',
        size: 42,
        price_new: 7320,
        price_old: 9760,
        availability: 'out',
        image: 'img/Chopard_Mille_Miglia_Jacky_Ickx.jpeg'
    },
    watchFourteen = {
        color: 'rosegold',
        brand: 'Chopard',
        model: 'Mille Miglia',
        wristband: 'rubber',
        size: 44,
        price_new: 16120,
        price_old: 21500,
        availability: 'in',
        image: 'img/Chopard_Mille_Miglia.jpeg'
    },
    watchFifteen = {
        color: 'silver',
        brand: 'Audemars Piguet',
        model: 'Royal Oak Chronograph',
        wristband: 'stainless steel',
        size: 41,
        price_new: 19990,
        price_old: 24500,
        availability: 'in',
        image: 'img/Audemars_Piguet_Royal_Oak_Chronograph.jpeg'
    },
    watchSixteen = {
        color: 'black',
        brand: 'Tag Heuer',
        model: 'Carrera Chronograph',
        wristband: 'rubber',
        size: 45,
        price_new: 7950,
        price_old: 10870,
        availability: 'in',
        image: 'img/Tag_Heuer_Carrera_Chronograph.jpeg'
    },
    watchSeventeen = {
        color: 'black',
        brand: 'Chopard',
        model: 'Classig Racing G.P.M.H.',
        wristband: 'leather',
        size: 43,
        price_new: 5990,
        price_old: 8600,
        availability: 'out',
        image: 'img/Chopard_Classic_Racing_GPMH.jpeg'
    },
    watchEighteen = {
        color: 'black',
        brand: 'Tag Heuer',
        model: 'Monaco Sixty Nine',
        wristband: 'leather',
        size: 40,
        price_new: 2250,
        price_old: 6500,
        availability: 'in',
        image: 'img/Tag_Heuer_Monaco_Sixty_Nine.jpeg'
    },
    watchNineteen = {
        color: 'rosegold',
        brand: 'Patek Philippe',
        model: 'Nautilus Power Reserve',
        wristband: 'leather',
        size: 40,
        price_new: 79850,
        price_old: 87900,
        availability: 'in',
        image: 'img/Patek_Philippe_Nautilus_Power_Reserve.jpeg'
    },
    watchTwenty = {
        color: 'black',
        brand: 'IWC',
        model: 'Aquatimer Automatic 2000',
        wristband: 'rubber',
        size: 46,
        price_new: 4990,
        price_old: 9450,
        availability: 'out',
        image: 'img/IWC_Aquatimer_Automatic_2000.jpeg'
    },
    watchTwentyOne = {
        color: 'silver',
        brand: 'Patek Philippe',
        model: 'Nautilus Date Sweep Seconds',
        wristband: 'stainless steel',
        size: 40,
        price_new: 65440,
        price_old: 69500,
        availability: 'in',
        image: 'img/Patek_Philippe_Nautilus_Date_Sweep_Seconds.jpeg'
    },
    watchTwentyTwo = {
        color: 'black',
        brand: 'Hublot',
        model: 'Classic Fusion',
        wristband: 'rubber',
        size: 45,
        price_new: 9990,
        price_old: 14800,
        availability: 'out',
        image: 'img/Hublot_Classic_Fusion.jpeg'
    },
    watchTwentyThree = {
        color: 'silver',
        brand: 'Rolex',
        model: 'Sea-Dweller',
        wristband: 'stainless steel',
        size: 40,
        price_new: 6990,
        price_old: 7300,
        availability: 'out',
        image: 'img/Rolex_Sea_Dweller.jpeg'
    },
    watchTwentyFour = {
        color: 'rosegold',
        brand: 'Hublot',
        model: 'Big Bang Unico',
        wristband: 'stainless steel',
        size: 45,
        price_new: 36770,
        price_old: 49700,
        availability: 'in',
        image: 'img/Hublot_Big_Bang_Unico.jpg'
    },
    watchTwentyFive = {
        color: 'rosegold',
        brand: 'Audemars Piguet',
        model: 'Millenary 4101',
        wristband: 'leather',
        size: 47,
        price_new: 40600,
        price_old: 49000,
        availability: 'out',
        image: 'img/Audemars_Piguet_Millenary_4101.jpg'
    },
    watchTwentySix = {
        color: 'rosegold',
        brand: 'Audemars Piguet',
        model: 'Royal Oak Selfwinding',
        wristband: 'stainless steel',
        size: 41,
        price_new: 53900,
        price_old: 57890,
        availability: 'in',
        image: 'img/Audemars_Piguet_Royal_Oak_Selfwinding.jpg'
    },
    watchTwentySeven = {
        color: 'silver',
        brand: 'Omega',
        model: 'Speedmaster Pre-Moon',
        wristband: 'stainless steel',
        size: 42,
        price_new: 8799,
        price_old: 9900,
        availability: 'in',
        image: 'img/Omega_Speedmaster_Premoon.jpeg'
    },
    watchTwentyEight = {
        color: 'brown',
        brand: 'Omega',
        model: 'De Ville Prestige Co-Axial',
        wristband: 'leather',
        size: 40,
        price_new: 6490,
        price_old: 8500,
        availability: 'in',
        image: 'img/Omega_De_Ville_Prestige_Coaxial.jpeg'
    },
    watchTwentyNine = {
        color: 'brown',
        brand: 'Tag Heuer',
        model: 'Carrera Chronograph Day Date',
        wristband: 'leather',
        size: 43,
        price_new: 2100,
        price_old: 5400,
        availability: 'out',
        image: 'img/Tag_Heuer_Carrera_Chronograph_Day_Date.jpeg'
    },
    watchThirty = {
        color: 'black',
        brand: 'Maurice Lacroix',
        model: 'Pontos S Regatta',
        wristband: 'rubber',
        size: 45,
        price_new: 5450,
        price_old: 6990,
        availability: 'in',
        image: 'img/Maurice_Lacroix_Pontos_S_Regatta.jpeg'
    },
    watchThirtyOne = {
        color: 'black',
        brand: 'Maurice Lacroix',
        model: 'Aikon Skeleton',
        wristband: 'leather',
        size: 45,
        price_new: 4100,
        price_old: 5600,
        availability: 'out',
        image: 'img/Maurice_Lacroix_Aikon_Skeleton.jpeg'
    },
    watchThirtyTwo = {
        color: 'black',
        brand: 'IWC',
        model: 'Ingenieur Double Chronograph Steel',
        wristband: 'rubber',
        size: 45,
        price_new: 5990,
        price_old: 6490,
        availability: 'in',
        image: 'img/IWC_Ingenieur_Double_Chronograph_Steel.jpeg'
    },
    watchThirtyThree = {
        color: 'brown',
        brand: 'IWC',
        model: 'Portugieser Automatic',
        wristband: 'leather',
        size: 42,
        price_new: 19040,
        price_old: 23800,
        availability: 'out',
        image: 'img/IWC_Portugieser_Automatic.jpg'
    },
    watchThirtyFour = {
        color: 'black',
        brand: 'Breitling',
        model: 'Chronomat Avenger Hurricane 45',
        wristband: 'rubber',
        size: 45,
        price_new: 5200,
        price_old: 8020,
        availability: 'out',
        image: 'img/Breitling_Chronomat_Avenger_Hurricane_45.jpeg'
    },
    watchThirtyFive = {
        color: 'silver',
        brand: 'Breitling',
        model: 'Transocean Chronograph',
        wristband: 'stainless steel',
        size: 43,
        price_new: 5870,
        price_old: 7520,
        availability: 'in',
        image: 'img/Breitling_Transocean_Chronograph.jpeg'
    },
    watchThirtySix = {
        color: 'silver',
        brand: 'Breitling',
        model: 'Bentley B04 GMT',
        wristband: 'stainless steel',
        size: 49,
        price_new: 7650,
        price_old: 7850,
        availability: 'in',
        image: 'img/Breitling_Bentley_B04_GMT.jpeg'
    },
    watchThirtySeven = {
        color: 'brown',
        brand: 'Longines',
        model: 'Lindbergh Hour Angle',
        wristband: 'leather',
        size: 38,
        price_new: 2740,
        price_old: 3100,
        availability: 'out',
        image: 'img/Longines_Lindbergh_Hour_Angle.jpeg'
    },
    watchThirtyEight = {
        color: 'silver',
        brand: 'Longines',
        model: 'Master Chronograph',
        wristband: 'stainless steel',
        size: 39,
        price_new: 1850,
        price_old: 2310,
        availability: 'in',
        image: 'img/Longines_Master_Chronograph.jpg'
    },
    watchThirtyNine = {
        color: 'gold',
        brand: 'Longines',
        model: 'Flagship',
        wristband: 'leather',
        size: 38,
        price_new: 2750,
        price_old: 3150,
        availability: 'in',
        image: 'img/Longines_Flagship.jpeg'
    },
    watchFourty = {
        color: 'black',
        brand: 'Chopard',
        model: 'Classic Racing Superfast Chrono',
        wristband: 'rubber',
        size: 45,
        price_new: 8400,
        price_old: 11200,
        availability: 'out',
        image: 'img/Chopard_Classic_Racing_Superfast_Chrono.jpg'
    }

];


// ---------------------------------------------
// ----- DOM SELECTORS -------------------------
// ---------------------------------------------
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
var productBtn = document.getElementById('product-btn');

var grid = document.querySelector('.main__grid');


// ---------------------------------------------
// ----- FUNCTIONS -----------------------------
// ---------------------------------------------

// -- 1 -- CONVERT ALL WATCHES INTO AN ARRAY
var allWatchesAsArray = function() {
    // Array that stores the chosen watches
    var finalArray = [];
    // Convert the objects inside allWatches to arrays to compare them with the filter Array (realValues)
    allWatches.forEach(function(item) {
        finalArray.push(Object.values(item));
    });
    return finalArray;
}

// -- 2 -- FUNCTION TO ADD THE INDIVIDUAL HTML CODE 
var addHtml = function(htmlCode, watch) {
    // Update HTML code and replace placeholders by each array's elemements 
    var newHtml = htmlCode.replace('%brand%', watch[1]);
    newHtml = newHtml.replace('%model%', watch[2]);
    newHtml = newHtml.replace('%image%', watch[8]);
    newHtml = newHtml.replace('%available%', watch[7]);
    newHtml = newHtml.replace('%new price%', watch[5]);
    newHtml = newHtml.replace('%old price%', watch[6]);
    // Insert the updated HTML code to the grid container 
    grid.insertAdjacentHTML('beforeend', newHtml);
};

// -- 3 -- FUNCTION TO DISPLAY THE WATCHES (INPUT: ARRAY WITH ARRAYS)
var displayWatches = function(arr) {
    // Iterate through array
    arr.forEach(function(item) {
        // If the item is available
        if(item[7] === 'in') {
            // HTML code for IN STOCK
            var htmlIn = '<div class="main__card"><h3 class="heading__tertiary"><span class="heading__tertiary--bold">%brand%</span><span class="heading__tertiary--thin">%model%</span></h3><div class="main__image-box"><img src="%image%" class="main__image"><div class="main__in-stock"><div class="main__in-stock--circle">&nbsp;</div><p class="main__in-stock--text">In Stock</p></div><div class="main__price"><span class="main__price--new">%new price%€</span><span class="main__price--old">%old price%€</span></div></div></div>'
            addHtml(htmlIn, item);
        } else if(item[7] === 'out') {
            // HTML code for OUT OF STOCK
            var htmlOut = '<div class="main__card"><h3 class="heading__tertiary"><span class="heading__tertiary--bold">%brand%</span><span class="heading__tertiary--thin">%model%</span></h3><div class="main__image-box"><img src="%image%" class="main__image"><div class="main__out-stock"><div class="main__out-stock--circle">&nbsp;</div><p class="main__out-stock--text">Out of Stock</p></div><div class="main__price"><span class="main__price--new">%new price%€</span><span class="main__price--old">%old price%€</span></div></div></div>'
            addHtml(htmlOut, item);
        };
    });

     // If no watches match with the filter 
    if(arr.length === 0) {
        var noWatch = document.createElement('h2');
        noWatch.textContent = 'No watches found. Try again';
        grid.appendChild(noWatch);
    };
};

// -- 4 -- FUNCTION THAT CHECKS IF THERE ARE MATCHES WITH THE FILTERS
var match = function(arr, arr2) {
    // Check if every element from the filter array is in allWatchesAsArray (match)
    var result = arr.every(function(element) {
        if(element !== '') {
            // CASE 1: A watch from allWatchesAsArray includes the filter value AND the price is smaller or equal to the price-filter
            if(arr2.includes(element) && arr2[5] <= element) {
                return arr2;
            };
            // CASE 2: Only the price-filter is applied 
            if(arr2[5] <= element) {
                return arr2;
            };
        };
        // CASE 3: The watch from allWatchesAsArray includes a filter value (color, brand, wristband & size)
        if(arr2.includes(element)) {
            return arr2;
        };
    });
    return result;
};

// -- 5 -- FUNCTION THAT INVOKES match() AND PUSHES THE RESULTS INTO chosenWatches
var chooseFunction = function(filterArr) {
    var chosenWatches = [];
    if(filterArr.length > 0) {
        allWatchesAsArray().forEach(function(item) {
            if(match(filterArr, item)) {
            chosenWatches.push(item); 
            } 
        });
    
    };
    return chosenWatches;
};

// -- 6 -- INIT FUNCTION (IIFE) 
var init = (function() {
    // Set the default values for the filters
    color.defaultValue = '';
    brand.defaultValue = '';
    wristband.defaultValue = '';
    size.defaultValue = '0';
    price.defaultValue = '0';
    console.log('app has started');
    // Get data from localStorage and display it to the UI if it has elements stored
    if(localStorage.length > 0) {
        var savedData = JSON.parse(localStorage.getItem('watches'));
        var singleSavedData = [...new Set(savedData)];
        displayWatches(singleSavedData);
    };
})();



// ---------------------------------------------
// ----- EVENT-LISTENERS -----------------------
// ---------------------------------------------

// -- 1 -- SHOW ALL PRODUCTS AT ONCE
productBtn.addEventListener('click', function() {
    // grid has 9 child nodes as default value, insert all elements only if the UI is empty to prevend duplicates
    if(grid.childNodes.length === 9) {
        // Convert the objects inside allWatches to arrays to display them in the UI
        var watchesArray = allWatchesAsArray();
        // Display them in the UI
        displayWatches(watchesArray); 
        // Pass them into localStorage
        localStorage.setItem('watches', JSON.stringify(watchesArray));
    };
});

// -- 2 -- SHOW AND HIDE THE FILTER DROPDOWN
filter.addEventListener('click', function() {
    // Show and hide it
    filterDropdown.classList.toggle('shown');
    // Rotate the arrow
    filterIcon.classList.toggle('rotate');
});

// -- 3 -- APPLY FILTERS
applyBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // Get all filter values
    var colorValue = color.value;
    var brandValue = brand.value;
    var wristbandValue = wristband.value;
    var sizeValue = parseInt(size.value);
    var priceValue = parseInt(price.value);
    // Write an Array with the input values
    var inputArray = [colorValue, brandValue, wristbandValue, sizeValue, priceValue];
    // Remove all empty values from the inputArray
    var realValues = inputArray.filter(function(element) {
        return (element !== '' && element !== 0);
    });
    // Convert the objects inside allWatches to arrays to compare them with the filter Array (realValues)
    allWatchesAsArray();
    // Find items which match with the input array
    var finalResult = chooseFunction(realValues);
    // Save the chosen watches in localStorage
    localStorage.setItem('watches', JSON.stringify(finalResult));
    // Clear the finalResult after display to prevent duplicates in the UI when hitting APPLY again
    if(finalResult.length > 0) {
        finalResult.forEach(function(item) {
            finalResult.pop(item);
            applyBtn.style.display = 'none';
        });
    };
    // Clear all input-fields after submitting
    form.reset()
    // Reload the page to apply changes
    location.reload();
});

// -- 4 -- CLEAR THE UI 
clearBtn.addEventListener('click', function() {
    // Clear the localStorage
    localStorage.clear();
    // Reload the page again to display the changes
    location.reload();
});














