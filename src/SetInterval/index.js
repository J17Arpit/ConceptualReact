import React from "react";

const Interval = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setCount(count+1), 1000);
    return () => clearInterval(id);
  }, [count]);

  React.useEffect(() => {
    const id = setInterval(() => setCount(c => c+1), 1000);
    return () => clearInterval(id);
  }, []);

  return <>{count}</>;
};

export default Interval;