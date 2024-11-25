# Man Cave -  Breaking the stigma

Man Cave is a safe place to go for young men on how to cope easier with mental health. Man Cave has been developed as part of Code Institute's Full Stack Development for the AI Augmented Developer as my 1st ever project. This project is made by using HTML, CSS and Bootstrap. Men's Mental Health is a something that I believe in a lot as young man who battled my with own mental health in the past it was a no brainer to cover this topic for my first project. [Man Cave](https://tommckechnie-90.github.io/Man-Cave-Breaking-the-stigma/)

![TypeRacer - Devices view](<documentation/Devices view.png>)

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

### User Stories

## TypeRacer user stories

### Responsive and accessible design (must-have)

**User story**

As a general user, I want the website to be responsive on various devices so that I can take the typing test on my preferred device.

**Acceptance Criteria:**

- [ ] The website layout adapts to different screen sizes (desktop, tablet, smartphone).

**Tasks:**

- [ ] Implement responsive design for the website to adapt to different screen sizes (desktop, tablet, smartphone)

### Start and stop actions (must-have)

**User story**

As a casual user, I want to start and stop the typing speed test so that I can accurately measure my typing speed.

**Acceptance Criteria:**

- [ ] The test begins by user action, such as clicking a start button
- [ ] The test ends by user action, such as clicking a stop button
- [ ] It is clear to the user how they can start and stop the test

**Tasks:**

- [ ] Create a user action that triggers the start of the test
- [ ] Create a user action that triggers the end of the test
- [ ] Create clear actions the user needs to take to start and stop the test

### Display typing test sample text (must-have)

**User story**

As a user, I want to see a sample of text to type so that I know what I need to type to measure my speed.

**Acceptance Criteria:**

- [ ] A sentence of sample text is clearly visible and formatted for easy reading.
- [ ] The sample text is randomly chosen from a set selection for each level of difficulty. (easy, medium or hard)

**Tasks:**

- [ ] Implement functionality to display a random paragraph of text upon starting the test, depending on the level of difficulty selected by the user.
- [ ] Ensure the text is clearly visible and formatted for easy reading.

### User typing input section (must-have)

**User story**

As a user, I want a dedicated area to type the displayed text so that I can input my typing accurately.

**Acceptance Criteria:**

- [ ] An editable text area is provided separate from the displayed text.
- [ ] The text area is initially empty and ready for user input.
- [ ] The text area contains a placeholder that indicates how to start the test.

**Tasks:**

- [ ] Add an editable text area for user input.
- [ ] Ensure the text area starts empty and is ready for typing.
- [ ] Ensure the text area placeholder text indicates to the user how to start the test.

### Calculate and display Words Per Minute (WPM) (must-have)

**User story**

As a user, I want to see my typing speed calculated in Words Per Minute (WPM) when I finish typing so that I know my typing performance.

**Acceptance Criteria:**

- [ ] WPM is calculated based on the number of correctly typed words and elapsed time.
- [ ] The difficulty level and WPM result is displayed immediately after completing the test.

**Tasks:**

- [ ] Create a results area to display the level, time and Words Per Minute (WPM) results to the user
- [ ] Implement functionality to calculate the number of correctly typed WPM.
- [ ] Display the WPM result with the level and time immediately after the user completes the test.

### Retry button (WPM) (should-have)

**User story**

As a user, I want to be able to easily retry my typing speed test so that I can work on improving my typing speed.

**Acceptance Criteria:**

- [ ] A retry button is clearly visible on the web page
- [ ] When the retry button is clicked, a new test is set up at the same difficulty level as the previous one.

**Tasks:**

- [ ] Add a "Retry" button to the typing test.
- [ ] Ensure clicking the "Retry" button resets the test for a new attempt at the same difficulty level as the previous test.

### Real-time feedback on typing accuracy (should-have)

**User story**

As a user, I want to see real-time feedback on my typing accuracy so that I can immediately know if I am making errors.

**Acceptance Criteria:**

- [ ] As the user types, correctly typed words are highlighted in blue.
- [ ] As the user types, incorrectly typed words are highlighted in red.

**Tasks:**

- [ ] Implement the functionality to highlight correctly typed words in blue and incorrectly typed words in red.
- [ ] Ensure the highlighting happens in real time as the user is typing.

### Test instructions modal (should-have)

**User story**

As a new user, I want clear instructions on how to use the typing speed test so that I know how to start and complete the test.

**Acceptance Criteria:**

- [ ] Clear instructions on how to take the test are provided on the homepage.
- [ ] Instructions are easy to understand and follow.

**Tasks:**

- [ ] Create a modal that displays clear instructions to the user on how to take the test.
- [ ] Add a clearly visible button on the web page to open the instructions modal.

### Display best test results for each difficulty level (could-have)

**User story**

As a competitive user, I want my best results for each difficulty level to be displayed so that I can compare my progress.

**Acceptance Criteria:**

- [ ] The best test result for each level is stored
- [ ] The best test result for each level is displayed on the site

**Tasks:**

- [ ] Create an area to display the best test results for each level of difficulty
- [ ] The best test result for each level is stored and displayed to the user




## Design

### Colour Scheme

![TypeRacer Palette](<documentation/>)

I chose this colour palette as I think it is a nice warm welcoming palette.


### Typography

I chose these fonts as I thought they looked informative and welcoming. I used Poppins for any Headings, Rozha One for any sub headings and Enriqueta for any paragraphs.

![TypeRacer Typography](<documentation/fonts.jpg>)



### Imagery

For Images I used AI to generate the images. I used a combo of Adobe Firefly and Microsoft Co-pilot.


### Wireframes

I made my wireframes using Balsamiq.

![Man Cave - Home](<documentation/Wirefram Home page.jpg>)

![Man Cave - Tips](<documentation/Wirefram Tips page.jpg>)


## Features

My site is made up of a Home page containing positive affirmations and Resources and the tips page containing tips and videos with helpful advice.

## Desktop, laptop, Tablet & Mobile View

![Man Cave - Devices view](<documentation/devices.jpg>)

### General features on each page

General features that reoccur on each page are the navbar, footer, favicon, 

![Favicon](documentation/apple-touch-icon.png)
![Navbar](documentation/navbar.jpg)
![Footer](documentation/footer.jpg)

### Future Implementations

I would add a page for a general mental health questionnaire for users to take when they visit the page. This would trigger them to get help if they mark lower then a certain score.

### Accessibility

In my project I have aria-labels and names attached to all my links for screen readers.


## Technologies Used

### Languages Used

* HTML
* CSS

### Frameworks, Libraries & Programs Used


* Balsamiq - To create the wireframes
* Git - For version control
* Github - To save and store my project
* Bootstrap 5.3 - The framework for my project, this was used for my header, the carousel and the cards.
* Google Fonts - For importing the font used in my project
* Font Awesome - For the icons for my social media links




## Deployment

👩🏻‍💻 View my deployed page [here](https://tommckechnie-90.github.io/Man-Cave-Breaking-the-stigma/)

### Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

* Log in (or sign up) to Github.
* Find the repository for this project, Man-Cave-Breaking-the-stigma.
* Click on the Settings link.
* Click on the Pages link in the left hand side navigation bar.
* In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
* Click Save. Your live Github Pages site is now deployed at the URL shown.


## Testing

### Lighthouse testing
##### Home page
![Lighthouse home page](documentation/lighthouse%20home.jpg)


##### Tips page
![Lighthouse Tips page](documentation/lighthouse%20tips.jpg)


### Validators


#### CSS Validation

![CSS Validator](documentation/css%20test.jpg)

#### HTML Validation

##### Home Page
![HTML Validator](documentation/html%20test%20home%20page.jpg)

##### Tips Page

![HTML Validator](documentation/html%20test%20tips%20page.jpg)


## Credits


###  Media

The Images from my site were genrated using Adobe Firefly and Microsoft copilot

# The use of AI in my project

**Most used AI: Microsoft Copilot**

**AI Used for Images: Adobe firefly and Microsoft Copilot**


AI was used in the planning phase to help me with user stories.

I found AI to be really useful in helping me create paragraphs for my webpage this saved me loads of time as I did not have to type a full paragraph myself just edit the ones AI generated for me. Also came in handy for ideas for keywords to use for SEO. 


I also used AI to generate all the images on my webpage, again saving me time searching the web I found Adobe Firefly pleasent to use.

I used Copilot in VScode to generate my header section using bootstrap 5.3 just to see what it came up with and I ended up liking the end result and keeping it the code it gave me.
  
###  Acknowledgments

[Amy Richardson](https://github.com/amylour) For her helpful resources.
[Roo MacArthur](https://github.com/roomacarthur) For his help on spacing my cards on the smaller screens.
