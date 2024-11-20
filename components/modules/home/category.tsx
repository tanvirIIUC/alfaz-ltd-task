"use client"
import { useEffect, useState } from "react";
import CategoryDropdown, { Category} from "./CategoryDropdown";

const CategoryPage: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    const fetchCategories = async (): Promise<Category[]> => {
        const res = await fetch("https://api.shope.com.bd/api/v1/public/hero-categories");
        return res.json();
      };
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchCategories();
        setCategories(data);
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="flex px-[60px]">
       
        {categories.length > 0 && <CategoryDropdown categories={categories} level={1} />}
      </div>
    );
  };
  
  export default CategoryPage;