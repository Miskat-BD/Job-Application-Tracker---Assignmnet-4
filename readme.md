#Question-1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById:We select it with id. It return 1 element. And it is a fastest method of DOM.
Example: getElementById(‘id’).

getElementsByClassName:We select it with elements class name. It return Multiple elements and HTMLCollection. HTMLCollection is not an array.
Example: getElementsByClassName(‘class-name’).

querySelector: It is using with CSS selector.
Example: querySelector(‘.class-name’) / querySelector(‘#id-name’) / querySelector(‘p’)

querySelectorAll: It returns all matching elements. And it returns Multiple elements and a NodeList.
Example: querySelector(‘.class-name’, ‘#id’, ‘h1’)
