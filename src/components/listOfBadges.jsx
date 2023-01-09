import React from 'react';

function ListOfBadges({ badges }) {
  return (
    <ul className="flex items-center w-full mt-4 gap-3 flex-wrap">
      {badges.map((badge, index) => {
        return (
          <li key={index} data-aos="zoom-in" className="p-2 bg-accent text-secondary-title rounded-sm">
            {badge}
          </li>
        );
      })}
    </ul>
  );
}

export default ListOfBadges;
