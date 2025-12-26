---
author:
title: Python格式读入
date: 2025-12-23
icon: "fluent-emoji-flat:input-numbers"
cover:
order:
category:
  - daily
  - docs
  - Python
tags:
  - python输入
footer:
copyright:
sticky: false
star: false
uid: FBFLDFFHFDBTJP
imageNameKey: FBFLDFFHFDBTJP
---

## 总结

思维顺序：
1 看输入 **是不是一行多个值**  
→ `split()`

2 看 **每个值的类型**
- 全 int → `map(int, ...)`
- 混合 → 先 split 再手动转

3 看 **是不是不定长**
- 是 → `list(...)`
- 否 → 解包 `a, b, c`

```python
# 一行多个整数
a, b, c = map(int, input().split())

# 一行不定长整数
arr = list(map(int, input().split()))

# n 行 m 列
n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]

# 字符串 / 字符数组
s = input().strip()
chars = list(s)
```



## 1 一行多个整数

### 1.1 空格分隔整数

输入：
```
1 2 3
```

代码：
```python
a, b, c = map(int, input().split())
```

等价展开理解：
```python
line = input()          # "1 2 3"
parts = line.split()    # ["1", "2", "3"]
nums = map(int, parts)  # 迭代器
a, b, c = nums
```

---
### 1.2 不确定数量（存成列表）

```python
arr = list(map(int, input().split()))
```

例：

```
5 3 8 10
```

结果：

```python
arr = [5, 3, 8, 10]
```

---

## 2 混合类型输入

### 2.1 int + int + str

输入：

```
10 20 abc
```

代码：

```python
a, b, s = input().split()
a = int(a)
b = int(b)
```

---

### 2.2 int + float

```
3 4.5
```

```python
a, b = input().split()
a = int(a)
b = float(b)
```

---

## 3 多行 + 一行多个输入

### 3.1 第一行是 n，第二行是 n 个数

```
5
1 2 3 4 5
```

```python
n = int(input())
arr = list(map(int, input().split()))
```


---

### 3.2 多行多列（矩阵）

```
3 4
1 2 3 4
5 6 7 8
9 10 11 12
```

```python
n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]
```

---

## 4 字符串相关

### 4.1 一行字符串，不拆字符

```
abcdef
```

```python
s = input().strip()
```


---

### 4.2 一行字符数组（无空格）

```
10101
```

```python
arr = list(map(int, input().strip()))
# [1,0,1,0,1]
```

---

### 4.3 字符 + 数字混合（比如棋盘）

```
.#..#
```

```python
row = list(input().strip())
```

---

## 5 特殊分隔符

### 5.1 逗号分隔

```
1,2,3,4
```

```python
arr = list(map(int, input().split(',')))
```

---

### 5.2 多种空白（tab / 多空格）

```python
arr = list(map(int, input().split()))
```

`split()` **自动处理任意空白**

---

## 6 进阶：sys.stdin

读很多行（性能向）、sys.stdin（刷大数据题）

```python
import sys

data = sys.stdin.read().strip().split()
nums = list(map(int, data))
```

或者逐行：

```python
import sys
for line in sys.stdin:
    a, b = map(int, line.split())
```

---

## 7 常见坑

### 7.1 忘了转类型

```python
a, b = input().split()
print(a + b)  # 字符串拼接！
```

---

### 7.2 输入数目不匹配

```python
a, b = map(int, input().split())  # 但输入是 3 个数
```

报`ValueError`

---

### 7.3 `map` 只能用一次

```python
it = map(int, input().split())
print(list(it))
print(list(it))  # 空
```

`map`返回的是迭代器。

