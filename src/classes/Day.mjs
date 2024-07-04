
import { differenceInMinutes, differenceInSeconds, isToday } from 'date-fns'

const initTags = [{"id":3,"title":"YouTube","color":"error"},{"id":2,"title":"Sleep","color":"primary"},{"id":1,"title":"Study","color":"success"}];

class Day {
    key = 'TASK_DATA';
    tag_key = 'TAG_DATA';
    constructor() {
        
        // const data = localStorage.getItem(this.key);
        /** SOLVED THE ReferenceError: localStorage is not defined */
        const data = typeof window !== "undefined" ? window.localStorage.getItem(this.key) : ''

        if (data) {
            this.data = JSON.parse(data);
        } else {
            this.data = [];
            // localStorage.setItem(this.key, JSON.stringify([]));
            /** SOLVED THE ReferenceError: localStorage is not defined */
            typeof window !== "undefined" ? window.localStorage.setItem(this.key, JSON.stringify([])) : null
        }

        const tags = localStorage.getItem(this.tag_key);

        if (tags) {
            this.tags = JSON.parse(tags);
        } else {
            // this.tags = [];
            this.tags = initTags;
            // localStorage.setItem(this.tag_key, JSON.stringify([]));
            /** SOLVED THE ReferenceError: localStorage is not defined */
            typeof window !== "undefined" ? window.localStorage.setItem(this.tag_key, JSON.stringify([])) : null
        }
    }

    createNewDay(date) {
        let id = 1;

        if (this.data.length >= 1) {
            id = this.data[this.data.length - 1]?.id + 1;
        }

        const data = {
            id,
            date,
            tasks: []
        }

        this.data = [...this.data, data];
        // localStorage.setItem(key, JSON.stringify(this.data));

        return data;
    }

    // make it private
    update(dayId, taskId, taskData, isCreating) {
        const day = this.data.find(d => d.id == dayId);
        if (!day) throw new Error('Task not found');

        let task = taskData;
        if (!isCreating) {
            task = day.tasks.find(t => t.id === taskId);
            if (!task) throw new Error('Task not found');
        }

        Object.keys(taskData).forEach(prope => {
            task[prope] = taskData[prope];
        });

        // End Task
        if (taskData.endAt) {
            task.time = differenceInSeconds(task.endAt, task.startAt);
            task.isRun = false;

            /**
             * End with in this day ✔
             * and Create next day
             * then Start from day start time
             * and Finished with given end date
            */

            /**
             * Check is endAt today ✔ 
             * if today then no problem ✔ 
             * if not then ✔
             * findout the last time of the day [X]
             * end task with the last time
             * findout first time of the next day [X]
             * create a new day
             * add the given task with first time
             * then end the task with endAt time
             */
        }


        if (isCreating) {
            day.tasks.push(task);
        } else {
            day.tasks = day.tasks.map(t => {
                if (t.id === taskId) {
                    return task;
                }
                return t
            });
        }

        this.data = this.data.map(d => {
            if (d.id === day.id) {
                return day;
            }
            return d;
        })

        // Save on localstorage
        // localStorage.setItem(this.key, JSON.stringify(this.data));
        /** SOLVED THE ReferenceError: localStorage is not defined */
        typeof window !== "undefined" ? window.localStorage.setItem(this.key, JSON.stringify(this.data)) : null

        return this.data;
    }

    getTasks(isAll) {
        const tasks = [];

        this.data.forEach(day => {
            day.tasks.forEach(task => {
                tasks.push(task)
            })
        })

        if(isAll) {
            return tasks
        }

        const uniqueByTitle = tasks.filter((item, index, self) =>
            index === self.findIndex((t) => t.title.toLowerCase() === item.title.toLowerCase())
          );

        return uniqueByTitle;
    }

    getAllDays() {
        return this.data;
    }

    getTags() {
        return this.tags;
    }

    addTag(title, color) {
        const tag = {
            id: this.tags.length === 0 ? 1 : this.tags[0].id+1,
            title,
            color,
        };

        this.tags.forEach(tag => {
            if(tag.title.toLowerCase() === title.toLowerCase()) {
                throw new Error('This tag already added');
            }
        })

        this.tags.unshift(tag);

        // Save on localstorage
        // localStorage.setItem(this.tag_key, JSON.stringify(this.tags));
        /** SOLVED THE ReferenceError: localStorage is not defined */
        typeof window !== "undefined" ? window.localStorage.setItem(this.tag_key, JSON.stringify(this.tags)) : null

        return tag;
    }

    editTag(id, data) {
        const tag = this.tags.find(tag => tag.id == id);

        if(!tag) throw new Error('Tag item not found for update');

        const newTag = {...tag, ...data};

        this.tags = this.tags.map(tag => {
            if(tag.id == id) {
                return newTag;
            }
            return tag;
        })

        // Save on localstorage
        localStorage.setItem(this.tag_key, JSON.stringify(this.tags));

        return this.tags;
    }
    
    deleteTag(id) {
        const tag = this.tags.find(tag => tag.id == id);

        if(!tag) throw new Error('Tag item not found for update');

        this.tags = this.tags.filter(tag => {
            return tag.id != id;
        })

        // Save on localstorage
        localStorage.setItem(this.tag_key, JSON.stringify(this.tags));

        return this.tags;
    }
}

export default Day;