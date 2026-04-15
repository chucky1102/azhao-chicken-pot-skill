const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());

// 餐厅数据 - 百子湾啤酒花园店
const restaurantData = {
  name: "阿招鸡煲(百子湾啤酒花园店)",
  description: "北京朝阳区的打边炉餐厅，主打清远鸡煲和广式鸡煲",
  business_hours: "11:00 - 24:00",
  rating: 4.7,
  reviews: 3636,
  price_per_person: 120,
  ranking: "北京东站美食口味榜第1名",
  phone: ["13401024449", "18612238612"],
  locations: [
    {
      name: "百子湾啤酒花园店",
      address: "北京市朝阳区百子湾路31号院1号楼101室",
      detail: "距九龙山路与百子湾路交叉口30m",
      shop_id: "1756895741"
    }
  ]
};

const menuData = {
  signature_dishes: [
    { name: "清远鸡", description: "招牌，39人推荐", tag: "本地鸡窝火锅" },
    { name: "招牌广式鸡煲", description: "26人推荐" },
    { name: "芋头条", description: "23人推荐" },
    { name: "鸡汤", description: "鲜美汤底" }
  ],
  categories: ["打边炉", "本地鸡窝", "清远鸡", "广式鸡煲"]
};

const deliveryInfo = {
  available: true,
  platforms: ["美团外卖"],
  note: "搜索'阿招鸡煲'即可下单",
  promotion: "平台补贴·每日开红包，兑80元无门槛优惠券"
};

const wifiInfo = {
  ssid: "AzhaoChicken",
  password: "88888888"
};

const latestNews = [
  { date: "2026-04-15", content: "平台补贴·每日开红包，兑80元无门槛优惠券" },
  { date: "2026-04-01", content: "清明节正常营业，欢迎来吃打边炉" }
];

// MCP 工具列表
const tools = [
  {
    name: "get_restaurant_info",
    description: "查询阿招鸡煲的基本信息",
    inputSchema: { type: "object", properties: {}, required: [] }
  },
  {
    name: "get_menu_info",
    description: "查询特色菜品",
    inputSchema: { type: "object", properties: {}, required: [] }
  },
  {
    name: "get_delivery_info",
    description: "查询外卖服务",
    inputSchema: { type: "object", properties: {}, required: [] }
  },
  {
    name: "get_wifi_info",
    description: "查询Wi-Fi密码",
    inputSchema: { type: "object", properties: {}, required: [] }
  },
  {
    name: "get_latest_news",
    description: "查询最新动态",
    inputSchema: { type: "object", properties: {}, required: [] }
  }
];

// MCP 端点：工具列表
app.post('/mcp', (req, res) => {
  const { method, id } = req.body;
  
  if (method === 'tools/list') {
    return res.json({
      jsonrpc: "2.0",
      id,
      result: { tools }
    });
  }
  
  if (method === 'tools/call') {
    const { name } = req.body.params;
    
    switch (name) {
      case 'get_restaurant_info':
        return res.json({
          jsonrpc: "2.0",
          id,
          result: {
            content: [{
              type: "text",
              text: JSON.stringify(restaurantData, null, 2)
            }]
          }
        });
        
      case 'get_menu_info':
        return res.json({
          jsonrpc: "2.0",
          id,
          result: {
            content: [{
              type: "text",
              text: JSON.stringify(menuData, null, 2)
            }]
          }
        });
        
      case 'get_delivery_info':
        return res.json({
          jsonrpc: "2.0",
          id,
          result: {
            content: [{
              type: "text",
              text: JSON.stringify(deliveryInfo, null, 2)
            }]
          }
        });
        
      case 'get_wifi_info':
        return res.json({
          jsonrpc: "2.0",
          id,
          result: {
            content: [{
              type: "text",
              text: JSON.stringify(wifiInfo, null, 2)
            }]
          }
        });
        
      case 'get_latest_news':
        return res.json({
          jsonrpc: "2.0",
          id,
          result: {
            content: [{
              type: "text",
              text: JSON.stringify(latestNews, null, 2)
            }]
          }
        });
        
      default:
        return res.json({
          jsonrpc: "2.0",
          id,
          error: { code: -32601, message: "Method not found" }
        });
    }
  }
  
  res.json({
    jsonrpc: "2.0",
    id,
    error: { code: -32600, message: "Invalid Request" }
  });
});

// 简单的 GET 接口供测试
app.get('/info', (req, res) => {
  res.json(restaurantData);
});

app.get('/menu', (req, res) => {
  res.json(menuData);
});

app.get('/wifi', (req, res) => {
  res.json(wifiInfo);
});

app.listen(PORT, () => {
  console.log(`🚀 MCP Server running on port ${PORT}`);
  console.log(`📋 Test endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/info`);
  console.log(`   GET  http://localhost:${PORT}/menu`);
  console.log(`   POST http://localhost:${PORT}/mcp`);
});