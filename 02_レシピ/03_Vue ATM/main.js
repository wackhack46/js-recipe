new Vue({
  el: "#app",
  data: {
    zandaka: 0,
    nyuryokugaku: 0,
    logs: [],
  },
  computed: {
    shukkinhantei: function() {
      if (this.zandaka < this.nyuryokugaku) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    nyukin: function() {
      this.zandaka += Number(this.nyuryokugaku)

      this.logs.push({
        date: new Date(),
        type: "入金",
        money: this.nyuryokugaku,
      })
    },
    shukkin: function() {
      this.zandaka -= Number(this.nyuryokugaku)

      this.logs.push({
        date: new Date(),
        type: "出金",
        money: this.nyuryokugaku,
      })
    },
  },
})
