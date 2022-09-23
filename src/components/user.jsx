import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = ({
  _id,
  name,
  qualities,
  profession,
  rate,
  completedMeetings,
  onDelete,
  bookmark,
  onToggleBookmark,
}) => {
  return (
    <tr>
      <td className="username">{name}</td>
      <td className="qualities">
        {qualities.map((quality) => (
          <Qualitie key={quality._id} {...quality} />
        ))}
      </td>
      <td className="profession">{profession.name}</td>
      <td className="meetings">{completedMeetings}</td>
      <td className="rating">{rate} / 5</td>
      <td>
        <Bookmark status={bookmark} onClick={() => onToggleBookmark(_id)} />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger m-2"
          onClick={() => onDelete(_id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
