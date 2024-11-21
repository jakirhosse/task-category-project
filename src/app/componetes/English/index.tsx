"use client"

import React, { useState } from "react";

export default function HeroCategories({ categories }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setActiveCategory(category);
    setSubCategory(null); // Reset subcategories on hover
  };

  const handleSubCategoryEnter = (subcategory) => {
    setSubCategory(subcategory);
  };

  return (
    <div className="flex">
      {/* Main Categories */}
      <div className="w-1/3 border-r">
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              onMouseEnter={() => handleMouseEnter(category)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Subcategories */}
      {activeCategory && (
        <div className="w-1/3 border-r">
          <ul>
            {activeCategory.childrens &&
              activeCategory.childrens.map((child) => (
                <li
                  key={child.id}
                  onMouseEnter={() => handleSubCategoryEnter(child)}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {child.title}
                </li>
              ))}
          </ul>
        </div>
      )}

      {/* Deeper Subcategories */}
      {subCategory && (
        <div className="w-1/3">
          <ul>
            {subCategory.childrens &&
              subCategory.childrens.map((child) => (
                <li
                  key={child.id}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {child.title}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
