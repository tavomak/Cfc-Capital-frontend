const StepCard = ({ name, icon, description }) => (
  <div>
    <div className="flex justify-center mb-4 text-4xl">
      <span>{icon}</span>
    </div>
    <p className="text-xl font-semibold text-center display-font text-blue">
      {name}
    </p>
    <p className="mt-5 text-sm text-center">{description}</p>
  </div>
);
export default StepCard;
