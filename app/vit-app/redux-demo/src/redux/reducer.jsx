const initialState = {
    todo: [],
    theme: "light"
};

export const todoreducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_TODO":
            return {
                ...state,
                todo: state.todo.map((item) =>
                    item.id === action.payload
                        ? { ...item, status: item.status === "Pending" ? "Completed" : "Pending" }
                        : item
                )
            };

        case "ADD_TODO":
            return {
                ...state,
                todo: [...state.todo, {
                    id: Date.now(),
                    status: "Pending",
                    task: action.payload
                }]
            };

        case "DELETE_TODO":
            const id = action.payload;
            return {
                ...state,
                todo: state.todo.filter((item) => item.id !== id)
            };

        default:
            return state;
    }
}