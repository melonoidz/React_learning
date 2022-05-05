import React, { createContext, useState, useContext } from "react";
import colorData from "./color-data.json";
import { v4 } from "uuid";

// Contextの作成
const ColorContext = createContext();
// Contextからデータを取り出すフック
export const useColors = () => useContext(ColorContext);

// カスタムプロバイダー
// ColorContext.Providerを描画するコンポーネント
export default function ColorProvider({ children }) {
  // Providerに入れる各関数の定義

  // jsonから読み込んだcolorDataを渡している
  const [colors, setColors] = useState(colorData);

  // add, rate, removeのみをコンテキストの最小限を設定する
  const addColor = (title, color) =>
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]);

  // 状態管理をProviderに任せている
  const rateColor = (id, rating) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    // valueを入れる
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
