import { ToastContainer } from "react-toastify";

export default function Toast() {
    return (
        <ToastContainer
            className="toast-message"
            theme="dark"
            pauseOnHover={false}
            draggable
            position="bottom-right"
        />
    );
}