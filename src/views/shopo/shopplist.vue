<template>
  <div>
    <div class="shopp">
      <span>品类管理</span>
      <el-button type="info" @click="add">+添加品类</el-button>
    </div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="id" label="品类ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="品类名称" width="380">
      </el-table-column>
      <el-table-column prop="" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="set(scope.row)"
            >修改名称</el-button
          >
          <el-button type="text" size="small" @click="get(scope.row.id)"
            >查看其子品类</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <p></p>
    <el-dialog title="请输入新的品类名称" :visible.sync="flag" width="30%">
      <el-form :model="form">
        <el-form-item label="">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="flag = false">取 消</el-button>
        <el-button type="primary" @click="update">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      id: 0,
      flag: false,
      form: {
        id: "",
        name: "",
      },
    };
  },

  mounted() {
    this.$netClient.OTHER().then((res) => {
      console.log(res);
      this.list = res.data.data;
    });
  },

  methods: {
    // 添加
    add() {
      this.$router.push("/classadd");
    },
    // 修改
    set(item) {
      this.flag = true;
      this.form.id = item.id;
      this.form.name = item.name;
    },
    update() {
      this.flag = false;
      this.$netClient.setCategory(this.form.id, this.form.name).then((res) => {
        // console.log(res);
        if (res.status == 0) {
          this.$message(res.data);
          this.$netClient.category(this.id).then((res) => {
            // console.log(res);
            this.list = res.data.data;
          });
        }
      });
    },
    // 查看
    get(id) {
      this.$router.push({ path: "/class", query: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.shopp {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  font-size: 30px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>