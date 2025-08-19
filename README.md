# Water Conservation Project

This guide shows how to create a simple multi-page site that teaches water conservation using **HTML** and **Bootstrap 5**. It also includes optional interactivity with JavaScript.

---

## Part 1: Writing the HTML

### 1. Set up your project folder

* Create a folder named `water-conservation-project`.
* Inside, create these HTML files: `index.html`, `faucet.html`, `timer.html`.
* Add an `images/` folder and place all your images there:

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
* Link Bootstrap JS at the bottom of the <body>:
    ```html
    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
* Add a container with a heading, a short intro paragraph, and a home image (`water-glass.jpg`).
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
* Link Bootstrap JS at the bottom of the <body>:
    ```html
    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
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
* Link Bootstrap JS at the bottom of the <body>:
    ```html
    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
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

## Part 2: Adding Interactivity (Optional)

### 1. Language toggle on Home

* Use JavaScript to change heading and paragraph text when clicking **Spanish** or **English** buttons.

### 2. Bottle selection on `faucet.html`

* Clicking **glass bottle** can show a success message.
* Clicking **plastic bottle** can show a warning.
* Clicking the faucet can give feedback depending on the selection.

### 3. Shower timer on `timer.html`

* Clicking the timer icon starts a simple countdown (e.g., 5 minutes).
* Display remaining time and show a message when the timer ends.

> JavaScript can be added in `<script>` tags at the bottom of each page or in a separate `script.js` file.

---

## Learning goals

* Practice writing semantic HTML.
* Structure multi-page websites.
* Use Bootstrap classes for layout and styling.
* Add basic JavaScript for interactivity.

---

