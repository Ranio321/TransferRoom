import { Typography } from "@mui/material";

export type SectionHeadingProps = {
  header: string;
};

export const SectionHeading = ({ header }: SectionHeadingProps) => {
  return (
    <Typography
      variant="h3"
      sx={{
        mb: 2,
        color: "#23085A",
        textAlign: "left",
        fontFamily: "sans",
        fontSize: "2.5rem",
        fontWeight: "700",
      }}
    >
      {header}
    </Typography>
  );
};
