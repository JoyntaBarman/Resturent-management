const Heading = ({ text, color }) => {
  // const className = {...color}
  // console.log(className);
  return (
    <div className="mx-auto text-center lg:w-2/4 my-10">
      <p className={`mb-2 text-xl text-[rgb(217,153,4)] italic`}>
        ---{text?.subTitle}---
      </p>
      <h3
        className={`p-4  border-y-2 ${
          color ? color : "text-black border-x-gray-300"
        } text-5xl`}
      >
        {text?.title}
      </h3>
    </div>
  );
};

export default Heading;
