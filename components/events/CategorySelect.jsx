import React, { useState, useEffect } from "react";

const CategorySelect = ({ handleSelect, setExpand, updateCategories }) => {
  const options = [
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
  ]
  const [categories, setCategories] = useState(options)

  const updateCategory = (index) => {
    const current = categories
    if (current.filter(cat => cat.isChecked).length <= 2 || current[index].isChecked) {
      current[index].isChecked = !categories[index].isChecked
      setCategories([...current])
    }
  }

  useEffect(() => {
    updateCategories(categories)
  }, [categories])


  return (
    <div className="absolute bg-black w-[700px] rounded-lg h-[300px] text-gray-300 grid grid-cols-3 gap-y-4 font-Nunito ">
      <div className="w-full grid col-start-1 col-end-4 pl-4 pt-2">
        <p>You may select more than one category</p>
      </div>
      {categories.map((category, i) => (
        <div key={i} className="pl-4 flex gap-x-4"
          onClick={() => updateCategory(i)}>
          <input type="checkbox" checked={category.isChecked} name="category"
          />
          <label>{category.name}</label>
        </div>
      ))}
      <div className=" justify-self-end grid col-start-1 col-end-4 pr-12 pb-12 text-lg font-bold">
        <div className="cursor-pointer hover:text-white duration-100 p-2"
          onClick={() => {
            handleSelect(false)
            setExpand(false)
          }}>
          OK
        </div>
      </div>
    </div>
  );
};

export default CategorySelect;
