# TAP – Tiny Apartment Products

TAP (Tiny Apartment Products) is a simple product discovery website designed for people living in small apartments.  
The site helps users find smart, space-saving products for organizing and improving compact living spaces.

The project is built using **React + Vite** and fetches product data dynamically from **Google Sheets**, allowing easy product updates without redeploying the website.

---

## Features

- Browse curated products for small apartments
- Category based product filtering
- Product search functionality
- Responsive design for desktop and mobile
- Dynamic product loading from Google Sheets
- Expandable About / Contact panel
- Affiliate disclosure for Amazon products

---

## Categories

The website focuses on practical apartment organization products such as:

- Tiny Room
- Kitchen Storage
- Bedroom Organization
- Closet Setup

---

## Tech Stack

- React
- Vite
- React Router
- Axios
- Google Sheets (as CMS / database)
- CSS

---

## How Products Are Managed

Products are stored in **Google Sheets** and fetched using the OpenSheet API.

This allows new products to be added or updated without modifying the website code.

Example structure in the sheet:

| id | name | description | category | image | link |
|----|------|-------------|---------|-------|------|

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/tap-tiny-apartment-products.git