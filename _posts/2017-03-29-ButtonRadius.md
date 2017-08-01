---
layout: post
title:  "Button Radius"
author: "Burak Üstün"
date:   2017-03-29
categories: "Swift"
author: "Burak Üstün"
tags: [swift, ui]
---

Kullanmak için roundButton.swift adında bir dosya oluşturun ve aşağıdaki kodu içerisine kopyalayın.

<center><img src="assets/images/Posts/roundButton.gif" 
alt="Round Button" width="800" height="600" border="10" float="center" /></center>


 ```swift

//
//  roundButton.swift
//
//  Created by Burak Üstün on 29/03/17.
//  Copyright © 2017 Burak Üstün. All rights reserved.
//

import UIKit
import Foundation

@IBDesignable public class roundButton: UIButton {
    
    
    // MARK: - Properties
    
    @IBInspectable public var radius: CGFloat = 0.0  {
        didSet {
            self.layer.cornerRadius = radius
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
    
    
    // MARK: - Support Methods
    
    func setup() {
        self.clipsToBounds = true
    }
    
    override public func prepareForInterfaceBuilder() {
        setup()
    }
}
```




