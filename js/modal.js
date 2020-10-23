function openModal(target, title, disable_close) {
	$("#dynamicmodal .modal-content .dynamic-container").empty();
	// load the url and show modal on success
	$('#dynamicmodal').modal({

	});

	if(disable_close) {
		$('#dynamicmodal').on('hide.bs.modal', function(e) {
			e.preventDefault();
		});
	}

	$("#dynamicmodal .modal-content .dynamic-container").load(target, function() {
		 $("#dynamicmodal").modal("show");
		 $('#dynamicmodal .modal-title').html(title);

		 if($('.datepicker').length) {
			$(".datepicker").datepicker({ dateFormat: 'dd/mm/yy', changeYear:true });
		}

		$('.icon-success').animate({ opacity: 1}, 'slow');
	});
}
jQuery(document).ready( function () {
	$("body").on('click','.open-modal', function(ev) {
		ev.preventDefault();
		var target = $(this).attr("href");
		var title = $(this).attr('data-title');
		var disable_close = $(this).attr('data-close') == 'false';
		openModal(target, title, disable_close);
	});
});