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
        :data-source="sourceData"
        :pagination="false"
      >
        <span
          slot="opDatetime"
          slot-scope="opDatetime"
        >
          {{ opDatetime | formatTime }}
        </span>
      </a-table>
    </div>
  </div>
</template>

<script>
import WebsocketHeartbeatJs from "websocket-heartbeat-js";
export default {
  name: "",
  data() {
    return {
      site: " ",
      msgSeq: 1,
      opLogs: [],
      sourceData: [
        {
          msgSeq: 1,
          opSequence: 11,
          opDatetime: 1572587607740,
          sourceId: 2, //命令来源：1：LCW；2：中心ATS；3：车站ATS；0：-；其他：未知
          objectName: "大头",
          opType: 1,
          opMode: "",
          opSubType: 2,
          resultCode: "哈哈哈",
          userName: "Hello"
        },
        {
          msgSeq: 1,
          opSequence: 11,
          opDatetime: 1572587607740,
          sourceId: 2, //命令来源：1：LCW；2：中心ATS；3：车站ATS；0：-；其他：未知
          objectName: "大头",
          opType: 1,
          opMode: "",
          opSubType: 2,
          resultCode: "哈哈哈",
          userName: "Hello"
        }
      ],
      columns: [
        { title: "事物号", dataIndex: "msgSeq", key: "1" },
        { title: "序列号", dataIndex: "opSequence", key: "2" },
        { title: "时间", dataIndex: "opDatetime", key: "3", scopedSlots: {
          customRender: 'opDatetime'
        }},
        { title: "来源", dataIndex: "sourceId", key: "4" },
        { title: "被操作对象", dataIndex: "objectName", key: "5" },
        { title: "操作类型", dataIndex: "opType", key: "6" },
        { title: "操作模式", dataIndex: "opMode", key: "7" },
        { title: "操作子类型", dataIndex: "opSubType", key: "8" },
        { title: "操作结果", dataIndex: "resultCode", key: "9" },
        { title: "用户名", dataIndex: "userName", key: "10" }
      ],
      hostStats: [
        {
          hostId: 3288662017,
          hostName: "系统管理员工作站",
          hbStatus: 0,
          monStatus: 90,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662018,
          hostName: "应用服务器1",
          hbStatus: 0,
          monStatus: 91,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662019,
          hostName: "应用服务器2",
          hbStatus: 0,
          monStatus: 91,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662020,
          hostName: "应用服务器3",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662022,
          hostName: "通讯服务器1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662023,
          hostName: "通讯服务器2",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662024,
          hostName: "通讯服务器3",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662025,
          hostName: "总调工作站",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662026,
          hostName: "五常车辆段轮乘1",
          hbStatus: 0,
          monStatus: 91,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662027,
          hostName: "五常车辆段大屏1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662028,
          hostName: "五常车辆段派班1",
          hbStatus: 0,
          monStatus: 90,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662029,
          hostName: "五常车辆段服务器1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662030,
          hostName: "五常车辆段服务器2",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662033,
          hostName: "接口服务器1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662034,
          hostName: "接口服务器2",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662035,
          hostName: "接口服务器3",
          hbStatus: 0,
          monStatus: 91,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662036,
          hostName: "大屏工作站",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662044,
          hostName: "创景路站服务器1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662045,
          hostName: "创景路站服务器2",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662046,
          hostName: "创景路站工作站1",
          hbStatus: 0,
          monStatus: 90,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662047,
          hostName: "创景路站工作站2",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662048,
          hostName: "良睦路站工作站1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662049,
          hostName: "杭师大仓前站工作站1",
          hbStatus: 0,
          monStatus: 90,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662050,
          hostName: "永福站服务器1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662051,
          hostName: "永福站服务器2",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662052,
          hostName: "永福站工作站1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662053,
          hostName: "永福站工作站2",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662054,
          hostName: "五常站工作站1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662055,
          hostName: "蒋村站服务器1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662056,
          hostName: "蒋村站服务器2",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662057,
          hostName: "蒋村站工作站1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662058,
          hostName: "蒋村站工作站2",
          hbStatus: 0,
          monStatus: 91,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662059,
          hostName: "浙大紫金港站工作站1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662060,
          hostName: "三坝站工作站1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662061,
          hostName: "萍水街站工作站1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662062,
          hostName: "和睦站服务器1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662063,
          hostName: "和睦站服务器2",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662064,
          hostName: "和睦站工作站1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662065,
          hostName: "和睦站工作站2",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662066,
          hostName: "大运河站工作站1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662067,
          hostName: "拱宸桥东站工作站1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662068,
          hostName: "善贤站服务器1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662069,
          hostName: "善贤站服务器2",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255, 255],
          isOnline: true
        },
        {
          hostId: 3288662070,
          hostName: "善贤站工作站1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662071,
          hostName: "善贤站工作站2",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662129,
          hostName: "调度工作站1",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662130,
          hostName: "调度工作站2",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662131,
          hostName: "调度工作站3",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662132,
          hostName: "调度工作站4",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        },
        {
          hostId: 3288662133,
          hostName: "调度工作站5",
          hbStatus: 0,
          monStatus: 255,
          cpuRate: 0,
          vmRate: 0,
          linkStats: [255, 255],
          isOnline: true
        }
      ],
      socket: null,
      logSocket: null,
    };
  },
  created() {
    this.getHostStatus();
     this.logSocket = this.$socket.sendSock('ws://192.168.156.46:9005/ats/oplog', 'dsd', (res) => {
      console.log(res);
    });
    // this.init(); 
    // this.initWebsocket();
    // this.getOpLog();
  },
  destroyed() {
    // readyState  0- 正在链接中 1- 已经链接并且可以通讯 2-连接正在关闭 3-连接已关闭或者没有链接成功
    if (this.logSocket.readyState == 1) {
      this.logSocket.close();
    }
  },
  methods: {
    handleChange(e) {
      console.log(e);
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
    },
    getOpLog() {},
    init() {
      let websocketHeartbeatJs = new WebsocketHeartbeatJs({
        url: "ws://123.207.167.163:9010/ajaxchattest"
      });
      websocketHeartbeatJs.onopen = function() {
        console.log("connect success");
        websocketHeartbeatJs.send("hello server");
      };
      websocketHeartbeatJs.onmessage = function(e) {
        console.log(`onmessage: ${JSON.parse(JSON.stringify(e.data))}`);
      };
      websocketHeartbeatJs.onreconnect = function() {
        console.log("reconnecting...");
      };
      websocketHeartbeatJs.onclose = () => {
        console.log("connect close");
      };
    },
    initWebsocket() {
      // const wsuri = `ws://192.168.156.46:9005/ats/oplog`;
      const wsuri = `ws://123.207.167.163:9010/ajaxchattest`;

      this.socket = new WebSocket(wsuri);
      console.log(this.socket);
      console.log(WebSocket.OPEN);
      if (this.socket.readyState !== WebSocket.OPEN) {
        this.socket.onopen = this.websocketonopen;
      } else {
        this.websocketsend();
      }
      this.socket.onerror = this.websocketonerror;
      this.socket.onmessage = this.websocketonmessage;
      this.socket.onclose = this.websocketclose;
    },
    websocketonopen() {
      console.log("连接成功");
      this.websocketsend();
    },
    websocketonmessage(e) {
      console.log("数据接收111");
      console.log(e);
    },
    websocketsend(Data) {
      this.socket.send(Data);
      console.log(`数据发送` + Data);
    },
    websocketclose(e) {
      console.log("断开连接", e);
    },

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