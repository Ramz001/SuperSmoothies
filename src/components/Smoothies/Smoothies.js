import Smoothie from "../Smoothie/Smoothie";

const Smoothies = ({ smoothies, onDelete }) => {
  return (
    <div className="smoothies">
      <div className="smoothie-grid">
        {smoothies.map((smoothie) => (
          <Smoothie key={smoothie.id} smoothie={smoothie} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default Smoothies;
