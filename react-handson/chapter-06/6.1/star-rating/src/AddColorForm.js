import React from "react";
import { useRef } from "react";
function AddColorForm({ onNewColor = (f) => f }) {
  const txtTitle = useRef();
  const hexcolor = useRef();
  const submit = (e) => {
    e.preventDefault();
    // 宣言型のパターンに反して処理手順の記述に終始している．
    const title = txtTitle.current.value;
    const color = hexcolor.current.value;
    onNewColor(title, color);
    txtTitle.current.value = "";
    hexcolor.current.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexcolor} type="color" required />
      <button>ADD</button>
    </form>
  );
}

export default AddColorForm;
