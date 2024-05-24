import React from "react"; 
import ReactDOM from "react-dom/client"; 
import "./index.css"

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
      },
      {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
      },
      {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
      },
      {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
      },
      {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
      },
      {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
      },
];
function App () {
    return <div className="container">
        
        <Header />
        <Menu />
        <Footer />
        </div>
} 

function Header() {
    // const style = { color: "red", fontSize: "48px", textTransform: "uppercase"};
    return <header className="header">
     <h1>The Pizza Planeterium</h1>
    </header>
} 

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;
    return <main className="menu">
        <h2>Our Menu</h2>
       

   {/*} {numPizzas > 0 && 

        <ul className = "pizzas">
            {pizzaData.map(pizza => <Pizza pizzaObj = {pizza} key = {pizza.name}/>)}
   </ul> } */}
        {numPizzas > 0 ? (
            <> 
            {/* this is a react fragment that helps us add more than 2 pieces of jsx. jsx
            can have only one root element. it allows us to have more than 1 element in our piece of jsx */}
             <p>Why settle for ordinary when you can have extraordinary? Indulge
             in a pizza experience like no other
             – where freshness, flavor, and 
             convenience converge seamlessly</p>

            <ul className = "pizzas">
            {pizzaData.map(pizza => <Pizza pizzaObj = {pizza} key = {pizza.name}/>)}
            </ul> </> )  : null }
        {/* <Pizza 
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10} />

         <Pizza 
        name="Pizza Margherita"
        ingredient="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price={12} />

        <Pizza 
        name="Focaccia"
        ingredient="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={6} />

        <Pizza 
        name="Pizza Funghi"
        ingredient="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12} />

        <Pizza 
        name="Pizza Salamino"
        ingredient="Tomato, mozarella, and pepperoni"
        photoName="pizzas/salamino.jpg"
        price={14} />

        <Pizza 
        name="Pizza Prosciutto"
        ingredient="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={16} /> */}
    </main>
} 

function Footer() {
    const hour = new Date().getHours(); 
    const openHour = 12; 
    const closeHour = 12;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen); 

    //we can have multiple returns based on input. 
    // if(!isOpen) 
    //     return (
    //         <p className="footer">We're currently closed! We're happy to welcome you after 10:00.</p>
    //     )
    return  <footer className="footer">{!isOpen && 
        (<div className = "order">
            <p>We're Open until {closeHour}:00! Come visit us soon!</p> 
            <button className="btn">Order Now!</button>
            </div>) }
           
    </footer> 
    //Short circuiting: When the first part is true of the and condition, the second part will execute. if the first part 
    //is false, the second part will not execute. 
} 

function Pizza ({pizzaObj}) { //we destructured the props

    return <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
        <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price$}</span> 
        </div>
    </li>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>);