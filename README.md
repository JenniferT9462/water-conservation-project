# Water Conservation Project

This guide shows how to create a simple multi-page site that teaches water conservation using **HTML** and **Bootstrap 5**. It also includes optional interactivity with JavaScript.

---

## Part 1: Writing the HTML

### 1. Set up your project folder

* Create a folder named `water-conservation-project`.
* Inside, create these HTML files: `index.html`, `faucet.html`, `timer.html`.
* Add an `assets/` folder and place all your images there:

  * `water-glass.jpg`
  * `bathtub.jpg`
  * `timer.png`
  * `glass-bottle.png`
  * `plastic-bottle.png`
  * `faucet.png`

### 2. Create the Home Page (`index.html`)

* Add boilerplate: shift + !
* Link Bootstrap 5 CSS in the `<head>` using CDN.
    ```html
    <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
* Link Bootstrap JS at the bottom of the body:
    ```html
    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
* Add a container with a heading, a short intro paragraph, and a home image (`water-glass.jpg`).
    - Add a container for all content: 
    ```html
    <div class="container-fluid p-5" style="max-width: 400px;">
    <!-- Paragraphs, images and buttons -->
    </div>
    ```
    - Add language buttons and a **Next** button linking to `faucet.html`.
* We want to put our elements in "row" and "col" to position elements. 
    - Example for information text: 
    ```html
    <!-- Information text -->
        <div class="container-fluid p-5" style="max-width: 400px;">
            <div class="row">
              <div class="col text-center">
                <h4>Water Conservation Tips</h4>
                <p>
                    It's important that we all do our part to use less water. 
                    Click through this app for tips for conservation ideas.
                </p>
              </div>
            </div>


### 3. Create the Bottle Lesson Page (`faucet.html`)

* Similar HTML structure as home page.
* Add boilerplate: shift + !
* Link Bootstrap 5 CSS in the `<head>` using CDN.
    ```html
    <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
* Link Bootstrap JS at the bottom of the body:
    ```html
    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
* Add a container for all content: 
    ```html
    <div class="container-fluid p-5" style="max-width: 400px;">
    <!-- Paragraph, image and buttons -->
    </div>
    ```
* Add a paragraph explaining refillable vs single-use bottles.
* Add two bottle images (`glass-bottle.png` and `plastic-bottle.png`).
* Add a faucet image (`faucet.png`).
* Add a **Next** button linking to `timer.html`.
* We want to put our elements in "row" and "col" to position elements. 
    - Example for bottles row: 
    ```html
    <!-- Bottles row -->
      <div class="row justify-content-end mb-3">
        <div class="col-auto">
          <img
            src="/images/glass-bottle.png"
            alt="Picture of glass bottle"
            style="width: 80px"
          />
        </div>
        <div class="col-auto">
          <img
            src="/images/plastic-bottle.png"
            alt="Picture of plastic bottle"
            style="width: 80px"
          />
        </div>
      </div>


### 4. Create the Shower Timer Page (`timer.html`)

* Basic HTML structure again.
* Add boilerplate: shift + !
* Link Bootstrap 5 CSS in the `<head>` using CDN.
    ```html
    <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
* Link Bootstrap JS at the bottom of the body:
    ```html
    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
* Add a container for all content: 
    ```html
    <div class="container-fluid p-5" style="max-width: 400px;">
    <!-- Paragraphs, images and buttons -->
    </div>
    ```
