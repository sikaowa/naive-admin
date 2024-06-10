import { resultSuccess } from '../_util';

const tableList = (page) => {
  return page === 1
    ? [
        {
          id: 659962,
          no: 6965078,
          name: '文洋',
          avatar: 'http://dummyimage.com/400x400/79f29b/f27979&text=Joseph',
          address: '台北市',
          beginTime: '1982-08-20 04:10:02',
          endTime: '1975-01-12 02:09:40',
          status: false,
          date: '1984-11-08',
          time: '21:40',
        },
        {
          id: 818440,
          no: 2032345,
          name: '冯涛',
          avatar: 'http://dummyimage.com/400x400/799df2/c0f279&text=Donna',
          address: '九龙',
          beginTime: '1991-12-29 20:44:54',
          endTime: '2002-05-27 12:09:35',
          status: false,
          date: '1993-11-04',
          time: '18:56',
        },
        {
          id: 212788,
          no: 9668086,
          name: '卢桂英',
          avatar: 'http://dummyimage.com/400x400/f279e3/79f2dd&text=Sarah',
          address: '毕节市',
          beginTime: '2006-02-04 17:37:27',
          endTime: '2007-03-13 12:15:59',
          status: false,
          date: '1984-05-07',
          time: '13:47',
        },
        {
          id: 23986,
          no: 6841254,
          name: '董秀英',
          avatar: 'http://dummyimage.com/400x400/f2ba79/9679f2&text=Deborah',
          address: '香港岛',
          beginTime: '2016-03-28 12:39:23',
          endTime: '1990-08-19 05:20:46',
          status: true,
          date: '1997-04-20',
          time: '05:26',
        },
        {
          id: 318041,
          no: 1476802,
          name: '周秀兰',
          avatar: 'http://dummyimage.com/400x400/7ef279/f279a2&text=Laura',
          address: '阿里地区',
          beginTime: '2016-08-04 23:48:29',
          endTime: '2005-05-02 09:28:46',
          status: true,
          date: '1997-11-14',
          time: '13:42',
        },
        {
          id: 228323,
          no: 8883045,
          name: '吕超',
          avatar: 'http://dummyimage.com/400x400/79c5f2/e8f279&text=Linda',
          address: '内江市',
          beginTime: '1989-02-22 14:08:54',
          endTime: '2009-10-30 23:04:49',
          status: true,
          date: '2016-07-19',
          time: '05:51',
        },
        {
          id: 5347,
          no: 7551218,
          name: '黎丽',
          avatar: 'http://dummyimage.com/400x400/d879f2/79f2b4&text=William',
          address: '辽源市',
          beginTime: '1974-07-29 13:43:47',
          endTime: '2012-08-27 23:27:05',
          status: true,
          date: '1976-07-14',
          time: '22:50',
        },
        {
          id: 287642,
          no: 4410781,
          name: '孙秀兰',
          avatar: 'http://dummyimage.com/400x400/f29179/7984f2&text=Gary',
          address: '汉中市',
          beginTime: '1979-12-06 09:22:28',
          endTime: '1972-06-20 02:53:21',
          status: false,
          date: '1988-01-01',
          time: '00:01',
        },
        {
          id: 352276,
          no: 1342992,
          name: '谢涛',
          avatar: 'http://dummyimage.com/400x400/a7f279/f279ca&text=Daniel',
          address: '苏州市',
          beginTime: '2019-10-29 20:53:32',
          endTime: '1977-09-17 01:41:39',
          status: true,
          date: '1970-06-09',
          time: '22:39',
        },
        {
          id: 509832,
          no: 8171697,
          name: '邵杰',
          avatar: 'http://dummyimage.com/400x400/79eef2/f2d379&text=Paul',
          address: '巢湖市',
          beginTime: '1994-04-07 06:46:03',
          endTime: '1974-03-16 01:28:24',
          status: false,
          date: '1988-11-11',
          time: '19:10',
        },
      ]
    : [
        {
          id: 601173,
          no: 9911085,
          name: '乔涛',
          avatar: 'http://dummyimage.com/400x400/79e3f2/f2dd79&text=Jennifer',
          address: '阳泉市',
          beginTime: '1997-03-14 06:52:04',
          endTime: '1989-05-23 13:14:14',
          status: false,
          date: '1988-12-15',
          time: '04:42',
        },
        {
          id: 328638,
          no: 720053,
          name: '郝明',
          avatar: 'http://dummyimage.com/400x400/ba79f2/79f296&text=Anthony',
          address: '吴忠市',
          beginTime: '1991-09-19 21:15:47',
          endTime: '1977-04-04 06:45:09',
          status: false,
          date: '2014-08-30',
          time: '14:41',
        },
        {
          id: 274363,
          no: 3776909,
          name: '贾洋',
          avatar: 'http://dummyimage.com/400x400/f2797e/79a2f2&text=Sandra',
          address: '吉安市',
          beginTime: '2011-06-06 01:50:26',
          endTime: '2000-03-29 13:02:10',
          status: true,
          date: '1985-11-10',
          time: '01:11',
        },
        {
          id: 627841,
          no: 4226993,
          name: '尹磊',
          avatar: 'http://dummyimage.com/400x400/c5f279/f279e8&text=Ruth',
          address: '新界',
          beginTime: '1972-01-22 02:49:21',
          endTime: '1994-12-10 14:33:11',
          status: true,
          date: '2017-05-29',
          time: '18:28',
        },
        {
          id: 853120,
          no: 8772153,
          name: '尹静',
          avatar: 'http://dummyimage.com/400x400/79f2d8/f2b579&text=Lisa',
          address: '抚顺市',
          beginTime: '2018-10-31 07:40:52',
          endTime: '2011-08-24 18:50:10',
          status: true,
          date: '1984-10-09',
          time: '06:00',
        },
        {
          id: 973847,
          no: 8594801,
          name: '毛涛',
          avatar: 'http://dummyimage.com/400x400/9179f2/83f279&text=Maria',
          address: '钦州市',
          beginTime: '1970-05-10 20:00:00',
          endTime: '1986-12-10 12:23:18',
          status: true,
          date: '1981-01-31',
          time: '09:39',
        },
        {
          id: 366765,
          no: 9291682,
          name: '方秀英',
          avatar: 'http://dummyimage.com/400x400/f279a7/79caf2&text=Laura',
          address: '昌都地区',
          beginTime: '1980-05-12 22:54:51',
          endTime: '1998-11-13 16:11:40',
          status: true,
          date: '1996-02-23',
          time: '00:33',
        },
        {
          id: 145082,
          no: 4062636,
          name: '范艳',
          avatar: 'http://dummyimage.com/400x400/edf279/d379f2&text=Angela',
          address: '连江县',
          beginTime: '2001-03-19 23:58:41',
          endTime: '2003-02-02 07:36:33',
          status: false,
          date: '2018-03-01',
          time: '11:44',
        },
        {
          id: 175542,
          no: 9194674,
          name: '刘秀英',
          avatar: 'http://dummyimage.com/400x400/79f2af/f28c79&text=Maria',
          address: '唐山市',
          beginTime: '2018-05-07 16:06:35',
          endTime: '2000-04-26 12:54:37',
          status: false,
          date: '1999-07-16',
          time: '15:37',
        },
        {
          id: 647222,
          no: 3466012,
          name: '尹艳',
          avatar: 'http://dummyimage.com/400x400/7989f2/acf279&text=Brenda',
          address: '离岛',
          beginTime: '1994-12-25 10:58:49',
          endTime: '1978-05-31 23:23:37',
          status: false,
          date: '2018-10-16',
          time: '19:58',
        },
      ];
};

export default [
  //表格数据列表
  {
    url: '/api/table/select',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 3 } = query;
      const list = tableList(Number(page));
      return resultSuccess({
        page: Number(page),
        pageSize: Number(pageSize),
        pageCount: 2,
        itemCount: 20,
        list,
      });
    },
  },
];
