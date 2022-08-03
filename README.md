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

MORE DIRECTIVES
v-on:
is an eventlistener for Vue
which for a button is the equivalent of
document.querySelector('button').addEventListener()
and it takes an argument
Argument that is what you want it to listen
click, mouseenter,mouseleave, etc.
Using methods is something that will come in handy here
like in the third can where we're using 
the addCounter(num) method, we can use it as a 
simple method, or a method with an event argument

mdn input in google

using inputs is a little bit different
see setName(event)
you can use the ($event, etc) to take the event as the first
argument

Event modifiers, check the forms in can three
v-on:submit.prevent
used in forms to PREVENT them from reloading the page
that is a build in from Vue, instead of 
prevent.default()


there is a concept called "two-way-binding"
that is used to shorten code:
v-bind:value="" v-on:input=""
can be shortened by  a simple
v-model=""
we are listening to the code event and updating
the value property.

v-model="" == best directive banzai

COMPUTED PROPERTIES

computed:{}, section gets treated like the data()
section, even though you're using functions like
in the methods section

only use methods if you know that you want to
recalculate when anything in the page changes,
in most cases that does not happen, so it is better
to use computed properties to display data,
methods Run everytime, computed properties do not,
unless a dependancy changes.


WATCHERS
a watcher is a function you can tell Vue to
execute when one of their dependancies change,
sounds like computed properties doesn't it?
you can use W instead of CP when you really want
to keep an eye on something, like the counter we have, if it is greater than 50 it resets, 
you don't need to create a complex function to see that in CP because the W is always... watching
https requests, or timers for example are other great choices


Summary for me:
Methods 
- Use with event binding OR data binding
- Data binding: method is executed for every 
    "re-render" cycle of the component
- Use for events or data that really needs to be 
 re-evaluated all the time 

 Computed properties
 - Use with data binding 
 - Computed properties are only re-evaluated if
    one of their "used values" changed
- Use for data that depends on other data

Watchers
- Not used directly in template
- Allows you tu run any code in reaction to 
    changed data(e.g. send http requests etc.)
- Use for any non-data update you want to make

V-bind Shorthands:
v-on:click == @click
v-bind:value="" == :value=""