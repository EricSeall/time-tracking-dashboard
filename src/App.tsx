import { useState } from "react";
import Activities from "./assets/data.json";
import "./App.css";

function App() {
  const [timeframe, setTimeframe] = useState("daily");

  console.log(timeframe);
  return (
    <>
      <div className="time-app">
        <section className="head-card">
          <div className="user-profile">
            <img className="user-img" src="./images/image-jeremy.png" />
            <div>
              <p className="report">Report for</p>
              <p className="user-name">Jeremy Robson</p>
            </div>
          </div>
          <div className="user-timeframes">
            {timeframe === "daily" ? (
              <button
                className="timeframe-button white"
                onClick={() => setTimeframe("daily")}
              >
                Daily
              </button>
            ) : (
              <button
                className="timeframe-button"
                onClick={() => setTimeframe("daily")}
              >
                Daily
              </button>
            )}
            {timeframe === "weekly" ? (
              <button
                className="timeframe-button white"
                onClick={() => setTimeframe("weekly")}
              >
                Weekly
              </button>
            ) : (
              <button
                className="timeframe-button"
                onClick={() => setTimeframe("weekly")}
              >
                Weekly
              </button>
            )}
            {timeframe === "monthly" ? (
              <button
                className="timeframe-button white"
                onClick={() => setTimeframe("monthly")}
              >
                Monthly
              </button>
            ) : (
              <button
                className="timeframe-button"
                onClick={() => setTimeframe("monthly")}
              >
                Monthly
              </button>
            )}
          </div>
        </section>
        <section className="activities">
          <ActivityCards timeframe={timeframe} />
        </section>
      </div>
    </>
  );
}

interface Props {
  timeframe: string;
}

function ActivityCards(props: Props) {
  return Activities.map((data) => (
    <div key={data.title} id={data.title} className="wrapper">
      {data.title === "Work" && (
        <div className="activity-bg light-orange">
          <img className="activity-icon" src="./images/icon-work.svg"></img>
        </div>
      )}
      {data.title === "Play" && (
        <div className="activity-bg soft-blue">
          <img className="activity-icon" src="./images/icon-play.svg"></img>
        </div>
      )}
      {data.title === "Study" && (
        <div className="activity-bg light-red">
          <img className="activity-icon" src="./images/icon-study.svg"></img>
        </div>
      )}
      {data.title === "Exercise" && (
        <div className="activity-bg lime-green">
          <img className="activity-icon" src="./images/icon-exercise.svg"></img>
        </div>
      )}
      {data.title === "Social" && (
        <div className="activity-bg violet">
          <img className="activity-icon" src="./images/icon-social.svg"></img>
        </div>
      )}
      {data.title === "Self Care" && (
        <div className="activity-bg soft-orange">
          <img
            className="activity-icon"
            src="./images/icon-self-care.svg"
          ></img>
        </div>
      )}
      <div className="activity-card">
        <div className="card-header">
          <p className="activity-name">{data.title}</p>
          <img className="ellipsis-icon" src="./images/icon-ellipsis.svg"></img>
        </div>
        <div className="activity-timeframes">
          {props.timeframe === "daily" && (
            <>
              <p className="current-time">{data.timeframes.daily.current}hrs</p>
              <p className="last-time">
                Yesterday - {data.timeframes.daily.previous}hrs
              </p>
            </>
          )}
          {props.timeframe === "weekly" && (
            <>
              <p className="current-time">
                {data.timeframes.weekly.current}hrs
              </p>
              <p className="last-time">
                Last Week - {data.timeframes.weekly.previous}hrs
              </p>
            </>
          )}
          {props.timeframe === "monthly" && (
            <>
              <p className="current-time">
                {data.timeframes.monthly.current}hrs
              </p>
              <p className="last-time">
                Last Month - {data.timeframes.monthly.previous}hrs
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  ));
}
export default App;
