function GeneralButton({ children }) {
  return (
    <button
      style={{
        backgroundColor: "#89cff0",
        boxShadow: "4px 4px 0px #4682B4",
        transition: "box-shadow 0.2s ease-in-out", // Added transition property
      }}
      className=" z-10 text-white py-3 px-6 font-semibold text-md"
      type="submit"
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = "8px 8px 0px #4682B4";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = "4px 4px 0px #4682B4";
      }}
    >
      {children}
    </button>
  );
}

export default GeneralButton;
