---
layout: post
title:  "Image Picker View"
date:   2017-02-15
categories: Swift
tags: [imageview, swift]
---

Photo albüm açma fonksiyonu iOS 10 sonrasında bunu kullanmak için **info.plist** dosyasına `Privacy - Photo Library Usage Description`  eklenmesi gerekiyor.

```swift
func openPhotoAlbum() {
        let controller = UIImagePickerController()
        controller.navigationBar.barTintColor = UIColor(red: CGFloat(0.929), green: CGFloat(0.157), blue: CGFloat(0.094), alpha: CGFloat(1))
        controller.navigationBar.isTranslucent = false
        controller.navigationBar.tintColor = UIColor.white
        controller.delegate = self
        controller.sourceType = .photoLibrary
        self.present(controller, animated: true, completion: { _ in })
    }
```

daha sonra seçilen fotoğrafı kontrol edebilmek için seçimin handle edilmesi gerekiyor. Bunun için **didFinishPicking** fonksiyonunu çağırmamız gerekiyor aşağıya Cancel’ıda ekledim.

```swift
func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        dismiss(animated: true)
    }
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [String : Any]) {
       if let possibleImage = info["UIImagePickerControllerOriginalImage"] as? UIImage {
        picker.dismiss(animated: true, completion: {() -> Void in
            self.createFile(with: possibleImage)})
        }
       else {
            return
        }
        print(info.debugDescription)
    }
```

Eğer **completion** oluyorsa **createFile** fonksiyonunu çağırır.

```swift
    func createFile(with image: UIImage) {
        let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
        let documentDir = paths[0]
        let dosyaAdi: String = "\(self.creatFileName()).JPG"
        let filePath = documentDir.appendingPathComponent(dosyaAdi)
        let imageData: Data? = UIImageJPEGRepresentation(image, 1)
        do {
            try? imageData?.write(to: filePath)
        } catch let error as NSError {
            NSLog("Unable to create directory \(error.debugDescription)")
        }
    }
```

bu fonksiyonda eşsiz bir dosya adı oluşturmak için **createFileName** fonksiynununu çağırır

```swift
  func creatFileName() -> String {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyyMddHHmmss"
        return "\(dateFormatter.string(from: Date()))"
    }
```

buraya kadar seçtiğimiz fotoğrafı documents içerisine eklemiş olduk. Ekledğimiz fotoğrafı kullanmak için ise daha önceden yazdığım **FileList** fonksiyonunu çağırmamız gerekiyor. Bu fonksiyon sadece dosya isimlerini documents içerisinden alıp oluşturduğumuz diziye atıyor.

```swift
 func fileList() {
        arrayPhotoList = []
        let documentDir: String? = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true).first
        var directoryContent: [Any]? = try? FileManager.default.contentsOfDirectory(atPath: documentDir!)
        for i in 0..<Int((directoryContent?.count)!) {
            let dosya: String = directoryContent?[i] as! String
            if dosya.hasSuffix(".JPG") {
                print("ic : \(dosya)")
                arrayPhotoList.add((directoryContent?[i] as! String))
            }
        }
        collectionImages.reloadData()
    }
```

oluşturduğumuz diziyi de kullanmak için (burada UICollectionView kullanacağım) UICollectionView’ın **cellForItemAt IndexPath** fonksiyonu içerisinde

```swift
func collectionView(_ collectionView: UICollectionView,
                                     cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
            let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "imageCollectionViewCell",
                                                          for: indexPath) as! imageCollectionViewCell
//---------------- Sadece köşeleri bükmek için --------------- 
            cell.imgVault.layer.cornerRadius = 10
            cell.imgVault.clipsToBounds = true
//------------------------------------------------------------
            let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
            let documentDir = paths[0]
            let filePath: URL = URL(fileURLWithPath: documentDir.appendingPathComponent(arrayPhotoList[indexPath.row] as! String).path)
            print(filePath)
            cell.imgVault.image = UIImage(contentsOfFile: filePath.path)
            // Configure the cell
            return cell
    }
```

şeklinde kullanıyoruz.

#swift

