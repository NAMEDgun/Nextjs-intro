import React, { useRef } from "react";
import styles from "@/app/styles/register.module.css"

const ImageUploader = ({ images, setImages, maxImageCount }) => {
    const fileInputRef = useRef();
    const editingIndexRef = useRef();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");

                    const maxWidth = 800;
                    const maxHeight = 600;

                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > maxWidth) {
                            height *= maxWidth / width;
                            width = maxWidth;
                        }
                    } else {
                        if (height > maxHeight) {
                            width *= maxHeight / height;
                            height = maxHeight;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;

                    ctx.drawImage(img, 0, 0, width, height);

                    const dataUrl = canvas.toDataURL("image/jpeg");

                    const index = editingIndexRef.current;
                    const newImages = [...images];
                    if (typeof index === "number") {
                        newImages[index] = dataUrl;
                    } else {
                        newImages.push(dataUrl);
                    }
                    setImages(newImages);
                    editingIndexRef.current = undefined;
                };
            };
            fileReader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleEditImage = (index) => {
        editingIndexRef.current = index;
        fileInputRef.current.click();
    };

    return (
        <div>
            <div className={styles.upload}>
                <div className={`${styles.middletitle} ${styles.mt1}`}>관련 사진 업로드</div>
                <div className={`${styles.smallblue} ${styles.mt1}`}>{images.length}/{maxImageCount}</div>
            </div>
            <div className={`${styles.middletitle} ${styles.mt1}`} style={{fontSize: '0.8vw'}}>대표사진</div>
            <div className={styles.flexableimg}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img 
                            src={image}
                            alt={`Uploaded ${index}`} 
                            className={styles.uploadbutton}
                            style={{border: 'none'}}/>
                        <div>
                            <button 
                                onClick={() => handleRemoveImage(index)}
                                className={styles.deleteimg}>
                                제거
                            </button>
                            <button 
                                onClick={() => handleEditImage(index)}
                                className={styles.modifyimg}>
                                수정
                            </button>
                        </div>
                    </div>
                ))}
                {images.length < maxImageCount && (
                    <div className={styles.upload}>
                        <button className={styles.uploadbutton}
                            onClick={() => {
                                editingIndexRef.current = undefined; // 새 이미지 추가 모드로 설정
                                fileInputRef.current.click();
                            }}
                        >
                            <img src="../../img/ico_upload.png"/>
                            사진 올리기
                        </button>
                        <input
                            ref={fileInputRef}
                            type="file"
                            style={{ display: "none" }}
                            onChange={(e) => handleImageChange(e)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageUploader;
