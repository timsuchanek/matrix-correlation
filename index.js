/**
  Sum of Absolute Differences (SAD) of two matrices.
*/
exports.SAD = function(A, B) {
  var sum = 0;
  overall(A, B, function(a, b) {
    sum += a - b;
  });
  return sum;
}

/**
  Sum of Squared Differences (SSD) of two matrices.
*/
exports.SSD = function(A, B) {
  var sum = 0;
  overall(A, B, function(a, b) {
    sum += (a - b) * (a - b);
  });
  return sum;
}

exports.ZNCC = function(A, B) {
  var mean_A = mean(A);
  var mean_B = mean(B);

  var numerator = 0;
  var demunerator = ...;
}

function mean(A) {
  var sum = 0;
  var m = A[0].length;
  var n = A.length;

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      sum += A[i][j];
    }
  }
  
  return sum / (m * n);
}

function overall(A, B, cb) {
  var m = A[0].length == B[0].length ? A[0].length : null;
  var n = A.length == B.length ? A.length : null;
  
  if (m === null || n === null) {
    throw new Error("Matrices don't have the same size.");
  }

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      cb(A[i][j], B[i][j]);
    }
  }
}