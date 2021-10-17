<template>
  <div>
    <button>原生Button和Input框</button>
    <input type="text" />
    <hr />
    <MyRow>
      <MyButton>默认按钮</MyButton>
      <MyButton type="primary">主要按钮</MyButton>
      <MyButton type="success">成功按钮</MyButton>
      <MyButton type="info">信息按钮</MyButton>
      <MyButton type="warning">警告按钮</MyButton>
      <MyButton type="danger">危险按钮</MyButton>
    </MyRow>
    <hr />
    <div class="block">
      <MyDatePicker
        v-model="value2"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions"
      >
      </MyDatePicker>
    </div>
    <hr />
    <MyRow>
      <MyButton icon="el-icon-search" circle></MyButton>
      <MyButton type="primary" icon="el-icon-edit" circle></MyButton>
      <MyButton type="success" icon="el-icon-check" circle></MyButton>
      <MyButton type="info" icon="el-icon-message" circle></MyButton>
      <MyButton type="warning" icon="el-icon-star-off" circle></MyButton>
      <MyButton type="danger" icon="el-icon-delete" circle></MyButton>
    </MyRow>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },
};
</script>