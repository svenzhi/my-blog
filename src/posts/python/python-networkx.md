---
author:
title: Python networkx
date: 2025-12-25
icon: streamline-cyber:network
cover:
order:
category:
  - daily
  - docs
  - Python
tags:
  - Python
  - 图
footer:
copyright:
sticky: false
star: false
uid: EAEKCEEKCACEGM
imageNameKey: EAEKCEEKCACEGM
---


## 1 图类型创建

```python
import networkx as nx

# 无向图
G = nx.Graph()
# 有向图
DG = nx.DiGraph()
# 多重图
MG = nx.MultiGraph()
# 多重有向图
MDG = nx.MultiDiGraph()
```

## 2 节点操作

### 添加/删除节点
```python
G.add_node(node)                # 添加单个节点
G.add_nodes_from([n1, n2, n3]) # 添加多个节点
G.remove_node(node)            # 删除节点
G.remove_nodes_from([n1, n2])  # 删除多个节点
G.number_of_nodes()            # 节点数量
```

### 节点属性
```python
G.nodes(data=True)             # 获取所有节点及属性
G.nodes[n]                     # 获取节点n的属性
G.nodes[n]['attr'] = value     # 设置节点属性
```

## 3 边操作

### 3.1 添加/删除边
```python
G.add_edge(u, v)               # 添加边
G.add_edges_from([(u,v), (v,w)]) # 添加多条边
G.add_weighted_edges_from([(u,v,weight)]) # 带权重边
G.remove_edge(u, v)            # 删除边
G.remove_edges_from([(u,v)])   # 删除多条边
G.number_of_edges()            # 边数量
```

### 3.2 边属性
```python
G.edges(data=True)             # 获取所有边及属性
G.edges[u, v]                  # 获取边属性
G[u][v]                        # 获取边属性（另一种方式）
G[u][v]['weight'] = 5         # 设置边权重
```

## 4 图信息查询

### 4.1 基本查询
```python
G.order()                      # 节点数
G.size()                       # 边数
G.has_node(node)              # 检查节点是否存在
G.has_edge(u, v)              # 检查边是否存在
G.neighbors(node)             # 节点的邻居
G.degree(node)                # 节点的度
G.degree()                     # 所有节点的度
G.in_degree(node)             # 有向图入度
G.out_degree(node)            # 有向图出度
```

### 4.2 子图相关
```python
G.subgraph([n1, n2, n3])      # 从节点创建子图
G.edge_subgraph([(u,v), (v,w)]) # 从边创建子图
```

## 5 遍历算法

### 5.1 搜索算法
```python
nx.bfs_tree(G, source)        # BFS树
nx.dfs_tree(G, source)        # DFS树
nx.bfs_edges(G, source)       # BFS边遍历
nx.dfs_edges(G, source)       # DFS边遍历
```

### 5.2 路径查找
```python
nx.shortest_path(G, source, target)          # 最短路径
nx.all_shortest_paths(G, source, target)     # 所有最短路径
nx.shortest_path_length(G, source, target)   # 最短路径长度
nx.average_shortest_path_length(G)           # 平均最短路径长度
```

## 6 图算法

### 6.1 连通性
```python
nx.is_connected(G)              # 是否连通
nx.connected_components(G)      # 连通分量
nx.number_connected_components(G) # 连通分量数量
nx.node_connected_component(G, node) # 节点所在的连通分量
```

### 6.2 中心性度量
```python
nx.degree_centrality(G)         # 度中心性
nx.betweenness_centrality(G)    # 介数中心性
nx.closeness_centrality(G)      # 接近中心性
nx.eigenvector_centrality(G)    # 特征向量中心性
nx.pagerank(G)                  # PageRank
```

### 6.3 聚类系数
```python
nx.clustering(G)               # 节点聚类系数
nx.average_clustering(G)       # 平均聚类系数
nx.transitivity(G)             # 传递性
```

## 7 生成器函数

### 7.1 经典图
```python
nx.complete_graph(n)          # 完全图
nx.path_graph(n)              # 路径图
nx.cycle_graph(n)             # 环图
nx.star_graph(n)              # 星图
nx.wheel_graph(n)             # 轮图
nx.grid_2d_graph(m, n)       # 二维网格
```

### 7.2 随机图
```python
nx.erdos_renyi_graph(n, p)    # ER随机图
nx.watts_strogatz_graph(n, k, p) # WS小世界
nx.barabasi_albert_graph(n, m)  # BA无标度网络
```

## 8 图操作

### 图修改
```python
G.to_undirected()            # 转为无向图
G.to_directed()              # 转为有向图
nx.complement(G)             # 补图
nx.reverse(G)               # 有向图反转
```

### 图合并
```python
nx.union(G, H)              # 并集
nx.disjoint_union(G, H)     # 不相交并集
nx.compose(G, H)            # 组合
nx.cartesian_product(G, H)  # 笛卡尔积
```

## 9 可视化
```python
nx.draw(G)                  # 基本绘图
nx.draw_networkx(G)         # 带标签绘图
nx.draw_spring(G)          # 使用spring布局
nx.draw_circular(G)        # 环形布局
nx.draw_random(G)          # 随机布局
nx.draw_spectral(G)        # 谱布局
```

## 10 文件I/O
```python
nx.write_adjlist(G, "file.adjlist")      # 邻接列表
nx.read_adjlist("file.adjlist")
nx.write_edgelist(G, "file.edgelist")    # 边列表
nx.read_edgelist("file.edgelist")
nx.write_gml(G, "file.gml")             # GML格式
nx.read_gml("file.gml")
nx.write_graphml(G, "file.graphml")     # GraphML格式
nx.read_graphml("file.graphml")
```

## 11 高级功能

### 度量指标
```python
nx.density(G)                # 图密度
nx.diameter(G)              # 直径
nx.radius(G)                # 半径
nx.eccentricity(G)          # 偏心距
nx.center(G)                # 中心节点
nx.periphery(G)             # 外围节点
```

### 匹配与流
```python
nx.max_weight_matching(G)    # 最大权重匹配
nx.maximum_flow(G, s, t)     # 最大流
nx.minimum_cut(G, s, t)      # 最小割
```

这只是一部分常用方法，NetworkX库非常丰富。查看完整文档：
```python
# 查看所有方法
dir(G)

# 查看具体方法的文档
help(G.add_node)
```

需要特定功能时，建议查阅[官方文档](https://networkx.org/documentation/stable/reference/index.html)。