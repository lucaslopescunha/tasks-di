export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}


export interface NewTask {
    title: string;
    description: string;
    status: TaskStatus;
}