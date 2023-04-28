const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

const Bullets = () => {
  return (
    <div className="flex flex-wrap gap-4 my-8">
      {array.map((val, idx) => (
        <span key={idx} className="bullet-status">
          {val}
        </span>
      ))}
    </div>
  );
};

export default Bullets;
