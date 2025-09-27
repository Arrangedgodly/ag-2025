const CardDescription = ({ title, releaseDate }) => {
  return (
    <li>
      <div className="timeline-start timeline-box text-stone-100 text-2xl">
        {title}
      </div>
      <div className="timeline-middle text-xl">{releaseDate}</div>
    </li>
  );
};

export default CardDescription;
