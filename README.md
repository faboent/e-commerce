# E-commerce Product Listing Platform

## Overview

This project is an E-commerce Product Listing Platform built with Next.js, TypeScript, and Tailwind CSS. It allows users to list products, view product details, and filter products by category or price. Users can also add, edit, and delete products. The platform is designed to be SEO-compliant, performant, and follows clean coding practices.

## Features

- **Product Listing:** View a list of products with details such as name, description, price, and image.
- **Product Details:** View detailed information about a specific product.
- **Product Filtering:** Filter products by category.
- **Add/Edit/Delete Products:** Add new products, edit existing products, and delete products.
- **SEO Compliance:** Includes sitemap and robots.txt for better search engine indexing.

## Setup and Running the Project Locally

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/faboent/e-commerce.git
   cd e-commerce

2. **Install Dependencies:**
     ```bash
    npm install
    # or
    yarn install

3. **Run the Development Server:**
    ```bash    
    npm run dev
    # or
    yarn dev

4. **Run the Production Server:**
      ```bash   
      npm run start
      # or
      yarn start

## Design Decisions, Optimizations, and Trade-offs
- **Design Decisions:** Component-Based Architecture: Utilizes React functional components for maintainability and reusability. Tailwind CSS: Chosen for rapid development and consistent design.

- **Optimizations:** Performance: Includes code-splitting, lazy loading, and efficient rendering. SEO: Implemented sitemap and robots.txt for improved search engine visibility.

-**Trade-offs:** No Remote Database: Uses local storage for simplicity, limiting scalability and multi-user support. No User Authentication: Focuses solely on product management without user authentication or authorization.

## SEO Handling
-**Sitemap:** Generated Automatically: Utilizes the next-sitemap package to automatically generate a sitemap. Configuration: Configured in next-sitemap.config.ts, with the XML file placed in the public directory.

## Contributing
## If you would like to contribute to this project, please fork the repository and submit a pull request. For more details, refer to the contributing guidelines.

## License
## This project is licensed under the MIT License - see the LICENSE file for details.





