 <template>
 <div class="container with-nav">
  <div class="card">
    <app-message />
    <router-view></router-view>
  </div>
 </div>
</template>

<script>
import AppMessage from '@/components/ui/AppMessage'

export default {
  components: {
    AppMessage
  }
}
</script>
