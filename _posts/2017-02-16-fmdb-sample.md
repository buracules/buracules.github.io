---
layout: post
title:  "Fmdb Sample"
date:   2017-02-16
categories: Swift
tags: [database, swift]
---

```swift
//
//  DBManager.swift
//  ToDoApp
//  Created by Burak Üstün on 25.01.2017.
//  Copyright © 2017 Burak Üstün. All rights reserved.
//

import UIKit
import FMDB

class DBManager: NSObject {
    
    //Todo Table Items
    let field_itemID = "itemID"
    let field_itemText = "itemText"
    let field_itemDate = "itemDate"
    let field_itemIsDone = "itemIsDone"
    
    static let shared: DBManager = DBManager()
    
    let databaseFileName = "todoDB2.sqlite"
    
    var pathToDatabase: String!
    
    var database: FMDatabase!
    
    let formatter = DateFormatter()
    
    
    override init() {
        super.init()
        
        let documentsDirectory = (NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true)[0] as NSString) as String
        pathToDatabase = documentsDirectory.appending("/\(databaseFileName)")
        
        formatter.dateFormat = "MMM dd HH:mm"
    }
    


    func createDatabase() -> Bool {
        var created = false
        
        if !FileManager.default.fileExists(atPath: pathToDatabase) {
            database = FMDatabase(path: pathToDatabase!)
            
            if database != nil {
                // Open the database.
                if database.open() {
                    let createToDoTableQuery = "create table toDo (\(field_itemID) integer primary key autoincrement not null, \(field_itemText) text not null, \(field_itemDate) text not null, \(field_itemIsDone) bool not null default 0)"
                    
                    do {
                        try database.executeUpdate(createToDoTableQuery, values: nil)
                        created = true
                    }
                    catch {
                        print("Could not create table.")
                        print(error.localizedDescription)
                    }
                    
                    database.close()
                }
                else {
                    print("Could not open the database.")
                }
            }
        }
        
        return created
    }

    func openDatabase() -> Bool {
        if database == nil {
            if FileManager.default.fileExists(atPath: pathToDatabase) {
                database = FMDatabase(path: pathToDatabase)
            }
        }
        
        if database != nil {
            if database.open() {
                return true
            }
        }
        
        return false
    }
    
    func insertToDoData(itemText : String) -> Bool{
        if openDatabase() {
            do{
                var query = ""
                let currentDateTime = Date()
                let itemDateTime = formatter.string(from: currentDateTime)
                query += "insert into toDo (\(field_itemID), \(field_itemText), \(field_itemDate)) values (null, '\(itemText)', '\(currentDateTime)')"
                
                
                if !database.executeStatements(query) {
                    print("Failed to insert initial data into the database.")
                    print(database.lastError(), database.lastErrorMessage())
                }
            }
            catch {
                print(error.localizedDescription)
                return false
            }
        }
        
        database.close()
        return true
    }
    
    func loadToDos() -> [toDoInfo]! {
         var toDos: [toDoInfo]!
        if openDatabase() {
            let query = "select * from toDo order by \(field_itemID) asc"
            do{
                let results = try database.executeQuery(query, values: nil)
                while results.next(){
                    let toDo = toDoInfo(itemID: Int(results.int(forColumn: field_itemID)),
                                        itemText: results.string(forColumn: field_itemText),
                                        itemDate: results.string(forColumn: field_itemDate),
                                        itemIsDone: results.bool(forColumn: field_itemIsDone)
                        
                    )
                    if toDos == nil {
                        toDos = [toDoInfo]()
                    }
                    
                    toDos.append(toDo)

                }
            }
            catch{
            print(error.localizedDescription)
            }
            database.close()
        }
        return toDos
    }
    
    func loadToDo(withID ID: Int, completionHandler: (_ todoInfo:toDoInfo?) -> Void) {
        var todoInfo: toDoInfo!
        
        if openDatabase(){
            let query = "select * from toDo where \(field_itemID)"
            do{
                let results = try database.executeQuery(query, values :[ID])
                
                if results.next(){
                    todoInfo = toDoInfo(itemID: Int(results.int(forColumn: field_itemID)),
                                        itemText: results.string(forColumn: field_itemText),
                                        itemDate: results.string(forColumn: field_itemDate),
                                        itemIsDone: results.bool(forColumn: field_itemIsDone)
                    )
                    
                }
                else{
                    print(database.lastError())
                }
            }
            catch {
                print(error.localizedDescription)
            }
            
            database.close()
        }
        
        completionHandler(todoInfo)
    }
    
    func setToDoDone(withID ID: Int, Done: Bool) {
        if openDatabase() {
            let query = "update toDo set \(field_itemIsDone)=? where \(field_itemID)=?"
            
            do {
                try database.executeUpdate(query, values: [Done, ID])
            }
            catch {
                print(error.localizedDescription)
            }
            
            database.close()
        }
    }
    
    func deleteToDo(withID ID: Int) -> Bool {
        var deleted = false
        
        if openDatabase() {
            let query = "delete from toDo where \(field_itemID)=?"
            
            do {
                try database.executeUpdate(query, values: [ID])
                deleted = true
            }
            catch {
                print(error.localizedDescription)
            }
            
            database.close()
        }
        
        return deleted
    }
    
}
```

#swift

