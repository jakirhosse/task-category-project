// lib/api.js

export async function fetchCategories() {
        const response = await fetch("https://api.shope.com.bd/api/v1/public/hero-categories"); // আপনার API URL দিন
        const categories = await response.json();
        return categories;
      }
      