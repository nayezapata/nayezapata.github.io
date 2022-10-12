"use strict"

/*ui tabs widget */
$( function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
} )


/*ui datepicker widget*/ 
$( function() {
    var dateFormat = "mm/dd/yy",
    from = $( "#from" )
    .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
    })
    .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
    }),
    to = $( "#to" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 3
    })
    .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
    });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
} )



/* ui tooltip widget */
$( function() {
    $( document ).tooltip();
} )
