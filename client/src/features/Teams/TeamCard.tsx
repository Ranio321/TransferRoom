import {
  Card,
  CardActionArea,
  Box,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from "@mui/material";
import { TeamCardBackground } from "./TeamCardBackground";
import { useNavigate } from "react-router-dom";

export type TeamCardProps = {
  imageUrl: string;
  id: number;
  name: string;
  nickname?: string;
};

export const TeamCard = ({ imageUrl, name, id, nickname }: TeamCardProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        sx={{
          width: 255,
          height: 160,
          borderRadius: "0.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CardActionArea
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            zIndex: 1,
          }}
          onClick={() => navigate(`/team/${id}`)}
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
              variant="h6"
              sx={{
                fontFamily: "PremierSans-Heavy",
                textAlign: "left",
                padding: 0,
                paddingLeft: "0.5rem",
                fontWeight: "bold",
              }}
            >
              {name} {nickname && `- ${nickname}`}
            </Typography>
            <Box
              sx={{
                background: "linear-gradient(284.38deg, #be000a, #ff0203)",
                height: "0.2rem",
                marginTop: "auto",
                width: "100%",
              }}
            />
          </CardContent>
          <TeamCardBackground />
        </CardActionArea>
      </Card>
    </>
  );
};

export const TeamCardSkeleton = () => {
  return <Skeleton variant="rounded" width={255} height={160} />;
};
