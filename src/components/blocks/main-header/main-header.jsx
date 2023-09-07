import React from "react";
import "./style.css";
import Title, { TitleSizes } from "/src/components/ui/title/title";

function MainHeader() {
  return (
    <section className="main-header">
      <div className="main-header__description">
        <Title
          text="Магазин фермерских продуктов с доставкой"
          size={TitleSizes.BIG}
        />
        <p className="main-header__about">
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </p>
      </div>
    </section>
  );
}

export default MainHeader;
