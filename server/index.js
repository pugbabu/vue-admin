let casual = require('casual');

const roleMap = [
  {
    label: '超级管理员',
    value: 1
  },
  {
    label: '管理员',
    value: 2
  },
  {
    label: '操作员A',
    value: 3
  },
  {
    label: '操作员B',
    value: 4
  }
];

const menus = [
  {
    id: '1',
    icon: 'table',
    path: '/sdm',
    name: 'SDM',
    title: 'SDM',
    children: [
      {
        id: '11',
        icon: '',
        path: '/sdm/zc',
        name: 'ZC',
        title: 'ZC'
      },
      {
        id: '12',
        icon: '',
        path: '/sdm/cc',
        name: 'CC',
        title: 'CC'
      },
    ]
  },
  {
    id: '2',
    icon: 'dashboard',
    path: '/ccm',
    name: 'CCM',
    title: 'CCM',
    children: [
      {
        id: '21',
        icon: '',
        path: '/ccm/zc',
        name: 'ZC',
        title: 'ZC'
      },
      {
        id: '22',
        icon: '',
        path: '/ccm/cc',
        name: 'CC',
        title: 'CC'
      },
    ]
  },
  
];

casual.define('user', function (role) {
  return {
    id: casual.card_number(),
    username: casual.username,
    contacts: casual.full_name,
    contactsEmail: casual.email,
    address: casual.address,
    roleId: role.value,
    status: casual.integer(0, 1),
    createTime: casual.unix_time,
    updateTime: casual.unix_time
  };
});

module.exports = () => {
  const data = {
    users: [],
    roles: roleMap,
    login: {
      code: 200,
      data: {
        token:
					'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMTU2MjA5MyIsImNyZWF0ZWQiOjE1NjE1MTY3NjU5MzMsImNvbXBhbnlOYW1lIjoiQee9kSIsInRlbmFudElkIjoxLCJ1c2VyVHlwZSI6InN0YWZmIiwiaWQiOjEsImV4cCI6MTU2MTUyMDM2NX0.j8sWbwXzHnSgvz7em2DjAhNDU5xaxysEFES8SlyJZnj0lVgXKax4tEDNGawZivW6Ip1734Rnvb6z2te8jGmIWQ"',
        menus: menus,
        user: casual.user(casual.random_element(roleMap))
      },
      message: 'success'
    },
    logout: {
      code: 200,
      message: 'success'
    }
  };

  for (let i = 0; i < 54; i++) {
    data.users.push(casual.user(casual.random_element(roleMap)));
  }

  return data;
};
