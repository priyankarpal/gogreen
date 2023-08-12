import React from "react";

function Hoteldashboard() {
  return (
    <section className="flex justify-center item-center my-5 flex-col">
      {/* for input */}
      <div className="border-dashed border border-black rounded-md w-[80%] p-14 flex  justify-center item-center">
        <input type="file" />
      </div>
      <article className="flex my-5">
        <div className="left space-x-2">
            <input type="text" className=" border-black rounded-md w-[80%] p-2 border-dashed border"/> 
            <button type='button' className="border-black rounded-md p-2 w-14 border">Add</button>
        </div>
        <div className="right"></div>
      </article>
    </section>
  );
}

export default Hoteldashboard;
