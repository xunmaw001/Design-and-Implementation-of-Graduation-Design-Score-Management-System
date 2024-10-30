const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "导入导出",
                            "删除"
                        ],
                        "menu":"毕业论文管理",
                        "menuJump":"列表",
                        "tableName":"biyeluenwen"
                    }
                ],
                "menu":"毕业论文管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"答辩秘书管理",
                        "menuJump":"列表",
                        "tableName":"dabianmishu"
                    }
                ],
                "menu":"答辩秘书管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"班级管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryBanji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"专业管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryXueke"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"评阅教师管理",
                        "menuJump":"列表",
                        "tableName":"pingyuejiaoshi"
                    }
                ],
                "menu":"评阅教师管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"指导教师管理",
                        "menuJump":"列表",
                        "tableName":"zhidaojiaoshi"
                    }
                ],
                "menu":"指导教师管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "审核",
	                    ],
	                    "menu":"毕业论文管理",
	                    "menuJump":"列表",
	                    "tableName":"biyeluenwen"
	                }
	            ],
	            "menu":"毕业论文管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"用户管理",
	                    "menuJump":"列表",
	                    "tableName":"yonghu"
	                }
	            ],
	            "menu":"用户管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"指导教师",
	    "tableName":"zhidaojiaoshi"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "审核",
	                    ],
	                    "menu":"毕业论文管理",
	                    "menuJump":"列表",
	                    "tableName":"biyeluenwen"
	                }
	            ],
	            "menu":"毕业论文管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"用户管理",
	                    "menuJump":"列表",
	                    "tableName":"yonghu"
	                }
	            ],
	            "menu":"用户管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"评阅教师",
	    "tableName":"pingyuejiaoshi"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "审核",
	                    ],
	                    "menu":"毕业论文管理",
	                    "menuJump":"列表",
	                    "tableName":"biyeluenwen"
	                }
	            ],
	            "menu":"毕业论文管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"用户管理",
	                    "menuJump":"列表",
	                    "tableName":"yonghu"
	                }
	            ],
	            "menu":"用户管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"答辩秘书",
	    "tableName":"dabianmishu"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"毕业论文管理",
	                    "menuJump":"列表",
	                    "tableName":"biyeluenwen"
	                }
	            ],
	            "menu":"毕业论文管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"答辩秘书管理",
	                    "menuJump":"列表",
	                    "tableName":"dabianmishu"
	                }
	            ],
	            "menu":"答辩秘书管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"评阅教师管理",
	                    "menuJump":"列表",
	                    "tableName":"pingyuejiaoshi"
	                }
	            ],
	            "menu":"评阅教师管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"用户管理",
	                    "menuJump":"列表",
	                    "tableName":"yonghu"
	                }
	            ],
	            "menu":"用户管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"指导教师管理",
	                    "menuJump":"列表",
	                    "tableName":"zhidaojiaoshi"
	                }
	            ],
	            "menu":"指导教师管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"用户",
	    "tableName":"yonghu"
	},
]
    }
}
export default menu;