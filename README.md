# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Description
This DataTable component is part of a larger application designed to fetch and display country-related data based on user input. Here's a brief description of what the app does:

Data Fetching: The app fetches country data using an API call (getCountryData) that takes parameters like a name prefix for searching and a limit for the number of results.
Search Functionality: It provides a search box where users can enter a search query to filter the country data based on the place name prefix.
Debounce Feature: The search input is debounced to reduce the frequency of API calls while the user is typing, improving performance.
Pagination: The app includes a pagination feature that allows users to control the number of items displayed per page through a dropdown filter.
Loading State: While data is being fetched or processed, a loading spinner is displayed to indicate to the user that the app is working.
Error Handling: If there's an error during data fetching, such as a network issue or server error, an appropriate error message is displayed to the user, ensuring a smooth user experience.
