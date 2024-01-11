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

export enum TaskStatus {
    CREATED = 1,
    APPROVED = 3,
    DECLINED = 4
}