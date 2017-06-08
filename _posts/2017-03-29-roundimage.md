---
layout: post
title:  "Round Image IBDesignable"
author: "Burak Üstün"
date:   2017-03-29
categories: "Swift"
---


 ```swift

//
//  roundImage.swift
//
//  Created by Burak Üstün on 29/03/17.
//  Copyright © 2017 Burak Üstün. All rights reserved.
//

import UIKit
import Foundation

@IBDesignable public class roundImage: UIImageView {
    
    
    // MARK: - Properties

    @IBInspectable public var radius: CGFloat = 0.0  {
        didSet {
                self.layer.cornerRadius = radius
        }
    }
    
    @IBInspectable public var isCircular: Bool = false {
        didSet {
            if(isCircular){
                self.layer.cornerRadius = self.frame.size.width / 2
            }
        }
    }
    
    
    @IBInspectable public var borderWidth: CGFloat = 0.0 {
        didSet {
            self.layer.borderWidth = borderWidth
        }
    }
    
    @IBInspectable public var borderColor: UIColor = UIColor.clear {
        didSet {
            self.layer.borderColor = borderColor.cgColor
        }
    }
    
    
    // MARK: - Constructors
    
    required public init(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)!
        setup()
    }
    
    override public init(frame: CGRect) {
        super.init(frame: frame)
        setup()
    }
    
    override public init(image: UIImage!) {
        super.init(image: image)
        setup()
    }
    
    override public init(image: UIImage!, highlightedImage: UIImage?) {
        super.init(image: image, highlightedImage: highlightedImage)
        setup()
    }
    
    
    // MARK: - Support Methods
    
    func setup() {
        self.clipsToBounds = true
    }
    
    override public func prepareForInterfaceBuilder() {
        setup()
    }
}
```





