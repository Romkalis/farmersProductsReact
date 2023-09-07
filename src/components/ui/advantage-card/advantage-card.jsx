import React from "react";
import Title, { TitleSizes } from "/src/components/ui/title/title";
import "./style.css";

function AdvantageCard(advantage) {
  return (
    <article className="advantage">
      <header className="advantage-header">
        <img
          className="advantage-img"
          src={advantage.image}
          alt="изображение продуктов"
        />
        <div>
          <span className={advantage.feature}>{advantage.owner}</span>
          <Title text={advantage.title} size={TitleSizes.SMALL} />
        </div>
      </header>

      <p className="advantage-description">{advantage.about}</p>
    </article>
  );
}

export default AdvantageCard;
