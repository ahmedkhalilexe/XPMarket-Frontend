import {ChangeEvent, useState} from "react";

const useOnImagePreview = () => {
    const [imagesPreview, setImagesPreview] = useState<string[]>([]);
    return {
        imagesPreview, onFileChange: (e: ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            if (files && imagesPreview.length < 5) {
                for (let i = 0; i < files.length; i++) {
                    const imageUrl = URL.createObjectURL(files[i]);
                    setImagesPreview((prev) => [...prev, imageUrl]);
                }
            }
        }
    };
}

export default useOnImagePreview;