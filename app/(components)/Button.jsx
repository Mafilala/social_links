const CustomButton = ({ name }) => {
  return (
    <div className="w-[80%]">
      <button className="w-full bg-Grey text-White p-2 rounded-lg h-12 ">
        {name}
      </button>
    </div>
  );
};

export default CustomButton;
