---
layout: post
title:  "UITextView Placeholder"
author: "Burak Üstün"
date:   2017-04-26
categories: "Swift"
author: "Burak Üstün"
tags: [extension, swift]
---



 ```swift
extension AddCommentViewController: UITextViewDelegate{

    func textView(_ textView: UITextView, shouldChangeTextIn range: NSRange, replacementText text: String) -> Bool {
        
        let currentText:NSString = textView.text! as NSString
        let updatedText = currentText.replacingCharacters(in: range, with: text)

        if updatedText.isEmpty {
            
            textView.text = placeholdeText
            textView.textColor = UIColor.lightGray
            
            textView.selectedTextRange = textView.textRange(from: textView.beginningOfDocument, to: textView.beginningOfDocument)
            
            return false
        }
            

        else if textView.textColor == UIColor.lightGray && !text.isEmpty {
            textView.text = nil
            textView.textColor = UIColor.black
        }
        
        return true
    }
    
    func textViewDidChangeSelection(_ textView: UITextView) {
        if self.view.window != nil {
            if textView.textColor == UIColor.lightGray {
                textView.selectedTextRange = textView.textRange(from: textView.beginningOfDocument, to: textView.beginningOfDocument)
            }
        }
    }
}
}
```




