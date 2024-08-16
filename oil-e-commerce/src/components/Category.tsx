import CategoryCard from "./CategoryCard";
const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/intro-img.png",
    },

    {
      id: 1,
      name: "Fresh Vegs",
      count: "8 Products",
      img: "/intro-img.png",

    },

    {
      id: 2,
      name: "Canned Goods",
      count: "10 Products",
      img: "/intro-img.png",
    },

    {
      id: 3,
      name: "Bread & Bakery",
      count: "12 Products",
      img: "/intro-img.png",
    },

    {
      id: 4,
      name: "Fishes",
      count: "10 Products",
      img: "/intro-img.png",
    },

    {
      id: 5,
      name: "Eggs & Dairy",
      count: "7 Products",
      img: "/intro-img.png",
    },

    {
      id: 6,
      name: "Soft Drinks",
      count: "5 Products",
      img: "/intro-img.png",
    },

    {
      id: 7,
      name: "Fresh Fruit",
      count: "9 Products",
      img: "/intro-img.png",
    },
];




const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
        <CategoryCard 
        key ={el.id}
        name={el.name}
        count={el.count}
        img={el.img}
        />
        
        ))} 
      </div>
    </div>
  )
}

export default Category
