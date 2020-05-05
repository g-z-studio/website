export const propertyExist = (variable) => (property) => (other) =>
  variable !== null && variable !== undefined ? property : other;

export const propertyExistOrVoid = (variable) => (property) =>
  propertyExist(variable)(property)("");

export const propertyExistOrZero = (variable) => (property) =>
  propertyExist(variable)(property)("0");
