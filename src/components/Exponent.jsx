const Exponent = ({ num, exponent }) => {
  const lhs = Array.from({ length: exponent }, () => num).join(" * ");
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num} <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {lhs} = <span className="total">{Math.pow(num, exponent)}</span>
      </p>
    </div>
  );
};
export default Exponent;
