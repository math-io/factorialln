'use strict';

var linspace = require( 'compute-linspace' );
var factorialln = require( './../lib' );

var n = linspace( -10, 10, 40 );
var v;
var i;

for ( i = 0; i < n.length; i++ ) {
	v = factorialln( n[ i ] );
	console.log( 'n: %d, f(n): %d', n[ i ], v );
}
