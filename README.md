# Gages-Library
A library of small, useful functions that I have been collecting and storing as I learn.

## Install
There are two options you have for installing this library:

**1. NPM**

Install this repository as a node package:

`npm install git+ssh://git@github.com/quangogage/Gages-Library.git --save`

**2. .ZIP**

Download this directory as a ZIP file and place it in your project.

## Use
`import GageLib from "Gages-Library";`\
<br/>
<br/>
# Documentation
This library is broken up into seperate modules accessed via their name - ie `GageLib.math, GageLib.array, etc`.

Modules with uppercase name's are classes.

### array:
  * _Nothing yet_
### math: 
  * `getRandom(float,float)`
    * Returns a random number between two floats
  * `toRadians(degrees)`
    * Converts degrees into radians
  * ` toDegrees(radian)`
    * Converts radians into degrees
  * `getDistance(x1,y1,x2,y2)`
    * Get the distance between two points
  
### string:
  * `insertAt(position,string,add)`
    * Places a string into another string at a specific index
### device:
  * `get()`
    * Returns the users device
### Listeners:
  _The `Listeners` class' purpose is to make working with event listeners cleaner and easier (but mostly cleaner:)._
  
  
1. Initialize the class - `var myListeners=new GageLib.listeners()`
2. Load the listeners - `myListeners.load()`
3. Add functions to the respective listeners:
```
function onScroll() {
  var scrollY=arguments[0];
  console.log(scrollY);
}

// Add to myListener
myListener.add(onScroll,'scroll');
```


