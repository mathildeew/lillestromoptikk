import { brands } from "../../js/brands";

export default function Brands() {
  return (
    <main className="max-w-6xl px-3.5 mx-auto">
      <div className="">
        <h1>Merker</h1>
        {brands.map((brand) => (
          <div key={brand.id} className="mb-14">
            <div className="">
              <img
                src={brand.images[0]}
                className="h-44 w-full object-cover mb-6"
              />
              <img src={brand.logo} className="w-1/2 mb-6" />
            </div>
            <p>{brand.description}</p>
          </div>
        ))}
      </div>
      <p className="font-semibold">
        Vi fører også merker som Tom Ford, Ray-Ban, Face a Face, Fleye, Traction
        Production og mange fler.
      </p>
    </main>
  );
}
