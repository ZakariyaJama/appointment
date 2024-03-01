import React from "react";
import { TileList as ImportedTileList } from '../../components/tileList/TileList';


const TileList = ({ tiles }) => {
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

export default TileList;
