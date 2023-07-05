import { useState } from "react"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function AddPost({ posts, setPosts, userId, setShowAdd, showAdd }) {

    const [currentTitle, setCurrentTitle] = useState('')
    const [CurrentBody, setCurrentBody] = useState('')
    const [error, setError] = useState(false)

    function savePost() {
        {
            (!currentTitle && !CurrentBody) ?
                setError(true) : (
                    (() => {
                        setPosts([...posts, { userId: Number(userId), title: currentTitle, body: CurrentBody }]);
                        setShowAdd(false);
                        setError(false)
                    }
                    )()
                )
        }
    }

    return (
        <Dialog open={showAdd} onClose={() => setShowAdd(false)} disableEscapeKeyDown={showAdd}>
            <DialogTitle>Add post</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="title"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setCurrentTitle(e.target.value)}
                />
                {error ? <DialogContentText variant="h1" sx={{ color: "red", fontSize: "small", width: "25vw" }}>the post title is empty</DialogContentText> : <></>}
                <TextField
                    autoFocus
                    margin="dense"
                    label="body"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setCurrentBody(e.target.value)}
                />
                {error ? <DialogContentText sx={{ color: "red", fontSize: "small", width: "25vw" }}>the post body is empty</DialogContentText> : <></>}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => { setShowAdd(false); setError(false) }}>Cancel</Button>
                <Button endIcon={<SendIcon />} onClick={savePost}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}