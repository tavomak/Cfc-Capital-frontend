const StepCard = ({ number, title, description }) => {
  return (
    <div className="flex items-center p-4 mb-6 bg-white rounded-xl shadow-lg">
      <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 mr-4 text-3xl font-bold text-medium-blue rounded-full border-medium-blue border-solid border-2">
        {number}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-medium-blue mb-1">{title}</h3>
        <p className="text-sm text-medium-grey">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
