import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  wordWrap: "break-word",
}));

export default function MediaCard() {
  const texts = useSelector((state) => state.texts);
  return (
    <Card
      sx={{
        minWidth: { xs: 250, lg: 1000 },
        maxWidth: { xs: 300, lg: 1500 },
        minHeight: { xs: 345, lg: 500 },
        backgroundColor: "gray",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "#edf2f4" }}
        >
          Results
        </Typography>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={2}>
            {texts &&
              texts.map((t, i) => {
                return (
                  <Item key={i}>
                    {t.text} {t.palindrome ? " - It's a Palindrome!" : null}
                  </Item>
                );
              })}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
