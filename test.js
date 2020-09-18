$(document).ready(function(){
            
    $(".but").click(function(){
        $(this).css({
            "background-color":"white",
            "border":"1px solid blue"
        })
    })
    $(".but").mouseenter(function(){
        $(this).css({
            "background-color":"white",
            "border":"none"
        })
    })

})