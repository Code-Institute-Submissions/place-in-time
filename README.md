# Place in Time - Location based historical information app

Project 2 - Interactive Front End Development (Code Institute 2020)        

Ever wondered about the history embedded in your immediate surroundings? Whether you find yourself in places familiar or otherwise, 
**Place in Time** will bring the history of that locality directly to your fingertips.      

**Place in Time** is a user friendly information trove that seeks to bring the life of old buildings and places very much into the present day, 
where you are always only a few touches/clicks from a fascinating piece of history.


## Demo
Clicking on the screen below will bring you to a live demo. Right click and select "Open link in new tab" to open the site in a new browser tab.     

[![Main_Screen](https://raw.githubusercontent.com/elkrojo/place-in-time/master/assets/images/main_screen.png)](https://elkrojo.github.io/place-in-time/)

## UX
As a tourist, I would like to learn more about the backstory of my current location and other locations nearby. 
In doing so, I can place myself in old stories which bridge the gap between past and present and improve my sense of cultural enrichment.       

As a native, I would like to gain knowledge on the historical significance of buildings and places in my surroundings, both familiar and unfamiliar. 
In doing so, I can develop a deeper understanding of how the native traditions and surroundings were shaped over time.

### Strategy
The design is intentionally simple and uncluttered, where the information takes a position of primary importance, 
and where interactivity options are obvious, intuitive and unobtrusive.

### Scope
Tourists and natives with an interest in history can have their location detected, before being served a selection of locations on a map, starting with the closest option.

### Structure
As the app is primarily suited to mobile use, it is important for the map to utilise the maximum amount of screen space without compromising the core information content. 
The currently selected location is displayed in an eye catching box in the centre of the screen, with a summary immediately beneath. Historical information, 
when available is accessible through a button prompting the user to interact.

### Skeleton

Wireframe      

### Surface
The user interface is centered on the map element, which occupies half of the initial screen height. The map contains colourful points of focus for ease of navigation.
The colour scheme and fonts for the location heading and history section were chosen to present the information in a simple yet attractive manner, while complementing the map above.

## Features
 
### Existing Features
**Google Map** - shows users their current approximate location on the map, following a request from the browser to access their approximate device location.        

**Google Map Markers** - shows users the closest places of interest by way of map markers, which when clicked will update the information on the page.      

**Bootstrap Accordion** - allows users to expand the history paragraphs when tapped, and hide the history again if opted.       

**Responsive Footer** - presents the user with an easy way to return to the top of the page, by appearing after a predefined scroll distance.       

The anonymous functions related to the responsive footer can be found in the transport-features.js file located at assets/js/       

### Features Left to Implement
**Favorites** - would allow users to store their favorite locations for future reference, by tagging a location using a button located in the information space.     

**Pictures** - would allow the user to preview the location visually, by displaying a selection of images in a bootstrap carousel.        

## Technologies Used
[JavaScript](https://en.wikipedia.org/wiki/JavaScript) - The project uses **JavaScript** to add dynamic functionality to the user experience.

[HTML5](https://en.wikipedia.org/wiki/HTML5) - The project uses **HTML5** to structure the page contents.     

[CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - The project uses **CSS3** to style the HTML elements.        

[Bootstrap](https://getbootstrap.com) - The project uses the **Bootstrap** library, which makes the content responsive to screen size.              

[JQuery](https://jquery.com) - The project uses **JQuery** to simplify DOM manipulation.       


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. 
Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, 
with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, 
link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. 
A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.      

**Welcome Modal:**
1. Click on the "Find my location" button and verify that the map updates with markers located nearby.      

**Map Markers:**
1. Click on a map marker and verify that the "Place of interest" and "Overview" sections are updated for each marker clicked.       

**Accordion:**
1. For locations without history, verify that the appropriate button message is displayed and the button is made inactive.
2. For locations with history content, verify that the appropriate button message is updated with suggested action, and the button is made active.
3. Try to access the history paragraphs by clicking on the "Tap here to show history" message, verify that the accordion expands, the history is displayed, and the button message is updated with suggested action.
4. Try to close the history paragraphs by clicking on the "Hide history" message, verify that the accordion retracts, the history is hidden, and the button message is updated with suggested action.
5. Try to access a new location by clicking on a map marker while the accordion is open, verify that the accordion remains open between locations, the page content is updated correctly, and the button message remains relative to the current state.

**Responsive Footer**
1. Try to scroll through a history section which extends at least 500 pixels beyond viewport height, verify that the footer slides up from the bottom displaying the relative message.
2. Try to return to the top of the page by clicking the footer, verify that the page scrolls to the top and the footer slides back down.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

The site is hosted through GitHub pages and is synced to the master branch of the repository. 
This means that the latest push to the master branch will update the live site automatically.       

The process for initial deployment is as follows -      
On the repository GitHub page, click the settings tab located on the far right of the menu.     
Scroll down to the section titled GitHub Pages and select "master branch" as the source.        
The site deploys once a source is selected and a url link is accessible below the GitHib Pages section title.       

To run the code in this project locally, you can clone the full contents of the repository. In your terminal, 
navigate to the directory you want the repository located and paste this command:

    git clone https://github.com/elkrojo/place-in-time.git

Once cloned, you can remove all connection to the source repository using the command:

    git remote rm origin


## Credits

### Map
The interactive map used in this site is supplied by Google, accessed by interfacing with the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial).

### Content
The text content of the "Overview" paragraph is taken from the wikipedia page for that location, 
accessed by requesting the summary content using the [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/#/Page%20content/get_page_summary__title_) for the selected location.      

The text content of the "Show history" paragraphs is taken from the wikipedia page for that location,
accessed by using JQuery to target the necessary html elements returned from a call to the [English Wikipedia API](https://en.wikipedia.org/w/api.php) for the selected location.     

### Acknowledgements

- I received inspiration for this project from X
