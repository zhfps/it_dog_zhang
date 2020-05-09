### C#工作记录
描述：
##### 1.List分组去重
```c#
var items = lists.GroupBy(p => p.CartonNo).Select(g => g.First()).ToList();
```
