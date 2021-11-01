The app is available at https://nabeel-asghar.github.io/Airspace-Assesement/
## Description

The process with this app was definitely an interesting one. I spent most of my time researching and looking at documentation rather than coding. A ratio of probably one-to-five for research and coding. Typescript is also somewhat new to me so there was some learning there but all in all, this project took around 4 hours.
Plotting the graphic and grabbing its vertices was easy enough with IntelliJ’s autocomplete but actually grabbing the intersection took some research in ArcGIS documentation. Once I was able to grab the intersection it was simple to chart it on the no-fly layer.  

The hard part was calculating the geodesic area of the intersection. Since this function only takes polygons as input and my drawn sketch and intersection sketch were both geometry objects, converting them both to polygons was a long process. Looking through documentation, there was no clear conversion function, rather, I had to break down the geometry object to grab the property of its rings. Using this “rings” property, I was able to create a new polygon which then I was able to calculate the area of.
Updating the area and intersection when an object was moved was straightforward. I simply recomputed the intersection area using the update event which is passed to the function which computes area and removes the old intersection sketch if it’s an update.  

Creating a pop-up was quite tedious to be honest until I just decided to create a click listener on the sketch that would display if the sketched area were flyable and the area and intersection area in square kilometers.  

## Backend

The backend logic was where I was stumped. I assumed it would be simple to just pass the no-fly zone object and the intersection object to the Node.js backend which would calculate the intersection area there. However, no matter what I tried, ArcGIS would not cooperate in Node.js with import errors and such and that was when I realized by looking at a few Esri videos on YouTube and a helpful email from Corey that a Python backend would be the optimal one.   

## Future Ideas
Since I don’t have unlimited time, I decided to just simply have an API call which determine if an area is a fly zone by passing the intersection area to the backend. If I did have more time, I would have added features such as:
* Unit tests
* A Python backend server
* Plot multiple sketches on the map with intersection zones  

All in all, a very interesting assessment where I learned quite a bit.
