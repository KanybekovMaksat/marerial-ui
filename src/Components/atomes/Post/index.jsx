import React from 'react'
import { Card , Avatar ,Typography, CardContent, CardMedia, CardActions, CardHeader, Checkbox } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import {Share,MoreVert,Favorite, FavoriteBorder}  from '@mui/icons-material';
import ProgramImg from '../../../image/programmer.png'
import AvaImg from '../../../image/Avatar.jpg'
const Post = () => {
  return (
    <Card sx={{margin:5}}>
    <CardHeader
      avatar={<Avatar aria-label="recipe" src={AvaImg}/>}
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Kanybekov Maksat "
      subheader="Oktomber 9, 2022"
    />
    <CardMedia
      component="img"
      height='194'
      image={ProgramImg}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to
        cook together with your guests. Add 1 cup of frozen peas along with
        the mussels, if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post