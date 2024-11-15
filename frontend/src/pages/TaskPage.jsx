import React, {useState} from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormLabel,
    Grid,
    IconButton,
    Slider,
    Typography,
    useTheme
} from '@mui/material';
import {tasks} from '../const/SampleData.jsx'
import SettingsIcon from '@mui/icons-material/Settings';

const TasksPage = () => {
    const theme = useTheme();
    const [tasksPerDay, setTasksPerDay] = useState(5);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleTasksPerDayChange = (event, newValue) => {
        setTasksPerDay(newValue);
    };

    const handleTaskComplete = (taskId) => {
        if (!completedTasks.includes(taskId)) {
            setCompletedTasks([...completedTasks, taskId]);
        }
    };

    const visibleTasks = tasks.slice(0, tasksPerDay);

    return (
        <Box width="100%">
            <Box display="flex" alignItems="center" gap={2} mb={2}>
                <IconButton
                    onClick={() => setSettingsOpen(true)}
                    sx={{
                        backgroundColor: theme.palette.grey[100],
                        '&:hover': {
                            backgroundColor: theme.palette.grey[200]
                        }
                    }}
                >
                    <SettingsIcon/>
                </IconButton>
                <Typography variant="h4" sx={{fontWeight: 'bold', color: '#000'}}>
                    Moje Zadania
                </Typography>
            </Box>

            <Typography color="textSecondary" mb={4}>
                Ukończone zadania: {completedTasks.length} z {tasksPerDay} na dzisiaj
            </Typography>

            <Grid container spacing={3} width="100%">
                {visibleTasks.map((task) => (
                    <Grid item xs={12} md={6} lg={4} key={task.id}>
                        <Card
                            elevation={3}
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: completedTasks.includes(task.id)
                                    ? theme.palette.grey[100]
                                    : theme.palette.background.paper,
                                opacity: completedTasks.includes(task.id) ? 0.7 : 1
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {task.title}
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    Poziom trudności: {task.difficulty}
                                </Typography>
                                <Typography variant="body1">
                                    {task.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{mt: 'auto'}}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    fullWidth
                                    onClick={() => handleTaskComplete(task.id)}
                                    disabled={completedTasks.includes(task.id)}
                                >
                                    {completedTasks.includes(task.id)
                                        ? 'Ukończone'
                                        : 'Rozwiąż Zadanie'}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog
                open={settingsOpen}
                onClose={() => setSettingsOpen(false)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>Ustawienia zadań</DialogTitle>
                <DialogContent>
                    <Box sx={{mt: 2}}>
                        <FormControl fullWidth>
                            <FormLabel>Liczba zadań dziennie</FormLabel>
                            <Slider
                                value={tasksPerDay}
                                onChange={handleTasksPerDayChange}
                                step={1}
                                marks
                                min={1}
                                max={10}
                                valueLabelDisplay="auto"
                            />
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSettingsOpen(false)}>Anuluj</Button>
                    <Button variant="contained" onClick={() => setSettingsOpen(false)}>
                        Zapisz
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default TasksPage;