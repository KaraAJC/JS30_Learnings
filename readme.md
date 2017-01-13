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
- video html element
