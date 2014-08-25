Matrix Correlations
===================
A Node.JS Script to calculate the following Matrix correlations:
- Sum of Absolute Differences (SAD)
- Sum of Squared Differences (SSD)
- Zero Mean Normalized Cross-Correlation (ZNCC)

## Usage
```sh
npm install matrix-correlation
```
```js
var corr = require('matrix-correlation');

var A = [
  [0,0,0],
  [54,54,54],
  [0,54,0]
];

var B = [
  [0,0,0],
  [108,108,108],
  [0,108,0]
];

console.log('ZNCC(A,B) = ' + corr.ZNCC(A,B));
```

## API
```js
corr.SAD(A,B);
corr.SSD(A,B);
corr.ZNCC(A,B);
```
## License
MIT