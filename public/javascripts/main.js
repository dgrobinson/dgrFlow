$(document).ready(function(){
    
    //what happens when you click the new crush button?
    $('#new_crush_button').click(insertNewPost);
    
    //what happens when you click the submit post button?
    $('#submit_post').click(submitPost);
    
    
    //---This code handles the default placeholder text
    $('.defaultText').live('focus', function(){
        if ( $(this).val() === $(this).attr("alt") )
           $(this).val("");
    });  
    $('.defaultText').live('blur', function(){
        if ( $(this).val() === "" )
            $(this).val( $(this).attr("alt") );
    });
    //-- End placeholder code
    
});


//Our insert post function
function insertNewPost(){
    //hide the button and show our new post box
    $('#new_crush_button').hide();
    $('#new_crush_box').show();
}


//Our submit post function
function submitPost(){
    
   //clone an existing post, and set values of the new post
   $new_post = $('.postbox').first().clone();
   $new_post.find(".post_title").html( $("#new_post_title").val() );
   $new_post.find(".post_body").html( $("#new_post_body").val() );
   $new_post.find(".post_time").html( "just now.");
   
   //insert the new post in the page
   $('#new_crush_box').after($new_post);
   
   //then hide the new_post box and re show the new button
   $('#new_crush_box').hide();
   $('#new_crush_button').show();

}
