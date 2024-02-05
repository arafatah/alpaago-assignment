import { useState } from "react";
import UserTable from "../../Components/UserTable/UserTable";

const api = {
  key: "ce12f0e2cd5dd2bc551013acbcb9f3aa",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Home = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const [users, setUsers] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      username: `User ${i + 1}`,
      addedDate: new Date().toLocaleDateString(),
      status: i % 2 === 0 ? "Active" : "Inactive",
    }))
  );

  const handleAdd = (userId) => {
    // Logic to add user to inactive list
  };

  const handleDelete = (userId) => {
    // Logic to delete user
  };

  const handleChangeStatus = (userId) => {
    // Logic to change user status
  };

  const searchPressed = (e) => {
    e.preventDefault();
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-md w-96">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Weather Update
          </h1>
          <form className="mb-6">
            <input
              type="text"
              className="border p-2 w-full rounded-md focus:outline-none"
              placeholder="Enter your city"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md  hover:bg-blue-600 focus:outline-none"
              onClick={searchPressed}
            >
              Search
            </button>
          </form>

          {weather.name && (
            <div className="text-center">
              <p className="text-lg font-bold mb-2">{weather.name}</p>
              <p className="text-5xl font-bold mb-2">{weather.main.temp}°C</p>
              <p className="text-xl">{weather.weather[0].main}</p>
              <p className="text-sm">{weather.weather[0].description}</p>
            </div>
          )}
        </div>
      </div>
      <UserTable
        users={users}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onChangeStatus={handleChangeStatus}
      />
    </div>
  );
};

export default Home;
