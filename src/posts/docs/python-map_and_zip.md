---
author:
title: Python函数 map、zip多参迭代对比
date: 2025-12-24
icon: "fluent-mdl2:compare"
cover:
order:
category:
  - daily
  - docs
tags:
  - Python
footer:
copyright:
sticky: false
star: false
uid: EAEKCEEICSIIAQ
imageNameKey: EAEKCEEICSIIAQ
---

## 1. 基本对比：`map` vs `zip`

```python
a = [1, 2, 3]
b = [4, 5, 6]

# map + lambda
result_map = list(map(lambda x, y: x + y, a, b))
print("map结果:", result_map)  # [5, 7, 9]

# zip + 列表推导式
result_zip = [x + y for x, y in zip(a, b)]
print("zip结果:", result_zip)  # [5, 7, 9]

# 直接查看zip的结果
print("zip对象:", list(zip(a, b)))  # [(1, 4), (2, 5), (3, 6)]
```

## 2. 不同长度序列的处理

```python
a = [1, 2, 3]
b = [4, 5, 6, 7, 8]  # b更长

# map：以最短的为准
result_map = list(map(lambda x, y: x + y, a, b))
print("map:", result_map)  # [5, 7, 9]

# zip：以最短的为准
result_zip = [x + y for x, y in zip(a, b)]
print("zip:", result_zip)  # [5, 7, 9]

# zip_longest：以最长的为准
from itertools import zip_longest
result_zip_longest = [x + y for x, y in zip_longest(a, b, fillvalue=0)]
print("zip_longest:", result_zip_longest)  # [5, 7, 9, 7, 8]
```

## 3. 传多个序列的 `map`

```python
# 三个序列
a = [1, 2, 3]
b = [4, 5, 6]
c = [7, 8, 9]

# 计算加权和
result = list(map(lambda x, y, z: x*0.3 + y*0.4 + z*0.3, a, b, c))
print(result)  # [4.0, 5.0, 6.0]

# 等价于
result2 = [x*0.3 + y*0.4 + z*0.3 for x, y, z in zip(a, b, c)]
print(result2)  # [4.0, 5.0, 6.0]
```

## 4. 与内置函数结合

```python
# 多个字符串拼接
names = ['Alice', 'Bob', 'Charlie']
ages = [25, 30, 35]
cities = ['NYC', 'LA', 'Chicago']

# 使用str.format
info = list(map(lambda n, a, c: f"{n} is {a} years old and lives in {c}", 
                names, ages, cities))
print(info)
# ['Alice is 25 years old and lives in NYC', 
#  'Bob is 30 years old and lives in LA', 
#  'Charlie is 35 years old and lives in Chicago']

# 计算多个数的最大值
nums1 = [1, 5, 3]
nums2 = [4, 2, 6]
nums3 = [3, 7, 2]

max_values = list(map(max, nums1, nums2, nums3))
print(max_values)  # [4, 7, 6]
```

## 5. 实际应用场景

```python
# 向量加法
vectors1 = [(1, 2), (3, 4), (5, 6)]
vectors2 = [(2, 3), (4, 5), (6, 7)]

result = list(map(lambda v1, v2: (v1[0]+v2[0], v1[1]+v2[1]), vectors1, vectors2))
print(result)  # [(3, 5), (7, 9), (11, 13)]

# 学生成绩计算
students = ['Alice', 'Bob', 'Charlie']
math_scores = [85, 90, 78]
english_scores = [88, 92, 80]

# 计算平均分
averages = list(map(lambda m, e: (m + e) / 2, math_scores, english_scores))
print(averages)  # [86.5, 91.0, 79.0]
```

## 6. 性能对比

```python
import time

a = list(range(1000000))
b = list(range(1000000))

# 方法1: map + lambda
start = time.time()
result1 = list(map(lambda x, y: x + y, a, b))
time1 = time.time() - start

# 方法2: 列表推导式 + zip
start = time.time()
result2 = [x + y for x, y in zip(a, b)]
time2 = time.time() - start

print(f"map + lambda: {time1:.4f}秒")
print(f"列表推导式 + zip: {time2:.4f}秒")
# 通常map会稍微快一点
```

## 7. 特殊用法

```python
# 使用None作为函数，相当于zip
pairs = list(map(None, [1, 2, 3], ['a', 'b', 'c']))
print(pairs)  # [(1, 'a'), (2, 'b'), (3, 'c')]

# 但注意：Python 3中map(None, ...)不再等同于zip
# 上面的代码在Python 3中会报错

# Python 3的正确写法
pairs = list(zip([1, 2, 3], ['a', 'b', 'c']))
print(pairs)  # [(1, 'a'), (2, 'b'), (3, 'c')]
```

## 8. 与 `starmap` 的对比

```python
from itertools import starmap

# 使用map：需要lambda解包
data = [(1, 2), (3, 4), (5, 6)]
result1 = list(map(lambda pair: pair[0] * pair[1], data))
print(result1)  # [2, 12, 30]

# 使用starmap：自动解包
result2 = list(starmap(lambda x, y: x * y, data))
print(result2)  # [2, 12, 30]

# 使用zip
result3 = [x * y for x, y in data]
print(result3)  # [2, 12, 30]
```

**总结比较**：

| 特性 | `map(func, *iterables)` | `zip(*iterables)` |
|------|-------------------------|-------------------|
| 主要目的 | 对元素应用函数 | 组合多个序列 |
| 返回值 | 函数结果迭代器 | 元组迭代器 |
| 函数参数 | 可以是任意函数 | 无函数参数 |
| 长度处理 | 以最短序列为准 | 以最短序列为准 |
| 性能 | 通常较快 | 稍慢但更灵活 |
| 可读性 | 函数式风格 | 命令式风格 |
