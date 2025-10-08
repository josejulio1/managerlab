export interface AdminState {
    isPanelHidden: boolean
    isModalOpen: boolean
}

export type AdminActions =
    { type: 'IS-PANEL-HIDDEN', payload: boolean } |
    { type: 'IS-MODAL-OPEN', payload: boolean }

export const adminReducer = (
    state: AdminState,
    action: AdminActions
): AdminState => {
    const { type } = action;
    switch (type) {
        case 'IS-PANEL-HIDDEN':
            return { ...state, isPanelHidden: action.payload }
        case 'IS-MODAL-OPEN':
            return { ...state, isModalOpen: action.payload }
        default:
            return state;
    }
}