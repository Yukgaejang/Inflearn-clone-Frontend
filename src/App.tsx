import React from "react";
import Post from "./pages/Post";

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
  <div>
    <Post/>
  </div>
);
}
export default App;

