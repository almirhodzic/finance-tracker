export const useCurrency = (amount) => {
   const currency = new Intl.NumberFormat('de-CH', {
      style: 'currency',
      currency: 'CHF',
   }).format(isRef(amount) ? amount.value : amount);
   
   return {
      currency
   };
};