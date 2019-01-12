import cloneDeep from "lodash.clonedeep";

import { TAX_RATES } from "./assets/taxRates";
import { states } from "./assets/states";

export const STATES = cloneDeep(states);

/**
 * Retrieves sales tax rate for a state based on state id (i.e., STATES.ALABAMA)
 * Example: getTaxRate(STATES.ALABAMA) => '4';
 * @param  {number} stateId
 * @returns {string} - Tax rate
 */
export const getTaxRate = stateId => {
  return (
    TAX_RATES[stateId] && TAX_RATES[stateId].tax && TAX_RATES[stateId].tax.sales
  );
};

/**
 * Retrieves food tax rate for a state based on state id (i.e., STATES.ALABAMA)
 * Example: getFoodTaxRate(STATES.ALABAMA) => '0';
 * @param  {number} stateId
 * @returns {string} - Tax rate
 */
export const getFoodTaxRate = stateId => {
  return (
    TAX_RATES[stateId] && TAX_RATES[stateId].tax && TAX_RATES[stateId].tax.food
  );
};

/**
 * Retrieves drug tax rate for a state based on state id (i.e., STATES.ALABAMA)
 * Example: getDrugTaxRate(STATES.ALABAMA) => '0';
 * @param  {number} stateId
 * @returns {string} - Tax rate
 */
export const getDrugTaxRate = stateId => {
  return (
    TAX_RATES[stateId] && TAX_RATES[stateId].tax && TAX_RATES[stateId].tax.drugs
  );
};

/**
 * Retrieves prescription drug tax rate for a state based on state id (i.e., STATES.ALABAMA)
 * Example: getPrescriptionDrugTaxRate(STATES.ALABAMA) => '0';
 * @param  {number} stateId
 * @returns {string} - Tax rate
 */
export const getPrescriptionDrugTaxRate = stateId => {
  return (
    TAX_RATES[stateId] &&
    TAX_RATES[stateId].tax &&
    TAX_RATES[stateId].tax.prescriptionDrugs
  );
};

/**
 * Calculate sales tax based on price (i.e., 49.99) and state id (i.e., STATES.ALABAMA)
 * Example: calculateTax(49.99, STATES.NEW_YORK) =>
 * @param  {number} value
 * @param  {number} stateId
 * @param  {number} customTaxRate
 * @returns {number} - tax
 */
export const calculateTax = (value, stateId, customTaxRate) => {
  const taxRate = stateId ? getTaxRate(stateId) : customTaxRate.toString();
  const taxRateInDecimal = parseFloat(taxRate) / 100;
  return parseFloat((value * taxRateInDecimal).toFixed(2));
};

/**
 * Calculate food tax based on price (i.e., 49.99) and state id (i.e., STATES.ALABAMA)
 * @param  {number} value
 * @param  {number} stateId
 * @param  {number} customTaxRate
 * @returns {number} - tax
 */
export const calculateFoodTax = (value, stateId, customTaxRate) => {
  const taxRate = stateId ? getFoodTaxRate(stateId) : customTaxRate.toString();
  const taxRateInDecimal = parseFloat(taxRate) / 100;
  return parseFloat((value * taxRateInDecimal).toFixed(2));
};

/**
 * Calculate drug tax based on price (i.e., 49.99) and state id (i.e., STATES.ALABAMA)
 * @param  {number} value
 * @param  {number} stateId
 * @param  {number} customTaxRate
 * @returns {number} - tax
 */
export const calculateDrugTax = (value, stateId, customTaxRate) => {
  const taxRate = stateId ? getDrugTaxRate(stateId) : customTaxRate.toString();
  const taxRateInDecimal = parseFloat(taxRate) / 100;
  return parseFloat((value * taxRateInDecimal).toFixed(2));
};

/**
 * Calculate prescription drug tax based on price (i.e., 49.99) and state id (i.e., STATES.ALABAMA)
 * Example: calculateTax(49.99, STATES.NEW_YORK) =>
 * @param  {number} value
 * @param  {number} stateId
 * @param  {number} customTaxRate
 * @returns {number} - tax
 */
export const calculatePrescriptionDrugTax = (value, stateId, customTaxRate) => {
  const taxRate = stateId ? getPrescriptionDrugTaxRate(stateId) : customTaxRate.toString();
  const taxRateInDecimal = parseFloat(taxRate) / 100;
  return parseFloat((value * taxRateInDecimal).toFixed(2));
};

/**
 * Calculate price for a regular product with specified state or custom tax rate
 * @param  {number} value
 * @param  {number} stateId
 * @param  {number} customTaxRate
 * @returns {number} - tax
 */
export const calculatePriceWithSalesTax = (value, stateId, customTaxRate) => {
  const tax = calculateTax(value, stateId, customTaxRate);
  return parseFloat((value + tax).toFixed(2));
}

/**
 * Calculate price for a food product with specified state or custom tax rate
 * @param  {number} value
 * @param  {number} stateId
 * @param  {number} customTaxRate
 * @returns {number} - tax
 */
export const calculatePriceWithFoodTax = (value, stateId, customTaxRate) => {
  const tax = calculateFoodTax(value, stateId, customTaxRate);
  return parseFloat((value + tax).toFixed(2));
}

/**
 * Calculate price for a drug with specified state or custom tax rate
 * @param  {number} value
 * @param  {number} stateId
 * @param  {number} customTaxRate
 * @returns {number} - tax
 */
export const calculatePriceWithDrugTax = (value, stateId, customTaxRate) => {
  const tax = calculateDrugTax(value, stateId, customTaxRate);
  return parseFloat((value + tax).toFixed(2));
}

/**
 * Calculate price for a prescription drug with specified state or custom tax rate
 * @param  {number} value
 * @param  {number} stateId
 * @param  {number} customTaxRate
 * @returns {number} - tax
 */
export const calculatePriceWithPrescriptionDrugTax = (value, stateId, customTaxRate) => {
  const tax = calculatePrescriptionDrugTax(value, stateId, customTaxRate);
  return parseFloat((value + tax).toFixed(2));
}

