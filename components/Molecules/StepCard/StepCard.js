import Card from '@/components/Atoms/Card';

const StepCard = ({ name, icon, description }) => (
  <Card
    containerClassName="w-full px-4 py-4 md:py-0"
    cardClassName="px-4 py-12 shadow-2xl"
  >
    <div className="flex justify-center p-4 text-4xl text-blue">
      <span className="w-20 h-20">{icon}</span>
    </div>
    <p className="text-xl font-semibold text-center display-font text-blue">
      {name}
    </p>
    <p className="mt-5 text-sm text-center ">{description}</p>
  </Card>
);
export default StepCard;
