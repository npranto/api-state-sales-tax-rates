import { expect } from 'chai';
import {
  STATES,
  getTaxRate,
  getFoodTaxRate,
  getDrugTaxRate,
  getPrescriptionDrugTaxRate,
  calculateTax,
  calculateFoodTax,
  calculateDrugTax,
  calculatePrescriptionDrugTax,
  calculatePriceWithSalesTax,
  calculatePriceWithFoodTax,
  calculatePriceWithDrugTax,
  calculatePriceWithPrescriptionDrugTax,
} from './..';
import { TAX_RATES } from './../assets/taxRates';

it('should verify all required variables', () => {
  /*eslint-disable*/
  // checks that STATES is not undefined
  expect(STATES).to.not.be.undefined;
  /*eslint-enable*/

  // checks that STATES is an object
  expect(typeof STATES).to.equal('object');

  // checks for STATES to have exactly 51 properties
  expect(Object.keys(STATES)).to.have.lengthOf(51);

  // checks to see if state ids are ordered from 1 to 51 in STATES
  let oneToFiftyOne = [];
  for (let i=1; i<=51; i++) {
    oneToFiftyOne.push(i);
  }
  expect(Object.values(STATES)).to.deep.equal(oneToFiftyOne);
});

it('should verify all required functions', () => {
  /*eslint-disable*/
  // check to see all functions are undefined
  expect(getTaxRate).to.not.be.undefined;
  expect(getFoodTaxRate).to.not.be.undefined;
  expect(getDrugTaxRate).to.not.be.undefined;
  expect(getPrescriptionDrugTaxRate).to.not.be.undefined;
  /*eslint-enable*/

  // checks that all functions are actual JavaScript functions
  expect(typeof getTaxRate).to.equal('function');
  expect(typeof getFoodTaxRate).to.equal('function');
  expect(typeof getDrugTaxRate).to.equal('function');
  expect(typeof getPrescriptionDrugTaxRate).to.equal('function');
});

it('should return correct sales tax rate for each state', () => {
  const allStateIds = Object.values(STATES);
  allStateIds.forEach(stateId => {
    expect(getTaxRate(stateId) === (TAX_RATES[stateId].tax.sales)).to.equal(true);
  })
});

it('should return correct food tax rate for each state', () => {
  const allStateIds = Object.values(STATES);
  allStateIds.forEach(stateId => {
    expect(getFoodTaxRate(stateId) === (TAX_RATES[stateId].tax.food)).to.equal(true);
  })
});

it('should return correct drugs tax rate for each state', () => {
  const allStateIds = Object.values(STATES);
  allStateIds.forEach(stateId => {
    expect(getDrugTaxRate(stateId) === (TAX_RATES[stateId].tax.drugs)).to.equal(true);
  })
});

it('should return correct prescription drugs tax rate for each state', () => {
  const allStateIds = Object.values(STATES);
  allStateIds.forEach(stateId => {
    expect(getPrescriptionDrugTaxRate(stateId) === (TAX_RATES[stateId].tax.prescriptionDrugs)).to.equal(true);
  })
});

it('should calculate correct sales tax based on price and state', () => {
  expect(calculateTax(49.99, STATES.NEW_YORK)).to.equal(2.00);
  expect(calculateTax(99.99, STATES.MASSACHUSETTS)).to.equal(6.25);
  expect(calculateTax(214.49, STATES.PENNSYLVANIA)).to.equal(12.87);
  expect(calculateTax(51, STATES.UTAH)).to.equal(3.03);
  expect(calculateTax(115.00, STATES.NEW_HAMPSHIRE)).to.equal(0.00);
})

it('should calculate correct food tax based on price and state', () => {
  expect(calculateFoodTax(49.99, STATES.NEW_YORK)).to.equal(0);
  expect(calculateFoodTax(99.99, STATES.ARKANSAS)).to.equal(1.50);
  expect(calculateFoodTax(214.49, STATES.MISSOURI)).to.equal(2.63);
  expect(calculateFoodTax(51, STATES.UTAH)).to.equal(2.17);
  expect(calculateFoodTax(115.00, STATES.NEW_HAMPSHIRE)).to.equal(0);
})

it('should calculate correct drug tax based on price and state', () => {
  expect(calculateDrugTax(49.99, STATES.ILLINOIS)).to.equal(0.5);
  expect(calculateDrugTax(99.99, STATES.ALABAMA)).to.equal(4);
  expect(calculateDrugTax(214.49, STATES.ALASKA)).to.equal(0);
})

it('should calculate correct prescription drug tax based on price and state', () => {
  expect(calculatePrescriptionDrugTax(49.99, STATES.ILLINOIS)).to.equal(0.5);
  expect(calculatePrescriptionDrugTax(99.99, STATES.ARKANSAS)).to.equal(0);
  expect(calculatePrescriptionDrugTax(214.49, STATES.MISSOURI)).to.equal(0);
})

it('should calculate correct total price after adding tax for a regular product', () => {
  expect(calculatePriceWithSalesTax(49.99, STATES.NEW_YORK)).to.equal(49.99 + 2.00);
  expect(calculatePriceWithSalesTax(99.99, STATES.MASSACHUSETTS)).to.equal(99.99 + 6.25);
  expect(calculatePriceWithSalesTax(214.49, STATES.PENNSYLVANIA)).to.equal(214.49 + 12.87);
  expect(calculatePriceWithSalesTax(51, STATES.UTAH)).to.equal(51 + 3.03);
  expect(calculatePriceWithSalesTax(115.00, STATES.NEW_HAMPSHIRE)).to.equal(115 + 0.00);
})

it('should calculate correct total price after adding tax for a food product', () => {
  expect(calculatePriceWithFoodTax(49.99, STATES.NEW_YORK)).to.equal(49.99 + 0);
  expect(calculatePriceWithFoodTax(99.99, STATES.ARKANSAS)).to.equal(99.99 + 1.50);
  expect(calculatePriceWithFoodTax(214.49, STATES.MISSOURI)).to.equal(214.49 + 2.63);
  expect(calculatePriceWithFoodTax(51, STATES.UTAH)).to.equal(51 + 2.17);
  expect(calculatePriceWithFoodTax(115.00, STATES.NEW_HAMPSHIRE)).to.equal(115 + 0);
})

it('should calculate correct total price after adding tax for a drug', () => {
  expect(calculatePriceWithDrugTax(49.99, STATES.ILLINOIS)).to.equal(49.99 + 0.5);
  expect(calculatePriceWithDrugTax(99.99, STATES.ALABAMA)).to.equal(99.99 + 4);
  expect(calculatePriceWithDrugTax(214.49, STATES.ALASKA)).to.equal(214.49 + 0);
})

it('should calculate correct total price after adding tax for a prescription drug', () => {
  expect(calculatePriceWithPrescriptionDrugTax(49.99, STATES.ILLINOIS)).to.equal(49.99 + 0.5);
  expect(calculatePriceWithPrescriptionDrugTax(99.99, STATES.ARKANSAS)).to.equal(99.99 + 0);
  expect(calculatePriceWithPrescriptionDrugTax(214.49, STATES.MISSOURI)).to.equal(214.49 + 0);
})



