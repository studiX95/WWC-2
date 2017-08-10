$( document ).ready(function() {
  
    var $btn = jQuery('.btn-menu:eq(0)');
    var $nav = jQuery('nav:eq(0)');
    $nav.css('display','none');
    
    $btn.click(function(){
       $nav.slideToggle(); 
    });
    
});