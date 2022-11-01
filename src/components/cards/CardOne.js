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
import image1 from './static1.png'

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
        title="Complete Form I-9"
        subheader="September 25, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        src={image1}
        alt="Complete Form I-9"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">Complete Form I-9</Typography>
        <Typography variant="body2" color="text.secondary">The Form I-9 is
the required form from the U.S. government to validate that all new hires are authorized to work in the United States.. We have employed an
electronic I-9 process for your convenience.
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>
      <Button variant="outlined">Go to task</Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}
