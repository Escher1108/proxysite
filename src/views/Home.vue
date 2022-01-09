<!--
 * @Author: Escher1108
 * @Website: https://jkgblog.com
 * @Date: 2022-01-08 23:28:19
 * @LastEditTime: 2022-01-09 13:37:54
 * @LastEditors: Do not edit
 * @FilePath: \proxysite\src\views\Home.vue
 * @Description: 耶斯莫拉
-->
<template>
  <div>
    <div class="container is-fullhd box">
      <div class="content is-medium" style="padding-bottom: 100px">
        <h2>UEfly Proxy</h2>
        <p>
          We provide <strong>the best</strong> and
          <strong>updated</strong> proxy servers IP addresses available on
          internet. We check all proxy servers to make sure they are working
          with no issues. Our powerful scraper checks over a million proxy
          servers daily, with most proxies tested at least 3 times. Proxy lists
          include the IP addresses, Port, Anonymity level and Country or City of
          the servers hosting open public proxy servers.
        </p>

        <div class="listBox">
          <div class="columns">
            <div class="column is-2">
              <figure class="image is-96x96">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMyRTI5Q0FDQkNDMTExRTc5NTc1QkNCN0Y2N0M1NzVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMyRTI5Q0FEQkNDMTExRTc5NTc1QkNCN0Y2N0M1NzVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzJFMjlDQUFCQ0MxMTFFNzk1NzVCQ0I3RjY3QzU3NUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzJFMjlDQUJCQ0MxMTFFNzk1NzVCQ0I3RjY3QzU3NUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7uNPylAAAHHElEQVR42tRa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"
                />
              </figure>
            </div>
            <div class="column is-4">
              <h4>Updated Continuously</h4>
              <p>
                Thousands of new proxies are continuously being added daily and
                dead proxies are removed.
              </p>
            </div>
            <div class="column is-2">
              <figure class="image is-96x96">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRERTg2RjQwQkNDMTExRTc4OEUyOEI4NjVFOUY4RkJCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjRERTg2RjQxQkNDMTExRTc4OEUyOEI4NjVFOUY4RkJCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NERFODZGM0VCQ0MxMTFFNzg4RTI4Qjg2NUU5RjhGQkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NERFODZGM0ZCQ0MxMTFFNzg4RTI4Qjg2NUU5RjhGQkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4MWCr3AAAHhUlEQVR42tRa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"
                />
              </figure>
            </div>
            <div class="column is-4">
              <h3>High Anonymity</h3>
              <p>
                We verify that your real IP address is hidden when using the
                Anonymous proxies.
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-2">
              <figure class="image is-96x96">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBCQ0Q4OEJEQkNDNjExRTc5QkNGOEI2RTZENEQ2MEYzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBCQ0Q4OEJFQkNDNjExRTc5QkNGOEI2RTZENEQ2MEYzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEJDRDg4QkJCQ0M2MTFFNzlCQ0Y4QjZFNkQ0RDYwRjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEJDRDg4QkNCQ0M2MTFFNzlCQ0Y4QjZFNkQ0RDYwRjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5R4vaMAAAHVklEQVR42tSa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"
                />
              </figure>
            </div>
            <div class="column is-4">
              <h3>More Speed , More Security</h3>
              <p>
                View web pages fast through our gigabit network, and keep your
                surfing safe with Secure Socket Layer (SSL) encryption.
              </p>
            </div>
            <div class="column is-2">
              <figure class="image is-96x96">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFQjcwQjFEQkNDMTExRTc4NEU1OUM2NzFBRTUzNDhGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFQjcwQjFFQkNDMTExRTc4NEU1OUM2NzFBRTUzNDhGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkVCNzBCMUJCQ0MxMTFFNzg0RTU5QzY3MUFFNTM0OEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkVCNzBCMUNCQ0MxMTFFNzg0RTU5QzY3MUFFNTM0OEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5HRDPQAAAG9UlEQVR42tRa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"
                />
              </figure>
            </div>
            <div class="column is-4">
              <h3>Fresh Proxies</h3>
              <p>
                Our Proxy API service provides access to thousands of proxy
                addresses that are tested every 2-10 minutes.
              </p>
            </div>
          </div>
        </div>

        <ul>
          <li>
            Your can click&nbsp;<i class="fas fa-hand-point-right"></i
            ><button
              class="button is-primary is-focused is-small"
              :class="isRefresh ? 'is-loading' : ''"
              @click="handleRefresh"
            >
              Refresh</button
            >&nbsp;to change proxy status
          </li>
          <li>
            <div class="control has-icons-left">
              <div class="select is-normal is-success">
                <select @change="chooseProxy" v-model="value">
                  <option
                    :disabled="index == 0"
                    v-for="(item, index) in this.typeArr"
                    :key="index"
                    :value="index"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>
              <div class="icon is-small is-left">
                <i class="fas fa-plane-departure"></i>
              </div>
            </div>
          </li>
          <li>
            isAlive：<span class="tag is-success">{{ isAlive }}</span>
          </li>
          <li>host：{{ host }}</li>
          <li>port：{{ port }}</li>
          <li>type：{{ type }}</li>
          <li>proxyLevel：{{ proxyLevel }}</li>
          <li>averageTime：{{ averageTime }}</li>
          <li>miliseconds：{{ miliseconds }}ms</li>
          <li>countryName：{{ countryName }}</li>
          <li>latitude：{{ latitude }}</li>
          <li>longitude：{{ longitude }}</li>
        </ul>
      </div>
    </div>
    <!-- 模态框 -->
    <div class="modal" :class="isStatus ? 'is-active' : ''">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="modalBox box"></div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="handleModalClose"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      typeArr: [
        "You can Choose Proxy type default socks4",
        "socks4",
        "socks5",
        "http",
        "https",
      ],
      value: 0,
      isRefresh: false,
      isStatus: false,
      host: "",
      port: "",
      type: "",
      proxyLevel: "",
      isAlive: "",
      miliseconds: "",
      averageTime: "",
      countryName: "",
      latitude: "",
      longitude: "",
    };
  },
  mounted() {
    this.handleRequet(1);
  },
  methods: {
    handleModalClose() {
      this.isStatus = false;
    },
    handleRefresh() {
      this.isRefresh = true;
      this.handleRequet(this.value);
      setTimeout(() => {
        this.isRefresh = false;
      }, 700);
    },
    chooseProxy() {
      let i = this.value;
      // console.log('adfaf')
      this.handleRequet(i);
    },
    async handleRequet(id) {
      let ress = await this.$http.get(id.toString());
      let { data: res } = ress;
      if (ress.status == 200) {
        this.host = res.host;
        this.port = res.port;
        this.type = res.type;
        this.proxyLevel = res.proxyLevel;
        this.isAlive = res.isAlive;
        this.miliseconds = res.miliseconds;
        this.averageTime = res.averageTime;
        this.countryName = res.countryName;
        this.latitude = res.latitude;
        this.longitude = res.longitude;
        // this.isStatus = true;
      } else {
        this.isStatus = true;
        console.log("ads");
      }
    },
  },
};
</script>
<style scoped>
.userBox {
  width: 30%;
  height: 50%;
  position: relative;
  margin: 250px auto;
}
.modalBox {
  width: 20em;
  height: 20em;
  margin: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../assets/wrong.jpg");
}
.listBox {
  margin: 5em auto;
}
</style>