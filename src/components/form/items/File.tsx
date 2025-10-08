import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import FormElement from "../FormElement";

interface Props {
    label: string
    name: string
    initialUrl?: string
}

export default function File({ label, name, initialUrl }: Props) {
    const { register, watch, setValue } = useFormContext();
    const file = watch(name) as File | undefined;

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setValue(name, acceptedFiles[0], { shouldValidate: true });
    }, [setValue, name]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        maxFiles: 1,
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': []
        }
    });

    return (
        <FormElement
            label={label}
            name={name}
            render={() => (

                <article
                    {...getRootProps()}
                    className={`w-full border p-8 flex justify-center items-center rounded-xl transition duration-[.4s] cursor-pointer hover:border-white active:border-white ${isDragActive ? 'border-white' : 'border-white/20'}`}
                >
                    <input
                        {...register(name)}
                        {...getInputProps()}
                        id={name}
                    />
                    {
                        initialUrl || file
                            ? (
                                <Image
                                    src={initialUrl && !file ? initialUrl : URL.createObjectURL(file!)}
                                    alt="Uploaded image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                            )
                            : (
                                <section className="flex flex-col items-center gap-2">
                                    <FaUpload
                                        className="text-white"
                                        size={40}
                                    />
                                    <p className="text-[var(--color-surface)] text-sm">Drop here (Max 5MB)</p>
                                </section>
                            )
                    }
                </article>
            )}
        />
    );
}