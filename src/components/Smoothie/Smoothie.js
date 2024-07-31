import { Link } from "react-router-dom";
import supabase from "../../utils/supabaseClient";

const Smoothie = ({ smoothie, onDelete }) => {


  const handleDelete = async () => {
    const { error, data } = await supabase
      .from("smoothies")
      .delete()
      .eq("id", smoothie.id)
      .select();
    if (error) {
      throw new Error(error);
    }
    if (data) {
      onDelete(smoothie.id);
    }
  };

  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="smoothie-btns-container">
        <Link className="smoothie-btn" to={"/" + smoothie.id}>
          <i className="material-icons">edit</i>
        </Link>
        <button onClick={handleDelete} className="smoothie-btn">
          <i className="material-icons">delete</i>
        </button>
      </div>
    </div>
  );
};

export default Smoothie;
