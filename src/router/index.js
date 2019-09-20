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
        component: () => import('@/views/qiyexinxiguanli/weikongjian/weikongjian'),
        meta: {
          title: '企业维空间管理',
          icon: 'table'
        }
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
  








  // 信息管理
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: '信息管理',
  //     icon: 'nested'
  //   },
  //   children: [{
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: ' 栏目文件',
  //       meta: {
  //         title: 'Menu1'
  //       },
  //       children: [{
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: {
  //             title: '栏目管理'
  //           }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: {
  //             title: '政策文件'
  //           },
  //           children: [{
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: {
  //                 title: '通知公告'
  //               }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: {
  //                 title: '新闻资讯'
  //               }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: {
  //             title: 'Menu1-3'
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: {
  //         title: 'menu2'
  //       }
  //     }
  //   ]
  // },





  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [{
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: {
  //         title: 'Menu1'
  //       },
  //       children: [{
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: {
  //             title: 'Menu1-1'
  //           }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: {
  //             title: 'Menu1-2'
  //           },
  //           children: [{
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: {
  //                 title: 'Menu1-2-1'
  //               }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: {
  //                 title: 'Menu1-2-2'
  //               }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: {
  //             title: 'Menu1-3'
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: {
  //         title: 'menu2'
  //       }
  //     }
  //   ]
  // }








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
