# Pizza Ordering Website

This is a pizza ordering website that allows users to browse pizzas, add them to the cart, place orders, and view the menu. The website consists of multiple pages/routes and is designed to be responsive.

## Pages/Routes

### Home Page

The home page displays an overview of the website and showcases various pizzas available. It also provides the option to scroll down and view more pizzas. The pizza data is fetched from the [Rapid API](https://rapidapi.com/fernandelcapo/api/pizzaallapala/) website.

![Home Page](screenshots/home-page.png)

### Order Page

The order page allows users to add pizzas to their cart. It presents a form where users can customize their order by selecting pizza size, toppings, and quantity. Upon clicking the "Add to Cart" button, the pizza is added to the cart.

![Order Page](screenshots/order-page.png)

### Order Success Page

After successfully placing an order, users are redirected to the order success page. The page features an animation to provide a delightful experience and confirmation message.

![Order Success Page](screenshots/order-success-page.gif)

### Menu Page

The menu page displays the complete menu of pizzas available. The pizza data is fetched from the [Rapid API](https://rapidapi.com/fernandelcapo/api/pizzaallapala/) website. Users can browse different pizza options and make selections.

![Menu Page](screenshots/menu-page.png)

## Components and Responsiveness

The website is built using React and consists of several components that ensure responsiveness across different devices and screen sizes. Each component is designed to adapt to different screen sizes and provide an optimal viewing experience.

- `Navbar` component: Represents the navigation bar, allowing users to access different pages/routes of the website.
- `Home` component: Displays an overview of the website and showcases available pizzas.
- `PizzaCard` component: Represents a single pizza item with hover effects, allowing users to add it to the cart or view more details.
- `QuickViewModal` component: Displays detailed information about a selected pizza when the user clicks on the "Quick View" button.
- `OrderForm` component: Renders the form for customizing and adding pizzas to the cart on the order page.
- `Cart` component: Displays the items added to the cart and allows users to review and modify their orders.
- `OrderSuccess` component: Renders the order success page with an animated illustration.
- `Menu` component: Displays the complete menu of pizzas available, fetched from the Rapid API.

## Getting Started

To set up and run the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`
4. Open the website in your browser: `http://localhost:3000`

Make sure you have an active internet connection as the website fetches pizza data from the Rapid API.

## Conclusion

This pizza ordering website provides an interactive and responsive user interface for browsing pizzas, adding them to the cart, placing orders, and viewing the menu. It aims to deliver a seamless user experience across different devices and screen sizes.