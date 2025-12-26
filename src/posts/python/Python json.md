---
author:
title: Python json
date: 2025-12-26
icon: "carbon:json"
cover:
order:
category:
  - daily
  - docs
  - Python
tags:
  - json
footer:
copyright:
sticky: false
star: false
uid: EAEKCEEMCMCKGM
imageNameKey: EAEKCEEMCMCKGM
---

## 保存JSON

```python
import json

data = {
    "name": "Alice",
    "age": 25,
    "skills": ["Python", "AI", "RAG"],
    "active": True
}

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
```

生成的 `data.json` 会是：

```json
{
  "name": "Alice",
  "age": 25,
  "skills": [
    "Python",
    "AI",
    "RAG"
  ],
  "active": true
}
```

参数说明

- `ensure_ascii=False`  
    保留中文，不会变成 `\u4e2d\u6587`
- `indent=2`  
	美化格式（缩进 2 个空格）
- `encoding="utf-8"`  
    防止中文乱码



### 不可JSON化的对象处理

```python
import json

data = {
    "nodes": {"A", "B", "C"}  # set 不能直接 dump
}

with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2, default=list)
```

`default=list` 会把 `set` 转成 `list`


## 函数封装

```python
import json
from pathlib import Path

def save_dict_to_json(data: dict, path: str | Path):
    path = Path(path)
    with path.open("w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
```

用法：

```python
save_dict_to_json(result_dict, "results.json")
```