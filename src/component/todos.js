import React from "react";
import { Card, CardContent, Grid } from "@mui/material";

const Todos = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id}>
          <Card>
            <CardContent>
              {/* Replace the placeholder content with your actual todo item */}
              <span style={{ padding: "50px" }}>{todo.content}</span>
            </CardContent>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todos left</p>
  );

  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
