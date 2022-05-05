import "./App.css";
import ColorList from "./ColorList";
import colorData from "./color-data.json";
import { useState } from "react";

function App() {
  // 状態管理
  // 上位層で状態管理をすることで，下位は純粋関数になる
  // setColorsは，ステート更新用の関数
  const [colors, setColors] = useState(colorData);
  const removeColor = (id) => {
    // 当該id以外の配列を作成している
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };
  const rateColor = (id, rating) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  return (
    <ColorList
      colors={colors}
      onRemoveColor={removeColor}
      onRateColor={rateColor}
    />
  );
}

export default App;
