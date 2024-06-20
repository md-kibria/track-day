import { useContext } from "react";
import task from "../classes/Task.mjs";
import { DataContext } from "../components/Layout";

export default function () {
    const d = useContext(DataContext)

    const tasks = task.getAllTasks();

    const addTask = (title, color) => {
        try {
            const t = task.startTask(title, color)
            // New task add to context
            d.handleData(t);
            d.handleClick('Task added', 'c');
        } catch (err) {
            d.handleClick(err.message, 'w');
        }
    }

    const runningTask = task.runningTask();

    const endTask = (t) => {
        try {
            task.endTask(t)
            d.handleClick('Task closed', 'c');
        } catch (err) {
            d.handleClick(err.message, 'w');
        }
    }

    const addTag = (title, color) => {
        try {
            const newTag = task.addTag(title, color);
            d.handleClick('Tag added', 'c');
            return newTag;
        } catch (err) {
            d.handleClick(err.message, 'w');
        }
    }

    const tags = task.getTags();

    const deleteTag = (id) => {
        try {
            task.deleteTag(id)
            d.handleClick('Tag removed', 'c');
        } catch (err) {
            d.handleClick(err.message, 'w');
        }
    }

    const today = task.getDayInfo(null);

    const days = task.getAllDays();

    const getDay = (id) => {
        return task.getDayInfo(id);
    }

    return {
        tasks,
        addTask,
        runningTask,
        endTask,
        addTag,
        tags,
        deleteTag,
        today,
        days,
        getDay
    }
}