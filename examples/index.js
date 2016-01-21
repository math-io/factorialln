'use strict';

var linspace = require( 'compute-linspace' );
var factorialln = require( './../lib' );

var x = linspace( -10, 10, 40 );
var v;
var i;

for ( i = 0; i < x.length; i++ ) {
	v = factorialln( x[ i ] );
	console.log( 'x: %d, f(x): %d', x[ i ], v );
}
