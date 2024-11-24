# Donation Hub 🌟  

**Donation Hub** is a responsive web application designed to encourage charitable contributions across various causes. This project adheres closely to the provided Figma design specifications and incorporates dynamic features for seamless user interaction.  

---

## 🚀 Features  

### 1. **Figma-Inspired Design**  
- Fully responsive layout matching the provided Figma design.  
- Color-coordinated components for a vibrant and cohesive user experience.  

### 2. **Dynamic Navbar**  
- **Logo** on the left and menu items (`Home`, `Donation`, and `Statistics`) on the right.  
- Active route highlighting for intuitive navigation.  

### 3. **Interactive Banner Section**  
- A visually appealing banner with:  
  - A **title**.  
  - A **search bar** for donation categories.  
  - A **background image with an overlay**, covering the banner section.  

### 4. **Home Page**  
- Displays **12 donation cards** in a 4x3 grid with:  
  - **Colorful backgrounds** for cards, categories, and text.  
  - Data dynamically loaded from a JSON file.  
- Clicking a card redirects users to the **Donation Details Page**.  

### 5. **Donation Details Page**  
- Dynamically generated details for the selected donation, including:  
  - **Picture** with an overlay.  
  - **Title**, **description**, and a **donate button** with a price.  
- A **toast notification** (SweetAlert) confirms a successful donation.  

### 6. **Donation Page**  
- Lists all donations made by the user in a 2xN grid, featuring:  
  - **Picture**, **category**, **title**, **price**, and a **View Details** button.  
- A "See All" button dynamically reveals hidden donations.  

### 7. **Statistics Page**  
- An interactive **pie chart** visualizing:  
  - Your contributions vs. total donations.  

### 8. **Additional Functionalities**  
- **Search Functionality**: Search donations by category on the homepage.  
- **404 Page**: A custom "Page Not Found" route for invalid URLs.  
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.  

---

## 🛠️ Technologies Used  

- **Frontend**: React.js, Tailwind CSS  
- **Data Storage**: JSON file  
- **Chart Library**: React Chart.js (Pie Chart)  
- **Toast Notifications**: SweetAlert2  

---

## 📊 Data Structure  

A JSON file was used to store donation data, each entry including:  
- **Picture**  
- **Title**  
- **Category**  
- **Background colors** (for card, category, text, and buttons)  
- **Description**  
- **Price**  

---

## 🖥️ How to Run the Project  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/yourusername/donation-hub.git  
   cd donation-hub  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Run the development server:  
   ```bash  
   npm start  
   ```  

4. Open the app in your browser:  
   [http://localhost:3000](http://localhost:3000)  

---

## 🌍 Live Link  

Check out the deployed project here: [Donation Hub Live](#) *(https://glittering-tulumba-e7d65f.netlify.app/)*  