import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea  } from '@mui/material';
import logo from "../../../../../assets/logo.png"

export default function Card1() {
  return (
    <Card sx={{ maxWidth: 275, background: "#061E47" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={logo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h1 className='text-head2'>Lizard</h1>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p className='text-head'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
