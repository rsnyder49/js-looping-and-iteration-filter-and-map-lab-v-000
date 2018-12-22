// Code your solution here:
const drivers = [];

function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function(driver){
     return driver.revenue > rev;
   });
 }