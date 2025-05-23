import React, { memo } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import clsx from "clsx";
import { Button } from "../ui/button";
import { TrashIcon } from "lucide-react";
import { useTodo } from "@/context/todoContext";

const TodoListItem = ({ todoItem,  }) => {
  const { toggleTodoComplete, deleteTodo } = useTodo();
  return (
    <li className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Checkbox
          id={`completed`}
          checked={todoItem.isDone}
          onCheckedChange={(value) => toggleTodoComplete(todoItem, value)}
        />
        <Label htmlFor={`completed`} className="sr-only">
          Simple checkbox
        </Label>
      </div>
      <p
        className={clsx("flex-1", {
          "line-through": todoItem.isDone,
        })}
        // style={{
        //   textDecoration: todoItem.isDone ? "line-through" : "none",
        // }}
      >
        {todoItem.text}
      </p>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">
            <TrashIcon
              className="-ms-1 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteTodo(todoItem)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </li>
  );
};

export default memo(TodoListItem);
