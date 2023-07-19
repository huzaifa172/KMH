const cursore = document.querySelector(".cursore");

// moved by mouse curser
document.addEventListener( "mousemove" , (e) =>{
    let x = e.pageX;
    let y = e.pageY;

    cursore.style.top = y + "px";
    cursore.style.left = x + "px"; 

});



let person = {
    Name : "huzaifa",
    father: "iqbal",
    sbilng: 9,
    canSpeakUrdu: true
};

for( var key in person){
    console.log(key, person[key])
};
