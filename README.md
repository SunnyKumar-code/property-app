# Real Estate "Rent a Property" Web App

## Live Demo

The application is hosted on Vercel. You can access it here:  
👉 [**Rent a Property**](https://property-app-puce.vercel.app/)

## Overview of the Task
This project implements a single-page Real Estate "Rent a Property" web app using React and Vite, based on a provided reference design (a screenshot of a property rental interface with filtering options). The app allows users to search for properties to rent with a filtering mechanism, initially showing all property cards, and features a responsive layout across different screen sizes. The task originally included a favorites functionality, but it has been removed as per the latest request, focusing solely on property listing and filtering.

The app includes:
- A responsive navbar for navigation.
- A filters section with location, move-in date, price range, and property type options.
- A property list displaying cards with details (name, location, price, beds, bathrooms, size).
- A footer for additional information and links.

## Images of Different Components
Include screenshots of the following components in your `README.md`. You can capture these from your local development environment and save them in a `screenshots` folder in your project root. Replace the placeholder instructions below with actual image paths after capturing.

### 1. Navbar
*Description*: A responsive navigation bar with "Estatary" logo, navigation links (Rent, Buy, Sell, Manage Property, Resources), and Login/Sign Up buttons.  
`![Navbar Screenshot](./screenshots/navbar.png)`  
*How to Capture*: Open your app in a browser, navigate to the home page, and take a screenshot of the top navigation bar.

### 2. Filters Section
*Description*: A filter panel with dropdowns for location, move-in date, price range, and property type, plus a Search button, initially showing all properties.  
`![Filters Screenshot](./screenshots/filters.png)`  
*How to Capture*: Screenshot the filter section on the home page, showing the default state (all locations, all prices, all types, no move-in date).

### 3. Property List
*Description*: A grid of property cards displaying details like name, location, price, beds, bathrooms, and size, initially showing all 15 properties.  
`![Property List Screenshot](./screenshots/property-list.png)`  
*How to Capture*: Take a screenshot of the property grid on the home page, ensuring it shows multiple cards (e.g., 3 columns on desktop, stacking on mobile).

### 4. Footer
*Description*: A footer with the "Estatary" logo, copyright, and links (About Us, Contact, Privacy Policy, Terms of Service).  
`![Footer Screenshot](./screenshots/footer.png)`  
*How to Capture*: Screenshot the bottom of the home page to capture the footer.

*Note*: To add actual images, create a `screenshots` folder in your project root, save the images there, and update the paths in the markdown above. Use tools like browser dev tools or screen capture software to take these screenshots.

## Functionalities Implemented
- **Filtering Mechanism**: Users can filter properties by location (e.g., "FL, USA"), move-in date, price range ($500-$2,500, $2,500-$5,000, $5,000+), and property type (e.g., House, Apartment, Villa, etc.). Initially, all properties are shown, and filters update the displayed list in real-time or via the Search button.
- **Responsive Design**: The app is fully responsive across mobile, tablet, and desktop screens using Tailwind CSS. The navbar, filters, property list, and footer adjust layout (e.g., stacking vertically on mobile, horizontal on desktop).
- **Property Listing**: Displays a grid of property cards with details (name, location, price, beds, bathrooms, size) using dummy data from `src/data/properties.js` (15 properties with images from Unsplash).
- **Navigation**: A navbar with links for Rent, Buy, Sell, Manage Property, Resources, and Login/Sign Up buttons, styled to match the reference design.
- **Footer**: Includes branding, copyright, and navigation links, styled consistently with the app’s purple and gray theme.

## Extra Packages Used
- **React**: Core library for building the UI components.
- **React Router DOM (v6)**: For client-side routing (used for the home page, though favorites routing was removed).
- **Vite**: Build tool for fast development and production builds.
- **Tailwind CSS**: CSS framework for styling, providing utility-first classes for responsive design, colors, spacing, and layouts.

No additional packages beyond these were used, as the favorites functionality (which might have required context or state management libraries) has been removed.

## Learning from the Project
- **React and Vite Integration**: Gained experience setting up and developing a React app with Vite, leveraging its fast development server and ES module support.
- **Tailwind CSS for Responsiveness**: Learned to use Tailwind CSS for rapid, responsive design, understanding breakpoints (e.g., `sm:`, `md:`, `lg:`) and utility classes for layout and styling.
- **State Management**: Understood managing state with `useState` for filters and handling parent-child component communication via props and callbacks.
- **Filtering Logic**: Developed skills in filtering arrays based on multiple criteria (location, price, type, date), ensuring dynamic updates in real-time.
- **Troubleshooting**: Addressed common issues like React Router version mismatches (v5 to v6), import errors, and responsiveness challenges, improving debugging skills.

## Future Improvements Needed
- **Pagination or Infinite Scroll**: With 15 properties currently, performance is fine, but for scalability (e.g., hundreds of properties), implement pagination or infinite scrolling to improve user experience.
- **Backend Integration**: Add a backend API (e.g., Node.js, Firebase) to fetch real property data instead of using static dummy data, enabling dynamic updates and user-specific data.
- **Search Optimization**: Enhance filtering with fuzzy search or autocomplete for locations and property types, improving usability.
- **Accessibility (a11y)**: Ensure the app meets WCAG standards (e.g., keyboard navigation, screen reader support, sufficient color contrast) for better accessibility.
- **Performance Optimization**: Implement lazy loading for images, code splitting, and memoization for components to improve load times, especially with larger datasets.
- **User Authentication**: Add login/signup functionality (currently mocked with buttons) to allow user-specific features like saved searches or profiles.
- **Mobile App Conversion**: Consider using frameworks like React Native or Capacitor to convert this web app into a mobile app for broader reach.
- **Error Handling**: Add robust error handling for cases like network failures, invalid filter inputs, or missing data.
- **Unit and Integration Tests**: Implement tests using libraries like Jest and React Testing Library to ensure component reliability and functionality.