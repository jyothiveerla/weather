import "./index.css";

const WeatherItem = (props) => {
  const { currentLocation, temperature, dateandtime } = props;

  return (
    <div className="bg_container">
      <p>{currentLocation}</p>
      <p>{temperature}</p>
      <p>{dateandtime}</p>
    </div>
  );
};

export default WetherItem;
