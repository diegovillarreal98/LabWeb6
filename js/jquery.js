
$("button").on("click", function(event){
  event.preventDefault();
  var newItemName = $("#input_text").val();
  var contenedor = $(`<div class = "Contened"></div>`);
  $(contenedor).append(`<h2 class = "Item"> ${newItemName} </h2>
    <button class = "Check" type= "text"> Check </button>
    <button class = "Delete" type= "text"> Delete </button>`);
  $("#lista").append(contenedor);
});


$("#lista").on("click", ".Check" ,function(event){
  event.preventDefault();
  $(this).parent().toggleClass("Toggle");
});
$("#lista").on("click", ".Delete" ,function(){
  $(this).parent().remove();
});