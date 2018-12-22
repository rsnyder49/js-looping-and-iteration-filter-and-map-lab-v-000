// Code your solution here:
const drivers = [];

function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function(driver) {
     return driver.revenue > rev;
   });
}

function driverNamesWithRevenueOver(drivers, rev) {
  return driversWithRevenueOver(drivers, rev).map(
     function(driver) {
       return driver.name;
     });
} 

