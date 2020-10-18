# Instant Coffee - The Coffee Shop Locator
[My deployed project is avaliable here](https://ryanwatson1991.github.io/msp2-instant-coffee/)

## What is the project?
The project is a coffee shop locator. It uses the Google Places API to allow a user to select their country and then search a city in order to find a nearby coffee shop. 

## What does the project aim to achieve?
The aim of the project is to provide a tool to allow users, particularly mobile users, a simple and visually appealing way of locating a nearby coffee shop. 

The aim of the project actually changed slightly during the development process. The initial idea for the project came from looking through a copy of [*The North & North Wales Independant Coffee Guide*](https://indycoffee.guide/shop/northern-indy-coffee-guide-no3/)
and the original plan was to essentially take the coffee shops in this book and use the google maps API as well as markers & marker clusters to place them on a map. I think the important distinction is that
the initial project was focused specifically on Independent coffee shops. 

The aim of the final project is to provide a tool to allow users to find *any* nearby coffee shop. It aims to present this information in an interactive way with a stylish UX. It also aims to present this well on 
mobile as the tool will likley be primarily used by people who are out and about. 

The main reasons for the change in aim are: 
- I found it very difficult early on to get the Google Maps API working. I got the initmap function in easily enough and even managed to put in my own markers but it had no working search bar orlocation based functionality 
Eventually, I managed to load up a different version of the map that included an autocomplete search bar and put a marker down for the location the user had typed in - but I couldn't get this to display with MY markers 
on it. Ultimatley I went with this version of the project after it was suggested to me as the result of somme very panicked tutor support queries. 
- Aditionally though, I prefer this version of the project as, despite being a lot of work finding coordinates, the Independent Coffee Guide only has around 40 coffee shops and this really narrowed the usefulness of the product. 
- Also, whilst I initially had plans to implement a good few more features that I ended up with, The Independent coffee Guide provides something [very close](https://indycoffee.guide/north-midlands-north-wales-independent-coffee-guide-venue-finder/) 
to what my project ended up being. So I think the change in focus to any coffee shop provides an important distinction.  

I think this is all worth noting because ultimatley, I spent a lot of time trying to get my Google Maps function to diplay in a way that would both take in the users location AND show markers for all of the nearby coffee shops. 
By the time I found a solution, it was really late on and what I'm handing in as the final project is basically all I could do in time once I'd worked it out. 

Basically....I'm describing this project to anyone who talks to me as the most effort I've ever put into something that's still turned out bad. 

But I'm (mostly) happy with the UX. 

## UX - Wireframe/Final product comparison

### Wireframe/final product comparisons
Below is a series of images comparing my initial wireframes to my final product
#### Index Page - callout section

##### Index Page Wireframe
![Index Page wireframe](/readme-assets/wireframes/landing-wf.jpg) 
As you will be able to see from the image, my initial wireframe had a similar layout but with a big difference. I came up with this wireframe when the focus of the project was still on independent coffee shops. 
Something that the independent coffee guide has is mention of coffee roastery's you can visit, I think my initial thinking was that the first thing the landing page would do if offer you a choice between roastery's or coffee shops. 
With the markers on the map being one or the other, depending on the choice. 

I don't actually know when I decided against doing this, I think it's just something that got ironed out in development, but I think the final landing page is cleane and a lot of what I'm going for is sort of relaxing/laid back. 
So I think not having such a choice straight away is a little bit less confrontational to start with.  

##### Final index page:
![Index Page final](/readme-assets/screenshots/landing-final.PNG)

But also, I think some of the spirit of this choice (and I guess importantly for the project, the use of JavaScript/jQuery to make a descision) is still there through the Modal which pops up to help with navigation
on pressing the Index page's 'begin' button. 

##### Index Page Modal
![Index Page Modal](/readme-assets/screenshots/modal-final.PNG)

I really like the modal. It uses a series of show/hide functions in jQuery to change what elements are on display in order to let the user navigate the page in a more interactive way. I'll talk more about it in User Story 1, 
but it was important to me for the project that it could be navigated without nescessarily using the links on the navbar. 

The modal jQuery content is also a bit sad for me - originally, my project idea was a text-based adventure, similar to the ones you can make using [Twine](https://twinery.org/), but when it came to starting my project, I didn't feel confident enough with JavaScript to do this. 
Now though, I feel like a slightly more sophisticated version of the show/hide jQuery functions I've used in this modal could have worked for that project.  

### Index Page - Map/locator section

Erm...visually, this section is...bad. 

##### Final Map/locator
![Map - final](/readme-assets/screenshots/map-final-2.PNG)

To be totally honest, I wasn't sure whether to put this in bugs or here. It will be mentioned in bugs too but basically I couldn't style this and I still don't know why. It wasn't something I'd even thought would be an issue
so it wasn't until very late on that I discovered it would be an issue. Its something I would have spent more time on if I'd realised it would be an issue, but as a result of my earlier issues with the Maps API, I didn't discover this issue until it was much too late.

No excuses though, it's really bad form. 

I think the issue is related to the fact that a lot of the content in this section comes from the Google Places Autocomplete template. I spent quite a bit of time trying to target the various elements in the page
I've left some of this code in the final index.css file but it's also copied below: 

```
/*Locator & Map styling - for the most part, the css for this isn't working. See bugs section in Readme.*/
.map {
    margin-bottom: 10%;
}

#listing {
    margin-right: 20%;
}

.container-locator {
    margin-top: 2%;
    font-family: Roboto;
}
```
I just couldn't change anything in this section, no matter what classes and ID's I included in my css file. I've done what I can, primarily this was putting the list that appears based on the coffee markers into the adjacent col, rather than directly below the map. 
But this only works on larger screen sizes, and one of the purposes of my project was for it to work well on mobile. 

Honestly, if this project is a fail, feedback on this would be massivley appreciated (or if it's a pass too I guess).  

With regards to wireframes for this page, the final map page is kind of a combination of what was originally a few different pages. 

Basically, the search bar, the list and the map all had their own individual pages (or would possibly have all been on the same page, but not all on display at the same time - 
with jQuery showing/hiding as nescessary). 

##### Searchbar Wireframe
![Search - wireframe](/readme-assets/wireframes/location-wf.jpg)
The idea here was that *just* the searchbar was on display and when a location was input, the hidden map would then display. 
In the end, I felt like it was a bit unnescesary to hide the map and show the search bar, as both would be hidden when a user initially visits the page, 
and then only shown as a result of interaction with the questions in the pop-up modal. It felt like a bit too much to hide the map behind an extra layer of interaction. 

Also, the wireframe has a sketch of a 'use my location' function. This didn't make the cut, partially because of my issues with geting the map to work at all but the deciding factor was that on researching google places, 
it looks liek this would require a 'nearby Search request' and there's a warning in the documentation that basically says don't use it unless you're willing to go past your free allocation of Google credits.

![Nearby](/readme-assets/screenshots/nearby.png)

##### Map Wireframe
![Map - wireframe](/readme-assets/wireframes/map-wf.jpg)
Aside from it being combined with the searchbar and the list page, the final map itself is pretty close to what was planned 

##### List Wireframe
![List - wireframe](/readme-assets/wireframes/list-wf.jpg)
The list in the wireframe kind of serves a different purpose to the one in the final product. 

The idea originally was that the user could swap between a map view - useful for locating the ctual shop, and a list view that would provide some more detailed information on the venue. 

The final list is more something to acompany the map. I'm not sure where the change came from, I think it was just - again! - a result of earlier issues getting to grips with Google Maps. 

#### Contact-us Page
For the most part, the contact page is very close to what the original wireframe was. The main note UX-wise is that I've included some javaScript that disabled the 'Submit' button until all the required fields 
are filled out - mainly to prevent the button being slammed and firing off loads of emails to my gmail, but I think it's handy way of indicating visually that the correct crieteria for submission has been met.  

##### Contact-us Wireframe
![Contact-us - wireframe](/readme-assets/wireframes/contact-us-wf.jpg)

##### Final Contact-us page 
![Contact-us - final](/readme-assets/screenshots/contact-us-final.PNG)

#### Footer
I honestly don't know why I did my footer wireframe seperatley to the rest of the page. It's really basic though, it serves to balance the page and the final deployed version is pretty much exactly what was in the wireframe.

##### Footer Wireframe
![Footer - wireframe](/readme-assets/wireframes/footer-wf.jpg)

##### Final Footer 
![Footer - final](/readme-assets/screenshots/footer-final.PNG)

I did tone down the silliness with the 'coffeeright' at the end though (I have a whole list of coffee puns I didn't use. The fact that I didn't get to make a Java pun is maybe the worst thing I've ever done)

As well as what is noted above, I updated the color scheme and logo for the site very late on in the development process. The original colour scheme was based on an image I found on Shutterstock. 
It used a much lighter blue for header & footer and a sort of colour that was supposed to be brown (implying coffee) for the rest of the body, that DID appear brown on my monitors, but appeared this weird
pinky skin colour on my laptop screen. 

The idea with the original colour scheme was that I saw the image with it's blues and browns (and red) and thought it looked simple and soft. Sort of relaxed. It's from there that I used google fonts to find the 'Never Could Do Better'
font used across the page for headers. I was aiming for this sort of cool, relaxed vibe which with the original design I thought came across occasionally, but then other times I looked at it the whole thing felt a bit comic-sans-y. 

![Index Page old colours](/readme-assets/screenshots/old-colours.PNG)

I feel like the new, final color scheme gets across the cool relaxed vibe a lot better. The contrast between the darker blue and brown works better, but I also feel like the 'illustrated' style of the images go a 
lot better with the chosen header font. 

With regards to the header font, notably - this is only the font on the web pages themselves. In the pop up modals I felt this font came across as a bit busy. It sort of only looks good when it's pretty directly linked to a picture of a coffee cup. 

Also notable in this screenshot (and my wireframes) is that there was originally a navlink to an 'About Us' page. I eventually came to the descision that it didn't add value. I've hopefully summed up what the page is about with the landing page's jumbotron: 

> Stuck in the city and looking for coffee? We've got you covered!

## UX - User Stories

### User Story 1
This first user story was kind of the guiding principle with regards to the design. Basically, the person I imagine using this is someone who's just got off a train in an unfamiliar city like Manchester*. They got up really early this morning and 
they don't want to do much research, they just want to sit down somewhere for half an hour to get their bearings. Maybe they can't check into their hotel for a couple of hours and don't quite feel like exploring yet, 
or maybe they're there on business and need to duck into somewhere for a bit before their meeting starts. 

(*obviously it can be any city, but I've had both of these experiences in Mahcester, so that's my example)

Basically though, this person is probably using their phone, rather than their tablet or PC to access the site. So the site has to work and look good on mobile. Obviously there are issues with the map in this regard as previously discussed
but it's with mobile users in mind that the 'questionnaire' modal has been designed. I wanted the site to be navigate-able without having to rely on the buttons in the navbar, I basically wanted to create a feeling
that you don't have to 'check a website' you can just load it up, press a button and tell it what you want - then it takes you there. (Obviously, I did keep the navbar in a dropdown too).   

### User Story 2
The second user is someone planning a trip. It's a very similar story to the previous one, except they visit the website before they are at their location.

Put simply, this person is doing research. They're someone who is going to somewhere like New York and wants to make sure they find all the best places.
They are likley using a tablet to access the site rather than mobile - they're probably sitting on their sofa all excited about what they might do on their holiday. 

It's also possible that this person wants information on more than one coffee shop. They might make notes. They are more likley than the person in User Story 1 to pay attention to content in info windows such as a star rating and may even make use of the coffee shop's website. 

### User Story 3
This is kind of the sequel to either of the previous two stories. Basically, after using the site someone wants to get in touch to let us know about a coffee shop they've enjoyed, r suggest a feature. 

It's not guaranteed, but they're the most likley person to be using a PC - particularly if they've got a long message they want to send as this is far easier with a keyboard than touchscreen. Importantly, if they are using a PC
the 'contact Us' link is easily visible. They probably do want to be using a website, unlike Person 1, so it's convenient for them to just be able to click the navlink to take them there with no fuss. 

## Features

### Existing Features
The Key Features of this site are as follows: 
- Landing page that displays a hero image and jumbotron welcoming a user to the site's 'experience' 
- Embeded Google Map with search function and marker placement for coffee shops (Uses Google Places API)
- Info Windows attached to coffee shop markers that display coffee shop info
- 'Questionnaire' Modal, that uses jQuery to dispay different content based on the answer provided by user
- Contact-us page with form that uses email.js API 
- Sitewide responsivity to differing screen sizes (with noted exception of container-locator)
- Header featuring navbar & navbar toggler
- Footer featuring basic social media links (that just go to respective landing pages, I don't actually have any social media accounts) and copyright message

### Features left to implement
There are a few additional features that I would have liked to include, but that ultimatley weren't added either because of time or feasability. 
- An 'Advanced list' view 
    - Mentioned in Wireframes section, basically I would have liked to alternate the display of coffee information between that displayed on the map, or a list view that users would have the option of viewing instead of the map. 
    It could have displayed more in depth information such as more in depth reviews. I'm not going to lie, I didn't do this because I don't know how to do it. 
- Links to coffee shop reviews
    - It's there to an extent, but ideally it would have been possible to display more than just a star rating - maybe pull top three reviews for a place into the above 'advanced list' 
- Different markers based on the 'type' of coffee shop - e.g blue for just coffee, red for food etc. 
    - This was a feature I would have liked to include early on, it mainly got cut because of the change of focus in the project. It was something I was going to include when there were roastery's and coffee shops as options. 
    I briefly thought about putting in other criteria, but ultimatley didn't include it. 
- Directions from current location to nearest coffee shop
    - As mentioned in UX/Wireframes section - I couldn't include this in the end because there's no way to restrict the number of nearby place requests done through the Google Places API. 

## Technologies Used

### Languages used:

- HTML
    - The content of this site is written in HTML
- CSS
    - The HTML on this site has been styled using CSS
- JavaScript
    - JavaScript is used across the site in order to provide aditional functionality such as show/hide given elements and access data via GoogleMaps & email.js API. 

### Additional technologies used:
- [Google Maps Platform/API](https://cloud.google.com/maps-platform/) & [Google Places](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch)
    - Used to display may & place coffee shop markers on map, provide info on these coffee shops and populate a list with the relevant coffee shops. 
- [Google Fonts](https://fonts.google.com/)
    - Google Fonts was used to import the fonts 'Nothing You Could Do' and 'Roboto', that are used across the page.
- [email.js](https://www.emailjs.com/)
    - Used on contact page to allow users to contact the 'developers' of the site. 
- [jQuery](https://jquery.com/)
    - The site uses jQuery to show/hide elements as required. 
- [Bootstrap](https://getbootstrap.com/)
    - This site uses Bootstrap's CSS Library in order to arrange the content in a visually appealing way as well as being the primary method of making the page responsive.
    - This site also uses some of Bootstrap's JavaScript Library in order to implement additional features such as the Ticket Booking & Guest Card Modals, as well as the dropdown navbar in the header and 'more info' sections in the schedule tables.
- [Font Awesome](https://fontawesome.com/)
        This page uses Font Awesome for social media link buttons


## Testing

### User Stories
I have tested the site with User Stories in mind. These tests have gone as follows: 

#### User Story One: 
- 'I've just got off a train that I've been on since 6am. I need somewhere to hide out in until my meeting starts in an hour' 
- 'Oh, I'll try that Coffee Locator service....Instant coffee!'
- Loaded up the page. 'I hope it's not complicated. I want it to just work.' 
- Presses 'Begin button'. 
- Modal opens up asking if they're looking for a coffee shop
- User selects 'Yes'
- This brings up Map and search bar. 
- User begins typing in 'Manc...' 
- Autocorrect bar suggests 'Manchester, UK'
- User taps this. A number of markers apear on the map. 
- 'Oh, there's one right near the John Rylands Library, that's where my meeting is'. 
- User taps Marker labelled 'E', the closest one to John Rylands Library. 
- info window displays information for 'Lokum il Caffe'. 
- Brilliant, I'll go there!

#### User Story two
- 'I'm so excited to go to New York next week! I have to do some research into some cool coffee shops.'
- Loaded up page. Presses 'Begin' button. 
- Pauses to think for a second - Do I want to find a coffee shop now? 
- Decides they do. Presses 'yes. 
- This brings up Map and Search Bar. 
- User changes country selection from 'United Kingdom' to 'U.S.A'
- They Type New York in the search bar, this brings up a number of markers. 
- User clicks around a few of them, visiting the websites for the most interesting sounding ones. Maybe they accidentally leave Instant Coffee for one of these coffee shop's websites. 
- But they decide they want some more information on one of the coffee shops (maybe they can't find a website for one of them), they come back to Instant Coffee. 
- They press 'Begin' and the modal pops up, but this time they've decided that actually, they don't want to find a coffee shop on the map just yet. 
- They press 'No' to the first question, they're asked if they want to get in touch with us. They press 'Yes'. 
- They're presented with a button for the contact us page. They press this and it takes them there. 
- They fill out the required field (and put a joke company name in 'company', just for a laugh). This activates the Submit button. 
- They submit their query and are told in a Modal that we'll get back in touch with them in the next few days.  

##### User Story three
- User Number One is on the train home in the evening, after the meeting. 
- They have their laptop out, they really should be getting that email sent but....'uhhh, who can be bothered to work on the train' 
- Looking for a distraction, they remember their experience with Instant coffee this morning. They decide it's 'sort of' productive to type out a really long thank you email. 
- They load up Instant Coffee on their laptop. 
- They don't want to press begin, 'I've already used the map'. 
- Instead they hover their mouse over to the 'Contact Us' link and press it. 
- They fill out name, company and email then spend the next hour and a half of their two hour train ride composing a thank you for your really handy service letter (and by some coincidence not getting any work done)
- Eventually, they press submit, even though the button has long been active. 
- They're greeted by a modal telling them we'll get back to them in a few days. 


### General Self Testing
I've spent considerable time making sure the site is respoonsive to different screen sizes, the idea behind the project is that it will be primarily used on mobile, so this was important (My obligatory mention of how I didn't achieve this with the locator).
To this end, I've made considerable use of Bootstrap col-sizes and media queries to change the site so it achieves the same effect on different devices - The display of the Jumbotron for example, has to be slightly different 
on differing screen widths. 

I did this testing for different resolutions primarily using Google Developer tools, but have also tested all features on both my iPad and my phone and (after a few tweaks) have got everything displaying correctly. 

One bug I did notice through testing was that the Contact Us page contained some horizontal scrolling - ultimatley this was solved by adding a container-fluid class.  

I've also passed the HTML code through the w3C validator, the CSS through the Jigsaw validator and the JavaScript through JShint all with no major issues. 

I did want to note that in JShint, the validator mentioned a number of undefined or unused variables, but that is because I checked my code by direct input and it just checked the js file, not the linked HTML files. 
It also seems to have an issue with let & const being used, but on doing some research, this looks to be a [quirk of JShint](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const)

### Bugs
I have two major bugs to note int he final product: 
- I've mentioned it a lot, but the issue with the CSS for container-locator and the lack of styling on this
- A much smaller bug, whevever 'enter' was pressed on the places search bar, the whole page would just refresh (taking the user back to the very beginning container-callout). I've ended up just disabling pressing the 'enter' Key, which fixes the issue
but it means users have to physically click the place they want to search for in the autocomplete dropdown suggestions. It's not ideal, but its usable and prevents the inconvenience of the whole page just refreshing. 

## Deployment

My website has been deployed via Github Pages. In order to deploy the project in this way, I took the following steps:

- Created Github repository
- Wrote Code in Gitpod workspace
- Comitted Code to Github (finished code is on Master Branch)
- In Github repository, selected the settings option
- On the settings page, scrolled down to the Github Pages section
- In the Github Pages section, went to 'Sources', selected 'Master Branch' from the dropdown menu
- After doing this, Github Paged generates a link to the deployed site (https://ryanwatson1991.github.io/msp2-instant-coffee/)

## Credits

### Media
 - Header Image and Hero Image came from [Shutterstock](https://www.shutterstock.com/home)

 ### Acknowledgements
 I recieved inspiration and assistance for the code in this project from the following sources (see comments in project for details on instances where where solutions were more directly used):

  - [Bootstrap](https://getbootstrap.com/)
  - [Code Institute](https://codeinstitute.net/)
  - [W3schools](https://www.w3schools.com/css/css3_images.asp)
  - [Stack Overflow](https://stackoverflow.com/)
  - [Bestcssbuttongenerator](https://www.bestcssbuttongenerator.com/)
  - [Adobe Color Wheel](https://color.adobe.com/create/color-wheel)
  - [Joomla/Stack Exchange](https://joomla.stackexchange.com/questions/4614/make-submit-button-inactive-until-fields-have-been-filled)
  - [Google Maps Platform/API](https://cloud.google.com/maps-platform/)

I also recieved inspiration for the content and organisation of content from a number of sites with a similar function. These included: 

- [North & North Wales Independent Coffee Guide](https://indycoffee.guide/north-midlands-north-wales-independent-coffee-guide-venue-finder/)
- [Find Me Coffee](https://www.findmecoffee.com/)
- [Costa Coffee Store Locator](https://www.costa.co.uk/locations/store-locator/map#latitude=54.978252&longitude=-1.61778)
