const style = {
  width: "100%",
  height: "400px",
  backgroundColor: "khaki"
};

export const ChildArea = (props) => {
  const { open } = props;
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
