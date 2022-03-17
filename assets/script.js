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
