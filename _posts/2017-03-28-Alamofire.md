---
layout: post
title:  "Alamofire"
author: "Burak Üstün"
date:   2017-03-24
categories: "Swift"
---

#### Örnek Class : [Post.swift]

 ```swift

import Foundation

public class Post {
    public var userId : Int?
    public var id : Int?
    public var title : String?
    public var body : String?

public class func modelsFromDictionaryArray(array:NSArray) -> [Post]{
        var models:[Post] = []
        for item in array
        {
            models.append(Post(dictionary: item as! NSDictionary)!)
        }
        return models
}

required public init?(dictionary: NSDictionary) {
    userId = dictionary["userId"] as? Int
    id = dictionary["id"] as? Int
    title = dictionary["title"] as? String
    body = dictionary["body"] as? String
    }
 ```


#### WebServiceManager

 ```swift

import UIKit
import Alamofire

class WSManager: NSObject {
let serviceURL = "https://jsonplaceholder.typicode.com"
 
static func makeRequest(completionHandler: @escaping ([Post]) -> Void) {
        let url = "\(serviceURL)/posts"
        let parameters: Parameters =  [
            "title" : "Foo",
            "body" : "Bar",
            "userId" : 1
        ]
        print(url)
        Alamofire.request(url, method: .post, parameters: parameters, encoding: JSONEncoding.default)
            .responseJSON { response in
                if let JSON = response.result.value{
                    if JSON is NSArray{
                        if let array:[Post] = Post.modelsFromDictionaryArray(array: JSON as! NSArray) {
                            completionHandler(array)
                            print("it's an Array!")
                        }
                    }
                    else if JSON is NSDictionary{
                        if let post = Post.init(dictionary: response.result.value as! NSDictionary){
                            // Eğer Array yerine object dönüyor ise
                            var model:[Post] = []
                            model.append(post)
                            print("it's an object!")
                            completionHandler(model)
                        }
                    }
                    else{
                        print("makeRequestError!")
                    }
                }
     }
 }

```

#### ViewController içerisinde kullanımı ise


```swift
        WSManager.makeRequest(completionHandler: { list in
            for i in 0 ..< list.count{
                print(list[i].title ?? "")
                print(list[i].body ?? "")
            }
        })
```





