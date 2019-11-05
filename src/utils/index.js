/**
 * @description 公用方法文件，供全局使用
 * @author dalei
 */

export default {
  /**
   * @description 根据当前时间，返回早上/中午/下午/晚上 好
   */
  timeFix: () => {
    const time = new Date();
    const hour = time.getHours();
    return hour < 9 ?
      '早上好' :
      hour <= 11 ?
      '上午好' :
      hour <= 13 ?
      '中午好' :
      hour < 20 ?
      '下午好' :
      '晚上好';
  } 
};
