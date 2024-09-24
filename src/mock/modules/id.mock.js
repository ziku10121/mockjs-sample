import Mock from 'mockjs';

var data = Mock.mock('/api/id',{
  // 屬性 list 的值是一個陣列，其中包含 1 到 10 個元素。
  'list|5': [{
    // 屬性id是一個自增數，起始值1，每次+1
    'id|+1': 1,
    'guid':'@guid',
    'id':'@id',
    'increment':'@increment(10)'
  }]
})
// 輸出結果
/**
 * @param 轉換的數據
 * @param 對轉換結果進行處理
 * @param 將轉換後的字符串數據格式化，用X個空格進行縮排
 */
// console.log(JSON.stringify(data, null, 2));