import { Box, IconButton, Typography } from "@mui/material";
import TagForm from "../components/TagForm";
import useTask from "../hooks/useTask";
import { useEffect, useState } from "react";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import PageTitle from "../components/PageTitle";



export default function Manage() {
  const { tasks, addTag, tags: allTags, deleteTag } = useTask();
  const [tags, setTags] = useState([]);
  const [fst, setFst] = useState(true);

  useEffect(() => {
    setTags(allTags);
  }, [])

  const handleDeleteTag = (id) => {
    deleteTag(id);
    setTags(tags.filter(tag => {
      return tag.id != id;
    }))
  }

  const handleAddTag = (title, color) => {
    const tag = addTag(title, color);

    if(!tag) return;

    let ts = [...tags];

    if(fst) {
      setTags([...tags]);
      setFst(false)
    } else {
      ts = [tag, ...tags]
      setTags(ts);
    }
    
  }

  return (
    <div>
      <PageTitle title="Manage Quicks" />

      <TagForm handleAddTag={handleAddTag} />

      <Box sx={{ my: 3 }}>
        <Typography sx={{ my: 0.5 }} variant="subtitle1">Quick Start Tasks</Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {tags.length==0 ? <Typography variant="caption" color="gray">No quick start task added</Typography> : ''}
          {tags.map(tag => (
            <Box
              key={tag.id+'-'+Math.round(Math.random()*100)}
              color={tag.color || 'primary'}
              sx={{
                border: 1,
                borderColor: `${tag.color || 'primary'}.main`,
                paddingRight: 1.5,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <IconButton sx={{color: `${tag.color || 'primary'}.main`}} aria-label="Delete Tag" onClick={() => handleDeleteTag(tag.id)}>
                <RemoveCircleOutline />
              </IconButton>
              <Typography variant="body2" sx={{ textTransform: '', fontWeight: 500, color: `${tag.color || 'primary'}.main`}} >
                {tag.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ my: 3 }}>
        <Typography sx={{ my: 0.5 }} variant="subtitle1">Previous Used Tasks</Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {tasks.length==0 ? <Typography variant="caption" color="gray">No previously used tasks</Typography> : ''}
          {tasks.map(task => (
            <Box
              key={task.dayId+'-'+task.id}
              color={task.color || 'primary'}
              sx={{
                border: 1,
                borderColor: `${task.color || 'primary'}.main`,
                // padding: '0.5em 1em',
                paddingRight: 1.5,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <IconButton sx={{color: `${task.color || 'primary'}.main`}} aria-label="Delete Task" onClick={() => handleAddTag(task.title, task.color)}>
                <AddCircleOutline />
              </IconButton>
              <Typography variant="body2" sx={{ textTransform: '', fontWeight: 500, color: `${task.color || 'primary'}.main`}} >
                {task.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>


    </div>
  );
}