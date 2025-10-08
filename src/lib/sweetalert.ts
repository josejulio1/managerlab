import Swal, { SweetAlertIcon, SweetAlertOptions, SweetAlertResult } from "sweetalert2";

interface Props {
    title: string
    text?: string
    icon: SweetAlertIcon
    confirmButtonText: string,
    cancelButtonText?: string
}

export default function SweetAlert({ title, text, icon, confirmButtonText, cancelButtonText }: Props): Promise<SweetAlertResult<unknown>> {
    const options: SweetAlertOptions = {
        customClass: {
            confirmButton: '!bg-white !text-[var(--theme-color)]',
            cancelButton: '!bg-[var(--bg-color)] !border-2 !border-white/15'
        },
        title,
        text,
        icon,
        background: '#18191b',
        color: 'white',
        confirmButtonText,
    };

    if (cancelButtonText) {
        options['showCancelButton'] = true;
        options['cancelButtonText'] = cancelButtonText;
    }

    return Swal.fire(options);
}