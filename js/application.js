/*
	Base JS File
	Created on 02/26/2014 by Corey O'Brien for Deloitte.
*/

$(document).ready(function() {
    // Loads body content into the base page layout.
    $("#template-body-content").detach().prependTo('#layout-base');
    // Loads header page into the header tag.
    $.get("../components/component_header.html", function (data) {
        $("header").append(data);
    });
    // Loads footer page into the footer tag.
    $.get("../components/component_footer.html", function (data) {
        $("footer").append(data);
    });

    // Function for doing anything on small page size.
    if (head.screen.innerWidth < 1025) {
        $(".workload-filters .panel-body").first().hide();
        $(".workload-filters .panel-footer").first().hide();
    }

    // Function to look for and load URLs off of anything
    $('.add-url').find("td").bind('dblclick',function(){
        var el=$(this).parent();
        window.location.href = el.attr('data-url') + '.html';
        return false;
    });

    // Function to expand and collapse items within the people entities.
    $('.people-entity h5').bind('click',function(){
        $(this).next().slideToggle();
    });

    $('.people-entity').hover(function(){
        $(this).find('.people-entity-buttons').slideToggle();
    },function(){
        $(this).find('.people-entity-buttons').slideToggle();
    });

    $('#ddAddressType').change(function(){
        if ($(this).val() == "3")
            alert("call the do something function on option 2");
    });

    $('.popout-notes-link').bind('click',function(){
        $('.panel-notes').toggleClass("panel-notes-open");
    });

    //Function that automatically makes any last column that has the heading of actions skinny.
    $('.table').each(function(){
        if( $(this).find('th:last-child')[0].innerHTML == 'Actions') {
            // console.log("found one");
            $(this).addClass('table-actions');
        }
    });

// End of Run JS on Document Load.
});

// Class-based toggle script, using true/false to trigger slideUp/slideDown
function togglePanel() {
    $(".panel-body").first().toggle();
    $(".panel-footer").first().toggle();
    $( ".filter" ).toggleClass("collapse");
}

// Function for showing and hiding two modals based on a timer.
function closeModalTimer(modalToShow,modalToHide) {
    setTimeout(function(){
        $("#" + modalToShow).modal('hide');
        $("#" + modalToHide).modal('show');
    },1500);
}

function promptClose(promptToClose,modalToShow,modalToHide) {
    closeModalTimer(modalToShow,modalToHide);
    $("#" + promptToClose).modal('hide');
}