
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Login',

    metaInfo: { title: 'Login' },

    extends: View,

    mixins: [
      LoadSections([
        'login',
      ]),
    ],
    // 'pro-features', Add pro feature comparison above when done with the module
    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>
