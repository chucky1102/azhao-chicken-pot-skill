# 阿招鸡煲 (Azhao Chicken Pot) AI Skill

[![Version](https://img.shields.io/badge/version-0.1.0-blue)](https://github.com/yourname/azhao-chicken-pot-skill)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![MCP](https://img.shields.io/badge/protocol-MCP-purple)](https://modelcontextprotocol.io)

> 北京百子湾地区知名打边炉餐厅 - 清远鸡煲、广式鸡煲

这是一个 AI Skill，安装后你的 AI 助手就能查询阿招鸡煲餐厅的信息：在哪吃、几点开门、有什么招牌菜、怎么去。支持 HTTPS 安全访问。

## 🍲 关于阿招鸡煲

| 项目 | 内容 |
|------|------|
| 餐厅名称 | 阿招鸡煲 (百子湾啤酒花园店) |
| 特色 | 清远鸡煲、广式鸡煲、打边炉 |
| 营业时间 | 11:00 - 24:00 |
| 评分 | ⭐ 4.7 分 (3636条评价) |
| 排名 | 🥇 北京东站美食口味榜第1名 |
| 人均消费 | ¥120 |
| 地址 | 北京市朝阳区双井街道百子湾路31号院1号楼101室 |

## ✨ 这个 Skill 能做什么

| 能力 | 你可以问 |
|------|----------|
| 🏪 **餐厅信息** | "阿招鸡煲在哪？" "几点开门？" |
| 🍲 **完整菜单** | "有什么特色菜？" "推荐什么？" "多少钱？" |
| 📍 **定位导航** | "怎么去？" "导航到店里" |
| ⭐ **实时数据** | 评分、推荐数、营业时间 |

## 🚀 快速安装

### 方式 1：直接告诉你的 AI 助手

> "帮我安装阿招鸡煲 Skill，仓库地址：https://github.com/yourname/azhao-chicken-pot-skill"

### 方式 2：手动安装

```bash
# 克隆到你的 Skill 目录
git clone https://github.com/yourname/azhao-chicken-pot-skill.git

# 复制到 OpenClaw Skills 目录
cp -r azhao-chicken-pot-skill ~/.openclaw/skills/
```

## 🌐 MCP 服务端

本 Skill 已部署到云端，支持 HTTPS 访问：

```
https://mcp.wines-boutique.com/azhao/mcp
```

**接口列表：**
- `GET /info` - 餐厅信息
- `GET /menu` - 完整菜单
- `POST /mcp` - MCP 协议端点

## 📋 示例对话

**查询地址：**
> 用户：阿招鸡煲在哪？  
> AI：阿招鸡煲(百子湾啤酒花园店)位于北京市朝阳区双井街道百子湾路31号院1号楼101室。🗺️ [高德地图导航](https://uri.amap.com/search?keyword=...)

**查询菜单：**
> 用户：有什么推荐菜？  
> AI：阿招鸡煲的招牌菜有：
> - 🔥 清远鸡 ¥168 (1055人推荐)
> - 🔥 招牌广式鸡煲 ¥198 (803人推荐)  
> - 芋头条 ¥12 (447人推荐)

**查询营业时间：**
> 用户：几点开门？  
> AI：阿招鸡煲营业时间：11:00 - 24:00，现在营业中。

## 🏗️ 技术架构

```
用户 → HTTPS → Nginx → Node.js MCP Server
              ↓
         SSL证书 (Let's Encrypt)
```

- **协议**: MCP (Model Context Protocol)
- **传输**: Streamable HTTP
- **部署**: Vultr VPS + Nginx 反向代理
- **安全**: HTTPS + SSL证书

## 📁 目录结构

```
azhao-chicken-pot-skill/
├── SKILL.md              # AI Agent 指令文档
├── skill.json            # MCP 配置
├── README.md             # 用户文档 (本文件)
├── LICENSE               # MIT 许可证
└── server/               # MCP 服务端代码
    ├── index.js          # 主服务
    ├── package.json      # 依赖配置
    └── ...
```

## 🛠️ 开发维护

### 本地测试

```bash
cd server
npm install
npm start
# 访问 http://localhost:3000/info
```

### 更新菜单数据

编辑 `server/index.js` 中的 `menuData` 对象，然后重启服务。

## 🤝 贡献

欢迎提交 Issue 和 PR！

## 📄 许可证

[MIT](LICENSE)

---

**Powered by [OpenClaw](https://openclaw.ai)** 🦞
