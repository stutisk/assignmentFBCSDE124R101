import { useState, useEffect } from "react";
import { MarketMoodInput } from "./MarketMoodInput";
import "../MarketMoodIndicator/MarketMoodIndicator.css";
import { ExtremeModal } from "../Modal/ExtremeModal";

export const MarketMoodIndicator = () => {
  var market_moods = {
    EXTREME_FEAR: {
      zoneColor: "#ff565b",
    },
    FEAR: {
      zoneColor: "#ffa947",
    },
    NEUTRAL: {
      zoneColor: "#ffca15",
    },
    GREED: {
      zoneColor: "#c5d335",
    },
    EXTREME_GREED: {
      zoneColor: "#6bc548",
    },
  };
  const [score, setScore] = useState("50");
  const [rotation, setRotation] = useState(0);
  const [scoreColor, setScoreColor] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    console.log(score);
    const adjustedScore = score > 100 ? 100 : score < 1 ? 1 : score;

    console.log(adjustedScore);
    const getMoodColor = (score) => {
      if (score <= 20) return market_moods.EXTREME_FEAR.zoneColor;
      if (score <= 40) return market_moods.FEAR.zoneColor;
      if (score <= 60) return market_moods.NEUTRAL.zoneColor;
      if (score <= 80) return market_moods.GREED.zoneColor;
      return market_moods.EXTREME_GREED.zoneColor;
    };

    const color = getMoodColor(adjustedScore);
    setScoreColor(color);
    const newRotation = (adjustedScore / 100) * 180;

    console.log(newRotation);
    setRotation(newRotation);
  }, [score]);

  const adjustedScore = score > 100 ? 100 : score < 1 ? 1 : score;
  console.log(adjustedScore);
  const handleMouseEnterGreed = () => setIsModalVisible("greed");
  const handleMouseLeaveGreed = () => setIsModalVisible(false);
  const handleMouseEnterFear = () => setIsModalVisible("fear");
  const handleMouseLeaveFear = () => setIsModalVisible(false);
  return (
    <section className="flex flex-column gap centre padding-top align-centre">
      <div>
        <div className="MarketMoodIndicator ">
          <div
            className="content"
            onMouseEnter={handleMouseEnterFear}
            onMouseLeave={handleMouseLeaveFear}
          >
            Extreme Fear
          </div>
          <div class="content">Fear</div>
          <div class="content">Neutral</div>
          <div class="content">Greed</div>
          <div
            class="content"
            onMouseEnter={handleMouseEnterGreed}
            onMouseLeave={handleMouseLeaveGreed}
          >
            Extreme Greed
          </div>
          <div
            className="MarketMoodIndicator-scoreValue"
            style={{ color: scoreColor }}
          >
            {adjustedScore}
          </div>

          <div
            className="needle"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          ></div>
          <div className="MarketMoodIndicator-centre"></div>
          <ExtremeModal
            isVisible={isModalVisible === "fear"}
            content="Extreme fear market sentiment offers a good opportunity to initiate fresh longs/buy positions as the market is deeply oversold. <br /> 'Be greedy when everyone is fearful'"
            style={{ top: "100px", left: "-251px", position: "absolute" }}
          />
          <ExtremeModal
            isVisible={isModalVisible === "greed"}
            content="Extreme greed market sentiment suggests investors to be cautious as markets are overbought. Be fearful when everyone is greedy"
            style={{ top: "100px", right: "-251px", position: "absolute" }}
          />
        </div>
        <div className="MarketMoodIndicator-circle "></div>
      </div>
      <MarketMoodInput score={score.toString()} setScore={setScore} />
    </section>
  );
};
