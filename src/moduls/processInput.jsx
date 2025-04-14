const processInteger = num => (num === '' ? '' : Math.max(0, Math.floor(Number(num))));
const processFloat = num => (num === '' ? '' : Math.max(0, Number(num)));

export { processInteger, processFloat };
