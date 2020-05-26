//	CHECK OFF THROUGH THE TODOS-----------------------------------------------------------------------------------
$("ul").on("click", "li", function(){   //We are doing this because if it was added on li's initially then it will add to only the li's which are present
	//at the starting...but not on the ones later added...but in this case it will add to the ul but will work when the li's inside the ul is clicked
	$(this).toggleClass("completed");
})

//  REMOVE THE TODO WHOSE X IS CLICKED-----------------------------------------------------------------------
//any event pass through all of its parents......it is called 'bubbling up'............................

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(600,function(){        //this.parent returns the parent element of that element....here this is the span and parent is the li
		$(this).remove();        //here this refeers to the li not the span;
	});   
	event.stopPropagation();   //this stop the event from bubbling up;
})

$("input[type='text']").on("keypress",function(event){
	if(event.which === 13){                  //13 is the charcode o the enter key
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");     //append method appends the string as an HTML to the element selected to append on
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})