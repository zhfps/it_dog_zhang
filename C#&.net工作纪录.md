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

##### 5.序列问题

create sequence PCBA_WO_SE
minvalue 1  --增长最小值
maxvalue 9999999999  --增长最大值,也可以设置NOMAXvalue -- 不设置最大值
start with 1  --从101开始计数
increment by 1  --自增步长为1
cache 50  --设置缓存cache个序列，如果系统down掉了或者其它情况将会导致序列不连续，也可以设置为---NOCACHE防止跳号
cycle; 

SELECT * FROM TCL_ODF_BOMLIST
      WHERE TCL_ODF_BOM_ID = 6035978
         AND (
							BAUGR LIKE '08-%-MA300AA' OR
              BAUGR LIKE '%-%-MP300AA'  OR 
							BAUGR LIKE '%-%-PW300AA'
              )
        AND (
							ARBPL = 'SUBN' OR
							ARBPL = 'HLSKDN' OR
							ARBPL = 'HZSUBN' OR
							ARBPL = 'HLSKD' OR
							ARBPL = 'ALSUB'
						)