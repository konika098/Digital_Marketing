

// eslint-disable-next-line react/prop-types
const ChooseItem = ({ text }) => {
  return (
    <div className="choose-child">
      <img className="img-fluid" src="/public/assets/tick.png" alt="Tick Icon" />
      <p className="fs-22-c res-375">{text}</p>
    </div>
  );
};

export default ChooseItem;
