import React from "react";
import "./style.css";

function Editor({ func }) {

  return(
    <form>
      <div className="form-group">
        <label>
          Enter your markdown text here.  It will be generated below.
        </label>
        <textarea
          id="editor"
          className="form-control"
          onChange={event => func(event)}
          defaultValue={`
# Simple Markdown Previewer

## Here's how it works:

You can add links via your regular markdown syntax: [Google](http://www.google.com)

This app supports *italicized* and **bold** text.

Here is an example \`Inline code block\`


\`\`\`
// this is multi-line code:

function addNums(foo, bar) {
  const foobar = foo + bar;
  return fobar;
}
\`\`\`

Lists are also supported.

- Ordered lists are accepted,

- as are unordered.

> Blockquote functionality is included as well.

An otter for your thoughts?

![otter image](https://upload.wikimedia.org/wikipedia/commons/1/15/Sea_otter_cropped.jpg)"
          `}
          >
          </textarea>
      </div>
    </form>
  )
};

export default Editor;