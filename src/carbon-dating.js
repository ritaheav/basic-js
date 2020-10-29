const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!parseFloat(sampleActivity) || Number(sampleActivity > MODERN_ACTIVITY) || Number(sampleActivity <= 0) || typeof sampleActivity !== 'string') return false
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD))
};
