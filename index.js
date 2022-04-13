// Write your solution in this file!
var customerName = "bob"



function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

console.log("test 2:" + customerName)

var bestCustomer
function setBestCustomer() {
    bestCustomer = "not bob"
    return bestCustomer
}
console.log("test 3:" + bestCustomer)

function overwriteBestCustomer () {
    bestCustomer = "maybe bob"
    return bestCustomer
}

console.log("test 4:" + bestCustomer)
const leastFavoriteCustomer = "not bob"

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "bob for sure"
    return leastFavoriteCustomer
}

console.log("test 5:" + leastFavoriteCustomer)