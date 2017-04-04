---
layout: postwithimage
title:  "Code Samples"
date:   2017-02-16
categories: Objective-C
fpath: "http://allthingsiosandmac.ca/iPhone%206%20with%20MBPro%201800x1200.jpg"
---

## List of Content
[Horizontal Scroll View](#horizontalscroll)  
[Pull to Refresh](#pullToRefresh)  
[Share Instagram](#shareInstagram)   
[Initilazier](#Initilazier)   
[Action Sheet With Photo Camera & Photo Gallery](#actionSheet)  
[Create a File](#createaFile)  
[Light Status Bar](#LightStatusBar)  
[Dynamic Cell Height](#DynamicCellHeight)  
[WSDL2Code](#WSDL2Code)  





<a name="horizontalscroll"/>
<h2>  </h2>

---
<br/>

## Horizontal Scroll View 
```objectivec
-(void)RenkScrollOlustur{
    NSInteger viewcount= [arrayKategoriID count];
    for (int i = 0; i < viewcount; i++)
    {
            UIImageView *renk =[[UIImageView alloc] initWithFrame:CGRectMake(i * 53, 0, 44, 44)];
            [renk sd_setImageWithURL:[NSURL URLWithString:[arrayKategoriResim objectAtIndex:i]]];
            renk.tag = i;
            renk.userInteractionEnabled = YES;
            tap.numberOfTapsRequired = 1;
            [renk addGestureRecognizer:tap];
            [_scrollRenkler addSubview:renk];

        for (int i = 0; i < viewcount; i++)
        {
            NSString *item = [arrayKategoriResim objectAtIndex:i];
            
            if (item.length > 0)
            {
                UIView *dot = [[UIImageView alloc] initWithFrame:CGRectMake((i + 1) * 44 + (9 * i) + 2, 5, 5, 34)];
                [_scrollRenkler addSubview:dot];
            }
        }
    }
    _scrollRenkler.showsHorizontalScrollIndicator = NO;
    _scrollRenkler.contentSize = CGSizeMake(44 * viewcount, 44);
}

- (void)viewTapped:(UITapGestureRecognizer*)tap{
    UIView *view = (UIView *)tap.view;
    int tiklananIndex = view.tag;
    int deneme = [[arrayKategoriID objectAtIndex:tiklananIndex] intValue];
    [self VeriCek:deneme];
    /*
    MarkaDetay* infoController = [self.storyboard instantiateViewControllerWithIdentifier:@"MarkaDetayID"];
    infoController.selectedID = img.tag;
    
    infoController.modalTransitionStyle = UIModalTransitionStyleCrossDissolve;
    [self presentViewController:infoController animated:YES completion:nil];
    */
}
```


#ScrollView #Objective-C

<a name="pullToRefresh"/> <br/>

---
<br/>

## Pull To Refresh

Load içerisine

```objectivec
refreshControl = [[UIRefreshControl alloc] init];
    refreshControl.backgroundColor = [UIColor whiteColor];
    refreshControl.tintColor = [UIColor blackColor];
    [_madalyalarTable addSubview:refreshControl];
    [refreshControl addTarget:self
                            action:@selector(VeriCek)
                  forControlEvents:UIControlEventValueChanged];
```

Veri Çek fonksiyonu :
```objectivec
-(void)VeriCek
{
 [_madalyalarTable reloadData];
    if (refreshControl) {
        NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
        [formatter setDateFormat:@"MMM d, h:mm a"];
        NSString *title = [NSString stringWithFormat:@"Son Güncelleme: %@", [formatter stringFromDate:[NSDate date]]];
        NSDictionary *attrsDictionary = [NSDictionary dictionaryWithObject:[UIColor blackColor]                                                           forKey:NSForegroundColorAttributeName];
        NSAttributedString *attributedTitle = [[NSAttributedString alloc] initWithString:title attributes:attrsDictionary];
        refreshControl.attributedTitle = attributedTitle;
        [refreshControl endRefreshing];
    }
}
```

Veri yoksa uyarı:

```objectivec
- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView
{
    // Return the number of sections.
    if ([array count]) {
        
        self.tableView.separatorStyle = UITableViewCellSeparatorStyleSingleLine;
        return 1;
    } else {
        // Display a message when the table is empty
        UILabel *messageLabel = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, self.view.bounds.size.width, self.view.bounds.size.height)];
        messageLabel.text = @"No data is currently available. Please pull down to refresh.";
        messageLabel.textColor = [UIColor blackColor];
        messageLabel.numberOfLines = 0;
        messageLabel.textAlignment = NSTextAlignmentCenter;
        messageLabel.font = [UIFont fontWithName:@"Palatino-Italic" size:20];
        [messageLabel sizeToFit];
        self.tableView.backgroundView = messageLabel;
        self.tableView.separatorStyle = UITableViewCellSeparatorStyleNone;
    }
    return 0;
}
```
<a name="shareInstagram"/> <br/>

---
<br/>
## Share Instagram

```  pod ‘AQSInstagramActivity’ ```   

```objectivec
- (IBAction)btnPaylas_Click:(id)sender {
    UIActivity *instagramActivity = [[AQSInstagramActivity alloc] init];
    UIImage *imageToShare = _MainImage.image;
    NSArray *objectsToShare = @[imageToShare];
    
    UIActivityViewController *activityVC = [[UIActivityViewController alloc] initWithActivityItems:objectsToShare applicationActivities:@[instagramActivity]];
    
    NSArray *excludeActivities = @[UIActivityTypeAirDrop,
                                   UIActivityTypePrint,
                                   UIActivityTypeAssignToContact,
                                   UIActivityTypeAddToReadingList,
                                   UIActivityTypePostToFlickr,
                                   UIActivityTypePostToVimeo];
    activityVC.excludedActivityTypes = excludeActivities;
    
    [self presentViewController:activityVC animated:YES completion:nil];
}
```

<a name="Initilazier"/> 

---
<br/>
## Initilazier

```objectivec
-(id)initWithData:(NSString *)menuItem fPath:(NSString *)fotoString
{
    self = [super init];
    if (self) {
        self.MenuItem = menuItem;
        self.FotoString = fotoString;
    }
    return self;
}
```

<a name="actionSheet"/>

---
<br/>
## Action Sheet With Photo Camera & Photo Gallery

First create Action Sheet
```objectivec
-(void)createActionSheet{
    UIActionSheet *popup = [[UIActionSheet alloc] initWithTitle:nil delegate:self cancelButtonTitle:nil destructiveButtonTitle:nil otherButtonTitles:@"Fotoğraf Galerisi", nil];
    
    if ([UIImagePickerController isSourceTypeAvailable:UIImagePickerControllerSourceTypeCamera])
        [popup addButtonWithTitle:@"Fotoğraf Kamerası"];
    
    [popup addButtonWithTitle:@"Vazgeç"];
    popup.cancelButtonIndex = popup.numberOfButtons - 1;
    [popup showInView:[UIApplication sharedApplication].keyWindow];
}
```
Then handle the button clicks
```objectivec
- (void)actionSheet:(UIActionSheet *)popup clickedButtonAtIndex:(NSInteger)buttonIndex
{
    if (buttonIndex == 0)
        [self openPhotoAlbum];
    else if (popup.numberOfButtons == 3 && buttonIndex == 1)
        [self showCamera];
}
```

Photo camera and photo album functions are below

```objectivec
- (void) showCamera
{
    UIImagePickerController *controller = [[UIImagePickerController alloc] init];
    controller.delegate = self;
    controller.sourceType = UIImagePickerControllerSourceTypeCamera;
    [self presentViewController:controller animated:YES completion:nil];
}


- (void) openPhotoAlbum
{
    UIImagePickerController *controller = [[UIImagePickerController alloc] init];
    controller.navigationBar.tintColor= [UIColor whiteColor];
    controller.navigationBar.titleTextAttributes =  [NSDictionary dictionaryWithObjectsAndKeys:
                                                   [UIColor whiteColor], NSForegroundColorAttributeName,nil];
    controller.delegate = self;
    controller.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
    
    [self presentViewController:controller animated:YES completion:nil];
}
- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary *)info
{
    UIImage *image = info[UIImagePickerControllerOriginalImage];
    self.mImage = image;
    
    
    [picker dismissViewControllerAnimated:YES completion:^{
        //Completion Handler
    }];
}
```

<a name="createaFile"/>

---
<br/>
## Create a File

Create unique file name

```objectivec
-(NSString *)CreatFileName
{
    NSDateFormatter *dateFormatter=[[NSDateFormatter alloc] init];
    [dateFormatter setDateFormat:@"yyyyMddHHmmss"];
    return [dateFormatter stringFromDate:[NSDate date]];
}
```

Create file with image

```objectivec
-(void)CreateFileWithImage:(UIImage *)image
{
    NSString *documentDir = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) firstObject];
    NSString *dosyaAdi = [NSString stringWithFormat:@"%@.png", [self CreatFileName]];
    NSString *filePath = [documentDir stringByAppendingPathComponent:dosyaAdi];
    NSData *imageData = UIImagePNGRepresentation(image);
    [[NSFileManager defaultManager] createFileAtPath:filePath contents:imageData attributes:nil];
}
```
<a name="LightStatusBar"/> 

---
<br/>
## Light Status Bar

```objectivec
-(UIStatusBarStyle)preferredStatusBarStyle{
    [super preferredStatusBarStyle];
    return UIStatusBarStyleLightContent;
}
```


<a name="DynamicCellHeight"/> 

---
<br/>
## Dynamic Cell Height

Label'ın uzunluğunu almak için :
```objectivec
-(CGFloat)getHeight: (NSString*) text{
    CGFloat width = Content.width;
    UIFont *font = [UIFont fontWithName:@"FONT ADI" size:18];
    NSAttributedString *attributedText =
    [[NSAttributedString alloc] initWithString:text
                                    attributes:@{NSFontAttributeName: font}];
    CGRect rect = [attributedText boundingRectWithSize:(CGSize){width, CGFLOAT_MAX}
                                               options:NSStringDrawingUsesLineFragmentOrigin
                                               context:nil];
    CGSize size = rect.size;
    CGFloat height = ceilf(size.height);
    return height;
}
```
```heightForRowAtIndexPath``` fonksiyonu ise aşağıdaki gibi olacak ```MinTableHeight``` global olarak tanımlanıp minimum hücre uzunluğu verilecek.

```objectivec
- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath{
    NSString *text = [[arrayVideo objectAtIndex:indexPath.row] videoName];
    if([self getHeight:text] > MinTableHeight)
        return [self getHeight:text];
    return MinTableHeight;
}
```

<a name="WSDL2Code"/> 

---
<br/>
## WSDL 2 Code

1- Project Target Build Phases gidin ve libxml2.lib yi ekleyin

>Project Settings'e gidin ve "Header Search Paths" - $(SDK_DIR)"/usr/include/libxml2 ekleyin.  
>(Build Phases > Link Binary with Libraries.  
> "Other" butonuna basın.  
> Dosya seçim ekranı geldikten sonra ise  "CMD"+"Shift"+"G" 'ye basın  
> "/usr/lib/" yazın  
> "libxml2.2.dylib" yi seçin.  





2- http://www.apphic.com/IOSLibrary/WSDL2Code.zip adresindeki klasorleri projeye ekle (ARC olmadigi icin XPathQuery.m ve NSData+Base64.m icin Build Phases de Compile Sources icinde : 
-fno-objc-arc  tanimla )



3- http://www.wsdl2code.com/pages/Home.aspx sayfasinda sonu WDSL ile biten webservice linkini kopyala ve iOS arc icin al. Bu ciktiyi projeye ekle. (myerdem86 12991923Ab)



4- Kullanacagin sayfanin .h icine bunlari : 
#import "ServiceProxy.h"
Wsdl2CodeProxyDelegate
@property (nonatomic,retain) ServiceProxy* service;


Kullanacagin sayfanin.m icinde su 2 fonksiyonu ekle
//if service recieve an error this method will be called
```objectivec
-(void)proxyRecievedError:(NSException*)ex InMethod:(NSString*)method{
    NSLog(@"Exeption in service %@",method);
}
//proxy finished, (id)data is the object of the relevant method service
-(void)proxydidFinishLoadingData:(id)data InMethod:(NSString*)method{
    NSLog(@"Service %@ Done!",method);




    NSArray *array = (NSArray *)data;
    
    for (int i = 0; i < array.count; ++i)
    {
        fI *item = (fI *)[array objectAtIndex:i];
        //...
    }
}
```



Ornek bir fonk. cagrisi : 
```objectivec
self.service = [[ServiceProxy alloc]initWithUrl:@"http://isilti.apphic.com/service.asmx" AndDelegate:self];
[self.service getFList:1 :0];
``


