import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController, ActionSheetController } from 'ionic-angular';


@Injectable()
export class CameraProvider {

  constructor(public http: HttpClient,
    private camera: Camera,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController) {
  }

  image: string = '';

  choose(){
    return new Promise((res) =>{
      const selectImage = this.actionSheetCtrl.create({
        title: 'Agregar imagen',
        buttons: [
          {
            icon: 'camera',
            text: 'Camara',
            handler: ()=>{
              console.log('Tomar una foto');
              this.cameraOptions(1).then((data) => res(data));
            }
          },
          {
            icon: 'image',
            text: 'Galeria',
            handler: ()=>{
              console.log('Seleccionar imagen');
              this.cameraOptions(0).then((data) => res(data));         
            }
          }
        ]
      });
      selectImage.present();
    });
  }

  cameraOptions(sourceType: number) {
    console.log('camera');
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourceType,
      correctOrientation: true,
      saveToPhotoAlbum: true,
    } 
    return new Promise((res, rej) =>{
        this.camera.getPicture(options).then((imageData) =>{   
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.image = base64Image;
        console.log('photo'); 
        res(this.image)
        }).catch(error =>{
            console.log(error);
            //alert(this.getBase64());
        });  
    })  
  }

  getBase64(){
    return this.image;
  }
}