import type { Task } from "@/types/task.type"

export type Project = {
    id: number;
    title: string;
    tasks: Task[];
    flag: string; // USE THE FLAG CODE HERE: BR, US...
    description: string;
    cover: string;
    checked: boolean;
}