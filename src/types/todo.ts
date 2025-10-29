export interface Todo {
  title: string;
  subtitle: string;
  createdDate: string;
}
export interface TodoListProps {
  todos: Todo[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}
