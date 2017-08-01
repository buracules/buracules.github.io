---
layout: post
title:  "Html to Text"
author: "Burak Üstün"
date:   2017-04-13
categories: "Swift"
author: "Burak Üstün"
tags: [extension, swift]
---

 String+HtmltoText.swift adında bir dosya oluşturun.
 İçerisine aşağıdaki kodu kopyalayın.

```swift
//
//  Created by Burak Üstün on 13/04/2017.
//  Copyright © 2017 Burak Üstün. All rights reserved.
//
import UIKit

extension String {
    var html2AttributedString: NSAttributedString? {
        do {
            if let font = UIFont(name: "JosefinSans", size: 17) {
                let dataString = String(data: Data(utf8), encoding: String.Encoding.utf8)
                return try NSMutableAttributedString(HTMLString: dataString!, font: font)
            }
            return nil
        } catch {
            print(error)
            return nil
        }
    }
    var html2String: String {
        return html2AttributedString?.string ?? ""
    }
}
extension NSAttributedString {
    public convenience init?(HTMLString html: String, font: UIFont? = nil) throws {
        let options: [String: Any] = [
            NSDocumentTypeDocumentAttribute: NSHTMLTextDocumentType,
            NSCharacterEncodingDocumentAttribute: NSNumber(value: String.Encoding.utf8.rawValue)
        ]
        guard let data = html.data(using: .utf8, allowLossyConversion: true) else {
            throw NSError(domain: "Parse Error", code: 0, userInfo: nil)
        }
        if let font = font {
            guard let attr = try? NSMutableAttributedString(data: data, options: options, documentAttributes: nil) else {
                throw NSError(domain: "Parse Error", code: 0, userInfo: nil)
            }
            var attrs = attr.attributes(at: 0, effectiveRange: nil)
            attrs[NSFontAttributeName] = font
            attr.setAttributes(attrs, range: NSRange(location: 0, length: attr.length))
            self.init(attributedString: attr)
        } else {
            try? self.init(data: data, options: options, documentAttributes: nil)
        } 
    }
    
}


```

Kullanım:

```swift
    label.text = "someHTML".html2String // For Text
    label.attributedtext = "someHTML".html2AttributedString // Fot Attributed Text

```




