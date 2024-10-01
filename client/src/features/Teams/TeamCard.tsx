import {
  Card,
  CardActionArea,
  Box,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from "@mui/material";

export type TeamCardProps = {
  imageUrl: string;
  id: number;
  name: string;
};

export const TeamCard = ({ imageUrl, name }: TeamCardProps) => {
  return (
    <>
      <Card sx={{ width: 255, height: 160, borderRadius: "0.5rem" }}>
        <CardActionArea
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            sx={{ width: 78, height: 78, padding: "0.5rem 0px 0px 0.5rem" }}
            component="img"
            image={imageUrl}
            alt="club logo"
          />
          <CardContent
            style={{ padding: 0 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 0,
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "PremierSans-Heavy",
                textAlign: "left",
                padding: 0,
                paddingLeft: "0.5rem",
                fontWeight: "bold",
              }}
            >
              {name}
            </Typography>
            <Box
              sx={{
                background: "linear-gradient(284.38deg, #be000a, #ff0203)",
                height: "0.4rem",
                marginTop: "auto",
                width: "100%",
              }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export const TeamCardSkeleton = () => {
  return <Skeleton variant="rounded" width={210} height={60} />;
};
