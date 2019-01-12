import cloneDeep from "lodash.clonedeep";

import { TAX_RATES } from "./assets/taxRates";
import { states } from "./assets/states";

export const STATES = cloneDeep(states);

/**
 * Retrieves sales tax rate for a state based on state id (i.e., STATE.ALABAMA)
 * Example: getTaxRate(STATE.ALABAMA) => '4';
 * @param  {number} stateId
 * @returns {string} - Tax rate
 */
export const getTaxRate = stateId => {
  return (
    TAX_RATES[stateId] && TAX_RATES[stateId].tax && TAX_RATES[stateId].tax.sales
  );
};

/**
 * Retrieves food tax rate for a state based on state id (i.e., STATE.ALABAMA)
 * Example: getFoodTaxRate(STATE.ALABAMA) => '0';
 * @param  {number} stateId
 * @returns {string} - Tax rate
 */
export const getFoodTaxRate = stateId => {
  return (
    TAX_RATES[stateId] && TAX_RATES[stateId].tax && TAX_RATES[stateId].tax.food
  );
};

/**
 * Retrieves drug tax rate for a state based on state id (i.e., STATE.ALABAMA)
 * Example: getDrugTaxRate(STATE.ALABAMA) => '0';
 * @param  {number} stateId
 * @returns {string} - Tax rate
 */
export const getDrugTaxRate = stateId => {
  return (
    TAX_RATES[stateId] && TAX_RATES[stateId].tax && TAX_RATES[stateId].tax.drugs
  );
};

/**
 * Retrieves prescription drug tax rate for a state based on state id (i.e., STATE.ALABAMA)
 * Example: getPrescriptionDrugTaxRate(STATE.ALABAMA) => '0';
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
 * Calculate sales tax based on price (i.e., 49.99) and state id (i.e., STATE.ALABAMA)
 * Example: calculateTax(49.99, STATE.NEW_YORK) =>
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
 * Calculate sales tax based on price (i.e., 49.99) and state id (i.e., STATE.ALABAMA)
 * Example: calculateTax(49.99, STATE.NEW_YORK) =>
 * @param  {number} value
 * @param  {number} stateId
 * @param  {number} customTaxRate
 * @returns {number} - tax
 */
export const calculatePriceBasedOnTax = (value, stateId, customTaxRate) => {
  const tax = calculateTax(value, stateId, customTaxRate);
  return parseFloat((value - tax).toFixed(2));
}
