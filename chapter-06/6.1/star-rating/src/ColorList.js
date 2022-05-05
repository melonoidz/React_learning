import React from "react";
import Color from "./Color";

export default function ColorList({
  colors = [],
  // 空の関数
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) {
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          // ここに関数を入れることで上から下に伝達している
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
}
