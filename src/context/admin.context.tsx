import { AdminActions, adminReducer, AdminState } from "@/reducers/admin.reducer";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

interface AdminContextProps {
    state: AdminState
    dispatch: Dispatch<AdminActions>
}

const adminState: AdminState = {
    isPanelHidden: false,
    isModalOpen: false
}

export const AdminContext = createContext<AdminContextProps>(null!);

interface Props {
    children: ReactNode
}

export function AdminProvider({ children }: Props) {
    const [state, dispatch] = useReducer(adminReducer, adminState);

    return (
        <AdminContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </AdminContext.Provider>
    );
}