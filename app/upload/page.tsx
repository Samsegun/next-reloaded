"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
    public_id: string;
    width: number;
    height: number;
}

const UploadPage = () => {
    const [imageInfo, setImageInfo] = useState<CloudinaryResult>();

    return (
        <>
            {imageInfo?.public_id && (
                <CldImage
                    src={imageInfo.public_id}
                    width={imageInfo.width}
                    height={imageInfo.height}
                    alt=''
                />
            )}
            <CldUploadWidget
                uploadPreset='v6p8nd7u'
                onUpload={(result, widget) => {
                    if (result.event !== "success") return;
                    console.log(result);

                    const info = result.info as CloudinaryResult;
                    setImageInfo(info);
                }}>
                {({ open }) => (
                    <button className='btn btn-primary' onClick={() => open()}>
                        Upload
                    </button>
                )}
            </CldUploadWidget>
        </>
    );
};

export default UploadPage;
