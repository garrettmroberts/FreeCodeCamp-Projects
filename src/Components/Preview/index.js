import React from "react";
import marked from "marked";

function Preview({ state }) {
  const readableState = Object.values(state).join("");
  const viewableHTML = marked(readableState);
  
  return(
    <div>
      <h1 className="text-center pt-5">Preview</h1>
      <div id="preview" dangerouslySetInnerHTML={{ __html: viewableHTML}} />
    </div>
  )
};

export default Preview;