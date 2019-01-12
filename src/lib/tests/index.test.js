import { expect } from 'chai';
import {
  STATES,
  getTaxRate,
  getFoodTaxRate,
  getDrugTaxRate,
  getPrescriptionDrugTaxRate,
  calculateTax,
  calculatePriceBasedOnTax
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

it('should calculate correct tax based on price and state', () => {
  expect(calculateTax(49.99, STATES.NEW_YORK)).to.equal(2.00);
  expect(calculateTax(99.99, STATES.MASSACHUSETTS)).to.equal(6.25);
  expect(calculateTax(214.49, STATES.PENNSYLVANIA)).to.equal(12.87);
  expect(calculateTax(51, STATES.UTAH)).to.equal(3.03);
  expect(calculateTax(115.00, STATES.NEW_HAMPSHIRE)).to.equal(0.00);
})

it('should calculate correct total price after deducting tax', () => {
  expect(calculatePriceBasedOnTax(49.99, STATES.NEW_YORK)).to.equal(47.99);
  expect(calculatePriceBasedOnTax(99.99, STATES.MASSACHUSETTS)).to.equal(93.74);
  expect(calculatePriceBasedOnTax(214.49, STATES.PENNSYLVANIA)).to.equal(201.62);
  expect(calculatePriceBasedOnTax(51, STATES.UTAH)).to.equal(47.97);
  expect(calculatePriceBasedOnTax(115.00, STATES.NEW_HAMPSHIRE)).to.equal(115.00);
})



