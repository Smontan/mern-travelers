const Title = ({ children }) => {
  return (
    <div className="w-fit">
      <h2 className="title-underline-border max-w-[400px] ms-5 lg:ms-0 text-4xl font-bold leading-12 wrap-break-word">
        {children}
      </h2>
    </div>
  );
};
export default Title;
