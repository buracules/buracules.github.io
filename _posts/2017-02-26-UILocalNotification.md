---
layout: post
title:  "UILocalNotification"
author: "Burak Üstün"
date:   2017-03-24
categories: "Objective-C"
author: "Burak Üstün"
tags: [notification, objective-c]
---

Sabitler:

```objectivec
#define kTimerNameKey @"kTimerNameKey"
#define notificationSporAdi @"notificationSporAdi"
#define notificationPintogram @"notificationPintogram"
```

UILocalNotification Kurmak için :
```objectivec
+(void)createNotification:(NSString*)identifier :(NSString*)Body :(NSDate*)Date :(NSString*)pintogram
{
    NSDate *now = [NSDate date];
    NSTimeInterval Interval = [Date timeIntervalSinceDate:now];
    //Interval=15;
    now = [now dateByAddingTimeInterval:Interval];
    UILocalNotification* localNotification = [[UILocalNotification alloc] init];
    if(!localNotification)
        return;
    if(Interval<0)
        return;
    localNotification.fireDate = now;
    NSLog(@"Identifier : %@",identifier);
    NSDictionary *userInfo = [NSDictionary dictionaryWithObjectsAndKeys:identifier,kTimerNameKey,Body,notificationSporAdi,pintogram,notificationPintogram, nil];
    localNotification.userInfo = userInfo;
    localNotification.timeZone = [NSTimeZone systemTimeZone];
    NSString *language = [[[NSBundle mainBundle] preferredLocalizations] objectAtIndex:0];
        localNotification.alertBody = Body;
    if([language isEqualToString:@"tr"])
        localNotification.alertTitle = @"Hatırlatıcı";
    else
        localNotification.alertTitle = @"Reminder";
    localNotification.soundName = UILocalNotificationDefaultSoundName;
    [[UIApplication sharedApplication] scheduleLocalNotification:localNotification];
}
```


UILocalNotification için eşsiz identifier oluşturmak için :

```objectivec
+(NSString *)Identifier:(NSDate*)date :(NSString*)sporAdi :(NSString*)kategoriAdi;
{
    NSDateFormatter *dateFormatter=[[NSDateFormatter alloc] init];
    [dateFormatter setDateFormat:@"ddHHmm"];
    return [NSString stringWithFormat:@"%@%@-%@",kategoriAdi,sporAdi,[dateFormatter stringFromDate:date]];
}
```

UILocalNotification kurulu olup olmadığını kontrol etmek için :
```objectivec
+(BOOL)isAlarmSet:(NSString*)Identifier :(NSMutableArray*)arrayNotification
{
    UIApplication *app = [UIApplication sharedApplication];
    NSArray *eventArray = [app scheduledLocalNotifications];
    [arrayNotification removeAllObjects];
    [arrayNotification addObjectsFromArray:eventArray];
    for(int i=0;i<arrayNotification.count;i++)
    {
        if([Identifier isEqualToString:[[[arrayNotification objectAtIndex:i] userInfo] objectForKey:@"kTimerNameKey"]])
            return true;
    }
    return false;
}
```
