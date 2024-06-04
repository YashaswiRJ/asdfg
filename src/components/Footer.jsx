import React from "react";

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "October",
  "November",
  "December",
];
function Footer() {
  return (
    <div className="footing">
      Copyright <b>©</b> {monthList[month]} {year}{" "}
    </div>
  );
}

export default Footer;
