---
layout: post
title: "Useful Libraries for Swift 3.1"
date:   2017-06-08
categories: "Swift"
---


## Alamofire
https://github.com/Alamofire/Alamofire
`pod 'Alamofire', '~> 4.4'`
### Usage
* **Making a Request**
```swift
import Alamofire

Alamofire.request("https://httpbin.org/get")
```

* **Response Handling**
Handling the Response of a Request made in Alamofire involves chaining a response handler onto the Request.

```swift
Alamofire.request("https://httpbin.org/get").responseJSON { response in
    print(response.request)  // original URL request
    print(response.response) // HTTP URL response
    print(response.data)     // server data
    print(response.result)   // result of response serialization

    if let JSON = response.result.value {
        print("JSON: \(JSON)")
    }
}
```

In the above example, the responseJSON handler is appended to the Request to be executed once the Request is complete. Rather than blocking execution to wait for a response from the server, a callback in the form of a closure is specified to handle the response once it's received. The result of a request is only available inside the scope of a response closure. Any execution contingent on the response or data received from the server must be done within a response closure.

For more [click here!](https://github.com/Alamofire/Alamofire)

## Kingfisher
https://github.com/onevcat/Kingfisher
`pod 'Kingfisher', '~> 3.10'`

### Features
* Asynchronous image downloading and caching.
* URLSession-based networking. Basic image processors and filters supplied.
* Multiple-layer cache for both memory and disk.
* Cancelable downloading and processing tasks to improve performance.
* Independent components. Use the downloader or caching system separately as you need.
* Prefetching images and showing them from cache later when necessary.
* Extensions for UIImageView, NSImage and UIButton to directly set an image from a URL.
* Built-in transition animation when setting images.
* Extensible image processing and image format support.

### Usage

The simplest use-case is setting an image to an image view with the UIImageView extension:

```swift
let url = URL(string: "url_of_your_image")
imageView.kf.setImage(with: url)
```

With completion handler:

```swift
let url = URL(string: "http://domain.com/image.png")!
imageView.kf.setImage(with: url, 
               placeholder: nil,
                   options: [.transition(.fade(1))],
             progressBlock: nil,
         completionHandler: nil)
```

For more [click here!](https://github.com/onevcat/Kingfisher/wiki/Kingfisher-3.0-Migration-Guide)

## SideMenu
https://github.com/jonkykong/SideMenu
`pod 'SideMenu', '~> 2.3'`

### Features
*  It can be implemented in storyboard without a single line of code.
* Four standard animation styles to choose from (there's even a parallax effect if you want to get weird).
* Highly customizable without needing to write tons of custom code.
* Supports continuous swiping between side menus on boths sides in a single gesture.
* Global menu configuration. Set-up once and be done for all screens.
* Menus can be presented and dismissed the same as any other view controller since this control uses custom transitions.
* Animations use your view controllers, not snapshots.
* Properly handles screen rotation and in-call status bar height changes.

For usage and more information [click here!](https://github.com/jonkykong/SideMenu)

## Facebook-POP

<img src="assets/images/Posts/pop.gif"/>

Pop is an extensible animation engine for iOS, tvOS, and OS X. In addition to basic static animations, it supports spring and decay dynamic animations, making it useful for building realistic, physics-based interactions. The API allows quick integration with existing Objective-C or Swift codebases and enables the animation of any property on any object. It's a mature and well-tested framework that drives all the animations and transitions in Paper.

For usage and information [click here!](https://github.com/facebook/pop)

## Hero
https://github.com/lkzhao/Hero
`pod 'Hero', '~> 0.3'`

Hero is a library for building iOS view controller transitions. It provides a layer on top of the UIKit's cumbersome transition APIs. Making custom transitions an easy task for developers.

<img src="assets/images/Posts/hero1.svg"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="assets/images/Posts/hero2.svg"/>

Hero is similar to Keynote's Magic Move. It checks the heroID property on all source and destination views. Every matched view pairs are then automatically transitioned from its old state to its new state.

Hero can also construct animations for unmatched views. It is easy to define these animations via the heroModifiers property. Hero will run these animations alongside the Magic Move animations. All of these animations can be interactively controlled by user gestures.

At view controller level, Hero provides several template transitions that you can set through heroModalAnimationType, heroNavigationAnimationType, & heroTabBarAnimationType. These can be used as the foundation of your custom transitions. Combine with heroID & heroModifiers to make truly some unique transitions.

<img src="assets/images/Posts/hero3.svg"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="assets/images/Posts/hero4.svg"/>

By default, Hero provides dynamic duration based on the Material Design Motion Guide. The duration is determined by the distance & size change. It save you the hassle while providing consistent and delightful animations.

Hero does not make any assumption about how the view is built or structured. It will not modify any of your views' states other than hiding them during the animation. This makes it work with Auto Layout, programmatic layout, UICollectionView (without modifying its layout object), UITableView, UINavigationController, UITabBarController, etc...

For usage and more information [click here!](https://github.com/lkzhao/Hero)



## NVActivityIndicatorView
https://github.com/ninjaprox/NVActivityIndicatorView
`pod 'NVActivityIndicatorView', '~> 3.6'`

### Introduction
`NVActivityIndicatorView` is a collection of awesome loading animations.

This is original a fork from [DGActivityIndicatorView](https://github.com/gontovnik/DGActivityIndicatorView), inspired by [Loaders.css](https://github.com/ConnorAtherton/loaders.css), written in Swift with full implementation of animations, plus more.

You can also find Objective-C version of this [here](https://github.com/ninjaprox/DGActivityIndicatorView).

### Demo
![alt tag](https://raw.githubusercontent.com/ninjaprox/NVActivityIndicatorView/master/Demo.gif)

For first-hand experience, just open the project and run it.

# Animation types

| Type | Type | Type | Type |
|---|---|---|---|
|1. ballPulse | 2. ballGridPulse | 3. ballClipRotate | 4. squareSpin|
|5. ballClipRotatePulse | 6. ballClipRotateMultiple | 7. ballPulseRise | 8. ballRotate|
|9. cubeTransition | 10. ballZigZag | 11. ballZigZagDeflect | 12. ballTrianglePath|
|13. ballScale | 14. lineScale | 15. lineScaleParty | 16. ballScaleMultiple|
|17. ballPulseSync | 18. ballBeat | 19. lineScalePulseOut | 20. lineScalePulseOutRapid|
|21. ballScaleRipple | 22. ballScaleRippleMultiple | 23. ballSpinFadeLoader | 24. lineSpinFadeLoader|
|25. triangleSkewSpin | 26. pacman | 27. ballGridBeat | 28. semiCircleSpin|
|29. ballRotateChase | 30. orbit | 31. audioEqualizer|

### Usage

Firstly, import `NVActivityIndicatorView`.

```swift
import NVActivityIndicatorView
```

### Initialization

Then, there are two ways you can create NVActivityIndicatorView:

- By storyboard, changing class of any `UIView` to `NVActivityIndicatorView`.

_**Note:** Set Module to `NVActivityIndicatorView`._

- By code, using initializer. All parameters other than `frame` are optional and `NVActivityIndicatorView.DEFAULT_*` are used as default values.

```swift
NVActivityIndicatorView(frame: frame, type: type, color: color, padding: padding)
```

_**Note:** Check [DEFAULTS](#defaults) for default values._

### Control

Start animating.

```swift
activityIndicatorView.startAnimating()
```

Stop animating.

```swift
activityIndicatorView.stopAnimating()
```

Determine if it is animating.

```swift
animating = activityIndicatorView.animating
```

### Change properties

In storyboard, you can change all properties in Attributes inspector tab of Utilities panel.

_**Note:** Use one of values (case-insensitive) in [Animation types](#animation-types) for `Type Name`._

All properties are public so you can change them all after initiating.

_**Note:** All changes must be made before calling `startAnimating()`._

### UI blocker

By conforming `NVActivityIndicatorViewable` protocol, you can use `NVActivityIndicatorView` as UI blocker for `UIViewController`.

```swift
class ViewController: UIViewController, NVActivityIndicatorViewable { }
```

Start animating.

```swift
startAnimating(size, message) // plus other parameters as in initializer.
```

Stop animating.

```swift
stopAnimating()
```

Or you can use `NVActivityIndicatorPresenter` to display UI blocker anywhere.

Start animating.

```swift
let activityData = ActivityData()

NVActivityIndicatorPresenter.sharedInstance.startAnimating(activityData)
```

_**Note:** Check [documentation](http://cocoadocs.org/docsets/NVActivityIndicatorView) for detail of `ActivityData`._

Stop animating.

```swift
NVActivityIndicatorPresenter.sharedInstance.stopAnimating()
```

Change message.

```swift
NVActivityIndicatorPresenter.sharedInstance.setMessage("Done")
```

### DEFAULTS

There are global defaults for all `NVActivityIndicatorView` instances.

- Default animation type.

```swift
NVActivityIndicatorView.DEFAULT_TYPE = .ballSpinFadeLoader
```

- Default color of activity indicator view.

```swift
NVActivityIndicatorView.DEFAULT_COLOR = UIColor.white
```

- Default color of the text below the activity indicator view when using an `NVActivityIndicatorPresenter`. The presentor will use the activity indicator `color` for the text if it is set but a `textColor` is not. `DEFAULT_TEXT_COLOR` is only used when neither are set.

```swift
NVActivityIndicatorView.DEFAULT_TEXT_COLOR = UIColor.white
```

- Default padding of activity indicator view.

```swift
NVActivityIndicatorView.DEFAULT_PADDING = CGFloat(0)
```

- Default size of activity indicator view used in UI blocker.

```swift
NVActivityIndicatorView.DEFAULT_BLOCKER_SIZE = CGSizeMake(60, 60)
```

- Default background color of UI blocker.

```swift
NVActivityIndicatorView.DEFAULT_BLOCKER_BACKGROUND_COLOR = UIColor(red: 0, green: 0, blue: 0, alpha: 0.5)
```

- Default display time threshold.

> Default time that has to be elapsed (between calls of `startAnimating()` and `stopAnimating()`) in order to actually display UI blocker. It should be set thinking about what the minimum duration of an activity is to be worth showing it to the user. If the activity ends before this time threshold, then it will not be displayed at all.

```swift
NVActivityIndicatorView.DEFAULT_BLOCKER_DISPLAY_TIME_THRESHOLD = 0 // in milliseconds
```

- Default minimum display time.

> Default minimum display time of UI blocker. Its main purpose is to avoid flashes showing and hiding it so fast. For instance, setting it to 200ms will force UI blocker to be shown for at least this time (regardless of calling `stopAnimating()` ealier).

```swift
NVActivityIndicatorView.DEFAULT_BLOCKER_MINIMUM_DISPLAY_TIME = 0 // in milliseconds
```

- Default message displayed in UI blocker.

```swift
NVActivityIndicatorView.DEFAULT_BLOCKER_MESSAGE: String? = nil
```

- Default font of message displayed in UI blocker.

```swift
NVActivityIndicatorView.DEFAULT_BLOCKER_MESSAGE_FONT = UIFont.boldSystemFont(ofSize: 20)
```

## SKPhotoBrowser
https://github.com/suzuki-0000/SKPhotoBrowser
`pod 'SKPhotoBrowser',           '~> 4.0'`

Simple PhotoBrowser/Viewer inspired by facebook, twitter photo browsers written by swift, based on IDMPhotoBrowser, MWPhotoBrowser.

![sample](assets/images/Posts/SKPhotoBrowser.gif)

### Features
* Display one or more images by providing either UIImage objects, or string of URL array.
* Photos can be zoomed and panned, and optional captions can be displayed
* Minimalistic Facebook-like interface, swipe up/down to dismiss
* Ability to custom control. (hide/ show toolbar for controls, / swipe control)
* Handling and caching photos from web
* Landscape handling
* Delete photo support(by offbye). By set displayDelete=true show a delete icon in statusbar, deleted indexes can be obtain from delegate func didDeleted
* 
### Version vs Swift version.

Below is a table that shows which version of SKPhotoBrowser you should use for your Swift version.

| Swift version | SKPhotoBrowser version    |
| ------------- | --------------- |
| 3.X           | >= 4.0.0 |
| 2.3           | 2.0.4 - 3.1.4  |
| 2.2           | <= 2.0.3        |


##Usage
See the code snippet below for an example of how to implement, or see the example project.
    
from UIImages:
```swift
// 1. create SKPhoto Array from UIImage
var images = [SKPhoto]()
let photo = SKPhoto.photoWithImage(UIImage())// add some UIImage
images.append(photo) 

// 2. create PhotoBrowser Instance, and present from your viewController. 
let browser = SKPhotoBrowser(photos: images)
browser.initializePageIndex(0)
presentViewController(browser, animated: true, completion: {})
```

from URLs:
```swift
// 1. create URL Array 
var images = [SKPhoto]()
let photo = SKPhoto.photoWithImageURL("https://placehold.jp/150x150.png")
photo.shouldCachePhotoURLImage = false // you can use image cache by true(NSCache)
images.append(photo)

// 2. create PhotoBrowser Instance, and present. 
let browser = SKPhotoBrowser(photos: images)
browser.initializePageIndex(0)
presentViewController(browser, animated: true, completion: {})
```

from local files:
```swift
// 1. create images from local files
var images = [SKLocalPhoto]()
let photo = SKLocalPhoto.photoWithImageURL("..some_local_path/150x150.png")
images.append(photo)

// 2. create PhotoBrowser Instance, and present. 
let browser = SKPhotoBrowser(photos: images)
browser.initializePageIndex(0)
presentViewController(browser, animated: true, completion: {})
```

If you want to use zooming effect from an existing view, use another initializer:
```swift
// e.g.: some tableView or collectionView.
func collectionView(collectionView: UICollectionView, didSelectItemAtIndexPath indexPath: NSIndexPath) {
   let cell = collectionView.cellForItemAtIndexPath(indexPath) 
   let originImage = cell.exampleImageView.image // some image for baseImage 

   let browser = SKPhotoBrowser(originImage: originImage ?? UIImage(), photos: images, animatedFromView: cell) 
   browser.initializePageIndex(indexPath.row)
   presentViewController(browser, animated: true, completion: {})
}
```

### Custom

#### Toolbar
You can customize Toolbar via SKPhotoBrowserOptions.

```swift
SKPhotoBrowserOptions.displayToolbar = false                              // all tool bar will be hidden
SKPhotoBrowserOptions.displayCounterLabel = false                         // counter label will be hidden
SKPhotoBrowserOptions.displayBackAndForwardButton = false                 // back / forward button will be hidden
SKPhotoBrowserOptions.displayAction = false                               // action button will be hidden
SKPhotoBrowserOptions.displayDeleteButton = true                          // delete button will be shown
SKPhotoBrowserOptions.displayHorizontalScrollIndicator = false            // horizontal scroll bar will be hidden
SKPhotoBrowserOptions.displayVerticalScrollIndicator = false              // vertical scroll bar will be hidden
let browser = SKPhotoBrowser(originImage: originImage, photos: images, animatedFromView: cell)
```

#### Colors
You can customize text, icon and background colors via SKPhotoBrowserOptions
```swift
SKPhotoBrowserOptions.backgroundColor = UIColor.whiteColor()               // browser view will be white
SKPhotoBrowserOptions.textAndIconColor = UIColor.blackColor()              // text and icons will be black
SKPhotoBrowserOptions.toolbarTextShadowColor = UIColor.clearColor()        // shadow of toolbar text will be removed
SKPhotoBrowserOptions.toolbarFont = UIFont(name: "Futura", size: 16.0)     // font of toolbar will be 'Futura'
SKPhotoBrowserOptions.captionFont = UIFont(name: "Helvetica", size: 18.0)  // font of toolbar will be 'Helvetica'
```

#### Images
You can customize the padding of displayed images via SKPhotoBrowserOptions
```swift
SKPhotoBrowserOptions.imagePaddingX = 50                                   // image padding left and right will be 25
SKPhotoBrowserOptions.imagePaddingY = 50                                   // image padding top and bottom will be 25
```

#### Statusbar
You can customize the visibility of the Statusbar in browser view via SKPhotoBrowserOptions
```swift
SKPhotoBrowserOptions.displayStatusbar = false                             // status bar will be hidden
```

#### Custom Cache From Web URL
You can use SKCacheable protocol if others are adaptable. (SKImageCacheable or SKRequestResponseCacheable)

```swift
e.g. SDWebImage

// 1. create custom cache, implement in accordance with the protocol 
class CustomImageCache: SKImageCacheable { var cache: SDImageCache }

// 2. replace SKCache instance with custom cache
SKCache.sharedCache.imageCache = CustomImageCache()
```

#### CustomButton Image
Close, Delete buttons are able to change image and frame.
``` swift
browser.updateCloseButton(UIImage())
browser.updateUpdateButton(UIImage())
```

#### Delete Photo
You can delete your photo for your own handling. detect button tap from `removePhoto` delegate function.


#### Photo Captions
Photo captions can be displayed simply bottom of PhotoBrowser. by setting the `caption` property on specific photos:
``` swift
let photo = SKPhoto.photoWithImage(UIImage())
photo.caption = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
```

#### SwipeGesture 
vertical swipe can enable/disable:
``` swift
SKPhotoBrowserOptions.disableVerticalSwipe = true 
``` 

#### Delegate
There's some trigger point you can handle using delegate. those are optional.
- didShowPhotoAtIndex(index:Int) 
- willDismissAtPageIndex(index:Int)
- willShowActionSheet(photoIndex: Int)
- didDismissAtPageIndex(index:Int)
- didDismissActionSheetWithButtonIndex(buttonIndex: Int, photoIndex: Int)
- didScrollToIndex(index: Int)
- removePhoto(browser: SKPhotoBrowser, index: Int, reload: (() -> Void))
- viewForPhoto(browser: SKPhotoBrowser, index: Int) -> UIView?
- controlsVisibilityToggled(hidden: Bool)

```swift
let browser = SKPhotoBrowser(originImage: originImage, photos: images, animatedFromView: cell)
browser.delegate = self

// MARK: - SKPhotoBrowserDelegate
func didShowPhotoAtIndex(index: Int) {
// when photo will be shown
}

func willDismissAtPageIndex(index: Int) {
// when PhotoBrowser will be dismissed
}

func didDismissAtPageIndex(index: Int) {
// when PhotoBrowser did dismissed
}

```

#### Options
You can access via `SKPhotoBrowserOptions`, which can use for browser control.
- single tap handling, dismiss/noaction
- blackArea handling which is appearing outside of photo
- bounce animation when appearing/dismissing
- text color, font, or more
``` swift
SKPhotoBrowserOptions.enableZoomBlackArea    = true  // default true
SKPhotoBrowserOptions.enableSingleTapDismiss = true  // default false
SKPhotoBrowserOptions.bounceAnimation        = true  // default false
``` 

## Other Useful Libraries
* [LNRSimpleNotifications](https://github.com/LISNR/LNRSimpleNotifications)
* [BPStatusBarAlert](https://github.com/ppth0608/BPStatusBarAlert)



