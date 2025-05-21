import React, { memo } from "react";
import { Button } from "../ui/button";

const TodoFilter = ({ chnageFilterType }) => {
  console.log("TodoFilter render");
  return (
    <footer className="w-full flex">
      <Button
        className="flex-1 rounded-none"
        onClick={() => chnageFilterType("all")}
      >
        All
      </Button>
      <Button
        className="flex-1 rounded-none"
        onClick={() => chnageFilterType("pending")}
      >
        Pending
      </Button>
      <Button
        className="flex-1 rounded-none"
        onClick={() => chnageFilterType("completed")}
      >
        Completed
      </Button>
    </footer>
  );
};

export default memo(TodoFilter);
