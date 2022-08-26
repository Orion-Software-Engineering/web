import React, { useState } from "react";
import Link from "next/link";

const CategorySelect = () => {
  const [categories, setCategories] = useState({
    tags: [
      { name: "Art", isChecked: false },
      { name: "Entertainment", isChecked: false },
      { name: "Hair & Beauty", isChecked: false },
      { name: "Business", isChecked: false },
      { name: "Fashion", isChecked: false },
      { name: "News & Politics", isChecked: false },
      { name: "Cars & Vehicles", isChecked: false },
      { name: "Food", isChecked: false },
      { name: "Photography", isChecked: false },
      { name: "Comedy", isChecked: false },
      { name: "Gaming", isChecked: false },
      { name: "Science & Technology", isChecked: false },
      { name: "Education", isChecked: false },
      { name: "Health & Fitness", isChecked: false },
      { name: "Sports", isChecked: false },
    ],
  });

  return (
    <div className="z-50 bg-black w-[700px] rounded-lg h-[300px] text-gray-300 grid grid-cols-3 gap-y-4">
      <div className="w-full grid col-start-1 col-end-4 pl-4 pt-2">
        <p>You may select more than one category</p>
      </div>
      {categories.tags.map((category, i) => (
        <div key={i} className="pl-4 flex gap-x-4">
          <input type="checkbox" checked={category.isChecked} />
          <label>{category.name}</label>
        </div>
      ))}
      <div className=" justify-self-end grid col-start-1 col-end-4 pr-8 text-lg font-bold">
        <Link href="../events">OK</Link>
      </div>
    </div>
  );
};

export default CategorySelect;
