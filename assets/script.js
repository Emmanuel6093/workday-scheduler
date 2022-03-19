// current day 
let currentDay = moment().format('dddd, MMM Do gggg');
console.log(currentDay);


// timeblocks for daily hourly planner
let hour9 = moment().hour(9);
let hour10 = moment().hour(10);
let hour11 = moment().hour(11);
let hour12 = moment().hour(12);
let hour13 = moment().hour(13);
let hour14 = moment().hour(14); 
let hour15 = moment().hour(15); 
let hour16 = moment().hour(16); 
let hour17 = moment().hour(17); 
let hour18 = moment().hour(18); 

let hours = [
    hour9, 
    hour10, 
    hour11, 
    hour12, 
    hour13, 
    hour14, 
    hour15, 
    hour16, 
    hour17, 
]; 

let events9 = JSON.parse(localStorage.getItem('hour9')) || ""
let events10 = JSON.parse(localStorage.getItem('hour10')) || ""
let events11 = JSON.parse(localStorage.getItem('hour11')) || ""
let events12 = JSON.parse(localStorage.getItem('hour12')) || ""
let events13 = JSON.parse(localStorage.getItem('hour13')) || ""
let events14 = JSON.parse(localStorage.getItem('hour14')) || ""
let events15 = JSON.parse(localStorage.getItem('hour15')) || ""
let events16 = JSON.parse(localStorage.getItem('hour16')) || ""
let events17 = JSON.parse(localStorage.getItem('hour17')) || ""


$.each(hours, function (index, value) {
    events = [events9, events10, events11, events12, events13, events14, events15, events16, events17]
    $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
        (index + 9) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='timeblock" +
        (index + 9) + "'><textarea class='events col-12' id='eventblock" + (index + 9) + "'>" + events[index] + "</textarea></div>" +
        "<div class='col-2 save-delete' id='save-delete" + (index + 9) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
});

// current day at top
$('currentDay').text(currentDay)

let auditTime = function () {
    currentTime = moment().format('hh:mm:ss');
    

    // hour9
    if (moment().isBetween(hour9, hour10)) {
        $('#timeblocks9').addClass('present'); 
    } 
    else if (moment().isAfter(hour10)) {
        $('#timeblocks9').addClass('past'); 
    }
     else {
        $('#timeblocks9').addClass('future');
    }

    // hour10
    if (moment().isBetween(hour10, hour11)) {
        $('#timeblocks10').addClass('present');
    }
    else if (moment().isAfter(hour11)) {
        $('#timeblocks10').addClass('past');
    }
    else {
        $('#timeblocks10').addClass('future');
    }

    // hour11
    if (moment().isBetween(hour11, hour12)) {
        $('#timeblocks11').addClass('present'); 
    }
    else if (moment().isAfter(hour12)) {
        $('#timeblocks12').addClass('past');
    }
    else {
        $('#timeblocks12').addClass('future'); 
    }

    // hour12
    if (moment().isBetween(hour12, hour13)) {
        $('#timeblocks12').addClass('present'); 
    } 
    else if (moment().isAfter(hour13)) {
        $('#timeblocks12').addClass('past'); 
    }
     else {
        $('#timeblocks12').addClass('future');
    }

    // hour13
    if (moment().isBetween(hour13, hour14)) {
        $('#timeblocks13').addClass('present'); 
    } 
    else if (moment().isAfter(hour14)) {
        $('#timeblocks13').addClass('past'); 
    }
     else {
        $('#timeblocks13').addClass('future');
    }

    // hour14
    if (moment().isBetween(hour14, hour15)) {
        $('#timeblocks14').addClass('present'); 
    } 
    else if (moment().isAfter(hour15)) {
        $('#timeblocks14').addClass('past'); 
    }
     else {
        $('#timeblocks14').addClass('future');
    }

    // hour15
    if (moment().isBetween(hour15, hour16)) {
        $('#timeblocks15').addClass('present'); 
    } 
    else if (moment().isAfter(hour16)) {
        $('#timeblocks15').addClass('past'); 
    }
     else {
        $('#timeblocks15').addClass('future');
    }

    // hour16
    if (moment().isBetween(hour16, hour17)) {
        $('#timeblocks16').addClass('present'); 
    } 
    else if (moment().isAfter(hour17)) {
        $('#timeblocks16').addClass('past'); 
    }
     else {
        $('#timeblocks16').addClass('future');
    }

    // hour17
    if (moment().isBetween(hour17, hour18)) {
        $('#timeblocks17').addClass('present'); 
    } 
    else if (moment().isAfter(hour17)) {
        $('#timeblocks17').addClass('past'); 
    }
     else {
        $('#timeblocks17').addClass('future');
    }
};

// save for each timeblock
$('#save-delete9').on('click', 'i.fa-save', function(){
    let event9 = $('#eventblock9').val().trim();
    localStorage.setItem('hour9', JSON.stringify(event9));
})

$('#save-delete10').on('click', 'i.fa-save', function(){
    let event10 = $('#eventblock10').val().trim();
    localStorage.setItem('hour10', JSON.stringify(event10));
})

$('#save-delete11').on('click', 'i.fa-save', function(){
    let event11 = $('#eventblock11').val().trim();
    localStorage.setItem('hour11', JSON.stringify(event11));
})

$('#save-delete12').on('click', 'i.fa-save', function(){
    let event12 = $('#eventblock12').val().trim();
    localStorage.setItem('hour12', JSON.stringify(event12));
})

$('#save-delete13').on('click', 'i.fa-save', function(){
    let event13 = $('#eventblock13').val().trim();
    localStorage.setItem('hour13', JSON.stringify(event13));
})

$('#save-delete14').on('click', 'i.fa-save', function(){
    let event14 = $('#eventblock14').val().trim();
    localStorage.setItem('hour14', JSON.stringify(event14));
})

$('#save-delete15').on('click', 'i.fa-save', function(){
    let event15 = $('#eventblock15').val().trim();
    localStorage.setItem('hour15', JSON.stringify(event15));
})

$('#save-delete16').on('click', 'i.fa-save', function(){
    let event16 = $('#eventblock16').val().trim();
    localStorage.setItem('hour16', JSON.stringify(event16));
})

$('#save-delete17').on('click', 'i.fa-save', function(){
    let event17 = $('#eventblock17').val().trim();
    localStorage.setItem('hour17', JSON.stringify(event17));
})

