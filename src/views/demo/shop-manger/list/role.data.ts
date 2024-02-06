import { BasicColumn, FormSchema } from '@/components/Table';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { setRoleStatus } from '@/api/demo/system';
import { useMessage } from '@/hooks/web/useMessage';

type CheckedType = boolean | string | number;
export const columns: BasicColumn[] = [
  {
    title: '商品名称',
    dataIndex: 'roleName',
    width: 200,
  },
  {
    title: '商品标签',
    dataIndex: 'roleValue',
    width: 180,
  },
  {
    title: '商品图片',
    dataIndex: 'img',
    width: 220,
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
    width: 50,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 120,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === '1',
        checkedChildren: '下架',
        unCheckedChildren: '上架',
        loading: record.pendingStatus,
        onChange(checked: CheckedType) {
          record.pendingStatus = true;
          const newStatus = checked ? '1' : '0';
          const { createMessage } = useMessage();
          setRoleStatus(record.id, newStatus)
            .then(() => {
              record.status = newStatus;
              createMessage.success(`已成功修改商品状态`);
            })
            .catch(() => {
              createMessage.error('修改商品状态失败');
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
  {
    title: '上架时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '商品描述',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'roleNme',
    label: '商品名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '上架', value: '1' },
        { label: '下架', value: '0' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'roleName',
    label: '商品名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'roleValue',
    label: '商品标签',
    required: true,
    component: 'Input',
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '上架', value: '1' },
        { label: '下架', value: '0' },
      ],
    },
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
  {
    label: '商品图片',
    field: 'img',
    component: 'Upload',
  },
  {
    label: ' ',
    field: 'menu',
    slot: 'menu',
  },
];
