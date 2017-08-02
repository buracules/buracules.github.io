---
layout: post
title: "Swift Delegate Sample"
date:   2017-08-02
categories: "Swift"
author: "Burak Üstün"
tags: [swift, delegate, codesample]
---

First we define the protocol for the delegate, let's say the YesOrNoDelegate

```swift
protocol YesOrNoDelegate {
}
```

Then we add the function we want to trigger. Let's say this is a didReturnYes

```swift
protocol YesOrNoDelegate {
  func didReturnYes(Result : Bool)
}
```

Now our protocol has become this.

After that, we will use the protocol that we wrote and we must define it in the class.

```swift
class YesOrNoViewController: UIViewController{
  var delegate: YesOrNoDelegate? = nil
}
```

After that, we call the protocol function where we will trigger.

Let's assume we have yes and no buttons.

```swift
@IBAction func btnYES_Click(_ sender: Any) {
    delegate?. didReturnYes(Return: true)
  }

@IBAction func btnNO_Click(_ sender: Any) {
    delegate?. didReturnYes(Return: false)
  }
```

After this phase, we will do the following in the class that we will call the delegate : 

```swift
class SampleViewController: UIViewController{
   override func viewDidLoad() {
	 }
}
```

In ViewDidLoad, create a modal object in which our delegate is located.

```swift
class SampleViewController: UIViewController{
   override func viewDidLoad() {
    let sampleController  = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "sampleViewController") as! YesOrNoViewController
        sampleController.delegate  = self
    self.present(sampleController, animated: true, completion: nil)
    }
}
```

This opens YesOrNoViewController modally.

After that there is only one thing. And this is handling the Delegate.

```swift
extension SampleViewController: YesOrNoDelegate{
  func didReturnYes(Result: Bool){
    Result ? print("YES!") : print("NO!")
}
```

#swift