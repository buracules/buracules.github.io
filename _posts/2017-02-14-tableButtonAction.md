---
layout: post
title:  "Table Button Action"
date:   2017-02-15
categories: Swift
author: "Burak Üstün"
tags: [table, swift]
---

You need to add target for that button.
```swift
myButton.addTarget(self, action: "connected:", forControlEvents: .TouchUpInside)
```

And of course you need to set tag of that button since you are using it.

```swift 
myButton.tag = indexPath.row
```

You can achieve this by subclassing UITableViewCell. Use it in interface builder, drop a button on that cell, connect it via outlet and there you go.
****
**EDIT:** To get the tag in the connected function:

```swift
func connected(sender: UIButton){
    let buttonTag = sender.tag
}
```
****
**EDIT2:**This answer was provided for swift 1.2, as suggested in comments, syntax is a little different for swift 2.2.

```swift
myButton.addTarget(self, action: #selector(ClassName.FunctionName(_:), forControlEvents: .TouchUpInside)
```
****
**EDIT3:** Updated for Swift 3

```swift
myButton.addTarget(self, action: #selector(ClassName.FunctionName.buttonTapped), for: .touchUpInside)
```
****
**Çalışan Örnek**

```swift
cell.btnTodo.addTarget(self, action: #selector(deleteItem(sender:)), for: .touchUpInside)

//deleteItem -> Fonksiyon Adı
```

#swift