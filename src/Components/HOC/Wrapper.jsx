const Wrapper = ({ height, children }) => {
  return (
    <div
      className={`min-h-${height} h-${height} flex flex-col justify-between`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
