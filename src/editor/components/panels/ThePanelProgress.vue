<template>
  <div class="b-panel">
    <h6 class="b-panel__title">
      <span>
        progress
      </span>
      <span
        class="b-panel__icon-close"
       @click="closeSidebarSection"
      >
        <icon-minimize />
      </span>
    </h6>

    <div class="b-progress">
      <base-scroll-container>
        <div class="b-progress__header">
          <radial-progress-bar
            :diameter="95"
            :completed-steps="progressInt"
            :total-steps="100"
            :strokeWidth="15"
            strokeLinecap="butt"
            :startColor="`#00ADB6`"
            :stopColor="`#00ADB6`"
            :innerStrokeColor="`#F3F6F6`"
          >
            <div class="b-progress__circle">{{progress}}%</div>
          </radial-progress-bar>
        </div>

        <div class="b-progress__title b-on-boarding-tips-step-6">
          Basic steps
        </div>
        <check-list-item v-for="(item, index) in basic" :key="index" :active="item.status" class="b-progress__i">
          {{ item.text }}
        </check-list-item>

        <div class="b-progress__title">
          Advanced steps
        </div>
        <check-list-item v-for="(item, index) in advanced" :key="'#'+index" :active="item.status" class="b-progress__i">
          {{ item.text }}
        </check-list-item>
      </base-scroll-container>
    </div>

  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import { filter } from 'lodash-es'
import CheckListItem from '../CheckListItem'
import RadialProgressBar from 'vue-radial-progress/src/RadialProgressBar'

export default {
  name: 'ThePanelProgress',
  components: { RadialProgressBar, CheckListItem },
  data () {
    return {

    }
  },

  computed: {
    ...mapState([
      'currentLanding'
    ]),

    ...mapGetters(['progress']),

    checkList () {
      return this.currentLanding.checkList
    },

    basic () {
      return filter(this.checkList, ['level', 0])
    },

    advanced () {
      return filter(this.checkList, ['level', 1])
    },

    progressInt () {
      return parseInt(this.progress)
    }
  },

  methods: {
    ...mapActions('Sidebar', [
      'toggleSidebar',
      'toggleAddSectionMenu',
      'toggleProgressPanelExpanded'
    ]),

    closeSidebarSection () {
      this.toggleSidebar(false)
      this.toggleAddSectionMenu(false)
      this.toggleProgressPanelExpanded(false)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../../assets/sass/_colors.sass'
@import '../../../assets/sass/_variables.sass'

.b-panel
  display: block
  width: 100%
  &__title
    position: relative
    display: flex
    align-items: center
    justify-content: center

    color: $dark-grey
    width: 100%
    padding: 1.7rem 3.1rem
    font-size: 2rem
    line-height: 1.2
    letter-spacing: -0.02em
  &__icon-close
    color: $grey
    position: absolute
    top: 1.7rem
    right: 1.7rem
    cursor: pointer
    width: 3.6rem
    height: 3.6rem
    display: flex
    justify-content: center
    align-items: center
    border-radius: 100%
    transition: background 0.3s cubic-bezier(0.2, 0.85, 0.4, 1.275)
    &:hover
      background: rgba(0, 0, 0, 0.05)
</style>
