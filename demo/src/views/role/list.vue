<template>
  <div>
    <el-table :data="roleList" style="width: 100%">
      <el-table-column prop="id" label="角色编号" width="180">
      </el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="180">
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="item">
          <div>
            <el-tag v-if="item.row.status == 1" type="success">启用</el-tag>
            <el-tag v-else type="danger">禁用</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="item">
          <el-button type="info" @click="edit(item.row.id)">编缉</el-button>
          <el-button type="danger" @click="del(item.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getRoleDelete } from "../../utils/axios";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      roleList: "role/getRoleList",
    }),
  },

  mounted() {
    this.getRoleAction();
  },

  methods: {
    ...mapActions({
      getRoleAction: "role/getRoleListAction",
    }),
    /* 删除事件 */
    del(id) {
      this.$confirm("是否删除本条数据？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "waring",
      })
        .then(() => {
          getRoleDelete({ id }).then((res) => {
            if (res.data.code === 200) {
              this.$message.success(res.data.msg);
              this.getRoleAction();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消",
          });
        });
    },
    /* 编缉事件--传递到父组件 */
    edit(id) {
      this.$emit("edit", id);
    },
  },
};
</script>

<style lang="" scoped>
</style>
