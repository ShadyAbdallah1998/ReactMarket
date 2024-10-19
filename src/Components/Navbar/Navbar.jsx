function Navbar() {
  const dynamicName = ["Cairo", "Tanta", "Alex"];
  const changeString = (max) => Math.floor(Math.random() * (max + 1));
  const randomData = dynamicName[changeString(2)];
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5 text-amber-600">
        {randomData} Store
      </h1>
    </div>
  );
}

export default Navbar;
