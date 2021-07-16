import { memo } from "react";
const style = {
  width: "100%",
  height: "400px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("Chaildエリアがレンダリングされた。");
  const data = [...Array(2000).keys()];
  console.log(data);
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
