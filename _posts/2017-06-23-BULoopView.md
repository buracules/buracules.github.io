---
layout: post
title: "BULoopView"
date:   2017-06-23
categories: "Pods"
author: "Burak Üstün"
tags: [cocoapods, swift, ios, test1, test2, test5, test6, tet, asd, asdasd, asdasd]
---

[![CI Status](http://img.shields.io/travis/burakustn@gmail.com/BULoopView.svg?style=flat)](https://travis-ci.org/burakustn@gmail.com/BULoopView)
[![Version](https://img.shields.io/cocoapods/v/BULoopView.svg?style=flat)](http://cocoapods.org/pods/BULoopView)
[![License](https://img.shields.io/cocoapods/l/BULoopView.svg?style=flat)](http://cocoapods.org/pods/BULoopView)
[![Platform](https://img.shields.io/cocoapods/p/BULoopView.svg?style=flat)](http://cocoapods.org/pods/BULoopView)

![sample](https://burakustn.com/assets/images/Posts/BULoopView.gif)
## Example

To run the example project, clone the repo, and run `pod install` from the Example directory first.

## Usage

Setup the BUSimplePopupManager

```swift
import UIKit
import BULoopView

 var arrayLoop:   [LoopItem]    = []
    override func viewDidLoad() {
        super.viewDidLoad()
        
        /*
         Set the properties
         **/
        LoopView.LoopItemWidth = 180
        LoopView.LoopItemMargin = 30
        LoopView.backgroundColor = UIColor.blue
        
        /*
         Create an LoopItem array and fill it
         **/
        for i in 0..<10{
            let item = LoopItem.init(_name: "Test\(i)", _photoPath: "https://burakustn.com/assets/images/logo.png")
            self.arrayLoop.append(item!)
        }
        
        /*
         Load the BULoopView
        **/
        self.LoopView.loadLoopView(LoopArray: self.arrayLoop)
        
    }

```

You can customize everything below

```swift
 /**
     *  Use to set the Loop Items Space
     */
    public var LoopSpace: CGFloat = 10.0
    
    /**
     *  Use to set the Loop Items Width
     */
    public var LoopItemWidth:  CGFloat = 150.0
    
    /**
     *  Use to set the Loop Items Margin
     */
    public var LoopItemMargin:CGFloat = 10.0
    
    /**
     *  Use to set the Loop Items Image Width
     */
    public var LoopItemImageWidth:CGFloat = 50.0
    
    /**
     *  Use to set the Loop Items Seperator Color
     */
    public var seperatorColor:UIColor = UIColor( red:0.961,  green:0.961,    blue:0.961, alpha:1)
    
    /**
     *  Use to set the Loop Seperator Alpha
     */
    public var seperatorAlpha:CGFloat = 0.7
    
    /**
     *  Use to set the Loop Items Text Color
     */
    public var textColor:UIColor = UIColor( red:0.961,  green:0.961,    blue:0.961, alpha:1)
    
    /**
     *  Use to set the Loop Items Text Font
     */
    public var labelFont:UIFont? = nil


```

## Installation

BUSimplePopup is available through [CocoaPods](http://cocoapods.org). To install
it, simply add the following line to your Podfile:

```ruby
pod "BULoopView"
```

## Author

Burak Üstün  
Burak@Ustun.co  
Twitter.com/burakustn  
## License
BULoopView is available under the MIT license. See the LICENSE file for more info.
