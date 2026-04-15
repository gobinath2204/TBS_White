# Welcome to the Test Base Solutions (TBS) Website

Welcome to the project files for the **Test Base Solutions (TBS)** official website! 

TBS is a company focused on automotive software, testing, and EV (Electric Vehicle) innovation. This project contains all the code and files that make up the TBS website. 

This guide is written for everyone, even if you have **zero coding experience**. It will help you understand what this project is, how it's organized, and how you can run it on your own computer.

---

## 🌟 What is this website?

This website serves as the online face for TBS. It showcases the company's expertise in the automotive lifecycle. Here is a quick breakdown of the main sections you can find on the website:

- **Home:** A visually appealing landing page with a background video and quick overviews of products and services.
- **About Us:** The story of TBS, detailing its growth into a trusted engineering partner.
- **Products:** Information on TBS's offerings, including the In-House Software Stack, EV Generic Deck, HMI, SMU, SmartHIL, and DFU.
- **Services:** Details on their engineering services, such as System Engineering, Software Engineering, Hardware Engineering, System Validation, and Safety & Regulatory compliance.
- **Careers:** An area dedicated to finding new talent to join the TBS team.
- **Contact Us:** A page where visitors can send messages or inquiries.

---

## 🚀 How to view the website on your computer

If you want to run this website on your own computer to see how it looks and works, follow these simple steps:

### Step 1: Install Node.js
First, you need a program called **Node.js**. This is like the engine that runs our website's code. 
- Go to [nodejs.org](https://nodejs.org/) and download the "LTS" (Long Term Support) version. 
- Install it just like you would any normal program.

### Step 2: Open your Terminal (or Command Prompt)
Navigate to the folder where you have this project (`TBS_White`) saved on your computer. 
- **On Windows:** Open the folder, click the address bar at the top, type `cmd`, and press Enter.
- **On Mac:** Open the "Terminal" app, type `cd ` (with a space), drag the folder into the terminal window, and press Enter.

### Step 3: Download the necessary tools
Type the following command into your terminal and press Enter:
```sh
npm install
```
*(Think of this as downloading the "building blocks" the website needs to work. It might take a minute or two.)*

### Step 4: Start the website
Once the previous step is finished, type this command and press Enter:
```sh
npm run dev
```
*(This tells the computer to build the website and start a local web server.)*

### Step 5: View it in your browser!
The terminal will show you a link that looks something like this: `http://localhost:5173`. 
Copy that link, open your favorite web browser (like Chrome, Edge, or Safari), paste it in the address bar, and hit Enter. **You are now viewing the website!**

---

## 📁 Where is everything located? (Project Layout)

If you are curious about what all these folders and files do, here is a simple breakdown:

- **`public/`**: This folder holds images, videos (like the hero video on the home page), and icons. If you want to change a picture, this is a good place to look.
- **`src/`**: This means "source". Almost all the visible stuff on the website lives here!
  - **`pages/`**: It contains the overarching screens like `Home.jsx`, `ContactUS.jsx`, and folders for the specific Product and Service pages. 
  - **`components/`**: Smaller, reusable building blocks like the Navigation Bar, Buttons, and scrolling elements.
- **`package.json`**: This is a list of instructions and a "shopping list" of all the tools the project uses behind the scenes.
- **`README.md`**: The file you are currently reading!

---

## ✍️ How to make text changes

If you just want to fix a typo or change a sentence, you don't need to be a developer! 
1. Go into the `src/pages/` folder.
2. Find the page you want to edit (for example, `About.jsx` for the About Us page).
3. Open it using any simple text editor (like Notepad on Windows or TextEdit on Mac, though a program like VS Code is highly recommended).
4. Look for the English text you want to change, modify it, save the file, and refresh your browser. The website will automatically update! 

---

*Thank you for being part of the Test Base Solutions journey!*
