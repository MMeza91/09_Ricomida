/* 
$("p").click(function(){
    $(this).hide()

}) */
/* 
$("p").hover(function(){
        $(this).hide(5000)

}) 
*/



const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
        
        
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        
        
        
        
$('#enviarCorreo').click(function(){
    alert("El correo fue enviado correctamente...")
        
})

$('#anadirFavoritos').click(function(){
    alert("Esta receta fue añadida correctamente a favoritos...")
        
})
        
$('.rojo').dblclick(function(){
    $(this).css('color', 'red')
})
      
$('.card-title').click(function(){
    $('.card-text').toggle()
})

/* $('#btn2').dblclick(function(){
    alert("boton clickeado 2 veces!!!!")
        
})
        
$('.hover').hover(
    function() {$(this).css('background-color', 'yellow')},
    function() {$(this).css('background-color', '')},
) */
        
        
