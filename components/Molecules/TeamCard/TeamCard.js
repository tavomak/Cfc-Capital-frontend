import Image from 'next/image';

const TeamCard = ({ name, photo, position, email }) => (
  <div key={name} className="px-12 py-6 mb-4 md:w-1/3">
    <div className="mb-3 px-md-5">
      <div className="overflow-hidden team-img rounded-3xl">
        <Image
          src={photo}
          alt={name}
          width={1000}
          height={1361}
          style={{
            width: '100%',
            height: 'auto',
          }}
          priority
        />
      </div>
    </div>
    <div className="text-center">
      <p className="text-2xl font-bold display-font text-purple md:text-xl">
        {name}
      </p>
      <p className="font-bold text-medium-gray text-center">{position}</p>
      <a
        href={`mailto:${email}`}
        className="text-medium-gray"
        target="_blank"
        rel="noreferrer"
      >
        {email}
      </a>
    </div>
  </div>
);
export default TeamCard;
