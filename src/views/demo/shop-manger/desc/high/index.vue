<template>
  <PageWrapper title="商品编号：234231029431" contentBackground headerSticky>
    <template #extra>
      <a-button> 操作一 </a-button>
      <a-button> 操作二 </a-button>
      <a-button type="primary"> 主操作 </a-button>
    </template>

    <template #footer>
      <Tabs default-active-key="1">
        <Tabs.TabPane key="1" tab="商品详情" />
        <Tabs.TabPane key="2" tab="规则" />
      </Tabs>
    </template>

    <div class="pt-4 m-4 desc-wrap">
      <Descriptions size="small" :column="2">
        <Descriptions.Item label="创建人"> 曲丽丽 </Descriptions.Item>
        <Descriptions.Item label="订购产品"> XX 服务 </Descriptions.Item>
        <Descriptions.Item label="创建时间"> 2017-01-10 </Descriptions.Item>
        <Descriptions.Item label="关联单据">
          <a>12421</a>
        </Descriptions.Item>
        <Descriptions.Item label="上架日期"> 2017-07-07</Descriptions.Item>
        <Descriptions.Item label="备注">欢迎各位新老客户来购买该商品 </Descriptions.Item>
      </Descriptions>
      <Card title="流程进度" :bordered="false">
        <Steps :current="1" progress-dot size="small">
          <Steps.Step title="创建商品">
            <template #description>
              <div>华为手机mat</div>
              <p>2016-12-12 12:32</p>
            </template>
          </Steps.Step>
          <Steps.Step title="管理员初审">
            <template #description>
              <p>Chad</p>
            </template>
          </Steps.Step>
          <Steps.Step title="商家复核" />
          <Steps.Step title="完成" />
        </Steps>
      </Card>
      <Card title="商品图片" :bordered="false">
        <div
          style="display: flex; width: 100%; justify-content: space-between; align-items: center"
        >
          <img :src="headerImg1" style="width: 350px" alt="" />
          <img :src="headerImg1" style="width: 350px" alt="" />
          <img :src="headerImg1" style="width: 350px" alt="" />
          <!--          <img :src="headerImg2" style="height: 350px" alt="" />-->
          <!--          <img :src="headerImg3" style="height: 350px" alt="" />-->
        </div>
      </Card>
      <Card title="商品信息" :bordered="false" class="mt-5">
        <Descriptions :column="3">
          <Descriptions.Item label="商品名称"> 云饰图腾原创女装连衣</Descriptions.Item>
          <Descriptions.Item label="商品编号"> XX 32943898021309809423 </Descriptions.Item>
          <Descriptions.Item label="商品尺码"> 175/120 </Descriptions.Item>
          <Descriptions.Item label="商品发货周期"> 2天内 </Descriptions.Item>
          <Descriptions.Item label="联系地址" :span="2">
            曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <BasicTable @register="registerTimeTable" />
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable } from '@/components/Table';
  import { PageWrapper } from '@/components/Page';
  import { Divider, Card, Empty, Descriptions, Steps, Tabs } from 'ant-design-vue';

  import { refundTimeTableSchema, refundTimeTableData } from './data';
  import headerImg1 from '@/assets/images/pic.png';
  import headerImg2 from '@/assets/images/pic5.png';
  import headerImg3 from '@/assets/images/demo.png';
  const [registerTimeTable] = useTable({
    title: '商品订单',
    columns: refundTimeTableSchema,
    pagination: false,
    dataSource: refundTimeTableData,
    showIndexColumn: false,
    scroll: { y: 300 },
  });
</script>
