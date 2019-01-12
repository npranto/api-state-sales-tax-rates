 <div align="center">
  <img 
    align="center" 
    width="180"
    src="https://c1.staticflickr.com/7/6056/6355404323_cf97f9c58e_b.jpg" 
  />
  <h2>tax-rates</h2>
  <blockquote>
    A quick and simple reference to each state's sales tax rates on food, prescription drugs, non-prescription-drugs and regular goods
  </blockquote>
  <!-- <img src="https://travis-ci.org/hodgef/js-library-boilerplate.svg?branch=master" /> <img src="https://img.shields.io/david/hodgef/js-library-boilerplate.svg" /> <img src="https://img.shields.io/david/dev/hodgef/js-library-boilerplate.svg" /> <img src="https://api.dependabot.com/badges/status?host=github&repo=hodgef/js-library-boilerplate" /> -->
</div>


## Table of Contents
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
    * **[`Tax Rates`](#tax-rates)**
    * **[`Calculate Tax`](#calculate-tax)**
    * **[`Calculate Price With Tax`](#calculate-price-with-tax)**
* [For Developers Only](#for-developers-only)
* [Credits](#credits)
* [Support](#support)
* [You May Also Like](#you-may-also-like)
* [License](#license)
* [Authors](#authors)

## Features
- Quickly find state sales tax rates on regular goods, food, drugs, and prescription drugs
- Easily calculate tax for a product 
- Find total price for a product after taxes


## Installation
Before get going, make sure you have [Node.js](https://nodejs.org/en/) installed on your machine, so you can use the NPM (Node Package Manager) to install tax-rates on your project.
<br />
```
$ npm install --save tax-rates
```

## Usage

```js
import { 
  STATES, 
  getTaxRate, 
  calculateTax 
} from 'tax-rates';

console.log( getTaxRate(STATE.MASSACHUSETTS) )  
// '6.25' => (as in 6.25%)

console.log( calculateTax(214.49, STATES.PENNSYLVANIA) ) 
// 12.87
```

## API

### **Tax Rates**

### `.getTaxRate(stateId[number])`

Retrieves sales tax rate for a state based on state id (i.e., STATES.ALABAMA). 

```js
import { STATES, getTaxRate } from 'tax-rates';

getTaxRate(STATES.MASSACHUSETTS)  
// "6.25"
```

### `.getFoodTaxRate(stateId[number])`

Retrieves food tax rate for a state based on state id (i.e., STATES.ALABAMA)

```js
import { STATES, getFoodTaxRate } from 'tax-rates';

getFoodTaxRate(STATES.MASSACHUSETTS)  
// "0"
```

### `.getDrugTaxRate(stateId[number])`

Retrieves drug tax rate for a state based on state id (i.e., STATES.ALABAMA)

```js
import { STATES, getDrugTaxRate } from 'tax-rates';

getDrugTaxRate(STATES.MASSACHUSETTS)  
// "0"
```

### `.getPrescriptionDrugTaxRate(stateId[number])`

Retrieves prescription drug tax rate for a state based on state id (i.e., STATES.ALABAMA)

```js
import { STATES, getPrescriptionDrugTaxRate } from 'tax-rates';

getPrescriptionDrugTaxRate(STATES.MASSACHUSETTS)  
// "6.25"
```

### **Calculate Tax**

### `.calculateTax(price[number], stateId[number])`

Calculate sales tax based on price (i.e., 49.99) and state id (i.e., STATES.ALABAMA)

```js
import { STATES, calculateTax } from 'tax-rates';

calculateTax(49.99, STATES.NEW_YORK)
// 2.00
```

### `.calculateFoodTax(price[number], stateId[number])`

Calculate food tax based on price (i.e., 49.99) and state id (i.e., STATES.ALABAMA)

```js
import { STATES, calculateFoodTax } from 'tax-rates';

calculateFoodTax(49.99, STATES.NEW_YORK)
// 0
```

### `.calculateDrugTax(price[number], stateId[number])`

Calculate drug tax based on price (i.e., 49.99) and state id (i.e., STATES.ALABAMA)

```js
import { STATES, calculateDrugTax } from 'tax-rates';

calculateDrugTax(49.99, STATES.ILLINOIS)
// 0.50
```

### `.calculatePrescriptionDrugTax(price[number], stateId[number])`

Calculate prescription drug tax based on price (i.e., 49.99) and state id (i.e., STATES.ALABAMA)

```js
import { STATES, calculatePrescriptionDrugTax } from 'tax-rates';

calculatePrescriptionDrugTax(49.99, STATES.ILLINOIS)
// 0.50
```

### **Calculate Price With Tax**

### `.calculatePriceWithSalesTax(price[number], stateId[number])`

Calculate price for a regular product with specified state or custom tax rate

```js
import { STATES, calculatePriceWithSalesTax } from 'tax-rates';

calculatePriceWithSalesTax(49.99, STATES.NEW_YORK)
// 51.99
```

### `.calculatePriceWithFoodTax(price[number], stateId[number])`

Calculate price for a food product with specified state or custom tax rate

```js
import { STATES, calculatePriceWithFoodTax } from 'tax-rates';

calculatePriceWithFoodTax(49.99, STATES.NEW_YORK)
// 49.99
```

### `.calculatePriceWithDrugTax(price[number], stateId[number])`

Calculate price for a drug with specified state or custom tax rate

```js
import { STATES, calculatePriceWithDrugTax } from 'tax-rates';

calculatePriceWithDrugTax(49.99, STATES.ILLINOIS)
// 50.49
```

### `.calculatePriceWithPrescriptionDrugTax(price[number], stateId[number])`

Calculate price for a prescription drug with specified state or custom tax rate

```js
import { STATES, calculatePriceWithPrescriptionDrugTax } from 'tax-rates';

calculatePriceWithPrescriptionDrugTax(49.99, STATES.ILLINOIS)
// 50.49
```

## For Developers Only

### 📦 Getting Started

```
git clone https://github.com/npranto/api-tax-rates.git

npm install
```

> Before shipping, make sure to:
1. Edit `LICENSE` file
2. Edit `package.json` information (These will be used to generate the headers for your built files)
3. Edit `library: "TaxRates"` with your library's export name in `./config/webpack.config.prod.js`
4. Edit `./bin/postinstall` (If you would like to display a message on package install)

### 🚀 Deployment
1. `npm publish`
2. Your users can include your library as usual


### ✅ References
- Starter Kit: [Javascript Library Boilerplate
](https://github.com/hodgef/js-library-boilerplate)
- [State Sales Tax Rates
And Food & Drug Exemptions](https://www.taxadmin.org/assets/docs/Research/Rates/sales.pdf)

## Support

<a href="https://www.buymeacoffee.com/nsplovescoffee" target="_blank">
  <img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" >
</a>

## You May Also Like...

- [focus](https://github.com/npranto/focus) - A simple, elegant task manager application to help students and computer savvy workers get their work done efficiently and on time
- [lists](https://github.com/npranto/lists) - Quickly draught down your todos, groceries, chores or any other lists of items quickly #powerOfLists

## License

[MIT](https://tldrlegal.com/license/mit-license)

## Contributors

<div>
  <a href="https://github.com/npranto">
    <img src="https://avatars2.githubusercontent.com/u/13524077?v=4" alt="Nazmuz Shakib pranto" width="50" />
  </a>
</div>
