import { STATES, getTaxRate, calculateTax } from './../lib';

console.log(
  getTaxRate(STATES.ALABAMA),
  getTaxRate(STATES.MASSACHUSETTS),
  getTaxRate(STATES.ARKANSAS),
  getTaxRate(STATES.DISTRICT_OF_COLUMBIA),
  getTaxRate(STATES.KENTUCKY),
  getTaxRate(STATES.NORTH_CAROLINA),
);

console.log(calculateTax(49.99, STATES.NEW_YORK));