* Add a paragraph with shower tips.
* Add a bathtub image and a small timer icon (`timer.png`).
* Add a **Home** button linking back to `index.html`.
* We want to put our elements in "row" and "col" to position elements. 
    - Example for row with bathtub and timer: 
    ```html
    <!-- Images and instructions -->
    <div class="row align-items-center mb-5">
      <div class="col text-center">
        <img src="/images/bathtub.jpg" alt="Picture of a shower" style="width: 150px;" />
      </div>
      <div class="col text-end">
        <p>Click on the timer</p>
        <img src="/images/timer.png" alt="Picture of a timer" style="width: 50px;" />
      </div>
    </div>

### 5. Layout tips

* Use `.container-fluid` with a max-width of around 400px for mobile-friendly layout.
* Use Bootstrap utility classes for spacing (`p-3`, `mt-4`, `mb-2`) and alignment (`text-center`, `text-end`).
* Add `alt` text to all images for accessibility.

---

## Part 2: Adding Interactivity
- Be sure to copy `helpers.js` file and paste into your `helpers.js` file. 
- Add script tags to your HTML pages at the bottom before the `</body>` tag:
  ```html
  <script src= "helpers.js"></script>
  ```
- For each page add it's script tag, For example, for the `index.html` file add:
  ```html
  <script src= "index.js"></script>
  ```
  * Be sure to do this below the `helpers.js` script tags and for each page. Make sure the file names make their script file. 

### 1. Language toggle on Home

* Use JavaScript to change heading, paragraph and next button text when clicking **Spanish** or **English** buttons.
* Create a file named `index.js`.
* First you can set properties for your title and paragraph elements.:
  ```js
  setProperty("title", "color", "navy");
  setProperty("paragraph", "background-color", "lightblue");setProperty("ptag", "padding", "10px");
  ```
* Now we can add our onEvents for the "Spanish" button. To switch the languages from english to Spanish:
  ```js
  onEvent("esBtn", "click", function () {
    console.log("Spanish button clicked");
    setText("title", "Consejos de Conservación de Agua");
    setText(
      "paragraph",
      "Es importante que todos hagamos nuestra parte para usar menos"
   );
   setText("next-btn", "Siguiente");
  });
  ```
  - Check in you HTML file that the "ids" for you language buttons match for your `onEvent`
*  Now we can add our onEvents for the "English" button. To switch the languages from Spanish to English:
  ```js
  onEvent("enBtn", "click", function () {
    console.log("English button clicked");
    setText("title", "Water Conservation Tips");
    setText(
    "paragraph",
    "It's important that we all do our part to use less water."
    );
  });
  ```
### 2. Bottle selection on `faucet.html`
* Create a file named `faucet.js`.
* Add script tags to the HTML file under the `helpers.js` script tag:
  ```html
  <script src="faucet.js"></script>
  ```
* Inside `faucet.js` add your onEvents to display feedback if `glass-bottle` is clicked, And move the bottle to the faucet spout. We can achieve this with position property. 
* Clicking **glass bottle**:
  ```js
  onEvent("glass-bottle", "click", function () {
    console.log("Glass Bottle Clicked");
    setProperty("overlay", "display", "none"); // reset
    //Get glass bottle element
    const glassBottle = document.getElementById("glass-bottle");
    //Positioning to get the glass bottle to move to the faucet
    glassBottle.style.position = "absolute";
    glassBottle.style.left = "46%";
   // Get Glass bottle to right under the spout
    glassBottle.style.bottom = "-200px";
    glassBottle.style.transform = "translateX(-50%)";
    // Feedback for right choice
    setProperty("feedback", "color", "green")
    setText("feedback", "You choose correct!");
    //Updating score
    score = score + 1;
    setText("scoreLabel", score);
    //Play correct choice ding sound
    playSound("assets/glass-bottle.mp3");     
    });
    ```
* We want the `plastic-bottle` to have a overlay image over the bottle of a circle crossed out and a wrong choice feedback. As well as a sound indicating that they made a wrong choice. 
* Clicking **plastic bottle**:
  ```js
  onEvent("plastic-bottle", "click", function () {
       console.log("Plastic bottle clicked");
       // Circle with cross thru it over plastic bottle
       setProperty("overlay", "display", "block");
       // Warning message
       setProperty("feedback", "color", "red");
       setText("feedback", "wrong Choice, try again!");
       score = score - 1;
       setText("scoreLabel", score);
       playSound("assets/plastic-bottle.mp3");
       
     });
* Clicking the faucet will have a dripping sound and the `glass-bottle` will have a fill background: 
  ```js
  onEvent("faucet", "click", function () {
    console.log("Faucet Clicked!");
    setProperty("overlay", "display", "none"); // reset
    //Fill glass bottle
    setProperty("glass-bottle", "background-color", "skyblue");
    playSound("assets/water-drip.mp3", false);
  });
* Set property for Scoreboard:
  ```js
  setProperty("score", "font-size", "30px");
  setProperty("score", "font-weight", "bold");
  setProperty("score", "color", "blue");
  setProperty("scoreLabel", "font-size", "24px");
  setProperty("scoreLabel", "font-weight", "bold");
  setProperty("scoreLabel", "color", "orange");
  ```

### 3. Shower timer on `timer.html`
* Create a file named `timer.js`.
* Add script tags to the HTML file under the `helpers.js` script tag:
  ```html
  <script src="timer.js"></script>
  ```
* Clicking the timer icon displays a timer that is at zero, and change the bathtub to a rubber ducky. Also, play a buzzer sound: 
  ```js
  onEvent("timer", "click", function() {
     console.log("Timer clicked");
     setImageURL("timer", "assets/zerotimer.png");
     setImageURL("bathtub", "assets/rubber-ducky.png");
    playSound("assets/timer.mp3", false);
   });
* Play water sound when clicking on the bathtub:
  ```js
  onEvent("bathtub", "click", function() {
     console.log("Bathtub clicked!");
     playSound("assets/bathtub.mp3", false);
   });

> JavaScript can be added in `<script>` tags at the bottom of each page or in a separate `script.js` file.

---

## Learning goals

* Practice writing semantic HTML.
* Structure multi-page websites.
* Use Bootstrap classes for layout and styling.
* Add basic JavaScript for interactivity.

---

