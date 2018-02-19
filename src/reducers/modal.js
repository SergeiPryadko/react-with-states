const initialState = {
    isOpen: true,
    massage: {}
}

export default function modal(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                ...state,
                action: modal,
            }
        case 'HIDE_MODAL':
            return initialState
        default:
            return state
    }
}

