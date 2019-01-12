import cloneDeep from 'lodash.clonedeep';

const taxRates = {
  '1': {
    tax: {
      sales: '4',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '2': {
    tax: {
      sales: '0',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '3': {
    tax: {
      sales: '5.6',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '4': {
    tax: {
      sales: '6.5',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '5': {
    tax: {
      sales: '7.25',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '6': {
    tax: {
      sales: '2.9',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '7': {
    tax: {
      sales: '6.35',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '8': {
    tax: {
      sales: '0',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '9': {
    tax: {
      sales: '6',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '10': {
    tax: {
      sales: '4',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '11': {
    tax: {
      sales: '4',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '12': {
    tax: {
      sales: '6',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '13': {
    tax: {
      sales: '6.25',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '14': {
    tax: {
      sales: '7',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '15': {
    tax: {
      sales: '6',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '16': {
    tax: {
      sales: '6.5',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '17': {
    tax: {
      sales: '6',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '18': {
    tax: {
      sales: '5',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '19': {
    tax: {
      sales: '5.5',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '20': {
    tax: {
      sales: '6',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '21': {
    tax: {
      sales: '6.25',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '22': {
    tax: {
      sales: '6',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '23': {
    tax: {
      sales: '6.875',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '24': {
    tax: {
      sales: '7',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '25': {
    tax: {
      sales: '4.225',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '26': {
    tax: {
      sales: '0',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '27': {
    tax: {
      sales: '5.5',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '28': {
    tax: {
      sales: '6.85',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '29': {
    tax: {
      sales: '0',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '30': {
    tax: {
      sales: '6.625',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '31': {
    tax: {
      sales: '5.125',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '32': {
    tax: {
      sales: '4',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '33': {
    tax: {
      sales: '4.75',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '34': {
    tax: {
      sales: '5',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '35': {
    tax: {
      sales: '5.75',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '36': {
    tax: {
      sales: '4.5',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '37': {
    tax: {
      sales: '0',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '38': {
    tax: {
      sales: '6',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '39': {
    tax: {
      sales: '7',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '40': {
    tax: {
      sales: '6',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '41': {
    tax: {
      sales: '4.5',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '42': {
    tax: {
      sales: '7',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '43': {
    tax: {
      sales: '6.25',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '44': {
    tax: {
      sales: '5.95',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '45': {
    tax: {
      sales: '6',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '46': {
    tax: {
      sales: '5.3',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '47': {
    tax: {
      sales: '6.5',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '48': {
    tax: {
      sales: '6',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '49': {
    tax: {
      sales: '5',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '50': {
    tax: {
      sales: '4',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  },
  '51': {
    tax: {
      sales: '5.75',
      food: '',
      drugs: '',
      prescriptionDrugs: '',
    }
  }
};

export const TAX_RATES = cloneDeep(taxRates);


