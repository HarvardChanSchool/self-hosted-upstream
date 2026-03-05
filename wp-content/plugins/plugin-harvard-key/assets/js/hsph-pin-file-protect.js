jQuery(document).ready(function($){
	
	// We store the object for convenience    
    var hsph_protected_file_list = $('.hsph-protected-file-list');
	
	// When our "good looking" button is clicked trigger click on "ugly" file field'
    $('.hsph-protected-file-button').click(function(e){
	    $('.hsph-protected-file-input').trigger('click');
    });
    
    // When our "ugly" file field is cliked
    $('.hsph-protected-file-input').change(function(e){
		// We append a loading message
        hsph_protected_file_list.append('<li class="uploading">'+hsph_protected_file_vars.uploading_text+'</li>');
        // Get form data
        var formData = new FormData();
        formData.append('action', 'hsph_protected_file_upload');
        formData.append('protected-file', $('input.hsph-protected-file-input')[0].files[0],$('input.hsph-protected-file-input').val());
        formData.append('_wpnonce', $('#hsph_protected_file_upload_nonce').val());
        formData.append('post_id', wp.media.view.settings.post.id);
        // Perform the ajax upload
        $.ajax({
            url: wp.ajax.settings.url,
            type: "POST",
            data: formData,
            mimeTypes:"multipart/form-data",
            contentType: false,
            dataType: 'json',
            cache: false,
            processData: false,
            success: function( response ){
	            // First we remove our uploading message
	            hsph_protected_file_list.find('.uploading').remove();
	            // We check that the upload was an actual success
	            if( typeof response === 'object' && typeof response.success === 'boolean' && response.success === true ) {
		            // Remove the empty placeholer if it's here
		            hsph_protected_file_list.find('.empty').remove();
		            // Append the html file preview returned by the plugin
		            hsph_protected_file_list.append(response.html);
	            }
	            // If we received an error response
	            else if( typeof response === 'object' && typeof response.success === 'boolean' && response.success === false ) {
		            // Display the error message response
		            hsph_protected_file_list.append('<li class="error">'+response.message+'</li>');
	            }
	            // If we don't understand the response
	            else {
		            // Display a generic error message
		            hsph_protected_file_list.append('<li class="error">'+hsph_protected_file_vars.unexpected_error+'</li>');
	            }
            },
            error: function(){
	            // First we remove our uploading message
	            hsph_protected_file_list.find('.uploading').remove();
	            // Display a generic error message
	            hsph_protected_file_list.append('<li class="error">'+hsph_protected_file_vars.unexpected_error+'</li>');
            }
         });
        
    });
    
    // Delete HKPF button event handler
    $(document).on('click','#hsph_key_file_protect .delete-attachment', function (e) {
	    // We store the object for convenience  
	    var button = $(e.target);
	    // Visual feedback and disable button
	    button.text(hsph_protected_file_vars.file_list_deleting_button_text).attr('disabled', true);
		// Get the form data
	    var formData = {
		    'action' : 'hsph_protected_file_delete',
		    'protected-file' : button.attr('data-key'),
		    '_wpnonce': $('#hsph_protected_file_upload_nonce').val(),
		    'post_id': wp.media.view.settings.post.id
	    };
        // Perform the ajax call
        $.ajax({
            url: wp.ajax.settings.url,
            type: "POST",
            data: formData,
            dataType: 'json',
            success: function( response ){
	            // If we get a success response
				if( typeof response === 'object' && typeof response.success === 'boolean' && response.success === true ) {
		           	// Remove the html preview
		           	button.parents('.attachment-info').remove();
		            // If there is no more files we add the empyt placeholder
				    if ( hsph_protected_file_list.find('li').length === 0 ) {
						hsph_protected_file_list.append('<li class="empty">'+hsph_protected_file_vars.file_list_empty_text+'</li>');
					}
	            }
	            // If we received an error response
	            else if( typeof response === 'object' && typeof response.success === 'boolean' && response.success === false ) {
		            // Display the error message response
		            hsph_protected_file_list.append('<li class="error">'+response.message+'</li>');
	            }
	            // If we don't understand the response
	            else {
		            // Display a generic error message
		            hsph_protected_file_list.append('<li class="error">'+hsph_protected_file_vars.unexpected_error+'</li>');
	            }
	            //We reset the delete button if it's still here 
	            button.text(hsph_protected_file_vars.file_list_delete_button_text).attr('disabled', false);
            },
            error: function(){
	            // Display a generic error message
            	hsph_protected_file_list.append('<li class="error">'+hsph_protected_file_vars.unexpected_error+'</li>');
            	//We reset the delete button
            	button.text(hsph_protected_file_vars.file_list_delete_button_text).attr('disabled', false);
            }
        });
    })
});