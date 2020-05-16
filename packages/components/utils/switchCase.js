export const simpleSwitchCase = (cases) => (defaultCase) => (key) =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase;

export const executeIfFunction = (f) => (f instanceof Function ? f() : f);

export default (cases) => (defaultCase) => (key) =>
  executeIfFunction(simpleSwitchCase(cases)(defaultCase)(key));
