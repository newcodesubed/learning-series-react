import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// function createEntry(emojiTerm) {
//   return (
//     <Entry
//       key={emojiTerm.id}
//       emoji={emojiTerm.emoji}
//       name={emojiTerm.name}
//       description={emojiTerm.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map( emojipedia => (
          <Entry
          key={emojipedia.id}
          emoji={emojipedia.emoji}
          name={emojipedia.name}
          description={emojipedia.meaning}
          />
        )
      )}</dl>
    </div>
  );
}

export default App;
