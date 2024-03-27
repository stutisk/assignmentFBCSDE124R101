import { DataCard } from "../Components/DataCard";
import { useState } from "react";
import { data } from "../data";
export const FilterPage = ({ value }) => {
  return (
    <section className="flex flex-column gap centre padding-top align-centre">
      <div>
        <div className="speedometer ">
          <div className="content">Extreme Fear</div>
          <div class="content">Fear</div>
          <div class="content">Neutral</div>
          <div class="content">Greed</div>
          <div class="content">Extreme Greed</div>
        </div>
        <div className="speedometer-circle " ></div>
      </div>
    </section>
  );
};
