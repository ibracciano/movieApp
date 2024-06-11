import { useEffect, useState } from "react";
import Category from "../../components/Category";
import { getGenre } from "../../hook/hook";

const Categorie = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  const getData = async () => {
    try {
      const data = await getGenre();
      setData(data);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="min-h-screen pt-20 bg-fixed bg-cover bg-movie">
      <div>
        <Category data={data} />
      </div>
    </main>
  );
};

export default Categorie;
