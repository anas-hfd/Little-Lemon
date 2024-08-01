import React from "react";
import recipes from "../recipes"
import Swal from "sweetalert2";

const Menu = () => {

    const handleOrder = (id) => {
        console.log(id, "id is ordered");

        Swal.fire({
            title: "Are you Confirming the Order?",
            text: "Your order will be placed, and dilevered in 30 minutes",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Confirmed!",
                text: "Your order is processing...",
                icon: "success"
              });
            }
          });
    };


    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This Week's Specials !!</h2>
                <button>Order Menu</button>
            </div>

            <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id} className="menu-items" >
                        <img src={recipe.image} alt={recipe.title} />
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}$</p>
                            </div>
                            <div>
                                <p>{recipe.description}</p>
                                <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Menu;