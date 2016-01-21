factorialln
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Natural logarithm of the [factorial function][factorial-function].

Computes the natural logarithm of the factorial, i.e.

<div class="equation" align="center" data-raw-text="f(n)=\ln (n!)" data-equation="eq:factorialln_equation">
   <img src="https://cdn.rawgit.com/math-io/factorialln/a027762a84a277f3f16497bdda4ed454d3ae86ae/docs/img/eqn.svg" alt="Equation of the natural logarithm of the factorial.">
   <br>
</div>

This function is provided since the factorial `n!` can overflow for large input arguments. Because the factorial function won't return correct results in this case,  the function call `factorialln( n )` is  preferred to `ln( factorial( n ) )`.

## Installation

``` bash
$ npm install math-factorialln
```


## Usage

``` javascript
var factorialln = require( 'math-factorialln' );
```


#### factorialln( n )

Evaluates the natural logarithm of the [factorial function][factorial-function]. For non-integer `n`, the function returns
`ln( n! ) = ln( Γ(n+1) )`, where `Γ` is the [gamma function][gamma-function]. For `n < 0`, `+Infinity` is returned.

``` javascript
var val;

val = factorialln( 3 );
// returns ~1.792

val = factorialln( 2.4 );
// returns ~1.092

val = factorialln( -1 );
// returns +Infinity
```

## Implementation

For non-integer input arguments, the function computes the natural logarithm of the factorial of `n` by evaluating the logarithm of the gamma function at `n+1`, i.e. `ln( Γ(n+1) )`. When `n` is an integer and smaller than 256, the result is looked up in a table, and for n > 256, the following approximation is used:

```
(n – 1/2) ln(n) – n + (1/2) ln(2 π) + 1/(12 n)
```

## References

See [John D. Cook's blog post](http://www.johndcook.com/blog/2010/08/16/how-to-compute-log-factorial/) for a discussion of the approach to calculate the log factorial when `n` is an integer and his [code snippet in C#] (http://www.johndcook.com/blog/csharp_log_factorial/), which we translated to JavaScript for this module.

## Examples

``` javascript
var linspace = require( 'compute-linspace' );
var factorialln = require( 'math-factorialln' );

var n = linspace( -10, 10, 40 );
var v;
var i;

for ( i = 0; i < n.length; i++ ) {
	v = factorialln( n[ i ] );
	console.log( 'n: %d, f(n): %d', n[ i ], v );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-factorialln.svg
[npm-url]: https://npmjs.org/package/math-factorialln

[build-image]: http://img.shields.io/travis/math-io/factorialln/master.svg
[build-url]: https://travis-ci.org/math-io/factorialln

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/factorialln/master.svg
[coverage-url]: https://codecov.io/github/math-io/factorialln?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/factorialln.svg
[dependencies-url]: https://david-dm.org/math-io/factorialln

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/factorialln.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/factorialln

[github-issues-image]: http://img.shields.io/github/issues/math-io/factorialln.svg
[github-issues-url]: https://github.com/math-io/factorialln/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function
[factorial-function]: https://github.com/math-io/factorial
[real]: https://en.wikipedia.org/wiki/Real_number
[complex]: https://en.wikipedia.org/wiki/Complex_number
[euler-mascheroni-constant]: https://github.com/compute-io/const-eulergamma
