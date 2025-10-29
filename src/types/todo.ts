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
export interface TodoFormData{
  title: string;
  subtitle: string;
}
export interface TodoFormModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (customer: Todo, index?: number) => void;
  todos: Todo[];
  initialItem?: Todo;
  editingIndex?: number;
}
