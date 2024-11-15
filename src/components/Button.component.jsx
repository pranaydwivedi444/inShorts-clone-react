import React from "react";

function Button({ children, ...otherProps}) {
  return (
    <button className="mt-4 inline-block rounded bg-gray-500 px-4 py-2 font-semibold text-white hover:bg-gray-600" {...otherProps}>
        {children}
    </button>
  );
}

export default Button;
