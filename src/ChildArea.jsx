const style = {
  width: "100%",
  height: "400px",
  backgroundColor: "khaki"
};

export const ChildArea = (props) => {
  const { open } = props;
  console.log("Chaildエリアがレンダリングされた。");
  const data = [...Array(2000).keys()];
  console.log(data);
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div>
          <p style={style}>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
