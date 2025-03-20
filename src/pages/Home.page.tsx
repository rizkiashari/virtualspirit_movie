import TextField from "../components/atom/TextField";
import Card from "../components/molekul/Card";

const HomePage = () => {
  return (
    <div className="mt-8">
      <div className="flex justify-end">
        <TextField
          onChange={(e: Event) => {
            console.log(e.target?.value);
          }}
          placeholder="Search Movie"
          type="text"
        />
      </div>
      <p className="text-lg md:text-2xl lg:text-3xl font-bold mt-10 mb-8">
        Welcome to Movie App
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HomePage;
