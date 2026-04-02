import { useState } from "react";

function FilterBox({categoryName, values}) {
    const [dropdown,setDropdown] = useState(true)
  return (
    <>
      <h3>
        {categoryName} <button onClick={() => setDropdown(!dropdown)}>🔻</button>
      </h3>
     {dropdown && (<div className="filter-box">
        {values.map((v) => (
          <label>
            {v}
            <input type="checkbox" name={v} />
          </label>
        ))}
      </div> )}
    </>
  );
}

export default FilterBox