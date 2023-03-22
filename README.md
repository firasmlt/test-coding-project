# Documentation for Cat Image App

## Introduction:

This document serves as a guide to understand and use the Cat Image App. The application is a web app that allows the user to browse through images of cats from different breeds. The app uses thecatapi.com API to fetch the images and other details about cats. The app is built using ReactJS, Typescript, React-router-dom, React-bootstrap, and Context API.

## Installation:

To run the application on your local machine, follow the below steps:

1. Clone the repository to your local machine: `git clone https://github.com/firasmlt/test-coding-project`
2. Install the dependencies : `npm install`.
3. Start the application : `npm start`.
4. The app will run on `localhost:3000`.

## Usage:

The Cat Image App has two pages: Home Page and Single Cat Page.

### Home Page:

On the Home Page, the user can select a breed from the dropdown menu to see images of cats from that breed.

1. Select a breed from the dropdown menu.
2. The app will fetch images of cats from the API listed under the corresponding breed.
3. Click on the "Load more" button to display more images that haven't been loaded yet.
4. Once the images already reach the end of the list, the "Load more" button will disappear.
5. To clear the previous images of cats and display a new list of images, select a different breed from the dropdown menu.

### Single Cat Page:

On the Single Cat Page, the user can see more details about a particular cat image, such as the breed name, origin, temperament, and description.

Click on the "View details" button under each image.
The app will redirect you to the Single Cat Page, where you can see the details about the cat image.
To go back to the Home Page with the current breed already selected, click on the "Back" button at the top of the Single Cat Page.
The Home Page will immediately load images of cats under the previously selected breed.

## API Exception:

If there is an error while fetching the data from the API, the app will display an alert banner message

## Tech Stack

-   ReactJS + TypeScript
-   React-router-dom
-   React-bootstrap
