jQuery( document ).ready( function( $ ) {

  'use strict';

  $( '#menu_hamburguer' ).on( 'click', function() {

      $( this ).next().toggleClass( 'menu-max1200-hide' );

    } );

} );
