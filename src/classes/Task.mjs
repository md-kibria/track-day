import { isToday } from 'date-fns'
import Day from './Day.mjs'


class Task extends Day {
    constructor() {
        super()
    }

    startTask(title, color, sa) {
        const runningTask = this.runningTask();
        if(runningTask.isRun) {
            this.endTask(runningTask);
        }


        const startAt = sa || new Date();

        let day = this.data[this.data.length - 1];

        if (!day || !isToday(day.date)) {
            day = this.createNewDay(startAt);
        }

        const task = {
            id: day.tasks.length + 1,
            dayId: day.id,
            title,
            color: color || null,
            startAt,
            endAt: null,
            time: null, // in minutes
        }
    
        this.update(day.id, null, task, true);

        task.isRun = true;
        return task
    }

    endTask(task) {
        this.update(task.dayId, task.id, {endAt: new Date()});
    }
    
    updateTask(dayId, taskId, data) {
        this.update(dayId, taskId, data);
        
    }

    getAllTasks() {
        return this.getTasks();
    }

    runningTask() {
        const tasks = this.getTasks(true);
        let runningTask = {};
        tasks.forEach(task => {
            if(!task.endAt) {
                runningTask = task;
            }
        })

        if(tasks.length == 0 || Object.keys(runningTask).length == 0) {
            runningTask.isRun = false;
        } else {
            runningTask.isRun = true;
        }

        return runningTask;
    }

    getDayInfo(id) {
        if(!id) {
            let day = this.data[this.data.length - 1];

            if (!day || !isToday(day.date)) {
                day = this.createNewDay(new Date());
            }

            const rt = this.runningTask();

            if(rt.isRun) {
                
                if(isToday(new Date(rt.startAt))) {
                    return day;
                }

                // End task
                const endAt = new Date(rt.startAt);
                endAt.setHours(23, 59, 59, 999);
                this.update(rt.dayId, rt.id, {endAt});

                // Start task
                const startAt = new Date();
                startAt.setHours(0, 0, 0, 0);
                this.startTask(rt.title, rt.color, startAt)
                
                this.getDayInfo();
            } else {
                return day;
            }
            
        } else {
            let day = this.data.find(d => d.id == id);
            return day;
        }
    }
}

const task = new Task();
// task.startTask('Programming');
// task.endTask(1, 1, new Date())
// task.updateTask(1, 1, {color: 'blue'})
// task.getAllTasks()

export default task;