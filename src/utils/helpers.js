export const convertUnit = {
  precision: 2,
  // lenght
  cm2ft: value => (value / 30.48).toFixed(2),
  ft2cm: value => (value * 30.48).toFixed(2),
  // mass
  kg2lbs: value => (value * 2.205).toFixed(2),
  kg2st: value => (value / 6.35).toFixed(2),
  lbs2kg: value => (value / 2.205).toFixed(2),
  lbs2st: value => (value / 14).toFixed(2),
  st2kg: value => (value * 6.35).toFixed(2),
  st2lbs: value => (value * 14).toFixed(2)
}