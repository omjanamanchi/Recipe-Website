var slider = document.getElementById("serving-size"),
    currentServing = document.getElementById("current-serving"),
    adjustedQuantitiesDisplay = document.getElementById("adjusted-quantities"),
    originalQuantity = {
        paneer: 2, cornstarch: 0.25, vegetableOil: 0.25, garlic: 4,
        ginger: 1, onion: 1, greenChilePeppers: 4, bellPepper: 1,
        soySauce: 2, chileSauce: 2, tomatoSauce: 2, sugar: 1,
        salt: 0.5, water: 2, cilantro: 0.25, greenOnions: 2
    };

slider.addEventListener("input", function () {
    var servingSize = parseInt(slider.value), adjustedQuantities = {};
    currentServing.textContent = "Serving Size: " + servingSize;
    for (var ingredient in originalQuantity)
        adjustedQuantities[ingredient] = originalQuantity[ingredient] * servingSize;
    adjustedQuantitiesDisplay.textContent = "Adjusted Ingredient Quantities: " + JSON.stringify(adjustedQuantities);
});