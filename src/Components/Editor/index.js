import React from "react";

function Editor({ setState }) {


  return(
    <form>
      <div className="form-group">
        <label>
          Enter your markdown text here.  It will be generated below.
        </label>
        <textarea
          id="editor"
          className="form-control"
          onChange={e => setState(e.target.value)}
          defaultValue="# Markdown Previewer App"
          >
          </textarea>
      </div>
    </form>
  )
};

export default Editor;