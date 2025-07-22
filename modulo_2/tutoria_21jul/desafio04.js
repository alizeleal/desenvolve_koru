// Use findIndex para encontrar a posição da primeira tarefa incompleta
// Use some para verificar se existe alguma tarefa de baixa prioridade completa
// Use every para verificar se todas as tarefas de alta prioridade estão incompletas
// Use findIndex para encontrar a posição de uma tarefa com id = 10. Lide com o caso em que a tarefa não existe (dica: findIndex retorna -1 quando não encontra)

const tasks = [
	{ id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
	{ id: 2, title: "Ler emails", completed: true, priority: "média" },
	{ id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
	{ id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
	{ id: 5, title: "Estudar JavaScript", completed: false, priority: "média" },
]

// 1. Encontrar a posição da primeira tarefa incompleta
const firstIncompleteIndex = tasks.findIndex((task) => !task.completed)   
console.log("Índice da primeira tarefa incompleta:", firstIncompleteIndex)

// 2. Verificar se existe alguma tarefa de baixa prioridade completa
const hasLowPriorityComplete = tasks.some(
    (task) => task.priority === "baixa" && task.completed
)   
console.log("Existe alguma tarefa de baixa prioridade completa:", hasLowPriorityComplete)

// 3. Verificar se todas as tarefas de alta prioridade estão incompletas
const allHighPriorityIncomplete = tasks.every(
    (task) => task.priority !== "alta" || !task.completed
)   
console.log("Todas as tarefas de alta prioridade estão incompletas:", allHighPriorityIncomplete)

// 4. Encontrar a posição de uma tarefa com id = 10
const taskWithId10Index = tasks.findIndex((task) => task.id === 10)
console.log("Índice da tarefa com id = 10:", taskWithId10Index)
if (taskWithId10Index === -1) {
    console.log("Tarefa com id = 10 não encontrada.")
}
