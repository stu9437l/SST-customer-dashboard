$(document).ready(function () {
    // user detail tabs
    $(".user-detail-tab .customer-tab__item").each(function ()
    {
        $(this).click(function () {
            const targetId = $(this).data("target")
        
            $(".user-detail-tab .customer-tab__item").removeClass("active");
            $(this).addClass("active")
            $(".user-detail-content .detail-content").removeClass("active")
            $(`#${targetId}`).addClass("active")
        })
    }) 
    
    //tickets list tabs
    $(".ticked-tab .customer-tab__item").each(function ()
    {
        $(this).click(function () {
            const targetId = $(this).data("target")
        
            $(".ticked-tab .customer-tab__item").removeClass("active");
            $(this).addClass("active")
            $(".ticket-tab__content .tab-content").removeClass("active")
            $(`#${targetId}`).addClass("active")
        })
    }) 
})