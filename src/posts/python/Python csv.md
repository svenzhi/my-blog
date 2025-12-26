---
author:
title: Python csv
date: 2025-12-26
icon: "material-symbols-light:csv-outline"
cover:
order:
category:
  - daily
  - docs
  - python
tags:
  - Python
  - CSV
  - 数据处理
footer:
copyright:
sticky: false
star: false
uid: EAEKCEEMCICIKM
imageNameKey: EAEKCEEMCICIKM
---

## 方式一：内置 `csv` 模块

### 列表


```python
import csv

rows = [
    ["id", "name", "score"],
    [1, "Alice", 95],
    [2, "Bob", 88],
    [3, "Charlie", 92],
]

with open("output.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(rows)

print("CSV 写入完成")
```

说明：
- `newline=""`：**必须**，否则 Windows 下会多空行
- `encoding="utf-8"`：防止中文乱码


### 字典

```python
import csv

data = [
    {"id": 1, "name": "Alice", "score": 95},
    {"id": 2, "name": "Bob", "score": 88},
    {"id": 3, "name": "Charlie", "score": 92},
]

fieldnames = ["id", "name", "score"]

with open("output.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(data)

print("CSV 写入完成")
```

## 方式二：`pandas`

如果后面还要做分析、排序、统计，这个更舒服。

```python
import pandas as pd

data = [
    {"id": 1, "name": "Alice", "score": 95},
    {"id": 2, "name": "Bob", "score": 88},
    {"id": 3, "name": "Charlie", "score": 92},
]

df = pd.DataFrame(data)
df.to_csv("output.csv", index=False, encoding="utf-8")

print("CSV 写入完成")
```

## 常见坑

|问题|正确做法|
|---|---|
|多空行|`open(..., newline="")`|
|中文乱码|`encoding="utf-8"` 或 Excel 用 `utf-8-sig`|
|Excel 打开乱码|`encoding="utf-8-sig"`|
|覆盖写|用 `"w"`|
|追加写|用 `"a"`|
