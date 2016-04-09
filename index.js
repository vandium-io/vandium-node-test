'use strict';

const startTime = Date.now();

const vandium = require( 'vandium' );

vandium.validation( {

        name: vandium.types.string().required()
    });

const endTime = Date.now();

exports.handler = vandium( function( event ) {

    return new Promise( function( resolve, reject ) {

        resolve( {
            event,
            envTestValue: process.env.VANDIUM_TEST_VALUE,
            loadTime: (endTime-startTime)
        });
    });
});
