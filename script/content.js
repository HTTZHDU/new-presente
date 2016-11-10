$('.edit-title').bind('click',function(){
	$('.edit-title').hide()
	$('.edit-form').show()
	// $('#presentation').bind('click',function(){
	// 	$('.edit-title').hide()
	// })
})

// $('.type1').bind('click',function(){
// 	$('.edit-title1').show()
// 	$('.edit-subtitle').show()
// 	$('.edit-content2').show()
// 	$('.edit-content').hide()
// })
// $('.type2').bind('click',function(){
// 	$('.edit-title1').show()
// 	$('.edit-content2').show()
// 	$('.edit-subtitle').hide()
// 	$('.edit-content').hide()
// })
// $('.type3').bind('click',function(){
// 	$('.edit-title1').show()
// 	$('.edit-content').show()
// 	$('.edit-subtitle').hide()
// 	$('.edit-content2').hide()
// })
$('.edit-area div').hide();
$(function(){
	var list = $('.layout li');
	$('.edit1').show();
	$('.edit4').show();
	$('.edit2').hide();
	$('.edit3').hide();
	$(list).bind('click',function(){
		var index1 = $('.layout li').index($(this));
		switch(index1){
			
			case 0:
			$('.edit1').show();
			$('.edit4').show();
			$('.edit2').hide();
			$('.edit3').hide();
			break;
			case 1:
			$('.edit1').show();
			$('.edit2').show();
			$('.edit3').hide();
			$('.edit4').hide();
			break;
			case 2:
			$('.edit1').show();
			$('.edit3').show();
			$('.edit2').hide();
			$('.edit4').hide();
			break;
			case 3:
			$('.edit2').show();
			$('.edit4').show();
			$('.edit1').hide();
			$('.edit3').hide();
			break;

		}

	})
	
})