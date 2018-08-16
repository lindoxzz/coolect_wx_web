<template>
    <div>
            <Row>
                    <Table
                        :height= "thisTableHeight"
                        :loading= "thisTableLoading"
                        :columns= "thisTableColumn"
                        :data= "wx_publics"
                        size= "small"
                        :highlight-row= "true" stripe border>
                    </Table>
            </Row>
            <Row class="margin-top-10">     
                    <Page
                        size= "small"
                        :total= "total"
                        :current.sync= "current_page"
                        @on-change= "onPageChange"
                        show-total sstyle= "text-align: right;margin-top: 20px;">
                    </Page>
            </Row>
        </Card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            //分页
            currentTotal: 0,                    //总条数
            currentPage: 1,                     //当前页码

            //表格
            thisTableHeight: 0,                 //表格高度
            thisTableLoading: false,            //表格加载标记
            wx_publics: [],                  //表格行数据
            thisTableColumn: [                  //表格列数据
                {
                    title: 'ID',
                    key: 'id',
                    width: 65,
                    align: 'center'
                },
                {
                    title: '名称',
                    key: 'name',
                    width: 120,
                    align: 'center'
                },
                {
                    title: '描述',
                    key: 'desc',
                    width: 150,
                    align: 'center'
                },
                {
                    title: '创建日期',
                    key: 'icreated_at',
                    width: 100,
                    align: 'center'
                }
            ]
        }
    },
    methods: {
        
        onPageChange (page) {
            this.$http.get('/wx_publics?page=' + page).then((res) => {
            this.thisTableData = res.data.wx_publics;
            this.currentPage = res.data.current_page;
            this.currentTotal = res.data.total;
            this.thisTableLoading = true;
          })
            
        }
    },
    created () {
        console.log('111111')
        this.$http.get('/wx_publics').then((res) => {
            his.wx_publics = res.data.wx_publics;
            console.log(res.data);
          })
            
    }
}
</script>

<style scoped>
    .margin-top-10 {
        margin-top: 10px;
    }
    .ivu-card-body {
        padding-bottom: 0px !important;
    }
</style>
