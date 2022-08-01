# Vue-udemy
Vue repository in order to practice it's implementation for my work in ad hoc payments

reactive

Your app is able to react to user input, update the screen dynamically
(e.g. to show overlays or input validation errors)

vue.js is for the browser side JS
with html css and js and possibly vue
it helps to build a javascript driven user interface running in
the browser, our app might be talking to a server
but all that jazz is in the browserside code

Vue can be used to control parts of HTML pages or entire pages
and make that part a bit more reactive and interactive
I.E. control the side bar to load elements there dynamically
or a chat overlay which the user can open up and that chat overlay
is controlled by Vue

if we don't have something interactive in that part of the page
we don't need to use Vue, and we can therefore use Vue to build 
so-called widgets

Widget approach on a multi-page-application.
(some) pages are still rendered on and served by a backend server

we can controll everything with Vue in a page
this  is "single-page-application"(SPA) approach.
Server only sends one HTML page, thereaftre, Vue takes over and controls
the UI.

app.mount(Selector)
Vue controls all parent and all child elements 

data
interpolation is used in the html pages like
{{courseGoal}}
and it's alternative to use in the tags would be the v-bind 
directives -> something like:
<a v-bind:href="vueLink"> </a>
another directive to insert raw HTML code would be
<p v-html> {{ some data as html}} <p>
"the content should be displayed as html"

Methods
methods allow you to use functions (like using an event)
clicks for example can be a trigger
in order to use "data" inside a Vue app
you need to use "this.nameOfData" to refer to it