import supabase from "../utils/supabaseClient";
import { useState, useEffect } from "react";
import Smoothies from "../components/Smoothies/Smoothies";

const Home = () => {
  const [err, setErr] = useState(null);
  const [smoothies, setSmoothies] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");

  const handleDeleteState = (id) => {
    setSmoothies((prevSmoothies) =>
      prevSmoothies.filter((smoothie) => smoothie.id !== id)
    );
  };

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .select("*")
        .order(orderBy, { ascending: orderBy === "title" ? true : false });
      if (error) {
        setErr(
          `Coudn't fetch smoothies! 
          error code: ${error.code} 
          message: ${error.message}`
        );
        setSmoothies(null);
        throw new Error(error);
      }
      if (data) {
        setSmoothies(data);
        setErr(null);
      }
    };
    fetch();
  }, [orderBy]);

  return (
    <main className="page home">
      <h2>Home</h2>
      <div className="order-by">
        <p>Order By:</p>
        <button
          onClick={() => setOrderBy("created_at")}
          className={
            orderBy === "created_at" ? "active-order" : "inactive-order"
          }
        >
          Created At
        </button>
        <button
          onClick={() => setOrderBy("title")}
          className={orderBy === "title" ? "active-order" : "inactive-order"}
        >
          Title
        </button>
        <button
          onClick={() => setOrderBy("rating")}
          className={orderBy === "rating" ? "active-order" : "inactive-order"}
        >
          Rating
        </button>
      </div>
      {smoothies?.length > 0 && (
        <Smoothies onDelete={handleDeleteState} smoothies={smoothies} />
      )}
      {err && <p className="error">{err}</p>}
    </main>
  );
};

export default Home;
