import cloneDeep from 'lodash.clonedeep';

const taxRates = {
  '1': {
    tax: {
      sales: '4',
      food: '4',
      drugs: '4',
      prescriptionDrugs: '0',
    }
  },
  '2': {
    tax: {
      sales: '0',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '3': {
    tax: {
      sales: '5.6',
      food: '0',
      drugs: '5.6',
      prescriptionDrugs: '0',
    }
  },
  '4': {
    tax: {
      sales: '6.5',
      food: '1.5',
      drugs: '6.5',
      prescriptionDrugs: '0',
    }
  },
  '5': {
    tax: {
      sales: '7.25',
      food: '0',
      drugs: '7.25',
      prescriptionDrugs: '0',
    }
  },
  '6': {
    tax: {
      sales: '2.9',
      food: '0',
      drugs: '2.9',
      prescriptionDrugs: '0',
    }
  },
  '7': {
    tax: {
      sales: '6.35',
      food: '0',
      drugs: '6.35',
      prescriptionDrugs: '0',
    }
  },
  '8': {
    tax: {
      sales: '0',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '9': {
    tax: {
      sales: '6',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '10': {
    tax: {
      sales: '4',
      food: '0',
      drugs: '4',
      prescriptionDrugs: '0',
    }
  },
  '11': {
    tax: {
      sales: '4',
      food: '4',
      drugs: '4',
      prescriptionDrugs: '0',
    }
  },
  '12': {
    tax: {
      sales: '6',
      food: '6',
      drugs: '6',
      prescriptionDrugs: '0',
    }
  },
  '13': {
    tax: {
      sales: '6.25',
      food: '1',
      drugs: '1',
      prescriptionDrugs: '1',
    }
  },
  '14': {
    tax: {
      sales: '7',
      food: '0',
      drugs: '7',
      prescriptionDrugs: '0',
    }
  },
  '15': {
    tax: {
      sales: '6',
      food: '0',
      drugs: '6',
      prescriptionDrugs: '0',
    }
  },
  '16': {
    tax: {
      sales: '6.5',
      food: '6.5',
      drugs: '6.5',
      prescriptionDrugs: '0',
    }
  },
  '17': {
    tax: {
      sales: '6',
      food: '0',
      drugs: '6',
      prescriptionDrugs: '0',
    }
  },
  '18': {
    tax: {
      sales: '5',
      food: '0',
      drugs: '5',
      prescriptionDrugs: '0',
    }
  },
  '19': {
    tax: {
      sales: '5.5',
      food: '0',
      drugs: '5.5',
      prescriptionDrugs: '0',
    }
  },
  '20': {
    tax: {
      sales: '6',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '21': {
    tax: {
      sales: '6.25',
      food: '6.25',
      drugs: '6.25',
      prescriptionDrugs: '0',
    }
  },
  '22': {
    tax: {
      sales: '6',
      food: '0',
      drugs: '6',
      prescriptionDrugs: '0',
    }
  },
  '23': {
    tax: {
      sales: '6.875',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '24': {
    tax: {
      sales: '7',
      food: '0',
      drugs: '7',
      prescriptionDrugs: '0',
    }
  },
  '25': {
    tax: {
      sales: '4.225',
      food: '1.225',
      drugs: '4.225',
      prescriptionDrugs: '0',
    }
  },
  '26': {
    tax: {
      sales: '0',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '27': {
    tax: {
      sales: '5.5',
      food: '0',
      drugs: '5.5',
      prescriptionDrugs: '0',
    }
  },
  '28': {
    tax: {
      sales: '6.85',
      food: '0',
      drugs: '6.85',
      prescriptionDrugs: '0',
    }
  },
  '29': {
    tax: {
      sales: '0',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '30': {
    tax: {
      sales: '6.625',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '31': {
    tax: {
      sales: '5.125',
      food: '0',
      drugs: '5.125',
      prescriptionDrugs: '0',
    }
  },
  '32': {
    tax: {
      sales: '4',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '33': {
    tax: {
      sales: '4.75',
      food: '0',
      drugs: '4.75',
      prescriptionDrugs: '0',
    }
  },
  '34': {
    tax: {
      sales: '5',
      food: '0',
      drugs: '5',
      prescriptionDrugs: '0',
    }
  },
  '35': {
    tax: {
      sales: '5.75',
      food: '0',
      drugs: '5.75',
      prescriptionDrugs: '0',
    }
  },
  '36': {
    tax: {
      sales: '4.5',
      food: '0',
      drugs: '4.5',
      prescriptionDrugs: '0',
    }
  },
  '37': {
    tax: {
      sales: '0',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '38': {
    tax: {
      sales: '6',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '39': {
    tax: {
      sales: '7',
      food: '0',
      drugs: '7',
      prescriptionDrugs: '0',
    }
  },
  '40': {
    tax: {
      sales: '6',
      food: '0',
      drugs: '6',
      prescriptionDrugs: '0',
    }
  },
  '41': {
    tax: {
      sales: '4.5',
      food: '0',
      drugs: '4.5',
      prescriptionDrugs: '0',
    }
  },
  '42': {
    tax: {
      sales: '7',
      food: '5',
      drugs: '7',
      prescriptionDrugs: '0',
    }
  },
  '43': {
    tax: {
      sales: '6.25',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '44': {
    tax: {
      sales: '5.95',
      food: '4.25',
      drugs: '5.95',
      prescriptionDrugs: '0',
    }
  },
  '45': {
    tax: {
      sales: '6',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '46': {
    tax: {
      sales: '5.3',
      food: '3.5',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  },
  '47': {
    tax: {
      sales: '6.5',
      food: '0',
      drugs: '6.5',
      prescriptionDrugs: '0',
    }
  },
  '48': {
    tax: {
      sales: '6',
      food: '0',
      drugs: '6',
      prescriptionDrugs: '0',
    }
  },
  '49': {
    tax: {
      sales: '5',
      food: '0',
      drugs: '5',
      prescriptionDrugs: '0',
    }
  },
  '50': {
    tax: {
      sales: '4',
      food: '0',
      drugs: '4',
      prescriptionDrugs: '0',
    }
  },
  '51': {
    tax: {
      sales: '5.75',
      food: '0',
      drugs: '0',
      prescriptionDrugs: '0',
    }
  }
};

export const TAX_RATES = cloneDeep(taxRates);


