//引入mockjs模块
import Mock from "mockjs";
//引入JSON数据  //webpack默认对外暴露： 图片、JSON数据
import banner from './banner.json';
import floor from './floors.json';

//mock数据：第一个参数请求地址   第二个参数：请求数据
Mock.mock("/mock/banner",{code:200,data:banner});  //模拟首页大的轮播图的数据
Mock.mock("/mock/floors",{code:200,data:floor});
