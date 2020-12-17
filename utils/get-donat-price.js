const getDonatPrice = numDonats =>
  (Math.round(numDonats * 1.5 * 100) / 100).toFixed(2);

export default getDonatPrice;
