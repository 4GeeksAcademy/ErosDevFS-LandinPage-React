import React from "react";

const Card = () => {
    return (

        <div className="card cards-home">
            <img src="https://picsum.photos/200/300?grayscale" className="card-img-top img-fluid" alt=""/>
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, natus soluta alias laborum vitae cumque?</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
        </div>

    );
}

export default Card;