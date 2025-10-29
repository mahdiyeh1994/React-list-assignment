# Todo List System

A simple Todo List application built with **Vite**, **Tailwind CSS**, and **TypeScript**.

## Tech Stack

- **Vite**: Build tool and development server  
- **Tailwind CSS**: Utility-first CSS framework for styling  
- **TypeScript**: Static typing for React components  
- **React**: Frontend UI library  
- **Yup** & **React Hook Form**: Form validation and handling

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   
# Running the Project
```bash
npm run dev
```
The app will be available at http://localhost:5173 (or whatever port Vite chooses).

# Project Structure
```
├─ public/
│   └─ index.html
├─ src/
│   ├─ components/
│   ├─ types/
│   ├─ App.tsx
│   ├─ index.tsx
│   └─ index.css
├─ tailwind.config.js
├─ tsconfig.json
├─ vite.config.ts
└─ README.md
```
**src/components/:** React components (e.g., TodoList, TodoFormModal, Modal).

**src/types/:** TypeScript type definitions (e.g., Todo interface).

**tailwind.config.js:** Tailwind CSS configuration.

**vite.config.ts:** Vite configuration.

# Usage

1.  Open the “Todo List System” in your browser.
2.  Click “Add New” to open the modal form.
3.  Fill in all required fields and click “Create Todo”.
4.  The new Todo will appear in the list immediately.
5.  To edit, click “Edit” on a row; modify fields and click “Save Changes”.
6.  To delete, click “Delete” on a row and confirm.


