import { useState } from 'react';
import categoriesData from './categories.json';
import CategoryItem from './CategoryItem';
import './Categories.css';

function Categories() {
  const [categories] = useState([...categoriesData]);

  const mapCategories = (category) => (
    <CategoryItem key={category.id} category={category} />
  );

  return <ul className="categoriesList">{categories.map(mapCategories)}</ul>;
}

export default Categories;
