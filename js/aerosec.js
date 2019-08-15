/**
 * Created by Brown on 2/22/16.
 */

var contentEl = document.getElementById('content'),
    navEls = document.getElementsByClassName('navlink'),
    navButtonEls = document.getElementsByClassName('navlinkbutton'),
    pages = {
        index: {
            link: 'indexPage.html'
        },
        publications: {
            link: 'publicationsPage.html'

        },
        people: {
            link: 'peoplePage.html'

        },
        faq: {
            link: 'faqPage.html'

        }
    };

function updateAjaxContent(newPage) {
    var url;
    if (newPage == null)
        url = 'indexPage.html';
    else
        url = newPage.link;

    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("contenter").innerHTML = xmlhttp.responseText;
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function clickHandler(event) {
    var newPage = event.target.getAttribute('href').split('/').pop().split('.').shift();
    var data = pages[newPage] || null; // In reality this could be an AJAX request

    var matchFound = 0;
    for (var i = 0, l = navButtonEls.length; i < l; i++) {
        navButtonEls[i].className = "navlinkbutton";
        if (navButtonEls[i].id.indexOf(newPage) > -1 && newPage.length > 1) {
            navButtonEls[i].className = "navlinkbutton active";
            matchFound = 1;
        }
    }
    if (matchFound == 0)
        navButtonEls[0].className = "navlinkbutton active";

    updateAjaxContent(data);


    // Add an item to the history log
    history.pushState(data, event.target.textContent, event.target.href);

    return event.preventDefault();
}

// Attach event listeners
for (var i = 0, l = navEls.length; i < l; i++) {
    navEls[i].addEventListener('click', clickHandler, true);
}


// Revert to a previously saved state
window.addEventListener('popstate', function (event) {
    var newPage = event.state.link.split('/').pop().split('P').shift();
    console.log('popstate fired!');

    var matchFound = 0;
    for (var i = 0, l = navButtonEls.length; i < l; i++) {
        navButtonEls[i].className = "navlinkbutton";
        if (navButtonEls[i].id.indexOf(newPage) > -1 && newPage.length > 1) {
            navButtonEls[i].className = "navlinkbutton active";
            matchFound = 1;
        }
    }
    if (matchFound == 0)
        navButtonEls[0].className = "navlinkbutton active";

    updateAjaxContent(event.state);
});

window.onload = function () {
    var parser = document.createElement('a');
    parser.href = document.URL;
    var pageName = parser.pathname.split('/').pop().split('.').shift();
    var data = pages[pageName] || null;
    var matchFound = 0;
    for (var i = 0, l = navButtonEls.length; i < l; i++) {
        navButtonEls[i].className = "navlinkbutton";
        if (navButtonEls[i].id.indexOf(pageName) > -1 && pageName.length > 1) {
            navButtonEls[i].className = "navlinkbutton active";
            matchFound = 1;
        }
    }
    if (matchFound == 0)
        navButtonEls[0].className = "navlinkbutton active";

    updateAjaxContent(data);

    // Add an item to the history log
    //history.pushState(data, "Aerosec", document.URL);
};