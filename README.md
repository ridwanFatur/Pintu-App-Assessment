# Pintu Assessment

## Results

The results of Pintu-Web-App can be viewed [here](https://pintu-assessment-ridwan.web.app/).

The results of Pintu-Mobile-App can be viewed [here](https://drive.google.com/drive/folders/1pIkCVmkwDzOvh68NqGSoCDp4DreDw8YS?usp=sharing).

## Pintu-Web-App Specifications

- Using Typescript with React 18
- Using React Context and React Effect for State Management
- Using React Query to call functions that use axios to request API
- Using Eslint and Prettier
- Using Tailwind CSS and Inline Style React to make the web responsive
- Deployed using Firebase Hosting

## Pintu-Mobile-App Specifications

- Using Typescript with React 18
- Using React Context and React Effect for State Management
- Using React Query to call functions that use axios to request API
- Unit Testing for several created classes
- Using Eslint and Prettier

## Assumptions in the Project

- The Token List displayed comes from `api.pintu.co.id/v2/wallet/supportedCurrencies`, and each token has a priceChange that comes from `api.pintu.co.id/v2/trade/price-changes` by matching the `currencyGroup` in the `pair` parameter with the addition of "/idr".
- The TopTokenList displayed comes from the first 5 orders in the TokenList.
- For some browsers that have problems with CORS policy, you can use extensions like CORS Unblock on Chrome to run the web application smoothly.

## How to Run

To run the Pintu-Web-App code in development mode, do the following command:

- cd Pintu-Web-App
- npm install
- npm start

To run the Pintu-Mobile-App code in development mode, do the following command:
- cd Pintu-Mobile-App
- npm install
- npx react-native run-android

