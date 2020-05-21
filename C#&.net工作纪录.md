### C#工作记录
描述：
##### 1.List分组去重
```c#
var items = lists.GroupBy(p => p.CartonNo).Select(g => g.First()).ToList();
```

##### 2.git 详细的更改： git show commitid

```
只列出文件名：git show --pretty="format:" --name-only b8f58881c45c37fa0791fe1c446372f23b7fd3a5 
```

##### 3.git强制覆盖：

   git fetch --all

   git reset --hard origin/master

   git pull

##### 4.数据库

```sql
set identity_insert STF_USER_SKILL ON--打开

insert into STF_USER_SKILL(id,ADM_USER_ID,ADM_SKILL_ID)
values(1,1,1)

set identity_insert STF_USER_SKILL OFF
```

