import React from "react";
import "./style.css";
import AdvantageCard from "/src/components/ui/advantage-card/advantage-card";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";

function Advantages({ advantages }) {
  console.log(advantages);
  return (
    <>
      <section className="main-advantages">
        <Title text="Почему фермерские продукты лучше?" />
        {advantages?.length ? (
          <>
            <ul className="advantages-list">
              {advantages.map((advantage) => (
                <li className="advantages-item" key={advantage.id}>
                  <AdvantageCard {...advantage} />
                </li>
              ))}
            </ul>
            <Button buttonClass="advantage-button" text="Купить" />
          </>
        ) : (
          <span>НИ ВЫШЛаУ Моковые данные где то потерялись</span>
        )}
      </section>
    </>
  );
}

export default Advantages;
