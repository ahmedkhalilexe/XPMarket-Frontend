import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "@/lib/firebase";

const uploadProductImages = async (images: FileList) => {
    const urls: string[] = [];
    try {
        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            const storageRef = ref(storage, `products/${image.name + Date.now()}`);
            const uploadTask = await uploadBytes(storageRef, image);
            const url = await getDownloadURL(uploadTask.ref);
            urls.push(url);
        }
        return urls;
    } catch (e) {
        console.error(e);
        return []
    }
}
export default uploadProductImages;