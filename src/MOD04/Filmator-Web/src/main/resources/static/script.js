function avaliar(){
	console.log("teste01");
	$.ajax({
		url: "/avaliar",
		type: "POST"
	});
}