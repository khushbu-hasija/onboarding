import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import image1 from './route.png'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {

  const handleExpandClick = () => {
    
  };

  return (
    <Card sx={{ maxWidth: 345 }}
      onClick={handleExpandClick}>
      <CardActionArea>
        <CardHeader
        title="Check your everyday route"
        subheader="September 25, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        src={image1}/>
      <CardContent>
        <Typography variant="h6" color="text.secondary">Check your everyday route</Typography>
        <Typography variant="body2" color="text.secondary">
          Find out the route to the office, add in stops and check the various modes of travel available!
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
      <Button variant="outlined">Navigate</Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}
