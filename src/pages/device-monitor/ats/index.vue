<!-- ATS页面 -->
<template>
  <div class="ats-container">
    <!-- 顶部站点选择 -->
    <!-- <div class="header">
      <a-select
        placeholder="请选择站点"
        style="width: 200px"
        @change="handleChange"
      >
        <a-select-option value="jack">
          江陵路
        </a-select-option>
        <a-select-option value="lucy">
          近江路
        </a-select-option>
     
        <a-select-option value="Yiminghe">
          城站
        </a-select-option>
      </a-select>
    </div>-->

    <!-- 工作站实时显示区 -->
    <div class="station">
      <div
        v-for="item in hostStats"
        :key="item.hostId"
        class="host-item"
      >
        <div
          class="host-pic"
          :class="{'normal-host': item.monStatus == 90, 'breakdown-host': item.monStatus == 91, 'unknown-host': item.monStatus == 255}"
        ></div>
        <div class="host-name">
          {{ item.hostName }}
        </div>
      </div>
    </div>

    <!-- 操作记录表 -->
    <div class="table-log">
      <a-table
        class="table-wrapper"
        :columns="columns"
        :data-source="opLogs"
        :pagination="false"
      >
        <!-- 时间处理 -->
        <span
          slot="opDatetime"
          slot-scope="opDatetime"
        >{{ opDatetime | formatTime }}</span>
        <!-- 操作类型处理 -->
        <span
          slot="opType"
          slot-scope="opType"
        >
          <!-- {{ handleValue(opType, opType) }} -->
          {{ opType | filterOptype }}
        </span>
        <!-- 操作子类型处理 -->
        <span
          slot="opSubType"
          slot-scope="opSubType"
        >{{ opSubType | filterOpSubtype }}</span>
        <!-- 来源处理 -->
        <span
          slot="sourceId"
          slot-scope="sourceId"
        >{{ sourceId | formatSourceId }}</span>
        <!-- 操作结果处理 -->
        <span
          slot="resultCode"
          slot-scope="resultCode"
        >{{ resultCode | formatResultCode }}</span>
      </a-table>
    </div>
  </div>
</template>

