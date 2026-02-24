### **Question-1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

Answer:
getElementById:We select it with id. It return 1 element. And it is a fastest method of DOM.
Example: getElementById(‘id’).

getElementsByClassName:We select it with elements class name. It return Multiple elements and HTMLCollection. HTMLCollection is not an array.
Example: getElementsByClassName(‘class-name’).

querySelector: It is using with CSS selector.
Example: querySelector(‘.class-name’) / querySelector(‘#id-name’) / querySelector(‘p’)

querySelectorAll: It returns all matching elements. And it returns Multiple elements and a NodeList.
Example: querySelector(‘.class-name’, ‘#id’, ‘h1’)



### **Question-2. How do you create and insert a new element into the DOM?**

Answer:
Step -1: Create an element -> const heading = document.createElement(‘h1’);
Step -2: Write Something    -> heading.innerText = ‘Bangladesh’;
Step -3: Insert the new elements -> document.body.appendChild(heading);

### **Question-3. What is Event Bubbling? And how does it work?**

Answer: Event Bubbling means that the event rises from the lower element to the upper parent.
Example: <div id="parent" onclick="console.log('Parent Clicked')">
        <button id="child" onclick="console.log('Child Clicked')">Click</button>
    </div>
Output: When we click the div it console Parent Clicked. And when we click button it console 
	Child Clicked
	Parent Clicked


### **Question-4. What is Event Delegation in JavaScript? Why is it useful?**
Answer: Event Delegation means handling the child with an event listener on the parent. It uses in Dynamin Element. Its performance is good. And requires fewer event listeners.
Example:		let mainContainer = document.querySelector('main');
			    mainContainer.addEventListener('click', function (event) {
                if (event.target.classList.contains('btn-className')) {
		            console.log(“Button Clicked”)
}});

### **question-5.What is the difference between preventDefault() and stopPropagation() methods?**

Answer: preventDefault: Its disables the browser's default behavior.
Example: <a href=”https://google.com” id=”link”>Google</a>
	document.getElementById(‘link’).addEventListener(‘click’,function(event){
		event.preventDefault();
	});

Now clicking on the link will not take to the Google.Because we have turned off the browser's default action.

stopPropagation:It stops event bubbling and event capturng.It means the event will not go to the parent .
Example:    		child.addEventListener("click", function(e){
   				        e.stopPropagation();
   				         console.log("Child");
});
            Now when the child clicks, the parent's event will no longer be triggered.






