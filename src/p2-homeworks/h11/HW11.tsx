import React, { useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
  const [value, setValue] = useState(0);

  const onChangeRange = (value: number) => setValue(value);

  return (
    <div>
      <hr />
      homeworks 11
      {/*should work (должно работать)*/}
      <div>
        <span>{value}</span>
        <SuperRange
          value={value}
          onChangeRange={onChangeRange}
          // сделать так чтоб value1 изменялось
        />
      </div>
      <div>
        <span>{value}</span>
        <SuperDoubleRange
        // сделать так чтоб value1 и value2 изменялось
        />
      </div>
      <hr />
    </div>
  );
}

export default HW11;
