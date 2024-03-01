import React from "react";
import { Tile } from '../tile/Tile'; // Adjust the path based on your directory structure
 // Adjust this path to the actual location of Tile.js

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          name={tile.name}
          description={tile.phone ? `${tile.phone}, ${tile.email}` : `${tile.date}, ${tile.time}, ${tile.contact}`}
        />
      ))}
    </div>
  );
};
