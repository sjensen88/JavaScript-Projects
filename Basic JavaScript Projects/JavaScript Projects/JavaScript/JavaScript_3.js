function displayType(musician) {
    var musicianType = musician.getAttribute("data-musician-type");
    alert(musicianType + " is the most famous " + musician.innerHTML + " artist!");
}