<template>
    <div class="layout">
        <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
                <Menu :theme="theme_color">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-paper" />
                            管理
                        </template>
                        <MenuItem name="1-1" @click= "$router.push('/about')">内容</MenuItem>
                        <MenuItem name="1-2">评论</MenuItem>
                        <MenuItem name="1-3">举报</MenuItem>
                    </Submenu>

                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-people" />
                            用户
                        </template>
                        <MenuItem name="2-1">新用户</MenuItem>
                        <MenuItem name="2-2">活跃用户</MenuItem>
                    </Submenu>

                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics" />
                            分析
                        </template>
                        <MenuItem name="3-1">消费分析</MenuItem>
                        <MenuItem name="3-2">时段分析</MenuItem>
                    </Submenu>

                    <Submenu name="4">
                        <template slot="title">
                           <Icon type="ios-body" />
                            设置
                        </template>   
                        <MenuItem name="4-1">个人中心</MenuItem>
                        <MenuItem name="4-2">消息提醒</MenuItem>
                    </Submenu>
                </Menu>
            </sider>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                <!-- <Row>
                    <Button type= "text" @click= "create"></Button>
                </Row> -->
                <router-view></router-view>
                <!-- <router-view name="pagination"></router-view>  -->
            </Content>
        </layout>
    </div>
</template>
<script>
export default {
    data () {
        return {
            theme_color: 'dark'
        }
    },
    methods: {
        // create () {
        //     this.$router.push('/about');
        // }
    }
}
</script>
