import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  console.log(users);

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user !== userId));
  };
  const renderPhrase = (number) => {
    number = users.length;
    if (number === 0) {
      return "Никто с тобой не тусанёт";
    } else {
      return `${number} человек с тобой тусанёт сегодня`;
    }
  };

  return users.length === 0 ? (
    <>
      <h1 className="badge bg-danger fs-3 ">{renderPhrase()}</h1>
    </>
  ) : (
    <>
      <h1 className="badge bg-primary fs-3 ">{renderPhrase()}</h1>
      <table className="table">
        <thead className="thead">
          <tr className="propersties">
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="username">{user.name}</td>
              <td className="qualities">
                {user.qualities.map((quality) => {
                  return (
                    <span className={"badge m-2 bg-" + quality.color}>
                      {quality.name}
                    </span>
                  );
                })}
              </td>
              <td className="profession">{user.profession.name}</td>
              <td className="meetings">{user.completedMeetings}</td>
              <td className="rating">{user.rate}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger m-2"
                  onClick={() => handleDelete(user)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
