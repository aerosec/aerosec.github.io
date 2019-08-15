aerosec-site
============

This website uses AJAX. When a user visits the site, he will typically 
stay on one page, with the main body content of that page changed as
he navigates around the site.

The main body content is in the *Page.html files. 

index.html, publications.html, people.html, and faq.html are all
identical. I created them to enable book marking (since otherwise
it would not be possible to do bookmarking with our AJAX setup, which
only uses one page). This page contains the header, the footer, and AJAX 
to pull in the body content from one of the *Page.html files. 

Don't edit anything in the bootstrap folder except bootstrap/css/jumbotron-narrow.css.
Let's keep the bootstrap folder pristine.
