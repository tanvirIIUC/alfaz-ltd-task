"use client";

import React, { useState, useRef } from "react";

export interface Category {
  id: number;
  title: string;
  parent_id: number | null;
  category_id: number;
  icon?: string;
  link: string;
  childrens?: Category[];
}


const CategoryDropdown: React.FC<{ categories: Category[]; level: number }> = ({
  categories,
  level,
}) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (categoryId: number) => {
    setActiveCategory(categoryId);
    setIsHovered(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    timeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 1000);
  };

  return (
    <ul className={`w-[230px] p-2 h-[380px] bg-white border relative`}>
      {categories.map((category) => (
        <li
          key={category.id}
          className={`pb-[2px] hover:bg-gray-200 cursor-pointer ${
            activeCategory === category.id ? "bg-gray-300 text-[#F97316]" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(category.id)}
          onMouseLeave={handleMouseLeave}
          onClick={() => setActiveCategory(category.id)} // Set active on click
        >
          <span
            className={`text-xs font-normal ${
              activeCategory === category.id
                ? "text-[#F97316]"
                : "text-black"
            } hover:text-[#F97316]`}
          >
            {category.title}
          </span>
          {category.childrens && <span className="float-right">›</span>}
          {activeCategory === category.id && category.childrens && (
            <div className="absolute left-full top-0">
              <CategoryDropdown categories={category.childrens} level={level + 1} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CategoryDropdown;