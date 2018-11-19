// Write your solution in this file!

var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = "tracy";

const upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase();
  return customerName;
}

const setBestCustomer = () => {
  bestCustomer = "not bob";
}

const overwriteBestCustomer = () => {
  bestCustomer = 'maybe bob'
}

const changeLeastFavoriteCustomer = () => {

leastFavoriteCustomer = ""
}
