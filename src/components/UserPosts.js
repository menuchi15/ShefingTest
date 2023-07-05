import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import AddPost from "./AddPost";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DraftsIcon from '@mui/icons-material/Drafts';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export default function UserPosts() {

    const { user } = useParams()
    const [posts, setPosts] = useState([])
    const [showAdd, setShowAdd] = useState(false)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((d) => {
            setPosts(d.data.filter(p => p.userId === Number(user)))
        })
    }, [])

    function addPost() {
        setShowAdd(true)
    }

    return (
        <Grid display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, my: "16px" }}>
                <b>My posts</b>
            </Typography>
            <Button onClick={addPost} variant="text">add post +</Button>
            {showAdd ?
                <AddPost posts={posts} setPosts={setPosts} userId={user} setShowAdd={setShowAdd} showAdd={showAdd} />
                : <></>
            }
            <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
                {posts.map((p, index) =>
                    <ListItem alignItems="flex-start" key={index}>
                        <ListItemAvatar>
                            <Avatar><DraftsIcon /></Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={p.title}
                            secondary={
                                <React.Fragment>
                                    {p.body}
                                </React.Fragment>
                            } />
                    </ListItem>
                )}
            </List>
        </Grid>
    )
}