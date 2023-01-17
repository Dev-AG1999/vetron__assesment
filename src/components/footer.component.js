import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footer() {
  const [value, setValue] = React.useState("facebook");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#F5F2EF",
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Facebook"
        value="facebook"
        icon={<FacebookTwoToneIcon />}
      />
      <BottomNavigationAction
        label="Instagram"
        value="instagram"
        icon={<InstagramIcon />}
      />
      <BottomNavigationAction
        label="YouTube"
        value="youtube"
        icon={<YouTubeIcon />}
      />
      <BottomNavigationAction
        label="Twitter"
        value="twitter"
        icon={<TwitterIcon />}
      />
    </BottomNavigation>
  );
}
