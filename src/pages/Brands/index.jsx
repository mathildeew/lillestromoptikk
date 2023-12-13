import { brands } from "../../js/brands";

export default function Brands() {
  return (
    <div className="">
      <h1>Merker</h1>
      {brands.map((brand) => (
        <div key={brand.id}>
          <h2>{brand.name}</h2>
        </div>
      ))}
    </div>
  );
}
