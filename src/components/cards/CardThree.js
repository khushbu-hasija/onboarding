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
import image1 from './static3.png'

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
        title="Acknowledge HR Policies"
        subheader="September 25, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        src={image1}
        alt="Acknowledge/ Sign Other HR Policies"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">Acknowledge Other HR Policies</Typography>
        <Typography variant="body2" color="text.secondary">
        Review/enter the information in the following sections and correct if needed. Hit submit
when finished.
Legal Name
Preferred Name
Gender
Date of Birth
Place of Birth
Marital Status
Citizenship Status
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
      <Button variant="outlined">Go to task</Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}
