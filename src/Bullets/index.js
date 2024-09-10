import { HorizontalRule } from "@mui/icons-material";
import { Grid2, Typography } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Bullets(props) {
  const { children } = props;

  return (
    <Grid2 container sx={{ pl: 2, flexDirection: "column" }}>
      {children &&
        children.map((el, i) => {
          // console.log(el.props.level);
          return (
            <Grid2
              sx={{ ml: el?.props?.level }}
              container
              key={`bullets-${i}-${uuidv4()}`}
            >
              <Grid2 size="10px" sx={{ mr: 1 }}>
                <HorizontalRule sx={{ width: "10px" }} />
              </Grid2>
              <Grid2 size="grow">
                <Typography>{el.props.children}</Typography>
              </Grid2>
            </Grid2>
          );
        })}
    </Grid2>
  );
}
