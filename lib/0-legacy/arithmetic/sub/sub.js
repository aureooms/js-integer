"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.bsub_t = bsub_t;
exports.lsub_t = lsub_t;

/**
 * @param {int} r base (radix)
 */

function bsub_t(r) {

	/**
  * Subtracts two big endian arrays, k >= i >= j
  * wraps
  *
  * @param {array} a first operand
  * @param {int} ai a left
  * @param {int} aj a right
  * @param {array} b second operand
  * @param {int} bi b left
  * @param {int} bj b right
  * @param {array} c result, must be 0 initialized
  * @param {int} ci c left
  * @param {int} cj c right
  */

	return function (a, ai, aj, b, bi, bj, c, ci, cj) {
		var T,
		    C = 0;

		while (--bj >= bi) {
			--aj;--cj;
			T = C;
			C = a[aj] < b[bj] + T;
			c[cj] = a[aj] - b[bj] + (C * r - T);
		}

		while (--aj >= ai) {
			--cj;
			T = C;
			C = a[aj] < T;
			c[cj] = a[aj] + (C * r - T);
		}

		if (C) {
			while (--cj >= ci) {
				c[cj] = r - 1;
			}
		}
	};
}

/**
 * @param {int} r base (radix)
 */
function lsub_t(r) {

	/**
  * Subtracts two little endian arrays, k >= i >= j
  * wraps
  *
  * @param {array} a first operand
  * @param {int} ai a left
  * @param {int} aj a right
  * @param {array} b second operand
  * @param {int} bi b left
  * @param {int} bj b right
  * @param {array} c result, must be 0 initialized
  * @param {int} ci c left
  * @param {int} cj c right
  */

	return function (a, ai, aj, b, bi, bj, c, ci, cj) {
		var T,
		    C = 0;

		while (bi < bj) {
			T = C;
			C = a[ai] < b[bi] + T;
			c[ci] = a[ai] - b[bi] + (C * r - T);
			++ai;++bi;++ci;
		}

		while (ai < aj) {
			T = C;
			C = a[ai] < T;
			c[ci] = a[ai] + (C * r - T);
			++ai;++ci;
		}

		if (C) {
			while (ci < cj) {
				c[ci] = r - 1;
				++ci;
			}
		}
	};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wLWxlZ2FjeS9hcml0aG1ldGljL3N1Yi9zdWIuanMiXSwibmFtZXMiOlsiYnN1Yl90IiwibHN1Yl90IiwiciIsImEiLCJhaSIsImFqIiwiYiIsImJpIiwiYmoiLCJjIiwiY2kiLCJjaiIsIlQiLCJDIl0sIm1hcHBpbmdzIjoiOzs7OztRQU1nQkEsTSxHQUFBQSxNO1FBK0NBQyxNLEdBQUFBLE07O0FBcERoQjs7OztBQUtPLFNBQVNELE1BQVQsQ0FBaUJFLENBQWpCLEVBQW1COztBQUV6Qjs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsUUFBTyxVQUFTQyxDQUFULEVBQVlDLEVBQVosRUFBZ0JDLEVBQWhCLEVBQW9CQyxDQUFwQixFQUF1QkMsRUFBdkIsRUFBMkJDLEVBQTNCLEVBQStCQyxDQUEvQixFQUFrQ0MsRUFBbEMsRUFBc0NDLEVBQXRDLEVBQXlDO0FBQy9DLE1BQUlDLENBQUo7QUFBQSxNQUFPQyxJQUFJLENBQVg7O0FBRUEsU0FBTSxFQUFFTCxFQUFGLElBQVFELEVBQWQsRUFBaUI7QUFDaEIsS0FBRUYsRUFBRixDQUFNLEVBQUVNLEVBQUY7QUFDTkMsT0FBSUMsQ0FBSjtBQUNBQSxPQUFJVixFQUFFRSxFQUFGLElBQVFDLEVBQUVFLEVBQUYsSUFBUUksQ0FBcEI7QUFDQUgsS0FBRUUsRUFBRixJQUFRUixFQUFFRSxFQUFGLElBQVFDLEVBQUVFLEVBQUYsQ0FBUixJQUFpQkssSUFBRVgsQ0FBRixHQUFNVSxDQUF2QixDQUFSO0FBQ0E7O0FBRUQsU0FBTSxFQUFFUCxFQUFGLElBQVFELEVBQWQsRUFBaUI7QUFDaEIsS0FBRU8sRUFBRjtBQUNBQyxPQUFJQyxDQUFKO0FBQ0FBLE9BQUlWLEVBQUVFLEVBQUYsSUFBUU8sQ0FBWjtBQUNBSCxLQUFFRSxFQUFGLElBQVFSLEVBQUVFLEVBQUYsS0FBU1EsSUFBRVgsQ0FBRixHQUFNVSxDQUFmLENBQVI7QUFDQTs7QUFFRCxNQUFHQyxDQUFILEVBQUs7QUFDSixVQUFNLEVBQUVGLEVBQUYsSUFBUUQsRUFBZCxFQUFpQjtBQUNoQkQsTUFBRUUsRUFBRixJQUFRVCxJQUFJLENBQVo7QUFDQTtBQUNEO0FBRUQsRUF2QkQ7QUF3QkE7O0FBR0Q7OztBQUdPLFNBQVNELE1BQVQsQ0FBaUJDLENBQWpCLEVBQW1COztBQUV6Qjs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsUUFBTyxVQUFTQyxDQUFULEVBQVlDLEVBQVosRUFBZ0JDLEVBQWhCLEVBQW9CQyxDQUFwQixFQUF1QkMsRUFBdkIsRUFBMkJDLEVBQTNCLEVBQStCQyxDQUEvQixFQUFrQ0MsRUFBbEMsRUFBc0NDLEVBQXRDLEVBQXlDO0FBQy9DLE1BQUlDLENBQUo7QUFBQSxNQUFPQyxJQUFJLENBQVg7O0FBRUEsU0FBTU4sS0FBS0MsRUFBWCxFQUFjO0FBQ2JJLE9BQUlDLENBQUo7QUFDQUEsT0FBSVYsRUFBRUMsRUFBRixJQUFRRSxFQUFFQyxFQUFGLElBQVFLLENBQXBCO0FBQ0FILEtBQUVDLEVBQUYsSUFBUVAsRUFBRUMsRUFBRixJQUFRRSxFQUFFQyxFQUFGLENBQVIsSUFBaUJNLElBQUVYLENBQUYsR0FBTVUsQ0FBdkIsQ0FBUjtBQUNBLEtBQUVSLEVBQUYsQ0FBTSxFQUFFRyxFQUFGLENBQU0sRUFBRUcsRUFBRjtBQUNaOztBQUVELFNBQU1OLEtBQUtDLEVBQVgsRUFBYztBQUNiTyxPQUFJQyxDQUFKO0FBQ0FBLE9BQUlWLEVBQUVDLEVBQUYsSUFBUVEsQ0FBWjtBQUNBSCxLQUFFQyxFQUFGLElBQVFQLEVBQUVDLEVBQUYsS0FBU1MsSUFBRVgsQ0FBRixHQUFNVSxDQUFmLENBQVI7QUFDQSxLQUFFUixFQUFGLENBQU0sRUFBRU0sRUFBRjtBQUNOOztBQUVELE1BQUdHLENBQUgsRUFBSztBQUNKLFVBQU1ILEtBQUtDLEVBQVgsRUFBYztBQUNiRixNQUFFQyxFQUFGLElBQVFSLElBQUksQ0FBWjtBQUNBLE1BQUVRLEVBQUY7QUFDQTtBQUNEO0FBRUQsRUF4QkQ7QUF5QkEiLCJmaWxlIjoic3ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEBwYXJhbSB7aW50fSByIGJhc2UgKHJhZGl4KVxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGJzdWJfdCAocil7XG5cblx0LyoqXG5cdCAqIFN1YnRyYWN0cyB0d28gYmlnIGVuZGlhbiBhcnJheXMsIGsgPj0gaSA+PSBqXG5cdCAqIHdyYXBzXG5cdCAqXG5cdCAqIEBwYXJhbSB7YXJyYXl9IGEgZmlyc3Qgb3BlcmFuZFxuXHQgKiBAcGFyYW0ge2ludH0gYWkgYSBsZWZ0XG5cdCAqIEBwYXJhbSB7aW50fSBhaiBhIHJpZ2h0XG5cdCAqIEBwYXJhbSB7YXJyYXl9IGIgc2Vjb25kIG9wZXJhbmRcblx0ICogQHBhcmFtIHtpbnR9IGJpIGIgbGVmdFxuXHQgKiBAcGFyYW0ge2ludH0gYmogYiByaWdodFxuXHQgKiBAcGFyYW0ge2FycmF5fSBjIHJlc3VsdCwgbXVzdCBiZSAwIGluaXRpYWxpemVkXG5cdCAqIEBwYXJhbSB7aW50fSBjaSBjIGxlZnRcblx0ICogQHBhcmFtIHtpbnR9IGNqIGMgcmlnaHRcblx0ICovXG5cblx0cmV0dXJuIGZ1bmN0aW9uKGEsIGFpLCBhaiwgYiwgYmksIGJqLCBjLCBjaSwgY2ope1xuXHRcdHZhciBULCBDID0gMDtcblxuXHRcdHdoaWxlKC0tYmogPj0gYmkpe1xuXHRcdFx0LS1hajsgLS1jajtcblx0XHRcdFQgPSBDO1xuXHRcdFx0QyA9IGFbYWpdIDwgYltial0gKyBUO1xuXHRcdFx0Y1tjal0gPSBhW2FqXSAtIGJbYmpdICsgKEMqciAtIFQpO1xuXHRcdH1cblxuXHRcdHdoaWxlKC0tYWogPj0gYWkpe1xuXHRcdFx0LS1jajtcblx0XHRcdFQgPSBDO1xuXHRcdFx0QyA9IGFbYWpdIDwgVDtcblx0XHRcdGNbY2pdID0gYVthal0gKyAoQypyIC0gVCk7XG5cdFx0fVxuXG5cdFx0aWYoQyl7XG5cdFx0XHR3aGlsZSgtLWNqID49IGNpKXtcblx0XHRcdFx0Y1tjal0gPSByIC0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0fTtcbn1cblxuXG4vKipcbiAqIEBwYXJhbSB7aW50fSByIGJhc2UgKHJhZGl4KVxuICovXG5leHBvcnQgZnVuY3Rpb24gbHN1Yl90IChyKXtcblxuXHQvKipcblx0ICogU3VidHJhY3RzIHR3byBsaXR0bGUgZW5kaWFuIGFycmF5cywgayA+PSBpID49IGpcblx0ICogd3JhcHNcblx0ICpcblx0ICogQHBhcmFtIHthcnJheX0gYSBmaXJzdCBvcGVyYW5kXG5cdCAqIEBwYXJhbSB7aW50fSBhaSBhIGxlZnRcblx0ICogQHBhcmFtIHtpbnR9IGFqIGEgcmlnaHRcblx0ICogQHBhcmFtIHthcnJheX0gYiBzZWNvbmQgb3BlcmFuZFxuXHQgKiBAcGFyYW0ge2ludH0gYmkgYiBsZWZ0XG5cdCAqIEBwYXJhbSB7aW50fSBiaiBiIHJpZ2h0XG5cdCAqIEBwYXJhbSB7YXJyYXl9IGMgcmVzdWx0LCBtdXN0IGJlIDAgaW5pdGlhbGl6ZWRcblx0ICogQHBhcmFtIHtpbnR9IGNpIGMgbGVmdFxuXHQgKiBAcGFyYW0ge2ludH0gY2ogYyByaWdodFxuXHQgKi9cblxuXHRyZXR1cm4gZnVuY3Rpb24oYSwgYWksIGFqLCBiLCBiaSwgYmosIGMsIGNpLCBjail7XG5cdFx0dmFyIFQsIEMgPSAwO1xuXG5cdFx0d2hpbGUoYmkgPCBiail7XG5cdFx0XHRUID0gQztcblx0XHRcdEMgPSBhW2FpXSA8IGJbYmldICsgVDtcblx0XHRcdGNbY2ldID0gYVthaV0gLSBiW2JpXSArIChDKnIgLSBUKTtcblx0XHRcdCsrYWk7ICsrYmk7ICsrY2k7XG5cdFx0fVxuXG5cdFx0d2hpbGUoYWkgPCBhail7XG5cdFx0XHRUID0gQztcblx0XHRcdEMgPSBhW2FpXSA8IFQ7XG5cdFx0XHRjW2NpXSA9IGFbYWldICsgKEMqciAtIFQpO1xuXHRcdFx0KythaTsgKytjaTtcblx0XHR9XG5cblx0XHRpZihDKXtcblx0XHRcdHdoaWxlKGNpIDwgY2ope1xuXHRcdFx0XHRjW2NpXSA9IHIgLSAxO1xuXHRcdFx0XHQrK2NpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9O1xufVxuIl19