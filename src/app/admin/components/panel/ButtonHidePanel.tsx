import { AdminContext } from "@/context/admin.context";
import { useContext } from "react";
import { FaMagic } from "react-icons/fa";

export default function ButtonHidePanel() {
    const { state, dispatch } = useContext(AdminContext);

    const togglePanel = () => {
        dispatch({ type: 'IS-PANEL-HIDDEN', payload: !state.isPanelHidden });
    }

    return (
        <button
            className={`fixed left-6/12 bottom-8 -translate-6/12 bg-white rounded-full p-4 lg:hidden z-50 ${state.isModalOpen ? 'hidden' : ''}`}
            onClick={togglePanel}
        >
            <FaMagic size={20} />
        </button>
    );
}