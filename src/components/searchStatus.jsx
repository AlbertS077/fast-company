import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if ((number > 4 && number < 15) || number === 1) {
            return "Человек тусанёт с тобой сегодня";
        } else if ([2, 3, 4].indexOf(lastOne >= 1)) {
            return "Человека тусанут с тобой сегодня";
        }
    };
    return (
        <h1 className={"badge fs-3 bg-" + (length > 0 ? "primary" : "danger")}>
            {length > 0
                ? `${length} ${renderPhrase(length)}`
                : "Никто с тобой не тусанёт"}
        </h1>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number,
    number: PropTypes.number
};
export default SearchStatus;
