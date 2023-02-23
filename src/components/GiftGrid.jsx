import { useFetchGifs } from "../hooks/useFetchGifs";
import { GridItem } from "./GridItem";

export const GiftGrid = ({ category }) => {
  const { image, isLoading } = useFetchGifs(category);
  
  return (
    <>
      <h3>{category}</h3>
      {
         isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {image.map((img) => (
          <GridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
