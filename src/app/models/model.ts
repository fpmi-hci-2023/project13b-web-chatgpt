export interface Task
{
    id: number, 
    name: string,
    description: string,
    initiator: string,
    coordinators: string[]
    next: number,
    status: TaskStatus 
}

export interface TaskModel
{
    name: string,
    description: string,
    coordinators: string[]
}

export enum TaskStatus {
    CREATED = 1,
    APPROVED = 3,
    DECLINED = 4
}

export interface User {
    email: string,
    username: string,
    lastLogin: string
}