jQuery(document).ready( function () {
    // Gestion des popup de confirmation
	$('body').on('click','.popup-confirm', function(e) {

		// jQuery objects
		var $message = $(this).attr("data-popup-confirm-message");
		var $title = $(this).attr("data-popup-confirm-title");

		var data_id_element = $(this).attr("data-id-element");

		// RÃ©cupÃ©ration du contenu pour la popup
		var url = $(this).attr("data-popup-confirm-url");
		var message = (typeof $message !== typeof undefined && $message !== false)? $message : "Etes-vous sÃ»r?";
		var title = (typeof $title !== typeof undefined && $title !== false)? $title : "FenÃªtre de confirmation";

		// Modification du contenu de la popup
		$('.modal-popup-confirm').find('.btn-modal-popup-confirm-confirm').attr("href", url);
		$('.modal-popup-confirm').find('.modal-title').html(title);
		$('.modal-popup-confirm').find('.modal-body').html(message);

		if(typeof data_id_element !== typeof undefined && data_id_element !== false){
			$('.modal-popup-confirm').find('.btn-modal-popup-confirm-confirm').attr("data-id-element", data_id_element);
		}

	});


	// Gestion des popup de confirmation
	$('body').on('click','.btn-modal-popup-confirm-confirm', function(e) {
		e.preventDefault();

		$('.modal-popup-confirm').find('.close').trigger('click');

		open_loading_fade();

		var target = $(this).attr('href');
		var data_id_element = $(this).attr("data-id-element");
		var url_redirection =  $(this).attr("data-popup-confirm-redirect-url");

		$.ajax({
	        url: target,
	        dataType: 'json',
	        success: function(response){
	        	if(response.result != 'ko'){
	        		//console.log(response);

	        		//On fait passer le this et l'id element au trigger
	        		response.trigger.element = this;
	        		response.trigger.id_element = data_id_element;

	        		//On envoie le trigger
	        		$(document).trigger(response.trigger);
	        		alertify.success(response.message);
					$('.alertify-log-success').prepend('<p class="fleft" style="margin-top:-1px; margin-right:10px;"><i class="fa fa-check-circle fs-26" style="color:#55B475"></i></p>');
	        	}else{
	        		alertify.error(response.message);
	        	}

	        	if(url_redirection != null){
	        		document.location.href= url_redirection;
	        	}

				close_loading_fade();
	        }
		});

	});


	// Au close de la modal on supprime son contenu
	$('.modal-popup-confirm').on('hidden.bs.modal', function (e) {
		  $(this).find('.modal-title').empty();
		  $(this).find('.modal-body').empty();
		  $(this).find('.btn-modal-popup-confirm-confirm').show();
		  $(this).find('.btn-modal-popup-confirm-confirm').attr("href", "");
	});

});