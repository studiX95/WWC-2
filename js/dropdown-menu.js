$( document ).ready(function() {
  
    var $btn = jQuery('.btn-menu:eq(0)');
    var $nav = jQuery('nav:eq(0)');
    
    $btn.click(function(){
       $nav.slideToggle(); 
    });
    
});