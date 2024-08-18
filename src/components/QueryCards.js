import React from "react";

export default function QueryCards() {
  return (
    <div className="cardlayout">
    <h2>TOP QUERIES</h2>
        <div className="container mt-4">
            <div className="row">
                {Array.from({ length: 12 }).map((_, index) => (
                <div className="col-lg-3 mb-4" key={index}>
                    <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Card title {index + 1}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}