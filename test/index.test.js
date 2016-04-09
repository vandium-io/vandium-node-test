'use strict';

const expect = require( 'chai' ).expect;

const LambdaTester = require( 'lambda-tester' );

process.env.LAMBDA_TASK_ROOT = require( 'app-root-path' ).path;

describe( 'vandium-node-test', function() {

    describe( '.handler', function() {

        it( 'normal operation', function() {

            var handler = require( '../index' ).handler;

            return LambdaTester( handler )
                .event( { name: '  Fred  ' } )
                .expectResult( function( result ) {

                    expect( result ).to.be.an( 'Object' );
                    expect( result.event ).to.eql( { name: 'Fred' } );
                    expect( result.envTestValue ).to.equal( '42' );

                    console.log( JSON.stringify( result, null, 4 ) );
                });
        })
    });
});
