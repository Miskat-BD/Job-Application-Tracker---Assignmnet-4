**Question-1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

Answer:
getElementById:We select it with id. It return 1 element. And it is a fastest method of DOM.
Example: getElementById(‘id’).

getElementsByClassName:We select it with elements class name. It return Multiple elements and HTMLCollection. HTMLCollection is not an array.
Example: getElementsByClassName(‘class-name’).

querySelector: It is using with CSS selector.
Example: querySelector(‘.class-name’) / querySelector(‘#id-name’) / querySelector(‘p’)

querySelectorAll: It returns all matching elements. And it returns Multiple elements and a NodeList.
Example: querySelector(‘.class-name’, ‘#id’, ‘h1’)



**Question-2. How do you create and insert a new element into the DOM?**

Answer:
Step -1: Create an element -> const heading = document.createElement(‘h1’);
Step -2: Write Something    -> heading.innerText = ‘Bangladesh’;
Step -3: Insert the new elements -> document.body.appendChild(heading);

**Question-3. What is Event Bubbling? And how does it work?**

Answer: Event Bubbling means that the event rises from the lower element to the upper parent.
Example: <div id="parent" onclick="console.log('Parent Clicked')">
        <button id="child" onclick="console.log('Child Clicked')">Click</button>
    </div>
Output: When we click the div it console Parent Clicked. And when we click button it console 
	Child Clicked
	Parent Clicked



