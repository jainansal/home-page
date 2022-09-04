$(".close-btn")[0].addEventListener("click", togglePopup)

$(".post-div").each((index, element) => {
    element.addEventListener("click", () => {
        togglePopup();
    })
})

$("body")[0].addEventListener("click", (event) => {
    checkThenToggle(event);
})

function togglePopup() {
    $(".popup")[0].classList.toggle("hidden");
}

function checkThenToggle(event) {
    if (!($(".popup")[0].classList.contains("hidden"))) {
        if (event.target.classList.contains("popup")) {
            togglePopup();
        }
    }
}

var subjectBtns = $(".subject-btn");

for (var i = 0; i < subjectBtns.length; i++) {
    subjectBtns[i].addEventListener("click", (event) => {
        changePageSubject(event.path[0].innerText);
    })
}

function changePageSubject(newSubject) {
    $(".subject-name")[0].innerHTML = newSubject.toUpperCase();
  filterDivs();
}

$("body")[0].addEventListener("keydown", (event) => {

    var thisKey = event.keyCode;

    console.log(thisKey);

    setTimeout(() => {
        searchBaby(thisKey);
    }, 500);
})

function searchBaby(searchQuery) {

    console.log($("#search-query")[0].value);

    if (searchQuery == 8 || searchQuery >= 65 || searchQuery <= 90) {

        if ($("#search-query")[0].value != "") {

            var toSearch = $("#search-query")[0].value.toLowerCase();
            var postDivs = $(".post-div");

            for (var i = 0; i < postDivs.length; i++) {

                var textContent = postDivs[i].childNodes[1].childNodes[1].innerHTML.toLowerCase();

                if (!(textContent.includes(toSearch))) {
                    postDivs[i].classList.add("hidden");
                } else {
                    postDivs[i].classList.remove("hidden");
                }
            }
        }
        else {
            var postDivs = $(".post-div");

            for (var i = 0; i < postDivs.length; i++) {
                postDivs[i].classList.remove("hidden");
            }
        }
    }

    
}

filterDivs();

function filterDivs() {
  var curSubject = $(".subject-name")[0].innerHTML.toUpperCase();
  var postDivs = $(".post-div");

  for(var i=0; i<postDivs.length; i++) {
    if(postDivs[i].childNodes[5].innerText.toUpperCase() == curSubject) {
      postDivs[i].classList.remove("hidden");
    } else {
      postDivs[i].classList.add("hidden");
    }
  }
}

