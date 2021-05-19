import React, { useState } from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";

const arr = ["x", "y", "z"];

function HW7() {
  const [value, setValue] = useState(arr[1]);

  return (
    <div>
      <hr />
      homework 7
      <div>
        <SuperSelect options={arr} value={value} onChangeOption={setValue} />
      </div>
      <div>
        <SuperRadio
          name={"radio"}
          options={arr}
          value={value}
          onChangeOption={setValue}
        />
      </div>
      <hr />
    </div>
  );
}

export default HW7;
