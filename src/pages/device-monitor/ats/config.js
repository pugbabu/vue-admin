/**
 * @description 来源
 */
export const sourceId = [{
    key: 1,
    value: 'LCW'
  },
  {
    key: 2,
    value: '中心ATS'
  },
  {
    key: 0,
    value: '-'
  }
];
/**
 * @description 操作结果
 */
export const resultCode = [{
    key: 0,
    value: '操作成功'
  },
  {
    key: 1,
    value: '操作失败'
  },
];
/**
 * @description 操作类型
 * @description 十六进制：0x03F1  十进制：1009 安全首次操作
 * @description 十六进制：0x01A0  十进制：416 安全操作即时应答
 * @description 十六进制：0x01A1  十进制：417 安全操作确认应答
 * @description 十六进制：0x01A2  十进制：418 安全操作执行结果
 */
export const opType = [{
    key: 1009,
    value: '安全首次操作'
  },
  {
    key: 416,
    value: '安全操作即时应答'
  },
  {
    key: 417,
    value: '安全操作确认应答'
  },
  {
    key: 418,
    value: '安全操作执行结果'
  },
];
/**
 * @description 操作子类型
 * @description 十六进制：0x0101  十进制：257 区段解封
 * @description 十六进制：0x0102  十进制：258 区故解
 * @description 十六进制：0x0103  十进制：259 计轴复位
 * @description 十六进制：0x0104  十进制：260 计轴预复位
 * @description 十六进制：0x0201  十进制：513 计轴故障区域清楚
 * @description 十六进制：0x0301  十进制：769 道岔封解
 * @description 十六进制：0x0302  十进制：770 道岔单解
 * @description 十六进制：0x0303  十进制：771 道岔强扳
 * @description 十六进制：0x0401  十进制：1025 信号机封解
 * @description 十六进制：0x0402  十进制：1026 保护区段人工取消
 * @description 十六进制：0x0501  十进制：1281 屏蔽门报警确认
 * @description 十六进制：0x0601  十进制：1537 设备操作响应
 * @description 十六进制：0x0A01  十进制：2561 设置临时限速
 * @description 十六进制：0x0A02  十进制：2562 临时限速初始化
 * @description 十六进制：0x0A0A  十进制：2570 FRONTAM临时限速设置
 * @description 十六进制：0x0A0B  十进制：2571 FRONTAM临时限速确认
 * @description 十六进制：0x0B01  十进制：2817 UTO安全控制
 * @description 十六进制：0x0C01  十进制：3073 ZC列车异常重写
 * @description 十六进制：0x0C0A  十进制：3082 FRONTAM列车完整性丢失报警设置
 * @description 十六进制：0x0C0B  十进制：3083 FRONTAM列车完整性丢失报警确认
 * @description 十六进制：0x0D01  十进制：3329 设置全区域FAM模式
 * 
 */
export const opSubType = [{
    key: 257,
    value: '区段解封'
  },
  {
    key: 258,
    value: '区故解'
  },
  {
    key: 259,
    value: '计轴复位'
  },
  {
    key: 260,
    value: '计轴预复位'
  },
  {
    key: 513,
    value: '计轴故障区域清楚'
  },
  {
    key: 769,
    value: '道岔封解'
  },
  {
    key: 770,
    value: '道岔单解'
  },
  {
    key: 771,
    value: '道岔强扳'
  },
  {
    key: 1025,
    value: '信号机封解'
  },
  {
    key: 1026,
    value: '保护区段人工取消'
  },
  {
    key: 1281,
    value: '屏蔽门报警确认'
  },
  {
    key: 1537,
    value: '设备操作响应'
  },
  {
    key: 2561,
    value: '设置临时限速'
  },
  {
    key: 2562,
    value: '临时限速初始化'
  },
  {
    key: 2570,
    value: 'FRONTAM临时限速设置'
  },
  {
    key: 2571,
    value: 'FRONTAM临时限速确认'
  },
  {
    key: 2817,
    value: 'UTO安全控制'
  },
  {
    key: 3073,
    value: 'ZC列车异常重写'
  },
  {
    key: 3082,
    value: 'FRONTAM临时限速设置'
  },
  {
    key: 3083,
    value: 'FRONTAM列车完整性丢失报警确认'
  },
  {
    key: 3329,
    value: '设置全区域FAM模式'
  },
];

/**
 * @description 处理后台的字段数据
 * @param value 需要处理的值
 * @parma arr 字段配置数组
 * @returns str 处理后的值
 */
export function handleValue(value, arr) {
  let str = '未知';
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i].key) {
      str = arr[i].value;
      break;
    }
  }
  return str;
}