import React from "react";
import { Title } from "./Title";
import { tours } from "../data";

function Tour() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours"></Title>

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article>
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <h4>{tour.title}</h4>
                <p>{tour.info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {tour.location}
                  </p>
                  <p>{tour.day}</p>
                  <p>{tour.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Tour;
