import React,{useState} from 'react'
import { Avatar, Box, Button, ButtonGroup, Fab,Modal, styled, TextField, Tooltip, Typography } from '@mui/material';
import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material';
import AvaImg from '../../../image/Avatar.jpg'
import { Stack } from '@mui/system';

const StyledModal = styled(Modal)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
});

const UserBox = styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    marginBottom: '20px'
});

const AddP = () => {

    const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => {
          setOpen(true);
        }}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >

          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>

      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src={AvaImg} sx={{ width: 30, height: 30 }} />
            <Typography variant="h6" fontWeight={500}>
              Maksat Kanybekov{" "}
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={1}
            placeholder="What's your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRange /></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default AddP