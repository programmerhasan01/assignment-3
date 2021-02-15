

// make function to find out kilometerToMeter ....
function kilometerToMeter(km) {
    if (km > 0 && km != String) {
        var meter = km * 1000;
        return meter;
    }
    else {
        console.log("invalid value is given");
    }

}

var result = kilometerToMeter(5);
console.log(result);


// Making budgetCalculator....
function budgetCalculator(watch, phone, laptop) {
    if (watch > 0 && phone > 0 && laptop > 0 && watch != String && phone != String && laptop != String) {
        watch = watch * 50;
        phone = phone * 100;
        laptop = laptop * 500;
        var totalAmount = watch + phone + laptop;
        return totalAmount;
    }
    else {
        console.log("At least one value is not valid");
    }
}

var myBudget = budgetCalculator(2, 2, 1);
console.log(myBudget);


// making function to find out hotelCost...
function hotelCost(day) {
    var totalCost = 0;
    if (day > 0 && day != String) {
        if (day <= 10) {
            totalCost = day * 100;
        }
        else if (day <= 20) {
            var firstTenDays = 10 * 100;
            var remainingDays = day - 10;
            var extraDaysCost = remainingDays * 80;
            totalCost = firstTenDays + extraDaysCost;
        }
        else {
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remainingDays = day - 20;
            var extraDaysCost = remainingDays * 50;
            totalCost = firstTenDays + secondTenDays + extraDaysCost;
        }
        return totalCost;
    }
    else {
        console.log("your value is invalid");
    }

}

var hotelRent = hotelCost(22);
console.log(hotelRent);


// making megaFriend function to find out largest name from an array....
function megaFriend(friendsName) {
    if (friendsName.length > 0 && friendsName != Number) {
        var largestName = friendsName[0];
        for (i = 0; i < friendsName.length; i++) {
            var element = friendsName[i];
            if (element.length > largestName.length) {
                largestName = element;
            }
        }
        return largestName;
    }
    else{
        console.log("Please enter valid value");
    }
}
var allFriendsName = ["Shojib", "Bulbul", "Hasan Mozumder", "Rana"];
var highestLengthName = megaFriend(allFriendsName);
console.log(highestLengthName);