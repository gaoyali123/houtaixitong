import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '工作台',
        icon: 'dashboard'
      }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: {
      title: '列子',
      icon: 'example'
    },
    children: [{
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: {
          title: 'Table',
          icon: 'table'
        }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: {
          title: 'Tree',
          icon: 'tree'
        }
      }
    ]
  },
  // 信息发布管理
  {
    path: '/news',
    component: Layout,
    redirect: '/news/zhengzewenjian',
    name: 'news',
    meta: {
      title: '信息发布管理',
      icon: 'form'
    },
    children: [{
        //政策文件
        path: 'zhengcewenjian',
        name: 'zhengcewenjian',
        component: () => import('@/views/xinxifabuguanli/zhengcewenjian/zhengcewenjian'),
        meta: {
          title: '政策文件',
          icon: 'table'
        }
      },

      {
        //通知公告
        path: 'tongzhigonggao',
        name: 'tongzhigonggao',
        component: () => import('@/views/xinxifabuguanli/tongzhigonggao/tongzhigonggao'),
        meta: {
          title: '通知公告',
          icon: 'table'
        }
      },

      {
        //新闻资讯
        path: 'xinwenzixun',
        name: 'xinwenzixun',
        component: () => import('@/views/xinxifabuguanli/xinwenzixun/xinwenzixun'),
        meta: {
          title: '新闻资讯',
          icon: 'table'
        }
      },

      {
        //政务公开
        path: 'zhengwugongkai',
        name: 'zhengwugongkai',
        component: () => import('@/views/xinxifabuguanli/zhengwugongkai/zhengwugongkai'),
        meta: {
          title: '政务公开',
          icon: 'table'
        }
      },

      {
        //办事指南
        path: 'banshizhinan',
        name: 'banshizhinan',
        component: () => import('@/views/xinxifabuguanli/banshizhinan/banshizhinan'),
        meta: {
          title: '办事指南',
          icon: 'table'
        }
      },
    ]
  },

  // 企业信息管理
  {
    path: '/qiye ',
    component: Layout,
    redirect: '/qiye/qiyejiandang',
    name: 'qiye',
    meta: {
      title: '企业信息管理',
      icon: 'form'
    },
    children: [{
        //企业建档
        path: 'qiyejiandang',
        name: 'qiyejiandang',
        component: () => import('@/views/qiyexinxiguanli/qiyejiandang/qiyejiandang'),
        meta: {
          title: '企业建档',
          icon: 'table'
        }
      },

      {
        //企业风采
        path: 'qiyefengcai',
        name: 'qiyefengcai',
        component: () => import('@/views/qiyexinxiguanli/qiyefengcai/qiyefengcai'),
        meta: {
          title: '企业风采',
          icon: 'table'
        }
      },






      {
        //企业维空间管理
        path: 'weikongjian',
        name: 'weikongjian',
        redirect: '/qiye/qiyexinxiguanli/weikongjian/qiyeweikongjian/qiyeweikongjian',
        meta: {
          title: '企业维空间管理',
          icon: 'table'
        },
        children: [{
            //企业微空间管理
            path: 'qiyeweikongjian',
            name: 'qiyeweikongjian',
            component: () => import('@/views/qiyexinxiguanli/weikongjian/gongxuguanli/qiyeweikongjian.vue'),
            meta: {
              title: '企业微空间管理',
              icon: 'table'
            }
          },
          {
            //供需管理
            path: 'gongxuguanli',
            name: 'gongxuguanli',
            component: () => import('@/views/qiyexinxiguanli/weikongjian/gongxuguanli/gxgl.vue'),
            meta: {
              title: '供需管理',
              icon: 'table'
            }
          },
        ]


      },

      {
        //企业经办人设置
        path: 'jingbanren',
        name: 'jingbanren',
        component: () => import('@/views/qiyexinxiguanli/jingbanren/jingbanren'),
        meta: {
          title: '企业经办人设置',
          icon: 'table'
        }
      }
    ]
  },


  // 系统权限管理
  {
    path: '/system ',
    component: Layout,
    // redirect: '/qiye/qiyejiandang',
    name: 'system',
    meta: {
      title: '系统权限管理',
      icon: 'form'
    },
    children: [{
        //用户管理
        path: 'user',
        name: 'user',
        component: () => import('@/views/xitongquanxian/userguanli/userguanli'),
        meta: {
          title: '用户管理',
          icon: 'table'
        }
      },

      {
        //角色管理
        path: 'qiyefengcai',
        name: 'qiyefengcai',
        component: () => import('@/views/xitongquanxian/jiaoseguanli/jiaoseguanli'),
        meta: {
          title: '角色管理',
          icon: 'table'
        }
      },

    ]
  },





  {
    path: '/form',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Form',
      component: () => import('@/views/form/index'),
      meta: {
        title: 'Form',
        icon: 'form'
      }
    }]
  },


  // 信息管理

  {
    path: '/infoguanli ',
    component: Layout,
    redirect: '/infoguanli/qiyejiandang',
    name: 'qiye',
    meta: {
      title: '信息管理',
      icon: 'form'
    },
    children: [{
        //栏目管理
        path: 'lanMuGuanLi',
        name: 'qiyejiandang',
        component: () => import('@/views/xinxiguanli/lanMuGuanLi/lanMuGuanLi'),
        meta: {
          title: '栏目管理 ',
          icon: 'table'
        }
      },

      {
        //政策文件
        path: 'zhengcewenjian',
        name: 'zhengcewenjian',
        component: () => import('@/views/xinxiguanli/zhengcewenjian/zhengcewenjian'),
        meta: {
          title: '政策文件',
          icon: 'table'
        }
      },

      {
        //通知公告
        path: 'tongzhigonggao',
        name: 'tongzhigonggao',
        component: () => import('@/views/xinxiguanli/tongzhigonggao/tongzhigonggao'),
        meta: {
          title: '通知公告',
          icon: 'table'
        }
      },

      {
        //新闻资讯
        path: 'xinwenzixun',
        name: 'xinwenzixun',
        component: () => import('@/views/xinxiguanli/xinwenzixun/xinwenzixun'),
        meta: {
          title: '新闻资讯',
          icon: 'table'
        }
      },
      {
        //政务公开
        path: 'zhengwugongkai',
        name: 'zhengwugongkai',
        component: () => import('@/views/xinxiguanli/zhengwugongkai/zhengwugongkai'),
        meta: {
          title: '政务公开',
          icon: 'table'
        }
      },

      {
        //办事指南
        path: 'banshizhinan',
        name: 'banshizhinan',
        component: () => import('@/views/xinxiguanli/banshizhinan/banshizhinan'),
        meta: {
          title: '办事指南',
          icon: 'table'
        }
      }
    ]
  },




  // app设置
  // {
  //   path: '/lunbotu',
  //   component: Layout,
  //   children: [{
  //     path: 'lunbotu',
  //     name: 'lunbotu',
  //     component: () => import('@/views/lunbotu/lunbotu'),
  //     meta: {
  //       title: '首页轮播设置',
  //       icon: 'form'
  //     }
  //   }]
  // },



  // 轮播图设置
  {
    path: '/lunbotu ',
    component: Layout,
    redirect: '/lunbotu/pc',
    name: 'lunbotu',
    meta: {
      title: '轮播图',
      icon: 'form'
    },
    children: [{
        //pc设置
        path: 'pc',
        name: 'pc',
        component: () => import('@/views/lunbotu/pc/pc'),
        meta: {
          title: 'pc端设置',
          icon: 'table'
        }
      },

      {
        //App设置
        path: 'app',
        name: 'app',
        component: () => import('@/views/lunbotu/app/app'),
        meta: {
          title: 'App设置',
          icon: 'table'
        }
      }
    ]
  },



  // 链接管理
  {
    path: '/lianjieguanli',
    component: Layout,
    children: [{
      path: 'lianjieguanli',
      name: 'lianjieguanli',
      component: () => import('@/views/lianjieguanli/lianjieguanli'),
      meta: {
        title: '链接管理',
        icon: 'form'
      }
    }]
  },


  {
    path: '/bianji',
    component: Layout,
    hidden:true,
    children: [{
      path: 'bianji',
      name: 'bianji',
      component: () => import('@/views/weiqifuwu/bianji/bianji'),
      meta: {
        title: '编辑',
        icon: 'form'
      }
    }]
  },

  //为企服务
  {
    path: '/weiqifuwu',
    component: Layout,
    redirect: '/weiqifuwu/qiyexinyongxinxi',
    name: 'qiyexinyongxinxi',
    meta: {
      title: '为企服务',
      icon: 'form'
    },
    children: [{
        //企业信用信息
        path: 'qiyexinyongxinxi',
        name: 'qiyexinyongxinxi',
        component: () => import('@/views/weiqifuwu/qiyexinyongxinxi/qiyexinyongxinxi'),
        meta: {
          title: '企业信用信息',
          icon: 'table'
        }
      },




      {
        //企业朋友圈
        path: 'qiyepengyouquan',
        name: 'qiyepengyouquan',
        component: () => import('@/views/weiqifuwu/qiyepengyouquan/qiyepengyouquan'),
        meta: {
          title: '企业朋友圈',
          icon: 'table'
        }
      },




      {
        //发布任务
        path: 'faburenwu',
        name: 'faburenwu',
        component: () => import('@/views/weiqifuwu/faburenwu/faburenwu'),
        meta: {
          title: '发布任务',
          icon: 'table'
        }
      },



      {
        //所有任务
        path: 'suoyourenwu',
        name: 'suoyourenwu',
        component: () => import('@/views/weiqifuwu/suoyourenwu/suoyourenwu'),
        meta: {
          title: '所有任务',
          icon: 'table'
        }
      },

      {
        //我的分管企业
        path: 'minefenguanqiye',
        name: 'minefenguanqiye',
        component: () => import('@/views/weiqifuwu/minefenguanqiye/minefenguanqiye'),
        meta: {
          title: '我的分管企业',
          icon: 'table'
        }
      },

      {
        //我的任务
        path: 'minerenwu',
        name: 'minerenwu',
        component: () => import('@/views/weiqifuwu/minerenwu/minerenwu'),
        meta: {
          title: '我的任务',
          icon: 'table'
        }
      },
      {
        //我的任务列表
        path: 'minerenwulibiao',
        name: 'minerenwulibiao',
        component: () => import('@/views/weiqifuwu/minerenwulibiao/minerenwulibiao'),
        meta: {
          title: '我的任务列表',
          icon: 'table'
        }
      },

      {
        //交办认领
        path: 'jiaobanrenling',
        name: 'jiaobanrenling',
        component: () => import('@/views/weiqifuwu/jiaobanrenling/jiaobanrenling'),
        meta: {
          title: '交办认领',
          icon: 'table'
        }
      },
    ]
  },

  // 在线工单
  {
    path: '/zaixiangongdan ',
    component: Layout,
    redirect: '/zaixiangongdan/gongdanshezhi',
    name: 'qiye',
    meta: {
      title: '在线工单',
      icon: 'form'
    },
    children: [{
        //工单设置
        path: 'gongdanshezhi',
        name: 'gongdanshezhi',
        component: () => import('@/views/zaixiangongdan/gongdanshezhi/gongdanshezhi'),
        meta: {
          title: '工单设置 ',
          icon: 'table'
        }
      },

      {
        //在线审核
        path: 'zaixianshenhe',
        name: 'zaixianshenhe',
        component: () => import('@/views/zaixiangongdan/zaixianshenhe/zaixianshenhe'),
        meta: {
          title: '在线审核',
          icon: 'table'
        }
      },

      {
        //待办工单
        path: 'daibangongdan',
        name: 'daibangongdan',
        component: () => import('@/views/zaixiangongdan/daibangongdan/daibangongdan'),
        meta: {
          title: '待办工单',
          icon: 'table'
        }
      },


      {
        // 已完成工单
        path: 'wanchenggongdan',
        name: 'wanchenggongdan',
        component: () => import('@/views/zaixiangongdan/wanchenggongdan/wanchenggongdan'),
        meta: {
          title: '待办工单',
          icon: 'table'
        }
      }
    ]
  },

  // 在线办理
  {
    path: '/zaixianbanli ',
    component: Layout,
    redirect: '/zaixianbanli/gongdanshezhi',
    name: 'qiye',
    meta: {
      title: '在线办理',
      icon: 'form'
    },
    children: [{
        //办事类别维护
        path: 'banshileibie',
        name: 'banshileibie',
        component: () => import('@/views/zaixianbanli/banshileibie/banshileibie'),
        meta: {
          title: '办事类别维护 ',
          icon: 'table'
        }
      },

      {
        //网上查询
        path: 'wangshangchaxun',
        name: 'wangshangchaxun',
        component: () => import('@/views/zaixianbanli/wangshangchaxun/wangshangchaxun'),
        meta: {
          title: '网上查询',
          icon: 'table'
        }
      },

      {
        //网上办事
        path: 'wangshangbanshi',
        name: 'wangshangbanshi',
        component: () => import('@/views/zaixianbanli/wangshangbanshi/wangshangbanshi'),
        meta: {
          title: '网上办事',
          icon: 'table'
        }
      },


      {
        // 审批服务
        path: 'shenpifuwu',
        name: 'shenpifuwu',
        component: () => import('@/views/zaixianbanli/shenpifuwu/shenpifuwu'),
        meta: {
          title: '审批服务',
          icon: 'table'
        }
      }
    ]
  },

  // 统计分析 
  {
    path: '/tongjifenxi ',
    component: Layout,
    redirect: '/tongjifenxi/gongdanshezhi',
    name: 'qiye',
    meta: {
      title: '统计分析',
      icon: 'form'
    },
    children: [{
        //为企任务统计
        path: 'weiqifuwutongji',
        name: 'banshileibie',
        component: () => import('@/views/tongjifenxi/weiqifuwutongji/weiqifuwutongji'),
        meta: {
          title: '为企任务统计 ',
          icon: 'table'
        }
      },

      {
        //在线工单统计
        path: 'zaixiangongdantongji',
        name: 'zaixiangongdantongji',
        component: () => import('@/views/tongjifenxi/zaixiangongdantongji/zaixiangongdantongji'),
        meta: {
          title: '在线工单统计',
          icon: 'table'
        }
      },

      {
        //在线办理统计
        path: 'zaixianbanli',
        name: 'zaixianbanli',
        component: () => import('@/views/tongjifenxi/zaixianbanli/zaixianbanli'),
        meta: {
          title: '在线办理统计',
          icon: 'table'
        }
      },


      {
        // 在线签到统计
        path: 'zaixianqiandaotongji',
        name: 'zaixianqiandaotongji',
        component: () => import('@/views/tongjifenxi/zaixianqiandaotongji/zaixianqiandaotongji'),
        meta: {
          title: '在线签到统计',
          icon: 'table'
        }
      },

      {
        // 注册用户统计
        path: 'zhuceyonghutongji',
        name: 'zhuceyonghutongji',
        component: () => import('@/views/tongjifenxi/zhuceyonghutongji/zhuceyonghutongji'),
        meta: {
          title: '在线签到统计',
          icon: 'table'
        }
      },


      {
        // 网站信息统计
        path: 'wangzhanxinxitongji',
        name: 'wangzhanxinxitongji',
        component: () => import('@/views/tongjifenxi/wangzhanxinxitongji/wangzhanxinxitongji'),
        meta: {
          title: '网站信息统计',
          icon: 'table'
        }
      },





      {
        // 企业信用数据统计
        path: 'qiyexinyongtongji',
        name: 'qiyexinyongtongji',
        component: () => import('@/views/tongjifenxi/qiyexinyongtongji/qiyexinyongtongji'),
        meta: {
          title: '企业信用数据统计',
          icon: 'table'
        }
      },




      {
        // 网站访问量分析
        path: 'wangzhanfangwenliangfenxi',
        name: 'wangzhanfangwenliangfenxi',
        component: () => import('@/views/tongjifenxi/wangzhanfangwenliangfenxi/wangzhanfangwenliangfenxi'),
        meta: {
          title: '网站访问量分析',
          icon: 'table'
        }
      },

      {
        // 企业信息统计
        path: 'qiyexinxi',
        name: 'qiyexinxi',
        component: () => import('@/views/tongjifenxi/qiyexinxi/qiyexinxi'),
        meta: {
          title: '企业信息统计',
          icon: 'table'
        }
      },
      {
        // 企业供需关系统计
        path: 'qiyegongxuguanxi',
        name: 'qiyegongxuguanxi',
        component: () => import('@/views/tongjifenxi/qiyegongxuguanxi/qiyegongxuguanxi'),
        meta: {
          title: '企业供需关系统计',
          icon: 'table'
        }
      },








      {
        // 页面浏览统计
        path: 'yemianliulantongji',
        name: 'yemianliulantongji',
        component: () => import('@/views/tongjifenxi/yemianliulantongji/yemianliulantongji'),
        meta: {
          title: '页面浏览统计',
          icon: 'table'
        }
      },
      {
        // 短信下发统计
        path: 'duanxinxiafatongji',
        name: 'duanxinxiafatongji',
        component: () => import('@/views/tongjifenxi/duanxinxiafatongji/duanxinxiafatongji'),
        meta: {
          title: '短信下发统计',
          icon: 'table'
        }
      },
      {
        // 微信访问统计
        path: 'weixinfangwentongji',
        name: 'weixinfangwentongji',
        component: () => import('@/views/tongjifenxi/weixinfangwentongji/weixinfangwentongji'),
        meta: {
          title: '微信访问统计',
          icon: 'table'
        }
      },
      {
        // 政策咨询业务统计
        path: 'zhengzezixuntj',
        name: 'shenpifuwu',
        component: () => import('@/views/tongjifenxi/zhengzezixuntj/zhengzezixuntj'),
        meta: {
          title: '政策咨询业务统计',
          icon: 'table'
        }
      },
      {
        // 办事指南业务统计
        path: 'banshizhinantj',
        name: 'banshizhinantj',
        component: () => import('@/views/tongjifenxi/banshizhinantj/banshizhinantj'),
        meta: {
          title: '办事指南业务统计',
          icon: 'table'
        }
      }
    ]
  },




  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: '123',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [{
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: {
          title: 'Menu1'
        },
        children: [{
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: {
              title: 'Menu1-1'
            }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: {
              title: 'Menu1-2'
            },
            children: [{
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: {
                  title: 'Menu1-2-1'
                }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: {
                  title: 'Menu1-2-2'
                }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: {
              title: 'Menu1-3'
            }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: {
          title: 'menu2'
        }
      }
    ]
  }








  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }  
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