<script>
import { resultCode, sourceId, opType, opSubType, handleValue } from "./config";
export default {
  name: "",
  filters: {
    /**
     * @param value
     * @return 操作结果
     */
    formatResultCode(value) {
      return handleValue(value, resultCode);
    },
    /**
     * @param value
     * @return 来源
     */
    formatSourceId(value) {
      return handleValue(value, sourceId);
    },
    /**
     * @param value
     * @return 操作类型
     */
    filterOptype(value) {
      return handleValue(value, opType);
    },
    /**
     * @param value
     * @return 操作子类型
     */
    filterOpSubtype(value) {
      return handleValue(value, opSubType);
    }
  },
  data() {
    return {
      msgSeq: 1,
      sourceData: [
        {
          msgSeq: 1,
          opSequence: 11,
          opDatetime: 1572849150000,
          sourceId: 1, //命令来源：1：LCW；2：中心ATS；3：车站ATS；0：-；其他：未知
          objectName: "大头",
          opType: 416,
          opMode: "",
          opSubType: 769,
          resultCode: 1,
          userName: "Hello"
        },
        {
          msgSeq: 1,
          opSequence: 11,
          opDatetime: 1572849150000,
          sourceId: 2, //命令来源：1：LCW；2：中心ATS；3：车站ATS；0：-；其他：未知
          objectName: "大头",
          opType: 418,
          opMode: "",
          opSubType: 260,
          resultCode: 0,
          userName: "Hello"
        }
      ],
      /**
       * @param msgSeq  事务号
       * @param opSequence 序列号
       * @param opDatetime 时间（时间戳）
       * @param sourceId 来源 1：LCW；2：中心ATS；3：车站ATS；0：-；其他：未知
       * @param objectName 被操作对象
       * @param opType 操作类型
       * @param opMode 操作模式
       * @param opSubType 操作子类型
       * @param resultCode 操作结果: 0：操作成功，1：操作失败
       * @param userName 用户名
       */
      columns: [
        { title: "事物号", dataIndex: "msgSeq", key: "1" },
        { title: "序列号", dataIndex: "opSequence", key: "2" },
        {
          title: "时间",
          dataIndex: "opDatetime",
          key: "3",
          scopedSlots: {
            customRender: "opDatetime"
          }
        },
        {
          title: "来源",
          dataIndex: "sourceId",
          key: "4",
          scopedSlots: {
            customRender: "sourceId"
          }
        },
        { title: "被操作对象", dataIndex: "objectName", key: "5" },
        {
          title: "操作类型",
          dataIndex: "opType",
          key: "6",
          scopedSlots: {
            customRender: "opType"
          }
        },
        { title: "操作模式", dataIndex: "opMode", key: "7" },
        {
          title: "操作子类型",
          dataIndex: "opSubType",
          key: "8",
          scopedSlots: {
            customRender: "opSubType"
          }
        },
        {
          title: "操作结果",
          dataIndex: "resultCode",
          key: "9",
          scopedSlots: {
            customRender: "resultCode"
          }
        },
        { title: "用户名", dataIndex: "userName", key: "10" }
      ],
      hostStats: [
        // {
        //   hostId: 3288662017,
        //   hostName: "系统管理员工作站",
        //   hbStatus: 0,
        //   monStatus: 90,
        //   cpuRate: 0,
        //   vmRate: 0,
        //   linkStats: [255, 255],
        //   isOnline: true
        // },
        // {
        //   hostId: 3288662018,
        //   hostName: "应用服务器1",
        //   hbStatus: 0,
        //   monStatus: 91,
        //   cpuRate: 0,
        //   vmRate: 0,
        //   linkStats: [255, 255, 255],
        //   isOnline: true
        // },    
       
      ],
      socket: null,
      logSocket: null,
      hostSocket: null
    };
  },
  computed: {
    opLogs() {
      return this.$store.getters.opLogs;
    }
  },
  created() {
    this.initHostStatus();
    this.initOpLog();
  },
  /**
   * @description 离开页面时，执行destroyed钩子
   */
  destroyed() {
    this.destroyWebsocket();
  },
  methods: {
    /**
     * @description 初始化主机管理的websocket连接
     */
    initHostStatus() {
      this.hostSocket = this.$socket.sendSock(
        "ws://192.168.156.46:9105/ats/hoststat",
        {
          responseTmp: "HostStatReply"
        },
        res => {
          console.log(res, 'host主机');
          this.hostStats = res.hostStats;
        }
      );
    },
    /**
     * @description 初始化操作记录的websocket连接
     */
    initOpLog() {
      this.logSocket = this.$socket.sendSock(
        "ws://192.168.156.46:9105/ats/oplog",
        {
          responseTmp: "OpLogReply"
        },
        res => {
          this.opLogs.unshift(res);
          this.$store.commit("setOpLogs", this.opLogs);
        }
      );
    },
    /**
     * @description 离开页面时，断开websocket连接，是否要断开可以根据业务需求
     */
    destroyWebsocket() {
      // readyState  0- 正在链接中 1- 已经链接并且可以通讯 2-连接正在关闭 3-连接已关闭或者没有链接成功
      if (this.logSocket && this.logSocket.readyState == 1) {
        this.logSocket.close();
      }
      if (this.hostSocket && this.hostSocket.readyState == 1) {
        this.hostSocket.close();
      }
    },
    getHostStatus() {
      this.$api
        .hostStatus({
          data: {
            msgSeq: this.msgSeq
          },
          method: "post"
        })
        .then(res => {
          console.log(res);
          // this.hostStats = res.hostStats || [];
        });
    }
  }
};
</script>
<style>
.table-wrapper .ant-table-thead > tr > th {
  background: #efefef;
  padding: 0;
  height: 45px;
  line-height: 45px;
  padding-left: 16px;
}
</style>
<style scoped lang="less">
.ats-container {
  height: 100%;
  background: #fafafa;
  padding: 30px;
  overflow: auto;
}
.header {
  display: flex;
  justify-content: flex-end;
}
.station {
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 4px 0 #eeeeee, inset 0 1px 3px 0 #eeeeee;
  // padding: 0 30px;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .host-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 100px;
    margin-right: 2px;
    margin: 20px 0;
    .host-pic {
      width: 60px;
      height: 40px;
      border: 1px solid #eee;
    }
    .normal-host {
      border: 1px solid blue;
    }
    .breakdown-host {
      border-color: red;
    }
    .unknown-host {
      border-color: #ddd;
    }
    .host-name {
      margin-top: 10px;
      font-size: 12px;
      color: #000000;
      text-align: center;
    }
  }
}
.table-log {
  background: #ffffff;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 4px 0 #eeeeee, inset 0 1px 3px 0 #eeeeee;
  margin-top: 20px;
  min-height: 265px;
}
</style>