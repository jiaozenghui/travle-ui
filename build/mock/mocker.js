const proxy = {
    'GET /api/data': {
      ret:true,
      data: {
        city: '北京',
        swiperList: [{
          id: '001',
          imgUrl: 'https://source.qunarzz.com/site/images/wns/20220301_qunar_dujia_homepage_a750x192_1.jpg'
        }, {
          id: '002',
          imgUrl: 'https://source.qunarzz.com/site/images/wns/20220217_qunar_dujia_homepage_a750x192_1.jpg'
        }],
        iconList: [{
          id: '001',
          imgUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
          desc: '热门景点'
        }, {
          id: '002',
          imgUrl: 'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',
          desc: '度假'
        }, {
          id: '003',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '机票'
        }, {
          id: '004',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '火车票'
        }, {
          id: '005',
          imgUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
          desc: '酒店'
        }, {
          id: '006',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
          desc: '自由行'
        }, {
          id: '007',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '攻略'
        }, {
          id: '008',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '海外酒店'
        }, {
          id: '009',
          imgUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
          desc: '一日游'
        }],
        recomendList: [
          {
            id: '001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/2110/65/65a2f3a8a47977aea3.water.jpg_200x200_1b038f5d.jpg',
            title: '北京环球度假区',
            desc: '好评如潮，小伙伴热推景点~'
          },
          {
            id: '002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/2108/62/6215a22f18d45a3ba3.water.jpg_200x200_d266c79f.jpg',
            title: '北京欢乐谷',
            desc: '亚洲唯一飞行式过山车等你来挑战'
          },
          {
            id: '003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
            title: '故宫博物馆',
            desc: '世界五大宫之首，穿越与您近在咫尺'
          },
          {
            id: '004',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
            title: '北京野生动物园',
            desc: '敢与森林之王近距离接触吗？'
          }
        ],
        weekendList: [
          {
            id: '001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/b2/b29346404fa3cebb90.water.jpg_640x276_0f0644db.jpg',
            title: '北京环球度假区',
            desc: '好评如潮，小伙伴热推景点~'
          },
          {
            id: '002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/43/dea8b51719a4a69b68777baa68c146e4.water.jpg_640x276_775c187f.jpg',
            title: '北京欢乐谷',
            desc: '亚洲唯一飞行式过山车等你来挑战'
          },
          {
            id: '003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/b2/b29346404fa3cebb90.water.jpg_640x276_0f0644db.jpg',
            title: '故宫博物馆',
            desc: '世界五大宫之首，穿越与您近在咫尺'
          },
          {
            id: '004',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/f7/f7bf42e9910aa1a3.img.jpg_640x276_8fe2222a.jpg',
            title: '北京野生动物园',
            desc: '敢与森林之王近距离接触吗？'
          }
        ]
      }
    },
    'GET /api/user/list': [
      { id: 1, username: 'kenny', sex: 6 },
      { id: 2, username: 'kenny', sex: 6 }
    ],
    'POST /api/login/account': (req, res) => {
      const { password, username } = req.body
      if (password === '888888' && username === 'admin') {
        return res.send({
          status: 'ok',
          code: 0,
          token: 'sdfsdfsdfdsf',
          data: { id: 1, username: 'kenny', sex: 6 }
        })
      } else {
        return res.send({ status: 'error', code: 403 })
      }
    },
    'DELETE /api/user/:id': (req, res) => {
      console.log('---->', req.body)
      console.log('---->', req.params.id)
      res.send({ status: 'ok', message: '删除成功！' })
    }
  }
  module.exports = proxy