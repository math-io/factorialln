'use strict';

// MODULES //

var tape = require( 'tape' );
var abs = require( 'math-abs' );
var factorialln = require( './../lib' );


// CONSTANTS //

var PINF = require( 'const-pinf-float64' ),
	NINF = require( 'const-ninf-float64' );


// FIXTURES //

var data1 = require( './fixtures/data1.json' );
var expected1 = require( './fixtures/expected1.json' );
var data2 = require( './fixtures/data2.json' );
var expected2 = require( './fixtures/expected2.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof factorialln === 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = factorialln( NaN );
	t.ok( v !== v, 'returns NaN when provided a NaN' );
	t.end();
});

tape( 'the function returns +Infinity when provided a negative integer', function test( t ) {
	var v = factorialln( -1 );
	t.ok( v === PINF, 'returns +Infinity when provided -1' );

	v = factorialln( -2 );
	t.ok( v === PINF, 'returns +Infinity when provided -2' );

	v = factorialln( -3 );
	t.ok( v === PINF, 'returns +Infinity when provided -3' );

	t.end();
});

tape( 'the function returns infinity when provided infinity', function test( t ) {
	var v = factorialln( PINF );
	t.ok( v === PINF, 'returns +Inf when provided +Inf' );
	v = factorialln( NINF );
	t.ok( v === NINF, 'returns -Inf when provided -Inf' );
	t.end();
});

tape( 'the function evaluates the natural log factorial (for integers)', function test( t ) {
	var delta;
	var tol;
	var v;
	var i;

	for ( i = 0; i < data1.length; i++ ) {
		v = factorialln( data1[ i ] );
		delta = abs( v - expected1[ i ] );
		tol = 2.75e-12 * Math.max( 1, abs( v ), abs( expected1[ i ] ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + data1[ i ] + '. Value: ' + v + '. Expected: ' + expected1[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'the function evaluates the natural log factorial (decimal values)', function test( t ) {
	var delta;
	var tol;
	var v;
	var i;

	for ( i = 0; i < data2.length; i++ ) {
		v = factorialln( data2[ i ] );
		delta = abs( v - expected2[ i ] );
		tol = 2.75e-12 * Math.max( 1, abs( v ), abs( expected2[ i ] ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + data2[ i ] + '. Value: ' + v + '. Expected: ' + expected2[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});
