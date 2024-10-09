# XPMarket Frontend

## Description
XPMarket is an e-commerce platform that offers a seamless and responsive online shopping experience. The frontend is built using Next.js, providing dynamic, server-side rendering, and a smooth user interface. It connects with the backend for secure authentication, product management, order processing, and payment integration, making it a complete e-commerce solution.

## Features
- **Responsive Design**: Ensures a great shopping experience across all devices.
- **Redux for State Management**: Efficiently manages global state across components.
- **Product Pages**: Dynamic product displays with detailed information.
- **Shopping Cart**: Add, update, and remove products from the cart.
- **Checkout System**: Secure and smooth checkout process integrated with Stripe.
- **Order Tracking**: Users can track the status of their orders in real-time.
- **Admin Dashboard**: Manage products, view orders, and track user activities.
- **Styled Components with Tailwind CSS**: Fast and efficient UI styling.

## Installation

### Prerequisites
- Node.js and npm installed
- Git installed

### Frontend
1. Clone the repository:
    ```bash
    git clone https://github.com/ahmedkhalilexe/XPMarket-Frontend.git
    cd XPMarket-Frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Set up the environment variables:
    - Create a `.env` file and add the necessary variables (NEXT_PUBLIC_FIRE_BASE_API_KEY, NEXT_PUBLIC_FIRE_BASE_AUTH_DOMAIN, NEXT_PUBLIC_FIRE_BASE_PROJECT_ID, NEXT_PUBLIC_FIRE_BASE_STORAGE_BUCKET
, NEXT_PUBLIC_FIRE_BASE_MESSAGING_SENDER_ID, NEXT_PUBLIC_FIRE_BASE_APP_ID
, NEXT_PUBLIC_FIRE_BASE_MEASUREMENT_ID, NEXT_PUBLIC_STRIPE_PUBLIC_KEY, NEXT_PUBLIC_BACKEND_URL).

4. Start the development server:
    ```bash
    npm run dev
    ```

## Technologies Used
- **Frontend**: Next.js, React.js, Redux, Tailwind CSS, Firebase
- **API Integration**: Connects to the [XP Market Backend](https://github.com/ahmedkhalilexe/XPMarket-Backend.git) for handling orders, payments, and user data.

## Project Structure

```bash
XPMarket-Frontend/
├── app/
├── assets/
├── components/
├── hooks/
├── lib/
├── public/
├── redux/
├── .eslintrc.json
├── .gitignore
├── README.md
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── yarn.lock
