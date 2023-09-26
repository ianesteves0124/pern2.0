import React from 'react';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
function App() {
  //COMPONENTS useState() AND useProps();
  return (
    <div className=''>
      <FirstPage />
      <SecondPage />
    </div>
  );
}

export default App;

//ARROW FUNCTION
/*const name = [
    {
      name: "Dolly",
      type: "cat",
      description: "Dolly is 1 year old cat",
      skills: ["roll over", "fetch"],
      image:
      "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",

    },
    {
      name: "Jolly",
      type: "cat",
      description: "Jolly is very jolly",
      skills: ["play-dead", "meow"],
      image:
        "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
    },
  ];
  return (
    <div className="text-center">
      <h1 className="">CAT LOVERS</h1>
      <ul className = "flex justify-center items-center">
        {name.map((pets, index) => (
          <li className=" border border-solid rounded m-2 p-2" key={index}>
            <h1>{pets.name}</h1>
            <p>{pets.description}</p>
            <img
              src={pets.image}
              alt={pets.name}
              width="200px"
              height="200px  "
            />
            <ul className="flex">
              {
                pets.skills.map((skill,index) => (
                  <li className = " justify-center p-1" key = {skill}>{skill}</li>
                ))
              }
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );*/
