jQuery( document ).ready( function( $ ) {

  'use strict';

  $( '#menu_hamburguer' ).on( 'click', function() {

      $( this ).next().toggleClass( 'menu-max1200-hide' );

    } );

    // Gallery popup

    $('.project-item').magnificPopup({
   type: 'image',
     // Delay in milliseconds before popup is removed
    removalDelay: 300,

    // Class that is added to popup wrapper and background
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade',
     gallery:{
       enabled: true
     }
  });

} );
