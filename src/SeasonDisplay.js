import React from "react";
import "./SeasonDisplay.css";
const seasonConfig = {
  Winter: {
    text: "Burr, its chilly",
    iconName: "snowflake",
  },
  Summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>
        <div>{text}</div>
      </h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
