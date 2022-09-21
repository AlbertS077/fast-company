import React, { useState } from "react";
// import User from "./user";
import api from "../api";
// import bookmark from "./bookmark";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) {
      return `Человек тусанёт с тобой сегодня`;
    } else if ([2, 3, 4].indexOf(lastOne >= 1)) {
      return `Человека тусанут с тобой сегодня`;
    }
  };

  return (
    <>
      <h1
        key="h1"
        className={"badge fs-3 bg-" + (users.length > 0 ? "primary" : "danger")}
      >
        {users.length > 0
          ? `${users.length} ${renderPhrase(users.length)}`
          : "Никто с тобой не тусанёт"}
      </h1>
      {users.length > 0 && (
        <table className="table">
          <thead className="thead">
            <tr className="propersties">
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="username">{user.name}</td>
                <td className="qualities">
                  {user.qualities.map((quality) => {
                    return (
                      <span
                        key={quality._id}
                        className={"badge m-2 bg-" + quality.color}
                      >
                        {quality.name}
                      </span>
                    );
                  })}
                </td>
                <td className="profession">{user.profession.name}</td>
                <td className="meetings">{user.completedMeetings}</td>
                <td className="rating">{user.rate} / 5</td>
                <td>{/* <button>{bookmark}</button> */}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger m-2"
                    onClick={() => handleDelete(user._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
