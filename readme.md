# javascript30
My solutions for all 30 [Javascript30](https://javascript30.com/) challenges for all to enjoy!

## Challenges

### Day O1 - [Drum Kit](challenge1.html)
#### Things I learned:
- kbd HTML Element - The kbd element typically represents keyboard input, though it may also represent other input, such as voice commands. [reference](https://w3c.github.io/html-reference/kbd.html#kbd)
- Data HTML Attribute - To allow for developers to assign custom attributes to elements and having convention, the "data-*" attribute was created, and used in this instance, to refer to the key codes.[reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)
- Audio HTML Element - This element represents audio data to the DOM. In this case, it is referring to the various instrument sounds to be played.
- Background CSS property - In the process of typing over the CSS from the challenge, I came upon the shorthand for setting the background's position and URL. Further reading gave me a better understanding of what I can set with the background property. I learned about the shorthand that lets you put any of the 8 properties into one line. I refactored background-size to be added to the line by  separating position from size with a forward-slash [reference](https://css-tricks.com/almanac/properties/b/background/)
- Audio and Video JS Media Events - Because we're using the <audio> element, we can use various functions like .play(), or .pause() ! [reference](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events)
- QuerySelector & QuerySelectorAll

### Day O2 - [JS Clock](challenge2.html)
#### Things I learned:
- rem VS em VS px VS vh -
- Rotation - transform's Rotate property takes a degree (60deg), length, or percentage and will by default rotate the element from it's center (transform-origin being set at default 50% 50%). to rotate by either end of this line, you change the origin to 100% for the right, or 0% for the left. you can also use top, left, right, bottom, and center [resource](https://css-tricks.com/almanac/properties/t/transform-origin/)
- Date object [resource](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- text-shadow & Box-shadow - In completing this challenge, I wanted to make the hands look a bit more interesting, and Looking at the way the clock's box-shadowing worked, I wanted to bring that same look to the header text. Here's more about [text-shadow](https://css-tricks.com/snippets/css/css-text-shadow/) and [box-shadow](https://css-tricks.com/almanac/properties/b/box-shadow/)

### Day O3 - [CSS Variables + JS](challenge3.html)
#### Things I learned:
- 'color' Input type
- 'range' Input type
- CSS Variables
- :Root CSS selector
- nodeList data type
- dataset object

### Day O4 - [ARRAY DAY!](challenge4.html)
#### Things I learned:
- console methods - When starting the video, i was shocked to learn that there was such a method called console.table! After reading more, I learned there are quite a bit methods you can call to the Console! my faves so far (after .log and .table) are .info, .group, .time and .warn! [reference](https://developer.mozilla.org/en-US/docs/Web/API/Console)
- Map,Filter, Reduce, Sort AGAIN - just as the guy mentions, these are fundamental functions to have a good handle on, and this has been great practice from most of my knowledge living in ruby-land.

### Day O5 - [Flex Panel Poetry](challenge5.html)
#### Things I learned:
- this challenge was all about FLEXBOX and man, as much fun as i've had trying to learn it with all of these cool interactive things like [Flexbox Froggy](http://flexboxfroggy.com/) and [LearnCSSLayout](http://learnlayout.com/flexbox.html) its still a bit mysterious.. this challenge did help some.. I learned about display:flex being set on the parent element and the children are what you are positioning with align-items, or justify-content, or flex-direction.
- I got more familiar with the transition and transform properties, and more ways its used for animations.
  CSS STUFF!
- I havent used a lot of CSS where you're using a wildcard operator, or > or :nth-child so that was cool to be exposed to!

### Day O6 - [TypeAhead](challenge6.html)
#### Things I learned:
- fetch (browser api)[resource](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- array spread
- RegExp objects 'gi'

### Day O7 - [Array Cardio Day 2](challenge7.html)
#### Things I learned:
- Array methods some, many, find, findIndex were used
- using the block withink console log to have more detail displayed
- refactoring methods

### Day O8 - [Rainbow Canvas](challenge8.html)
#### Things I learned:
This challenge was so much fun!! I have a huge appreciation for apps like my beloved [picMonkey](https://picmonkey.com) now, for being able to give us all these options to edit images. I made a coloring page, and I can't wait to make a more intensive one!
- HSL
- Canvas object

### Day O9 - [14 console tricks](challenge9.html)
#### Things I learned:
Luckily, I used quite a bit of these console tricks after learning about the console API on Day 4. Still, I as able to learn about using debugger options in Chrome Dev Tools that I hadn't used before.
-

### Day 10 - [shift + check 'em](challenge10.html)
#### Things I learned:
For this challenge, I tried to write out the steps and complete the challenge without watching the solution.
THEN, i watched the solution, and it was different than mine. but I'd like to figure mine out! Stay Tuned!

### Day 11 - [HTML Video](challenge11.html)
#### Things I learned:
I'm becoming more used to the flow of working on Javascript in that the main steps are to create selectors, build a function for the action I want to happen on the selector, then connect the two with an event listener. What I'm learning to grow with is knowing which element is best for being selected, and what properties are available to me based on the event and element selected that I can use for the action I want to make happen.
- video html element
- timeUpdate event
-

### Day 12 - [Konami Code](challenge12.html)
#### Things I learned:
- *cornify!* I let myself go down a mini rabbit hole, to find hoffify and sharkify, and I am determined to make my own kara-fy! for my bitmoji avatar.
IT'S DONE!!! check it OUT! PS: the secret code is karafy

### Day 13 - [Scroll](challenge13.html)
#### Things I learned:
I finally got fed-up with the number of event listeners that were being used that I had no idea about, so I went out to find a [full list](https://developer.mozilla.org/en-US/docs/Web/Events) of all the things you can listen for. In this challenge, we're listening for a scroll event.
- When you use scroll events, its important to use a debounce function.
window.scrollY tells you how far you've scrolled down the page in pixels, and according to it's [resource page](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY), it's better to use window.pageYOffset for cross-browser compatibility.
- *Weird Discovery* when your browser is zoomed in or out, it modifies the window.scrollY to a float value (I was getting this problem when testing my code since my window is so small, I zoomed out the browser and kept getting float values, so [i googled it](https://github.com/dominikh/go-js-dom/issues/19))
- OffsetTop
- InnerHeight

### Day 14 - [Value Vs Reference copies](challenge14.html)
#### Things I learned:
This challenge was short, and left me feeling like i needed to know the answer to WHY. Luckily I found a really great explanation of [primitive values vs reference values](https://stackoverflow.com/questions/13266616/primitive-value-vs-reference-value/13268731#13268731) like sticky notes.


### Day 15 - [Local Storage & Event Delegation](challenge15.html)
#### Things I learned:
- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) setItem, getItem, removeItem
- .reset()
- eventDelegation - Responsible Parents, irresponsible children.

### Day 16 - [Mouse Shadow](challenge16.html)
#### Things I learned:
This was a fun challenge, though i'm still grasping the things you can do with x/y coordinates, I was happy to get to know more about setting a listener for mousemove.
[contenteditable HTML Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) - Used so you could click on the text and edit it on the page.
I also learned about textShadow Style settings, and an es6 shortcut to setting variables. I want to do more with this challenge, like adding in a way to put in emojis or choose random shadow colors..

### Day 17 - [Sorted Bands](challenge17.html)
#### Things I learned:
- Scope is horrible.
