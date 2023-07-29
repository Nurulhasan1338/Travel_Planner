import react ,{useState} from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

export default function InteractiveCard() {
    const [fav,setFav] = useState(false);

    const handleToggle = ()=>{
        setFav(true);
    }
    
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 700,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 120 }}>
        <img
          src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
          srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent>
        <div className="row">
          <div className="col-10">
            <Typography
              variant="subtitle2"
              level="h6"
              fontSize={14}
              color="primary"
              gutterBottom
            >
              Lorem ipsum dolor sit adipisicing elit. Quos blanditiis tenetur
            </Typography>
          </div>
          <div className="col-1">
            <Button variant={`${fav?"solid":"soft"}`} onClick={()=>handleToggle}><i className="fa-regular fa-heart fa-lg"></i></Button>
          </div>
        </div>
        <Typography level="h3" id="card-description" mb={0.5} mt={-1.6}>
          Yosemite Park
        </Typography>

        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#"
            sx={{ color: "text.tertiary" }}
          >
            California, USA
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: "none" }}
        >
          Cool weather all day long
        </Chip>
      </CardContent>
    </Card>
  );
}
