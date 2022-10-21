$(function(){
	//alert("Hola desde JQUERY");
	var color="";

	$("#micolor").on("change",function(){
		color=$(this).val();
		//$(".mensaje").html(color);
		$("body").css("background",color);
		//alert("Color Seleccionado"+color);
	})

	//var col=$("#micolor").val();
});