export const MarketMoodInput = ({ score, setScore }) => {
  return (
    <div className="input-score">
      <label for="username">Score Value(Change to update widget): </label>
      <input
        type="number"
        id="username"
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
      />
    </div>
  );
};
