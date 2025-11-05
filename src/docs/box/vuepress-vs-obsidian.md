---
author:
title: VuePress 与 Obsidian 特性比对
isOriginal: true
date: 2025-11-04
icon: streamline-ultimate-color:content-pen-write-2
cover:
order:
tags:
  - 写作
  - Obsidian
  - VuePress
footer:
copyright:
sticky: false
star: false
uid: EAEKCCAICOAAIE
imageNameKey: EAEKCCAICOAAIE
---

>[!Tip]
>本站使用[Obsidian](https://obsidian.md/)进行写作、文件管理，使用[VuePress Theme Hope](https://theme-hope.vuejs.press/zh/)发布文章。二者虽都以Markdown语法为基础，但仍有些许不同及各自特性，本文用来尝试、分析二者功能交集，以便写作。


## 标注 VS GFM警告

> [!info]
> 如文章开头的被框起来的样式，在[Obsidian](https://obsidian.md/)中被称为[标注](https://publish.obsidian.md/help-zh/%E7%BC%96%E8%BE%91%E4%B8%8E%E6%A0%BC%E5%BC%8F%E5%8C%96/%E6%A0%87%E6%B3%A8)，在[VuePress Theme Hope](https://theme-hope.vuejs.press/zh/)中被称为[GFM 警告](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/alert)，二者语法相似甚至相同，但所表现外观不同。


|     |             Obsidian              | VuePress Theme Hope |     |
| :-: | :-------------------------------: | :-----------------: | --- |
|  1  |              `note`               |       `note`注       | 1   |
|  2  |  `abstract`，别名：`summary`，`tldr`   |                     |     |
|  3  |              `info`               |     `info`相关信息      | 2   |
|  4  |              `todo`               |                     |     |
|  5  |               `tip`               |       `tip`提示       | 3   |
|  6  |    `success`别名：`check`，`done`     |                     |     |
|  7  |    `question`,别名：`help`，`faq`     |                     |     |
|  8  | `warning`别名：`caution`，`attention` |     `warning`注意     | 4   |
|  9  |   `failure`别名：`fail`，`missing`    |                     |     |
| 10  |        `danger`，别名：`error`        |                     |     |
| 11  |               `bug`               |                     |     |
| 12  |             `example`             |                     |     |
| 13  |         `quote`别名：`cite`          |                     |     |
|     |                                   |     `caution`警告     | 5   |
|     |                                   |    `important`重要    | 6   |

> 效果对比
> 左侧为VuePress Theme Hope，右侧为Obsidian。


![](https://open-assets.itsven.cn/sven-docs/essay/EAEKCCAICOAAIE-1.png)

```
> [!note]
> 这是note。

> [!info]
> 这是info。

> [!tip]
> 这是tip。

> [!warning]
> 这是warning。
```

>[!note]
> Obsidian的标注还可以添加标题、折叠、嵌套以及自定义样式，也许后面我会尝试自定义一些Obsidian标注样式来实现VuePress Theme Hope存在，但Obsidian没有的样式或是统一二者交集样式。
> 
> 此外，对于Obsidian，除非使用[自定义标注](https://publish.obsidian.md/help-zh/%E7%BC%96%E8%BE%91%E4%B8%8E%E6%A0%BC%E5%BC%8F%E5%8C%96/%E6%A0%87%E6%B3%A8#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%87%E6%B3%A8)，否则任何不支持的类型都会默认为`note`类型。
 
 

## 图片缩放

VuePress Theme Hope支持Obsidian的图片缩放语法，具体可见[VuePress Theme Hope图片文档](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/image.html)、[Obsidian文档](https://publish.obsidian.md/help-zh/%E7%BC%96%E8%BE%91%E4%B8%8E%E6%A0%BC%E5%BC%8F%E5%8C%96/%E5%9F%BA%E6%9C%AC%E6%A0%BC%E5%BC%8F%E8%AF%AD%E6%B3%95#%E5%A4%96%E9%83%A8%E5%9B%BE%E7%89%87)。

[VuePress Theme Hope图片文档](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/image.html)摘录：
> 当在主题选项中设置`markdown.obsidianImgSize: true`时，可以在图片替代文字后面添加`widthxheight`，并用`|`分隔。
> `width`和`height`都应该是数字，单位为像素，并且都是必需的。设置其中一个为`0`将按比例缩放另一个。

![图片缩放示例|0x226](https://cn.bing.com/th?id=OHR.BuchsteinRossstein_ZH-CN4924477552_UHD.jpg)

```
![替代文字|200x200](/example.png)
![替代文字|200x0](/example.jpg)
![替代文字|0x300](/example.bmp)

![图片缩放示例|0x226](https://cn.bing.com/th?id=OHR.BuchsteinRossstein_ZH-CN4924477552_UHD.jpg)
```

>[!tip]
>Obsidian文档提及
>如果只指定了宽度，图片会根据原始长宽比进行缩放。例如：
>```
>![图片缩放示例|100](https://cn.bing.com/th?id=OHR.BuchsteinRossstein_ZH-CN4924477552_UHD.jpg)
>```
>经测试，VuePress-Theme-Hope不支持这样写。

