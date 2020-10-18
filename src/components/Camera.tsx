import { useState, useEffect } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from '@ionic/react';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";

export function usePhotoGallery() {
const [photos, setPhotos] = useState<Photo[]>([]);
const [bird, setBird] = useState("");

    // const postBird = () => {
    //     const requestOptions = {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: {"img_name": "test", "path_to_file": bird , "bucket_name": "picture_store"},
    //     };
    //     fetch("https://audiofunnel.aflr.io/user", requestOptions).then((response) => response.json());
    //   };
    

    
    const { getPhoto } = useCamera();
  
    const takePhoto = async () => {
      const cameraPhoto = await getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      });
      const fileName = new Date().getTime() + '.jpeg';
const newPhotos = [{
  filepath: fileName,
  webviewPath: cameraPhoto.webPath
}, ];
const birdd = cameraPhoto.webPath 
setPhotos(newPhotos)
// setBird(birdd)
// uploadFile(newPhotos[0].filepath)
console.log(typeof(newPhotos[0].webviewPath?.toString))
    };

    // async function uploadFile(a: String) {
    //     const data = new FormData();
    //     data.append("file", {webviewPath: a, name: 'anyname.jpg', type: 'image/jpg'})
    // }
  
    return { photos,
      takePhoto
    };
  }

  export interface Photo {
    filepath: string;
    webviewPath?: string;
  }